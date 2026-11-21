"use client";

/**
 * BookCTA — primary booking button + trust subline.
 * Used site-wide. G spec: "Book my assessment →" / one primary per section /
 * subline: "No referral needed · Private health claimable · Same-week appointments usually available"
 */

import { fireGtag, CONV } from "@/lib/conversions";

interface BookCTAProps {
  /** Override button label (e.g. Sunday clinic uses different price) */
  label?: string;
  /** Show a ghost Call button alongside */
  withCall?: boolean;
  /** Layout direction when withCall is true */
  align?: "left" | "center";
  /** Subline colour — dark for light backgrounds, light for dark */
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

export default function BookCTA({
  label = "Book my assessment →",
  withCall = false,
  align = "center",
  theme = "light",
  style,
}: BookCTAProps) {
  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const sublineColor =
    theme === "dark"
      ? "rgba(0,0,0,0.45)"
      : "rgba(255,255,255,0.4)";

  return (
    <div style={{ textAlign: align === "center" ? "center" : "left", ...style }}>
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: align === "center" ? "center" : "flex-start",
          flexWrap: "wrap",
          marginBottom: 10,
        }}
      >
        <button className="btn btn-primary" onClick={openModal}>
          {label} <span className="arr">→</span>
        </button>
        {withCall && (
          <a
            href="tel:+61483918427"
            className="btn btn-white"
            style={{ textDecoration: "none" }}
            onClick={() => fireGtag(CONV.phoneCall)}
          >
            Call 0483 918 427
          </a>
        )}
      </div>
      <p
        style={{
          color: sublineColor,
          fontSize: "0.78rem",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
      </p>
    </div>
  );
}
