"use client";

import { useEffect, useRef, useState } from "react";

export function TypedWord({
  children,
  delay = 0,
}: {
  children: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="typed-word-shell">
      <span
        className="typed-word"
        data-active={active}
        style={{
          "--characters": children.length,
          "--typing-delay": `${delay}ms`,
        } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}
