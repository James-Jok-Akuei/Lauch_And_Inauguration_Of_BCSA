import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import { objectives } from "../content.js";

/* OBJECTIVES — an animated, numbered editorial list (4–6 items).
 * Each row reveals in sequence with a large index numeral, title, and detail. */
const Objectives = forwardRef(function Objectives(_props, ref) {
  return (
    <Section ref={ref} id="objectives" label="Objectives">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Sticky-feeling heading column */}
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>This Term</Eyebrow>
            <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
              Objectives
            </h2>
            <p className="mt-5 max-w-xs font-sans text-base font-light text-muted">
              What the new leadership commits to implementing this term.
            </p>
          </Reveal>
        </div>

        {/* Numbered list column */}
        <ol className="md:col-span-8">
          {objectives.map((o, i) => (
            <Reveal as="li" key={o.id} delay={i * 0.08}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-hairline py-7 first:border-t-0 sm:gap-x-10">
                <span className="font-display text-3xl font-light tabular-nums text-accent sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-normal leading-tight sm:text-3xl">
                    {o.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-sans text-base font-light leading-relaxed text-muted">
                    {o.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
});

export default Objectives;
