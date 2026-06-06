import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import Portrait from "../components/Portrait.jsx";
import { leadership } from "../content.js";

/* LEADERSHIP BOARD — carousel of the new executive.
 * Each slide is an editorial split: portrait beside a large name + position.
 * Gentle autoplay is enabled (pauses on hover/focus/reduced-motion). */
const Leadership = forwardRef(function Leadership(_props, ref) {
  return (
    <Section ref={ref} id="leadership" label="Leadership Board">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>The New Executive</Eyebrow>
            <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
              Leadership Board
            </h2>
          </div>
          <p className="font-sans text-sm text-muted">
            {leadership.length} members · swipe or use arrows
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Carousel
          items={leadership}
          label="Leadership board"
          autoPlay={6000}
          renderItem={(person) => (
            <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-20">
              <Portrait
                src={person.photo}
                alt={`Portrait of ${person.name}, ${person.position}`}
                className="mx-auto w-full max-w-sm"
              />
              <div className="text-center sm:text-left">
                <p className="font-sans text-eyebrow uppercase text-accent">
                  {person.position}
                </p>
                <h3 className="mt-4 font-display text-display-md font-light leading-[1.02]">
                  {person.name}
                </h3>
              </div>
            </div>
          )}
        />
      </Reveal>
    </Section>
  );
});

export default Leadership;
