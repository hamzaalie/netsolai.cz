/**
 * Shared GTM dataLayer tracking helpers. The site loads Google Tag Manager
 * (GTM-WDK9KH7D, see index.html) rather than raw platform pixels — Meta
 * Pixel, Google Ads conversion tags, etc. get added inside GTM itself
 * (business.facebook.com Pixel ID -> GTM tag, triggered by these events),
 * not hardcoded here. That way a new ad platform or a Pixel ID change
 * never needs a code deploy.
 *
 * Mirrors the existing 'contact_form_submit' event already pushed from
 * ContactPage.jsx.
 */

/** Fire when someone clicks any "book a consultation" button, anywhere on the site. */
export function trackBookingClick(source) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'consultation_booking_click', booking_source: source });
}

/** Fire on mount for pages worth building a retargeting audience from (ad landing pages). */
export function trackLandingPageView(page) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'landing_page_view', landing_page: page });
}

/** Fire when someone finishes an interactive tool (quiz, calculator) and sees their result. */
export function trackToolComplete(tool) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'tool_complete', tool_name: tool });
}
