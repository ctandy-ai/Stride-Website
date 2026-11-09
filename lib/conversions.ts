/**
 * Fire a Google Ads conversion event.
 * Safe to call server-side (no-ops when window is unavailable).
 */
export function fireGtag(sendTo: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof (window as any).gtag !== "function") return;
  (window as any).gtag("event", "conversion", { send_to: sendTo, ...extra });
}

export const CONV = {
  phoneCall:    "AW-18138589776/G7jjCK_167QdENDUk8lD",
  leadForm:     "AW-18138589776/RRhlCPOInLAdENDUk8lD",
  clinikoClick: "AW-18138589776/GEOtCP2Mo7AdENDUk8lD",
} as const;
