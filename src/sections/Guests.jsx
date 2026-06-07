import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import Portrait from "../components/Portrait.jsx";
import { shuffle } from "../utils/shuffle.js";
import { guests } from "../content.js";

// Randomize the guest order on each page load.
const GUESTS = shuffle(guests);

/* INVITED GUESTS — carousel of guests. Each slide links to a detail page
 * (/guests/:id) with a fuller bio and notes about their speech. */
const Guests = forwardRef(function Guests(_props, ref) {
  return (
    <Section ref={ref} id="guests" label="Invited Guests" transparent>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Honouring Our</Eyebrow>
            <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
              Invited Guests
            </h2>
          </div>
          <p className="font-sans text-sm text-muted">
            Select a guest to read their profile
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Carousel
          items={GUESTS}
          label="Invited guests"
          autoPlay={6500}
          renderItem={(guest) => (
            <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-20">
              <Link
                to={`/guests/${guest.id}`}
                aria-label={`View profile of ${guest.name}`}
                onClick={() => sessionStorage.setItem("bcsa:returnSection", "guests")}
                className="group mx-auto block w-full max-w-sm"
              >
                <Portrait
                  src={guest.photo}
                  alt={`Portrait of ${guest.name}`}
                  className="[&_img]:group-hover:scale-[1.04]"
                />
              </Link>
              <div className="text-center sm:text-left">
                <p className="font-sans text-eyebrow uppercase text-accent">
                  {guest.title}
                </p>
                <h3 className="mt-4 font-display text-display-md font-light leading-[1.02]">
                  {guest.name}
                </h3>
                <Link
                  to={`/guests/${guest.id}`}
                  onClick={() => sessionStorage.setItem("bcsa:returnSection", "guests")}
                  className="group mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest2 text-ink"
                >
                  <span className="border-b border-accent pb-1 transition-colors group-hover:text-accent">
                    View full profile
                  </span>
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          )}
        />
      </Reveal>
    </Section>
  );
});

export default Guests;
