import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import { culture } from "../content.js";

/* OUR CULTURE — a display-only slideshow of Bor heritage.
 * The feature image and the gallery are combined and shown TWO images per
 * slide; the slideshow auto-advances to the next pair with a smooth glide.
 * Portrait imagery suits the source photography (cattle camps, portraits,
 * ceremonies). */

// Combine the feature image with the gallery, then page through two at a time.
const ALL = [culture.feature, ...culture.gallery];
const PAGES = [];
for (let i = 0; i < ALL.length; i += 2) PAGES.push(ALL.slice(i, i + 2));

const Culture = forwardRef(function Culture(_props, ref) {
  return (
    <Section ref={ref} id="culture" label="Our Culture">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <Eyebrow>Our Heritage</Eyebrow>
            <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
              Our Culture
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-muted">
              {culture.intro}
            </p>
          </div>
          <p className="font-sans text-sm text-muted">
            {ALL.length} images · swipe or use arrows
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 lg:mt-10">
        <Carousel
          items={PAGES}
          label="Our culture gallery"
          autoPlay={5000}
          renderItem={(pair) => (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {pair.map((item) => (
                <Tile key={item.id} item={item} />
              ))}
            </div>
          )}
        />
      </Reveal>
    </Section>
  );
});

/* A single cultural image tile with a gradient scrim and overlaid title.
 * Height is viewport-based so a pair always fits neatly within the slide. */
function Tile({ item }) {
  return (
    <figure className="group relative h-[48vh] w-full overflow-hidden rounded-2xl bg-ink shadow-[0_22px_48px_-24px_rgba(21,20,15,0.5)] ring-1 ring-black/10 sm:h-[56vh] lg:h-[60vh]">
      <img
        src={item.photo}
        alt={item.caption || item.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-editorial group-hover:scale-[1.05]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <span className="mb-2 block h-px w-7 bg-accent" aria-hidden="true" />
        <h3 className="font-display text-base font-normal leading-tight text-bg sm:text-2xl">
          {item.title}
        </h3>
      </figcaption>
    </figure>
  );
}

export default Culture;
