import { contactHref, PageIntro, SiteFrame } from "../../components/SiteFrame";

const principles = [
  ["01", "Say it straight", "Skip the feedback sandwich. Be kind, specific, and direct—I would rather know now than decode hints later."],
  ["02", "Name the deadline", "A precise date helps me prioritize, plan, and deliver. “Whenever” usually creates more stress than freedom."],
  ["03", "Trust the owner", "I work best with clear outcomes and room to find the path. Checkpoints are useful; constant steering is not."],
  ["04", "Share the why", "Context makes my work sharper. Tell me what success changes, who it helps, and what constraint is real."],
];

export default function WorkingWithMePage() {
  return (
    <SiteFrame current="/working-with-me">
      <PageIntro
        eyebrow="Working together"
        title="WORKING WITH ME"
        note="a useful head start for future teammates"
      />
      <section className="wwm-intro section-pad">
        <p className="lead-copy">
          I&apos;m autonomous, deadline-specific, and happiest when communication
          is clear. I care about understanding the purpose of the work, owning
          my part, and making it easy for other people to contribute theirs.
        </p>
        <div className="personality-stamp">
          <span>In a team</span>
          <strong>DIRECT + CURIOUS</strong>
          <p>Warm communication, clear expectations, no mind-reading required.</p>
        </div>
      </section>
      <section className="principle-list section-pad">
        {principles.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="next-page-card section-pad">
        <p className="hand-note">The best working relationships start with a conversation.</p>
        <h2>THINK WE&apos;D WORK WELL TOGETHER?</h2>
        <a className="button button-dark" href={contactHref}>Email Debora</a>
      </section>
    </SiteFrame>
  );
}
