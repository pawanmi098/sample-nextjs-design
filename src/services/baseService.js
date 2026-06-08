import { trackedInternalApi } from "@/utils/apiClient";
import { trackDDApiEvent } from "@commericalwebsite/indigo-shared-lib/datadog";

/**
 * Creates a reusable service function with built-in Datadog tracking.
 *
 * @param {object} config - Service call configuration
 * @param {string|Function} config.route - API route string or function that receives params and returns a route string
 * @param {string} [config.method="GET"] - HTTP method
 * @param {string} config.ddAction - Datadog action identifier
 * @param {string} config.ddModule - Datadog module/feature name
 * @param {"json"|"formdata"} [config.requestType="json"] - Request content type
 * @param {"json"|"raw"} [config.responseType="json"] - Response handling mode ("raw" returns the fetch Response directly)
 * @param {Function} [config.buildBody] - Optional function to transform params into the request body object
 * @param {Function} [config.buildQuery] - Optional function to transform params into query string params object
 * @param {string} [config.errorMessage] - Default error message when response has no message
 * @returns {Function} Async service function that accepts params and returns the response
 */
export function createServiceCall({
  route,
  method = "GET",
  ddAction,
  ddModule,
  requestType = "json",
  responseType = "json",
  buildBody,
  buildQuery,
  errorMessage = "Request failed",
}) {
  return async function serviceCall(params) {
    // Resolve the route (static string or dynamic function)
    const resolvedRoute = typeof route === "function" ? route(params) : route;

    // For standard JSON calls with trackedInternalApi
    if (requestType === "json" && responseType === "json") {
      return _jsonCall({ resolvedRoute, method, params, buildBody, buildQuery, ddAction, ddModule });
    }

    // For FormData uploads or raw response, use manual fetch + DD tracking
    return _customCall({
      resolvedRoute,
      method,
      params,
      requestType,
      responseType,
      buildBody,
      ddAction,
      ddModule,
      errorMessage,
    });
  };
}

// ─── Internal Helpers ────────────────────────────────────────────────────────

/**
 * Standard JSON API call using trackedInternalApi.
 */
async function _jsonCall({ resolvedRoute, method, params, buildBody, buildQuery, ddAction, ddModule }) {
  let url = resolvedRoute;

  // Append query string for GET requests
  if (buildQuery && params) {
    const queryParams = buildQuery(params);
    const qs = _buildQueryString(queryParams);
    if (qs) url = `${url}?${qs}`;
  }

  const options = { method: method.toUpperCase() };

  // Build request body for non-GET methods
  if (method.toUpperCase() !== "GET") {
    const body = buildBody ? buildBody(params) : params;
    if (body !== undefined && body !== null) {
      options.body = JSON.stringify(body);
    }
  }

  return trackedInternalApi(url, options, { action: ddAction, mfname: ddModule });
}

/**
 * Custom fetch call for FormData or raw response with manual Datadog tracking.
 */
async function _customCall({
  resolvedRoute,
  method,
  params,
  requestType,
  responseType,
  buildBody,
  ddAction,
  ddModule,
  errorMessage,
}) {
  const startTime = performance.now();
  const fetchOptions = {
    method: method.toUpperCase(),
    credentials: "include",
  };

  // Configure request body
  if (requestType === "formdata") {
    // params should be a FormData instance directly
    fetchOptions.body = params;
  } else {
    // JSON body
    const body = buildBody ? buildBody(params) : params;
    if (body !== undefined && body !== null) {
      fetchOptions.headers = { "Content-Type": "application/json" };
      fetchOptions.body = JSON.stringify(body);
    }
  }

  const res = await fetch(resolvedRoute, fetchOptions);
  const responseTime = parseFloat(((performance.now() - startTime) / 1000).toFixed(4));

  // For raw response mode (e.g., blob downloads)
  if (responseType === "raw") {
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      const message = errorData?.message || errorMessage;

      _trackError({
        ddAction,
        ddModule,
        route: resolvedRoute,
        method: method.toUpperCase(),
        requestBody: requestType === "formdata" ? null : params,
        responseData: errorData,
        responseTime,
        statusCode: res.status,
        message,
        errorData,
      });

      throw new Error(message);
    }

    _trackSuccess({
      ddAction,
      ddModule,
      route: resolvedRoute,
      method: method.toUpperCase(),
      requestBody: requestType === "formdata" ? null : params,
      responseData: null,
      responseTime,
      statusCode: res.status,
    });

    return res;
  }

  // For JSON response mode (FormData uploads that return JSON)
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || errorMessage;
    const error = new Error(message);
    error.status = res.status;
    error.data = data;

    _trackError({
      ddAction,
      ddModule,
      route: resolvedRoute,
      method: method.toUpperCase(),
      requestBody: null,
      responseData: data,
      responseTime,
      statusCode: res.status,
      message,
      errorData: data,
    });

    throw error;
  }

  _trackSuccess({
    ddAction,
    ddModule,
    route: resolvedRoute,
    method: method.toUpperCase(),
    requestBody: requestType === "formdata" ? null : params,
    responseData: data,
    responseTime,
    statusCode: res.status,
  });

  return data;
}

/**
 * Track a successful API event to Datadog.
 */
function _trackSuccess({ ddAction, ddModule, route, method, requestBody, responseData, responseTime, statusCode }) {
  trackDDApiEvent({
    action: ddAction,
    apiurl: route,
    method,
    mfname: ddModule,
    requestbody: requestBody,
    response: responseData,
    responseTime,
    statusCode,
  });
}

/**
 * Track a failed API event to Datadog.
 */
function _trackError({ ddAction, ddModule, route, method, requestBody, responseData, responseTime, statusCode, message, errorData }) {
  trackDDApiEvent({
    action: ddAction,
    apiurl: route,
    method,
    mfname: ddModule,
    requestbody: requestBody,
    response: responseData,
    responseTime,
    statusCode,
    error: message,
    errorCode: errorData?.errorCode || "",
    errorMessage: message,
    errorMessageForUser: errorData?.userMessage || "",
  });
}

/**
 * Build a URL query string from an object, omitting null/undefined values.
 */
function _buildQueryString(params) {
  if (!params || typeof params !== "object") return "";
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null);
  if (entries.length === 0) return "";
  return entries.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}
