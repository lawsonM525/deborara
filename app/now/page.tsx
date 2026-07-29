import { PageIntro, SiteFrame } from "../../components/SiteFrame";

export default function NowPage() {
  return (
    <SiteFrame current="/work">
      <PageIntro
        eyebrow="Updated monthly-ish"
        title="WHAT I'M DOING NOW"
        note="a snapshot, not a status report"
      />
      <section className="now-board section-pad">
        <article className="now-card now-main">
          <span className="eyebrow">Main quest</span>
          <h2>Building the next chapter with intention.</h2>
          <p>
            I&apos;m pursuing a Bachelor of Business Engineering at KU Leuven
            while collecting the lessons from my recent U.S. Embassy internship
            and deciding which ambitious side quest deserves my energy next.
          </p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Learning</span>
          <h3>Winning business games without wasting the clock</h3>
          <p>Turning case-competition lessons into practical shortcuts for standing out.</p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Reading</span>
          <h3>Leadership, business strategy & the power of one action</h3>
          <p>The ideas shaping how I learn, lead, and show up for a team.</p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Outside work</span>
          <h3>Community, travel & good book recommendations</h3>
          <p>Plus baking and athletics that are, by all accounts, still works in progress.</p>
        </article>
        <article className="now-card now-open">
          <span className="eyebrow">Open to</span>
          <h3>Conversations with thoughtful people building useful things.</h3>
        </article>
      </section>
      <p className="last-updated">Based in Belgium • shaped by India, Ghana & Côte d&apos;Ivoire</p>
    </SiteFrame>
  );
}
