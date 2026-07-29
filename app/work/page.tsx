import Link from "next/link";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";
import { Reveal } from "../../components/Reveal";

const chapters = [
  {
    year: "U.S. Embassy · Belgium",
    title: "Autonomy, automations & very creative Excel workarounds",
    type: "Internship",
    color: "yellow",
    image: "/images/debora-team-lunch.jpeg",
    imageAlt: "Debora sharing a team lunch during her U.S. Embassy internship",
    imagePosition: "50% 52%",
    copy: "My first experience inside a government organization gave me full autonomy to explore ideas while working within serious security constraints. I automated processes, optimized Excel databases, joined site visits across Belgium, and learned why a scanner problem in Brussels can require a call to Washington.",
    tags: ["Automation", "Excel", "Operations", "Site visits"],
  },
  {
    year: "Solvay Business Game",
    title: "A finance challenge win built in a matter of hours",
    type: "Case competition",
    color: "blue",
    image: "/images/debora-professional-team.jpeg",
    imageAlt: "Debora with fellow participants at a professional event",
    imagePosition: "55% 48%",
    copy: "Across two packed days, our teams tackled pitching, negotiation, marketing, and finance cases. For the CACEIS challenge, we produced a website, custom marketing videos, and a full financial analysis—with graphs—in only a few hours, and won.",
    tags: ["CACEIS winner", "Finance", "Pitching", "Teamwork"],
  },
  {
    year: "Belgian Sustainability Business Game",
    title: "We won twice—and learned even more",
    type: "Sustainability",
    color: "purple",
    image: "/images/debora-embassy.jpeg",
    imageAlt: "Debora at the U.S. Ambassador's residence in Belgium",
    imagePosition: "50% 43%",
    copy: "Our team won UCB’s challenge by tackling epilepsy awareness in rural Rwanda. During lunch, Femke and I also entered—and won—Euroclear’s optional pitching competition on making its sustainability actions future-proof.",
    tags: ["UCB winner", "Euroclear winner", "CSR", "Strategy"],
  },
  {
    year: "Belgian Leadership Project",
    title: "The people who raised my average",
    type: "Community",
    color: "green",
    image: "/images/debora-friends-lunch.jpeg",
    imageAlt: "Debora enjoying lunch with friends",
    imagePosition: "72% 50%",
    copy: "Leadership weekends brought together inspiring people, practical workshops, long walks, home-cooked meals, and conversations ranging from AI and female artists to black holes. It reinforced how much the right community expands what you imagine is possible.",
    tags: ["Leadership", "Community", "Curiosity", "Belgium"],
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
                <img
                  className="work-photo"
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  style={{ objectPosition: chapter.imagePosition }}
                />
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
