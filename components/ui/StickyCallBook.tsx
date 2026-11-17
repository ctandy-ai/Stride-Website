"use client";

// Sticky Call / Book bar — mobile only (<768px), fixed bottom
// Brief: two equal buttons, tel: in international format, doesn't cover content/footer

const PHONE = "tel:+61483918427";
const PHONE_DISPLAY = "0483 918 427";
const BOOKING_URL =
  "https://stride-physiotherapy-and-health-group.au1.cliniko.com/bookings";

export default function StickyCallBook() {
  return (
    <>
      {/* Bar — hidden on ≥768px via CSS, no JS needed to avoid layout shift */}
      <div
        className="sticky-call-book"
        role="navigation"
        aria-label="Quick contact bar"
      >
        <a
          href={PHONE}
          className="sticky-call-book__btn sticky-call-book__btn--call"
          // GTM phone-click conversion fires via global tel: trigger in GTM-T49PZPP
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="sticky-call-book__btn sticky-call-book__btn--book"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book online
        </a>
      </div>

      <style>{`
        .sticky-call-book {
          display: none;
        }

        @media (max-width: 767px) {
          .sticky-call-book {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 300;
            background: rgba(11, 23, 36, 0.98);
            backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            /* safe area for iPhone home indicator */
            padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
            gap: 10px;
          }

          .sticky-call-book__btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 13px 12px;
            border-radius: 8px;
            font-family: var(--font-inter);
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 0.02em;
            text-decoration: none;
            transition: opacity 0.15s;
            -webkit-tap-highlight-color: transparent;
          }

          .sticky-call-book__btn:active {
            opacity: 0.8;
          }

          .sticky-call-book__btn--call {
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .sticky-call-book__btn--book {
            background: var(--blue, #1b90f5);
            color: #fff;
            border: 1px solid transparent;
          }

          /* Bottom padding so content isn't hidden behind the bar */
          body {
            padding-bottom: calc(66px + env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </>
  );
}
