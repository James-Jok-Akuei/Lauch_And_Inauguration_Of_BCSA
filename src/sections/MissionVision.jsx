import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import { missionVision } from "../content.js";

/* MISSION & VISION — two elegant statements on an asymmetric editorial grid. */
const MissionVision = forwardRef(function MissionVision(_props, ref) {
  return (
    <Section ref={ref} id="mission" label="Mission and Vision">
      <Reveal>
        <Eyebrow>Our Purpose</Eyebrow>
      </Reveal>

      <div className="mt-12 grid gap-x-16 gap-y-16 md:mt-16 md:grid-cols-12">
        {/* Mission */}
        <div className="md:col-span-7">
          <Reveal delay={0.05}>
            <p className="font-sans text-eyebrow uppercase text-accent">Mission</p>
          </Reveal>
          <Reveal delay={0.12} as="p">
            <span className="mt-5 block font-display text-display-md font-light leading-[1.12] text-ink">
              {missionVision.mission}
            </span>
          </Reveal>
        </div>

        {/* Hairline + Vision, offset for asymmetry */}
        <div className="md:col-span-5 md:pt-24">
          <Reveal delay={0.18}>
            <div className="mb-8 h-px w-full bg-hairline" />
            <p className="font-sans text-eyebrow uppercase text-accent">Vision</p>
          </Reveal>
          <Reveal delay={0.24} as="p">
            <span className="mt-5 block font-display text-3xl font-light leading-snug text-muted sm:text-4xl">
              {missionVision.vision}
            </span>
          </Reveal>
        </div>
      </div>
    </Section>
  );
});

export default MissionVision;
