"use client";

import { useCallback, useEffect, useRef } from "react";
import { trackPageLoad, trackCtaClick, trackCustomEvent } from "@commericalwebsite/indigo-shared-lib/analytics";
import {
  ANALYTICS_EVENTS,
  ANALYTICS_DEFAULTS,
  ANALYTICS_INTERACTION_TYPES,
  ANALYTICS_EVENT_INFO,
} from "@/constants/analyticsConstants";

/**
 * React hook for component-level Adobe Data Layer analytics.
 *
 * Provides memoized tracking methods and optional automatic page-view on mount.
 *
 * @param {object} options
 * @param {string} [options.pageName] - If provided, fires a pageView on mount
 * @param {string} [options.pageCategory] - Page category for auto page-view
 * @param {boolean} [options.trackOnMount=true] - Whether to auto-fire pageView
 * @returns {{ trackPage, trackCta, trackEvent }}
 *
 * @example
 * const { trackCta } = useAnalytics({ pageName: "home", pageCategory: "public" });
 * <button onClick={() => trackCta({ ctaName: "sign-up", ctaLocation: "hero" })}>Sign Up</button>
 */
export default function useAnalytics({
  pageName = "",
  pageCategory = "",
  platform = "",
  trackOnMount = true,
  userInfo,
  sessionData,
  context,
} = {}) {
  const hasFiredPageView = useRef(false);

  useEffect(() => {
    if (trackOnMount && pageName && !hasFiredPageView.current) {
      hasFiredPageView.current = true;
      trackPageLoad({ pageName, pageCategory, platform, userInfo, sessionData, context, analyticsEvents: ANALYTICS_EVENTS, analyticsDefaults: ANALYTICS_DEFAULTS });
    }
  }, [pageName, pageCategory, platform, trackOnMount]);

  const trackPage = useCallback(
    (params = {}) => trackPageLoad({ pageName, pageCategory, platform, ...params, analyticsEvents: ANALYTICS_EVENTS, analyticsDefaults: ANALYTICS_DEFAULTS }),
    [pageName, pageCategory, platform]
  );

  const trackCta = useCallback((params = {}) => trackCtaClick({ ...params, analyticsEvents: ANALYTICS_EVENTS, analyticsDefaults: ANALYTICS_DEFAULTS, analyticsInteractionTypes: ANALYTICS_INTERACTION_TYPES, analyticsEventInfo: ANALYTICS_EVENT_INFO }), []);

  const trackEvent = useCallback(
    (eventName, payload = {}) => trackCustomEvent(eventName, payload, ANALYTICS_EVENTS),
    []
  );

  return { trackPage, trackCta, trackEvent };
}
