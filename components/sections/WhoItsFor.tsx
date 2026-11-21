"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div
      ref={ref}
      style={{
        background: "var(--off)",
        padding: "96px var(--px)",
      }}
    >
      <div style={{ maxWidth: 740, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Who we work with</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 24 }}>
            Is Stride{" "}
            <span className="orange">right for you?</span>
          </h2>
          <p className="bt" style={{ marginBottom: 32 }}>
            Stride is for athletes who&apos;d rather understand what&apos;s going on than be told to rest and see. From community footy to elite. You don&apos;t have to have done everything right; almost nobody has. All it takes is wanting a plan.
          </p>
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment <span className="arr">→</span>
          </button>
          <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: 10, marginBottom: 0 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>
        </motion.div>
      </div>
    </div>
  );
}
