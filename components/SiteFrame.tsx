"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "About" },
  { href: "/work", label: "Experience" },
  { href: "/now", label: "Now" },
  { href: "/working-with-me", label: "Work with me" },
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
    document.documentElement.dataset.theme = wantsDark ? "dark" : "light";
    const frame = window.requestAnimationFrame(() => setDark(wantsDark));
    return () => window.cancelAnimationFrame(frame);
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
          <img
            src={dark ? "/images/doodles/sun-white.png" : "/images/doodles/moon-white.png"}
            alt=""
            aria-hidden="true"
          />
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
        <div className="footer-intro">
          <span className="eyebrow">Debora Ruban Arumairaj</span>
          <h2>Curious by nature.<br />Useful by choice.</h2>
          <p>
            Business Engineering student at KU Leuven, based in Belgium. I
            bring structure to ambiguous problems and momentum to the teams
            solving them.
          </p>
          <a className="button button-dark" href={contactHref}>
            Email Debora
          </a>
        </div>
        <div className="footer-nav">
          <span className="eyebrow">Explore</span>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-details">
          <span className="eyebrow">A quick introduction</span>
          <p>Born in India.</p>
          <p>Raised across Ghana and Côte d&apos;Ivoire.</p>
          <p>Now studying and building in Belgium.</p>
        </div>
        <p className="footer-note">Made to start a conversation—not to replace one.</p>
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
  compact = false,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  compact?: boolean;
}) {
  return (
    <section className={`page-intro ${compact ? "compact-intro" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {note && <p className="hand-note">{note}</p>}
    </section>
  );
}
