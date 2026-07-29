"use client";

import { useEffect, useState } from "react";

const frames = [
  {
    label: "on the move",
    src: "/images/debora-portrait.jpeg",
    alt: "Debora taking a mirror portrait in an elevator",
    className: "portrait-yellow",
    position: "50% 42%",
  },
  {
    label: "at the Ambassador's residence",
    src: "/images/debora-embassy.jpeg",
    alt: "Debora standing between American flags at the U.S. Ambassador's residence",
    className: "portrait-blue",
    position: "50% 43%",
  },
  {
    label: "community mode",
    src: "/images/debora-friends-lunch.jpeg",
    alt: "Debora sharing a meal with friends",
    className: "portrait-green",
    position: "72% 50%",
  },
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
    <div className="portrait-stack" aria-label="Animated portraits of Debora">
      {frames.map((frame, index) => (
        <div
          key={frame.label}
          className={`portrait-card ${frame.className} ${
            active === index ? "is-active" : ""
          }`}
          aria-hidden={active !== index}
        >
          <img
            src={frame.src}
            alt={active === index ? frame.alt : ""}
            style={{ objectPosition: frame.position }}
          />
          <span className="portrait-label">{frame.label}</span>
        </div>
      ))}
      <span className="portrait-caption">
        one person, several excellent side quests
      </span>
    </div>
  );
}
