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
            Replace this with Deborah&apos;s current role, project, search, or
            learning season. Keep it specific enough to be useful and human
            enough to feel alive.
          </p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Learning</span>
          <h3>The topic currently taking over my notes app</h3>
          <p>A course, question, skill, or delightfully niche rabbit hole.</p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Reading</span>
          <h3>One book worth interrupting people about</h3>
          <p>Add a title and one line about what it is changing.</p>
        </article>
        <article className="now-card">
          <span className="eyebrow">Outside work</span>
          <h3>Finding energy away from the screen</h3>
          <p>A ritual, city, sport, friendship, or current small obsession.</p>
        </article>
        <article className="now-card now-open">
          <span className="eyebrow">Open to</span>
          <h3>Conversations with thoughtful people building useful things.</h3>
        </article>
      </section>
      <p className="last-updated">Last updated: add date here • Porto / Amsterdam / wherever Deborah is now</p>
    </SiteFrame>
  );
}
