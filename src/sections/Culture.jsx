import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import { culture } from "../content.js";

/* OUR CULTURE — a display-only showcase of Bor heritage.
 * A magazine-style opener (feature image + caption) followed by a portrait
 * gallery of cultural photographs, each with a short overlaid title. Portrait
 * tiles suit the source photography (cattle camps, portraits, ceremonies). */
const Culture = forwardRef(function Culture(_props, ref) {
  return (
    <Section ref={ref} id="culture" label="Our Culture">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Our Heritage</Eyebrow>
          <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
            Our Culture
          </h2>
          <p className="mt-5 font-sans text-base font-light leading-relaxed text-muted">
            {culture.intro}
          </p>
        </div>
      </Reveal>

      {/* Feature opener: a tall portrait image beside its caption. */}
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5" amount={0.2}>
          <Tile item={culture.feature} ratio="aspect-[4/5]" big />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="font-sans text-eyebrow uppercase text-accent">
            {culture.feature.title}
          </p>
          <p className="mt-5 font-display text-3xl font-light leading-snug text-ink sm:text-4xl">
            {culture.feature.caption}
          </p>
        </Reveal>
      </div>

      {/* Gallery of portrait tiles. */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {culture.gallery.map((item, i) => (
          <Reveal key={item.id} delay={(i % 4) * 0.06} amount={0.15}>
            <Tile item={item} ratio="aspect-[3/4]" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
});

/* A single cultural image tile with a gradient scrim and overlaid title. */
function Tile({ item, ratio, big = false }) {
  return (
    <figure className={`group relative ${ratio} w-full overflow-hidden bg-ink`}>
      <img
        src={item.photo}
        alt={item.caption || item.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="mb-2 block h-px w-7 bg-accent" aria-hidden="true" />
        <h3
          className={`font-display font-normal leading-tight text-bg ${
            big ? "text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {item.title}
        </h3>
      </figcaption>
    </figure>
  );
}

export default Culture;
