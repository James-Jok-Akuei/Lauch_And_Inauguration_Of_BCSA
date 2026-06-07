import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "../components/Eyebrow.jsx";
import Logo from "../components/Logo.jsx";
import { participants, site } from "../content.js";

/* PARTICIPANTS PAGE — its own route at /participants (not part of the deck).
 * Lists the invited universities (leadership representatives) and the community
 * associations / cultural groups presenting speeches and cultural dances. */
export default function ParticipantsPage() {
  const reduce = useReducedMotion();

  // Always start at the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-[100dvh] bg-bg text-ink">
      <div className="mx-auto w-full max-w-content px-6 py-10 sm:px-10 lg:px-16">
        {/* Header / back control */}
        <div className="flex items-center justify-between">
          <BackLink label="Back" />
          <Link
            to="/"
            onClick={() => sessionStorage.removeItem("bcsa:returnSection")}
            className="flex items-center gap-3"
          >
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg">{site.abbr}</span>
          </Link>
        </div>

        {/* Title */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>Speeches &amp; Cultural Dances</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-light leading-[1.02]">
            Universities &amp; Associations
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base font-light leading-relaxed text-muted">
            {participants.intro}
          </p>
        </motion.div>

        {/* Universities */}
        <Group title="Universities" count={participants.universities.length} className="mt-14" />
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:gap-x-6">
          {participants.universities.map((item) => (
            <Card key={item.id} photo={item.photo} name={item.name} tag={item.abbr} />
          ))}
        </div>

        {/* Associations & Cultural Groups */}
        <Group
          title="Associations &amp; Cultural Groups"
          count={participants.associations.length}
          className="mt-14"
        />
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {participants.associations.map((item) => (
            <Card key={item.id} photo={item.photo} name={item.name} />
          ))}
        </div>

        <div className="mt-16">
          <BackLink label="Return to the programme" />
        </div>
      </div>
    </main>
  );
}

/* Sub-heading row with a hairline rule and a count. */
function Group({ title, count, className = "" }) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <h2
        className="font-sans text-eyebrow uppercase text-accent"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
      <span className="font-sans text-sm tabular-nums text-muted">{count}</span>
    </div>
  );
}

/* A single participant card: framed image + name (and optional abbreviation). */
function Card({ photo, name, tag }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface shadow-[0_18px_40px_-24px_rgba(21,20,15,0.4)] ring-1 ring-black/10">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
        />
      </div>
      <figcaption className="mt-3">
        {tag && (
          <span className="font-sans text-[0.7rem] uppercase tracking-widest2 text-accent">
            {tag}
          </span>
        )}
        <p className="mt-0.5 font-display text-base font-normal leading-tight text-ink">
          {name}
        </p>
      </figcaption>
    </figure>
  );
}

/* Reusable back link to the main deck (returns to the Our Culture section). */
function BackLink({ label }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest2 text-ink"
    >
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
      <span className="border-b border-accent pb-1 transition-colors group-hover:text-accent">
        {label}
      </span>
    </Link>
  );
}
