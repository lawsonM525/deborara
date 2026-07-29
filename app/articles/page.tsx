import { PageIntro, SiteFrame } from "../../components/SiteFrame";

const articles = [
  {
    number: "001",
    title: "The kind of ambition I want to keep",
    deck: "On growing without turning your life into one endless optimization project.",
    read: "6 min",
    color: "yellow",
  },
  {
    number: "002",
    title: "Notes from the messy middle",
    deck: "What unfinished work can teach us about clarity, confidence, and asking for help.",
    read: "4 min",
    color: "purple",
  },
  {
    number: "003",
    title: "A small case for saying the direct thing",
    deck: "Clear feedback is not unkind. Ambiguity usually costs everyone more.",
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
        <a className="button button-dark" href="https://substack.com/">Visit Deborah&apos;s Substack ↗</a>
      </div>
    </SiteFrame>
  );
}
