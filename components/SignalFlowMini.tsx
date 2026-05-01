"use client";

import { useEffect, useState } from "react";

interface Props {
  delay?: number;
}

export default function SignalFlowMini({ delay = 0 }: Props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <path
          d="M8 14h12M16 10l4 4-4 4"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {animate && (
          <circle
            cx="8"
            cy="14"
            r="2"
            fill="#14B8A6"
            style={{
              animation:       `signal-pulse 2.2s linear ${delay}s infinite`,
              transformBox:    "fill-box",
              transformOrigin: "center",
            }}
          />
        )}
      </svg>
    </div>
  );
}
