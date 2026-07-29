import { PageIntro, SiteFrame } from "../../components/SiteFrame";

const articles = [
  {
    number: "001",
    title: "Shortcuts to winning business games",
    deck: "How to make every minute count before and during a case competition.",
    read: "6 min",
    color: "yellow",
  },
  {
    number: "002",
    title: "What can one person do? A lot.",
    deck: "On compounding impact through one person, one action, and one word.",
    read: "4 min",
    color: "purple",
  },
  {
    number: "003",
    title: "Lessons from inside the U.S. Embassy",
    deck: "Autonomy, security, eureka moments, and the art of a creative workaround.",
    read: "5 min",
    color: "green",
  },
];

export default function ArticlesPage() {
  return (
    <SiteFrame current="/articles">
      <PageIntro
        eyebrow="Dispatches from my notes app"
        title="THOUGHTS IN PUBLIC"
        note="working title: The Everywhere Deb"
      />
      <section className="article-list section-pad">
        {articles.map((article) => (
          <a className={`article-row ${article.color}`} href="https://substack.com/" key={article.number}>
            <span className="article-number">{article.number}</span>
            <div>
              <h2>{article.title}</h2>
              <p>{article.deck}</p>
            </div>
            <span className="article-read">{article.read}<br />Read ↗</span>
          </a>
        ))}
      </section>
      <div className="substack-note">
        <span className="hand-note">these previews live here; full essays live on Substack</span>
        <a className="button button-dark" href="https://substack.com/">Visit Debora&apos;s Substack ↗</a>
      </div>
    </SiteFrame>
  );
}
