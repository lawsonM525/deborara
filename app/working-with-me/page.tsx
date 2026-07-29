import { FeedbackForm } from "../../components/FeedbackForm";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";

const principles = [
  ["01", "Say it straight", "Skip the feedback sandwich. Be kind, specific, and direct—I would rather know now than decode hints later."],
  ["02", "Name the deadline", "A precise date helps me prioritize, plan, and deliver. “Whenever” usually creates more stress than freedom."],
  ["03", "Trust the owner", "I work best with clear outcomes and room to find the path. Checkpoints are useful; constant steering is not."],
  ["04", "Share the why", "Context makes my work sharper. Tell me what success changes, who it helps, and what constraint is real."],
];

export default function WorkingWithMePage() {
  return (
    <SiteFrame current="">
      <PageIntro
        eyebrow="You found the hidden page"
        title="WORKING WITH ME"
        note="the manual I wish every new team came with"
      />
      <section className="wwm-intro section-pad">
        <p className="lead-copy">
          I&apos;m autonomous, deadline-specific, and happiest when communication
          is clear. This page is not a list of demands; it&apos;s a shortcut to
          helping us do better work together.
        </p>
        <div className="personality-stamp">
          <span>Personality snapshot</span>
          <strong>ADD MBTI</strong>
          <p>Useful context, never a complete definition.</p>
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
      <section className="feedback-section section-pad">
        <FeedbackForm />
      </section>
    </SiteFrame>
  );
}
