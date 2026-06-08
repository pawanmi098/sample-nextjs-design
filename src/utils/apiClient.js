import config from "@/config";
import { trackDDApiEvent } from "@commericalwebsite/indigo-shared-lib/datadog";

/**
 * API Client wrapper for making HTTP requests.
 * - Prepends base URL from config
 * - Includes credentials (cookies) with every request
 * - Handles JSON parsing and error extraction
 */

/**
 * Shared fetch logic.
 * @param {string} url - Fully resolved URL
 * @param {object} options - fetch options
 * @returns {Promise<object>} parsed JSON response
 */
async function request(url, options = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include",
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message =
      data?.message || `Request failed with status ${res.status}`;
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}

/**
 * Tracked fetch wrapper — measures response time and pushes Datadog event.
 * @param {string} url - Fully resolved URL
 * @param {object} options - fetch options
 * @param {object} ddOptions - Datadog tracking options
 * @param {string} ddOptions.action - DD action string
 * @param {string} ddOptions.mfname - Module/feature name
 * @returns {Promise<object>} parsed JSON response
 */
async function trackedRequest(url, options = {}, ddOptions = {}) {
  const method = (options.method || "GET").toUpperCase();
  const requestbody = options.body ? safeParse(options.body) : null;
  const startTime = performance.now();

  try {
    const data = await request(url, options);
    const responseTime = parseFloat(
      ((performance.now() - startTime) / 1000).toFixed(4)
    );

    trackDDApiEvent({
      action: ddOptions.action,
      apiurl: url,
      method,
      mfname: ddOptions.mfname,
      requestbody,
      response: data,
      responseTime,
      statusCode: 200,
    });

    return data;
  } catch (err) {
    const responseTime = parseFloat(
      ((performance.now() - startTime) / 1000).toFixed(4)
    );

    trackDDApiEvent({
      action: ddOptions.action,
      apiurl: url,
      method,
      mfname: ddOptions.mfname,
      requestbody,
      response: err.data || null,
      responseTime,
      statusCode: err.status || 0,
      error: err.message || "Unknown error",
      errorCode: err.data?.errorCode || "",
      errorMessage: err.data?.message || err.message || "",
      errorMessageForUser: err.data?.userMessage || "",
    });

    throw err;
  }
}

/**
 * Safely parse JSON string or return the value as-is.
 * @param {string|object} value
 * @returns {object|null}
 */
function safeParse(value) {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}

/**
 * External API client — calls the backend via config.apiBaseUrl.
 * @param {string} endpoint - Backend API path (e.g. "/api/v1/auth/login")
 * @param {object} options - fetch options (method, body, headers, etc.)
 */
export async function apiClient(endpoint, options = {}) {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${config.apiBaseUrl}${endpoint}`;
  return request(url, options);
}

/**
 * Internal API client — calls Next.js internal routes (no base URL prefix).
 * Used for /api/* routes that proxy to the backend.
 * @param {string} endpoint - Internal route path (e.g. "/api/auth/login")
 * @param {object} options - fetch options
 */
export async function internalApi(endpoint, options = {}) {
  return request(endpoint, options);
}

/**
 * Tracked internal API client — same as internalApi but with Datadog event tracking.
 * @param {string} endpoint - Internal route path
 * @param {object} options - fetch options
 * @param {object} ddOptions - Datadog tracking options { action, mfname }
 */
export async function trackedInternalApi(endpoint, options = {}, ddOptions = {}) {
  return trackedRequest(endpoint, options, ddOptions);
}
