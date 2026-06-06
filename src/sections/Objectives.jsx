import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import { objectives } from "../content.js";

/* OBJECTIVES — the strategic priorities from the BCSA Leadership Manifesto.
 * Each priority gets its own slide: a large index + title and a guiding "focus"
 * statement on the left, and the list of commitments on the right. */
const Objectives = forwardRef(function Objectives(_props, ref) {
  return (
    <Section ref={ref} id="objectives" label="Objectives">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Strategic Priorities</Eyebrow>
            <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
              Objectives
            </h2>
          </div>
          <p className="font-sans text-sm text-muted">
            {objectives.length} priorities · swipe or use arrows
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 lg:mt-10">
        <Carousel
          items={objectives}
          label="Strategic priorities"
          autoPlay={9000}
          renderItem={(o, i) => (
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
              {/* Left: index, title, guiding focus */}
              <div className="lg:col-span-5">
                <span className="font-display text-5xl font-light tabular-nums text-accent sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-[2.5rem] sm:leading-[1.1]">
                  {o.title}
                </h3>
                <p className="mt-6 border-l-2 border-accent pl-5 font-display text-xl font-light leading-snug text-muted">
                  {o.focus}
                </p>
              </div>

              {/* Right: commitments */}
              <div className="lg:col-span-7">
                <p className="font-sans text-eyebrow uppercase text-muted">
                  Our Commitments
                </p>
                <ul className="mt-5">
                  {o.commitments.map((c, ci) => (
                    <li
                      key={ci}
                      className="grid grid-cols-[auto_1fr] gap-4 border-t border-hairline py-4 first:border-t-0"
                    >
                      <span
                        className="mt-[0.7em] h-px w-5 bg-accent"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-base font-light leading-relaxed text-ink">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        />
      </Reveal>
    </Section>
  );
});

export default Objectives;
