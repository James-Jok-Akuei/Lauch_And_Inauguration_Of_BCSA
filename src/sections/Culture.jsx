import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import { shuffle } from "../utils/shuffle.js";
import { culture } from "../content.js";

/* OUR CULTURE — a display-only slideshow of Bor heritage.
 * The feature image and the gallery are combined and shown TWO images per
 * slide; the slideshow auto-advances to the next pair with a smooth glide.
 * Portrait imagery suits the source photography (cattle camps, portraits,
 * ceremonies). */

// Combine the feature image with the gallery, shuffle into a random order
// (reshuffled on each page load), then page through two images at a time.
const ALL = [culture.feature, ...culture.gallery];
const SHUFFLED = shuffle(ALL);
const PAGES = [];
for (let i = 0; i < SHUFFLED.length; i += 2) PAGES.push(SHUFFLED.slice(i, i + 2));

const Culture = forwardRef(function Culture(_props, ref) {
  return (
    <Section ref={ref} id="culture" label="Our Culture">
      <Reveal>
        <Eyebrow>Our Heritage</Eyebrow>
        {/* Heading line: "Our Culture" (start) + a link to the Participants
            section (end), on the same row. */}
        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <h2 className="font-display text-display-md font-light leading-[1.05]">
            Our Culture
          </h2>
          <Link
            to="/participants"
            onClick={() => sessionStorage.setItem("bcsa:returnSection", "culture")}
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest2 text-ink"
          >
            <span className="border-b border-accent pb-1 transition-colors group-hover:text-accent">
              Universities &amp; Associations
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
        <p className="mt-5 max-w-3xl font-sans text-base font-light leading-relaxed text-muted">
          {culture.intro}
        </p>
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
    <figure className="group relative h-[48vh] w-full overflow-hidden bg-ink sm:h-[56vh] lg:h-[60vh]">
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
