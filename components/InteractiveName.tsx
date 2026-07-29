"use client";

import { useEffect, useRef, useState } from "react";

const letters = [..."DEBORA"];

export function InteractiveName() {
  const nameRef = useRef<HTMLDivElement>(null);
  const [splitIndex, setSplitIndex] = useState(3);

  useEffect(() => {
    const node = nameRef.current;
    const hero = node?.closest<HTMLElement>(".hero");
    if (!node || !hero) return;

    let frame = 0;
    const updateScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(
          1,
          Math.max(0, -hero.getBoundingClientRect().top / (hero.offsetHeight * 0.62)),
        );
        const distance = Math.min(window.innerWidth * 0.105, 150) * progress;
        node.style.setProperty("--progress", progress.toFixed(3));
        node.style.setProperty("--separate", `${distance}px`);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  function moveSplit(clientX: number) {
    const node = nameRef.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    const localX = clientX - bounds.left;
    const letterNodes = Array.from(
      node.querySelectorAll<HTMLElement>(".name-letter"),
    );
    const gaps = letterNodes.slice(0, -1).map((letter, index) => {
      const next = letterNodes[index + 1];
      return (letter.offsetLeft + letter.offsetWidth + next.offsetLeft) / 2;
    });
    const closestGap = gaps.reduce(
      (best, gap, index) =>
        Math.abs(gap - localX) < Math.abs(gaps[best] - localX) ? index : best,
      0,
    );
    setSplitIndex(closestGap + 1);
  }

  return (
    <div
      ref={nameRef}
      className="interactive-name"
      role="img"
      aria-label="Debora"
      onPointerMove={(event) => moveSplit(event.clientX)}
    >
      <span className="name-letter-row" aria-hidden="true">
        {letters.map((letter, index) => (
          <span
            className={`name-letter ${
              index < splitIndex ? "letter-left" : "letter-right"
            }`}
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}
