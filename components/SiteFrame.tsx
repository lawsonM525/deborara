"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/testimonials", label: "Stories" },
  { href: "/articles", label: "Articles" },
  { href: "/game", label: "Play" },
];

export const contactHref =
  "mailto:hello@debora.work?subject=Hello%20Debora%20%E2%80%94%20let%27s%20work%20together&body=Hi%20Debora%2C%0A%0AI%20found%20your%20website%20and%20wanted%20to%20reach%20out%20about...%0A%0ABest%2C";

export function SiteFrame({
  children,
  current,
}: {
  children: React.ReactNode;
  current: string;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("debora-theme");
    const wantsDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(wantsDark);
    document.documentElement.dataset.theme = wantsDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("debora-theme", next ? "dark" : "light");
  }

  return (
    <>
      <header className="floating-nav" aria-label="Primary navigation">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
        </button>
        <nav>
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={current === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="nav-cta" href={contactHref}>
          Say hello
        </a>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <span className="eyebrow">Keep wandering</span>
          <p>Built as a living documentary, not a finished biography.</p>
        </div>
        <div className="footer-links">
          <a href={contactHref}>Email</a>
          <a href="https://www.linkedin.com/" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export function Scribble({ children }: { children: React.ReactNode }) {
  return <span className="scribble">{children}</span>;
}

export function ArrowNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="arrow-note">
      <span className="drawn-arrow" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {note && <p className="hand-note">{note}</p>}
    </section>
  );
}
