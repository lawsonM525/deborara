import { PageIntro, SiteFrame } from "../../components/SiteFrame";
import { Reveal } from "../../components/Reveal";

const stories = [
  {
    quote: "Michelle’s testimonial for Debora will live here.",
    name: "Michelle",
    relation: "Testimonial placeholder",
    color: "yellow",
  },
  {
    quote: "She asks the question everyone needs, then quietly turns the answer into momentum.",
    name: "Future teammate",
    relation: "Add the real story here",
    color: "blue",
  },
  {
    quote: "Direct, generous, and exceptionally good at finding the signal in the noise.",
    name: "Future manager",
    relation: "Add the real story here",
    color: "green",
  },
  {
    quote: "The kind of collaborator who raises both the quality of the work and the energy of the room.",
    name: "Future partner",
    relation: "Add the real story here",
    color: "purple",
  },
];

export default function TestimonialsPage() {
  return (
    <SiteFrame current="/testimonials">
      <PageIntro
        eyebrow="As told by other humans"
        title="DON'T JUST TAKE MY WORD FOR IT."
        note="receipts, but make them warm"
      />
      <section className="testimonial-wall section-pad">
        {stories.map((story, index) => (
          <Reveal key={story.quote} className={`testimonial-position t-${index + 1}`}>
            <blockquote className={`testimonial-card ${story.color}`}>
              <span className="quote-mark">“</span>
              <p>{story.quote}</p>
              <footer>
                <strong>{story.name}</strong>
                <span>{story.relation}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </section>
    </SiteFrame>
  );
}
