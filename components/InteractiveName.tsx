"use client";

import { useEffect, useRef } from "react";

export function InteractiveName() {
  const nameRef = useRef<HTMLDivElement>(null);

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
        node.style.setProperty("--tilt", `${progress * 2.2}deg`);
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
    const percentage = ((clientX - bounds.left) / bounds.width) * 100;
    node.style.setProperty("--split", `${Math.min(92, Math.max(8, percentage))}%`);
  }

  return (
    <div
      ref={nameRef}
      className="interactive-name"
      role="img"
      aria-label="Debora"
      onPointerMove={(event) => moveSplit(event.clientX)}
    >
      <span className="name-half name-left" aria-hidden="true">DEBORA</span>
      <span className="name-half name-right" aria-hidden="true">DEBORA</span>
      <span className="name-cut" aria-hidden="true">
        <i />
      </span>
    </div>
  );
}
