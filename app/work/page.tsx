import Link from "next/link";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";
import { Reveal } from "../../components/Reveal";

const chapters = [
  {
    year: "U.S. Embassy · Belgium",
    title: "Improving everyday operations inside a complex organization",
    type: "Internship",
    color: "yellow",
    image: "/images/debora-team-lunch.jpeg",
    imageAlt: "Debora sharing a team lunch during her U.S. Embassy internship",
    imagePosition: "50% 52%",
    copy: "During my internship, I was trusted to explore better ways of working while respecting strict security constraints. I improved spreadsheets and internal processes, supported site visits across Belgium, and learned how to make practical progress inside a large international organization.",
    tags: ["Process improvement", "Operations", "Ownership", "Stakeholders"],
    doodle: ["✦", "DIPLOMACY, DETAILS & DOING THE WORK"],
  },
  {
    year: "Solvay Business Game",
    title: "Turning a finance case into a winning recommendation",
    type: "Case competition",
    color: "blue",
    image: "/images/debora-professional-team.jpeg",
    imageAlt: "Debora with fellow participants at a professional event",
    imagePosition: "55% 48%",
    copy: "In a time-pressured CACEIS challenge, our team combined financial analysis, marketing, and a clear pitch into one coherent recommendation. We divided the work quickly, challenged each other's thinking, and won the case.",
    tags: ["CACEIS winner", "Financial analysis", "Pitching", "Teamwork"],
    doodle: ["★", "CACEIS WINNER"],
  },
  {
    year: "Belgian Sustainability Business Game",
    title: "Two sustainability challenges, two winning pitches",
    type: "Sustainability",
    color: "purple",
    image: "/images/debora-embassy.jpeg",
    imageAlt: "Debora at the U.S. Ambassador's residence in Belgium",
    imagePosition: "50% 43%",
    copy: "Our team won UCB's challenge with a proposal for epilepsy awareness in rural Rwanda. The same day, a teammate and I also won Euroclear's optional pitch on making its sustainability work more durable. Both required us to understand the audience, make choices, and explain them simply.",
    tags: ["UCB winner", "Euroclear winner", "Sustainability", "Strategy"],
    doodle: ["★★", "TWO WINS. ONE DAY."],
  },
  {
    year: "Belgian Leadership Project",
    title: "Learning leadership through community",
    type: "Community",
    color: "green",
    image: "/images/debora-friends-lunch.jpeg",
    imageAlt: "Debora enjoying lunch with friends",
    imagePosition: "72% 50%",
    copy: "The Belgian Leadership Project brought me into a community of curious, ambitious people for workshops, long conversations, and practical reflection. It taught me that leadership is less about having every answer and more about raising the quality of the questions around you.",
    tags: ["Leadership", "Community", "Listening", "Curiosity"],
    doodle: ["↗", "BETTER QUESTIONS, BIGGER THINKING"],
  },
];

export default function WorkPage() {
  return (
    <SiteFrame current="/work">
      <PageIntro
        eyebrow="Experience"
        title="EXPERIENCE, WITH CONTEXT."
        note="what I did, what it needed, and what I learned"
      />
      <section className="work-collage section-pad">
        {chapters.map((chapter, index) => (
          <Reveal className={`work-card-wrap work-${index + 1}`} key={chapter.title}>
            <article className={`work-card ${chapter.color}`}>
              <div className="work-art">
                <img
                  className="work-photo"
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  style={{ objectPosition: chapter.imagePosition }}
                />
                <span>{chapter.year}</span>
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
            <div className="work-doodle" aria-hidden="true">
              <strong>{chapter.doodle[0]}</strong>
              <span>{chapter.doodle[1]}</span>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="next-page-card section-pad">
        <p className="hand-note">A résumé looks backward. This page looks forward.</p>
        <h2>WHAT AM I FOCUSED ON NOW?</h2>
        <Link className="button button-dark" href="/now">
          See what&apos;s current <span>→</span>
        </Link>
      </section>
    </SiteFrame>
  );
}
