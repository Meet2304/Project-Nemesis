/**
 * Analytics stub for Project Nemesis landing page.
 * Provides a lightweight console-based tracking mechanism gated by environment flag.
 * Future: Replace with real analytics service integration.
 */

function isAnalyticsEnabled(): boolean {
  return (
    typeof process !== 'undefined' &&
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_STUB === 'true'
  );
}

export interface TrackEventData {
  [key: string]: unknown;
}

/**
 * Track an analytics event.
 * When NEXT_PUBLIC_ENABLE_ANALYTICS_STUB='true', logs to console.
 * Otherwise, no-op for production cleanliness.
 */
export function track(eventName: string, data?: TrackEventData): void {
  if (!isAnalyticsEnabled()) {
    return;
  }

  // Console-based stub implementation
  console.log('[Analytics]', eventName, data);
}
