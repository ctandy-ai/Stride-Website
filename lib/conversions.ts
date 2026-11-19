/**
 * Conversion tracking — GTM-only architecture.
 *
 * All Google Ads conversion tags fire exclusively through GTM:
 *   - Phone calls    → GTM trigger: Click – Just Links, Click URL starts with tel:
 *   - Cliniko clicks → GTM trigger: Click – Just Links / All Elements, URL contains cliniko.com
 *   - Lead form      → GTM trigger: Custom Event "lead_form_submit"
 *
 * fireGtag() is kept for call-site compatibility but is a no-op.
 * Use pushDataLayerEvent() for programmatic events (e.g. form submission).
 */

/** @deprecated No-op shim — GTM fires all conversion tags directly. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function fireGtag(_sendTo: string, _extra?: Record<string, unknown>) {
  // intentional no-op: conversion tracking is GTM-only
}

/** Event names used as GTM Custom Event trigger keys. */
export const CONV = {
  phoneCall:    "phone_call_click",      // fired by GTM tel: link click trigger
  leadForm:     "lead_form_submit",      // fired via pushDataLayerEvent() below
  clinikoClick: "cliniko_booking_click", // fired by GTM outbound link click trigger
} as const;

/** Push a named event to GTM dataLayer. Use for programmatic events GTM can't auto-detect. */
export function pushDataLayerEvent(eventName: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: eventName, ...extra });
}
