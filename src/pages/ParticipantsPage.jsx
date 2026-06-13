import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Eyebrow from "../components/Eyebrow.jsx";
import Logo from "../components/Logo.jsx";
import PageScroller from "../components/PageScroller.jsx";
import { participants, site } from "../content.js";

const SCROLL_KEY = "bcsa:participantsScroll";

/* PARTICIPANTS PAGE — its own route at /participants (not part of the deck).
 * Lists the invited universities (leadership representatives) and the community
 * associations / cultural groups presenting speeches and cultural dances. */
export default function ParticipantsPage() {
  const reduce = useReducedMotion();
  const delegations = participants.delegations || [];
  // Index of the delegation shown full-screen (null = closed).
  const [activeIdx, setActiveIdx] = useState(null);

  // Restore the previous scroll position when returning (e.g. from a gallery),
  // otherwise start at the top. Guarded so it reads the saved value exactly
  // once (React StrictMode runs effects twice in dev) and runs before paint.
  const didRestore = useRef(false);
  useLayoutEffect(() => {
    if (didRestore.current) return;
    didRestore.current = true;
    const saved = sessionStorage.getItem(SCROLL_KEY);
    sessionStorage.removeItem(SCROLL_KEY);
    const y = saved !== null ? parseInt(saved, 10) || 0 : 0;
    window.scrollTo(0, y);
    // Re-assert after layout settles (covers late reflows).
    requestAnimationFrame(() => window.scrollTo(0, y));
  }, []);

  // Keyboard control for the full-screen view: Esc closes, ←/→ navigate.
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIdx(null);
      else if (e.key === "ArrowRight")
        setActiveIdx((i) => (i + 1) % delegations.length);
      else if (e.key === "ArrowLeft")
        setActiveIdx((i) => (i - 1 + delegations.length) % delegations.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, delegations.length]);

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
            <Card key={item.id} slug={item.slug} photo={item.photo} name={item.name} tag={item.abbr} />
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
            <Card key={item.id} slug={item.slug} photo={item.photo} name={item.name} />
          ))}
        </div>

        {/* Communities & cultural groups (text-only cards) */}
        {participants.delegations?.length > 0 && (
          <>
            <Group
              title="Communities &amp; Cultural Groups"
              count={participants.delegations.length}
              className="mt-14"
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {delegations.map((item, i) => (
                <TextCard
                  key={item.id}
                  index={i}
                  name={item.name}
                  note={item.note}
                  onOpen={() => setActiveIdx(i)}
                />
              ))}
            </div>
          </>
        )}

        <div className="mt-16">
          <BackLink label="Return to the programme" />
        </div>
      </div>

      {/* Floating up/down page navigation */}
      <PageScroller />

      {/* Full-screen view of a single community / cultural group */}
      <AnimatePresence>
        {activeIdx !== null && (
          <DelegationOverlay
            item={delegations[activeIdx]}
            index={activeIdx}
            total={delegations.length}
            reduce={reduce}
            onClose={() => setActiveIdx(null)}
            onPrev={() =>
              setActiveIdx((i) => (i - 1 + delegations.length) % delegations.length)
            }
            onNext={() => setActiveIdx((i) => (i + 1) % delegations.length)}
          />
        )}
      </AnimatePresence>
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

/* A single participant card — links to that group's gallery slideshow. */
function Card({ slug, photo, name, tag }) {
  return (
    <Link
      to={`/participants/${slug}`}
      aria-label={`View ${name} gallery`}
      onClick={() => sessionStorage.setItem(SCROLL_KEY, String(window.scrollY))}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface shadow-[0_18px_40px_-24px_rgba(21,20,15,0.4)] ring-1 ring-black/10 transition-shadow duration-500 group-hover:ring-accent/40">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
        />
        {/* Hover hint */}
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-ink/80 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-widest2 text-bg">
            View gallery →
          </span>
        </span>
      </div>
      <figcaption className="mt-3">
        {tag && (
          <span className="font-sans text-[0.7rem] uppercase tracking-widest2 text-accent">
            {tag}
          </span>
        )}
        <p className="mt-0.5 font-display text-base font-normal leading-tight text-ink transition-colors group-hover:text-accent">
          {name}
        </p>
      </figcaption>
    </Link>
  );
}

/* A text-only group card — click to open a full-screen view. */
function TextCard({ index, name, note, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${name}`}
      className="group relative flex h-full flex-col rounded-xl border border-hairline bg-surface/40 p-6 text-left transition-colors duration-500 hover:border-accent/50"
    >
      <div className="flex items-baseline justify-between">
        <span className="block h-px w-8 bg-accent" aria-hidden="true" />
        <span className="font-display text-sm tabular-nums text-accent/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-normal leading-tight text-ink">
        {name}
      </h3>
      <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
        {note}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-widest2 text-ink/50 transition-colors group-hover:text-accent">
        View
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}

/* Full-screen takeover for a single community / cultural group. */
function DelegationOverlay({ item, index, total, reduce, onClose, onPrev, onNext }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink text-bg"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? {} : { opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
    >
      {/* Faint emblem-style frame */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-6 border border-bg/10 sm:inset-10" />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-bg/25 text-bg transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Content (stop click-through so taps on the text don't close it) */}
      <motion.div
        className="relative mx-auto max-w-3xl px-8 text-center"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? {} : { opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        key={item.id}
      >
        <p className="font-sans text-eyebrow uppercase text-bg/55">
          Community &amp; Cultural Group
        </p>
        <h2 className="mt-6 font-display text-display-lg font-light leading-[1.02] text-bg">
          {item.name}
        </h2>
        <span className="mx-auto mt-8 block h-px w-16 bg-accent" aria-hidden="true" />
        <p className="mt-8 font-display text-2xl font-light leading-relaxed text-bg/80 sm:text-3xl">
          {item.note}
        </p>
      </motion.div>

      {/* Prev / next + counter */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-bg/25 text-bg transition-colors hover:border-accent hover:text-accent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="font-sans text-sm tabular-nums text-bg/60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-bg/25 text-bg transition-colors hover:border-accent hover:text-accent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.div>
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
