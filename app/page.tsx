import Link from "next/link";
import {
  ArrowNote,
  contactHref,
  Scribble,
  SiteFrame,
} from "../components/SiteFrame";
import { PortraitStack } from "../components/PortraitStack";
import { Reveal } from "../components/Reveal";
import { InteractiveName } from "../components/InteractiveName";

export default function Home() {
  return (
    <SiteFrame current="/">
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <p className="hero-kicker">
          Meet the human behind the résumé—
          <br />
          curious, direct &amp; always in motion.
        </p>
        <InteractiveName />
        <ArrowNote>point anywhere, then scroll to split the story</ArrowNote>
      </section>

      <Reveal>
        <section className="manifesto section-pad">
          <span className="eyebrow">A living documentary</span>
          <h2>
            LINKEDIN TELLS YOU <Scribble>what</Scribble> I&apos;VE DONE.
            <br />
            THIS PLACE TELLS YOU <Scribble>why.</Scribble>
          </h2>
          <div className="manifesto-grid">
            <p>
              I&apos;m Debora Ruban Arumairaj: a full-time learner, part-time
              side-quester, and Business Engineering student at KU Leuven.
            </p>
            <p>
              Born in India, shaped by Ghana and Côte d&apos;Ivoire, and now
              living in Belgium, I&apos;ve learned to adapt quickly, connect
              across cultures, and communicate even when language tries to be a
              barrier.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="portrait-story section-pad">
        <PortraitStack />
        <Reveal className="portrait-copy">
          <span className="eyebrow">Full-time learner</span>
          <h2>ONE PERSON.<br />A LOT OF TABS OPEN.</h2>
          <p>
            I&apos;m known for academic drive, public speaking, optimistic
            problem-solving, and a tendency to turn every opportunity into a
            side quest. Give me a real problem and a deadline—I&apos;ll start
            connecting the dots.
          </p>
          <Link className="text-link" href="/now">
            See what I&apos;m focused on now <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="talents section-pad">
        <div className="section-heading">
          <span className="eyebrow">Choose your Debora</span>
          <h2>FOUR MODES.<br />SAME HUMAN.</h2>
          <p className="hand-note">tap a card—no wrong character</p>
          <div className="bitmoji-sticker">
            <img src="/images/debora-bitmoji.jpeg" alt="Debora's Bitmoji with hands together" />
            <span>ready for the next side quest</span>
          </div>
        </div>
        <div className="talent-grid">
          {[
            ["01", "Learner", "I get curious before I get certain.", "blue", "◉"],
            ["02", "Problem solver", "I turn fuzzy asks into clear next steps.", "green", "↗"],
            ["03", "Communicator", "I say the useful thing, kindly and directly.", "yellow", "✦"],
            ["04", "Momentum maker", "I keep people and projects moving.", "purple", "→"],
          ].map(([number, title, copy, color, symbol]) => (
            <article className={`talent-card ${color}`} key={title}>
              <span className="card-number">{number}</span>
              <span className="talent-symbol" aria-hidden="true">{symbol}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="story-bridge section-pad">
          <p className="hand-note">the short version ↓</p>
          <h2>
            I LEARN FAST.<br />
            I CARE DEEPLY.<br />
            I SHIP THE THING.
          </h2>
          <div className="bridge-actions">
            <Link className="button button-dark" href="/work">
              Explore my work
            </Link>
            <Link className="button button-light" href="/game">
              Play the Debora game
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="contact-split">
        <p className="hand-note">have a project, question, or good plot twist?</p>
        <a href={contactHref} className="contact-words" aria-label="Email Debora">
          <span>GET</span>
          <span>IN</span>
          <span>TOUCH</span>
        </a>
        <p>Opens a pre-filled email. Human replies only.</p>
      </section>
    </SiteFrame>
  );
}
