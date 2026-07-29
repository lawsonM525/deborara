import Link from "next/link";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";
import { Reveal } from "../../components/Reveal";

const chapters = [
  {
    year: "Chapter 01",
    title: "The role that taught me to ask better questions",
    type: "Career",
    color: "yellow",
    copy: "Add the role, the team, and the moment Deborah realized the most useful person in the room is often the one making the problem clearer.",
    tags: ["Strategy", "Research", "Collaboration"],
  },
  {
    year: "Chapter 02",
    title: "The side project that refused to stay small",
    type: "Project",
    color: "blue",
    copy: "A home for the extracurricular project that shows initiative, curiosity, and what Deborah builds when nobody is assigning the work.",
    tags: ["0 → 1", "Community", "Learning"],
  },
  {
    year: "Chapter 03",
    title: "Building trust across a very busy table",
    type: "Collaboration",
    color: "purple",
    copy: "Tell the story through the people involved: the messy middle, the decisions made, and the small habit that changed the outcome.",
    tags: ["Communication", "Operations", "Leadership"],
  },
  {
    year: "Chapter 04",
    title: "The experiment I would absolutely try again",
    type: "Extracurricular",
    color: "green",
    copy: "Not every useful experience belongs on a CV. This one belongs here because it changed how Deborah thinks, works, or shows up.",
    tags: ["Experimentation", "Ownership", "Joy"],
  },
];

export default function WorkPage() {
  return (
    <SiteFrame current="/work">
      <PageIntro
        eyebrow="The work, with context"
        title="A CAREER IS NOT A LIST. IT'S A PLOT."
        note="the useful bits are usually between the bullet points"
      />
      <section className="work-collage section-pad">
        {chapters.map((chapter, index) => (
          <Reveal className={`work-card-wrap work-${index + 1}`} key={chapter.title}>
            <article className={`work-card ${chapter.color}`}>
              <div className="work-art">
                <span>{chapter.year}</span>
                <strong>{chapter.type.slice(0, 1)}</strong>
                <i aria-hidden="true" />
              </div>
              <div className="work-copy">
                <span className="eyebrow">{chapter.type}</span>
                <h2>{chapter.title}</h2>
                <p>{chapter.copy}</p>
                <ul>
                  {chapter.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="next-page-card section-pad">
        <p className="hand-note">the story is still being written</p>
        <h2>SO, WHAT&apos;S HAPPENING RIGHT NOW?</h2>
        <Link className="button button-dark" href="/now">
          Open the Now page <span>↗</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
