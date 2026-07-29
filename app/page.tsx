import Link from "next/link";
import { contactHref, Scribble, SiteFrame } from "../components/SiteFrame";
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
          Business Engineering student at KU Leuven.
          <br />
          Curious thinker, clear communicator, practical problem solver.
        </p>
        <InteractiveName />
      </section>

      <Reveal>
        <section className="manifesto section-pad">
          <span className="eyebrow">Hello, I&apos;m Debora</span>
          <h2>
            I LIKE PROBLEMS THAT NEED BOTH <Scribble>ANALYSIS</Scribble>
            <br />
            AND <Scribble>PEOPLE.</Scribble>
          </h2>
          <div className="manifesto-grid">
            <p>
              I&apos;m studying Business Engineering at KU Leuven and looking
              for work where I can learn quickly, make sense of complexity, and
              help a team move from a good question to a useful answer.
            </p>
            <p>
              Born in India, shaped by Ghana and Côte d&apos;Ivoire, and now
              based in Belgium, I&apos;ve spent my life adapting to new
              environments. That has made me observant, comfortable across
              cultures, and genuinely interested in how other people think.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="portrait-story section-pad">
        <PortraitStack />
        <Reveal className="portrait-copy">
          <span className="eyebrow">How I show up</span>
          <h2>CURIOUS ENOUGH TO ASK.<br />PRACTICAL ENOUGH TO ACT.</h2>
          <p>
            I&apos;m at my best when the brief is still a little fuzzy. I ask
            the questions that clarify the goal, learn what I need quickly, and
            turn the answer into a plan people can actually use. My experience
            spans operations, finance, strategy, public speaking, and
            cross-cultural teamwork.
          </p>
          <Link className="text-link" href="/now">
            See what I&apos;m focused on now <span>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="talents section-pad">
        <div className="section-heading">
          <span className="eyebrow">What I bring to a team</span>
          <h2>THE QUALITIES BEHIND<br />THE BULLET POINTS.</h2>
        </div>
        <div className="talent-grid">
          {[
            ["01", "Fast learner", "I get up to speed quickly, especially when the subject or setting is new.", "blue", "◉"],
            ["02", "Structured thinker", "I turn broad questions into priorities, decisions, and clear next steps.", "green", "↗"],
            ["03", "Clear communicator", "I make ideas understandable—in a presentation, a team, or a difficult conversation.", "yellow", "✦"],
            ["04", "Reliable teammate", "I value ownership, direct feedback, and doing what I said I would do.", "purple", "→"],
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
          <p className="hand-note">Want the evidence?</p>
          <h2>
            SEE WHAT I&apos;VE DONE<br />
            AND HOW I WORK.
          </h2>
          <div className="bridge-actions">
            <Link className="button button-dark" href="/work">
              Explore my experience
            </Link>
            <Link className="button button-light" href="/working-with-me">
              How I work with people
            </Link>
            <Link className="button button-light" href="/game">
              Play the Debora game
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="contact-split">
        <p className="hand-note">Hiring, collaborating, or simply curious?</p>
        <a href={contactHref} className="contact-words" aria-label="Email Debora">
          <span>GET</span>
          <span>IN</span>
          <span>TOUCH</span>
        </a>
        <p>Tell me what you&apos;re working on and where I might be useful.</p>
      </section>
    </SiteFrame>
  );
}
