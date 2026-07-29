"use client";

import { useEffect, useState } from "react";

const frames = [
  { label: "professional mode", mark: "D.", className: "portrait-blue" },
  { label: "off-duty mode", mark: "DEB", className: "portrait-purple" },
  { label: "thinking mode", mark: "?", className: "portrait-green" },
];

export function PortraitStack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % frames.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="portrait-stack" aria-label="Animated portrait placeholder">
      {frames.map((frame, index) => (
        <div
          key={frame.label}
          className={`portrait-card ${frame.className} ${
            active === index ? "is-active" : ""
          }`}
          aria-hidden={active !== index}
        >
          <span className="portrait-mark">{frame.mark}</span>
          <span className="portrait-label">{frame.label}</span>
        </div>
      ))}
      <span className="portrait-caption">
        drop Debora&apos;s favorite photos here
      </span>
    </div>
  );
}
