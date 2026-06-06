import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section.jsx";
import Logo from "../components/Logo.jsx";
import { site } from "../content.js";

/* COVER / HERO — the title slide.
 * Charcoal "ink" slide with the BCSA mark, name, one-line tagline, event line,
 * and a subtle "scroll to begin" cue. Carries one restrained gold flourish:
 * a gentle shimmer across the abbreviation.
 */
const Cover = forwardRef(function Cover(_props, ref) {
  const reduce = useReducedMotion();

  return (
    <Section ref={ref} id="cover" label="Cover" tone="ink">
      {/* Tall framed slide: a ceremonial border around the whole title block,
          with the centered mark and a scroll cue spaced apart at the bottom. */}
      <div className="relative flex min-h-[82dvh] flex-col items-center">
        {/* Faint ceremonial framing line — quiet, not decorative-busy. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-bg/15"
        />

        {/* Centered title block */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
          <motion.div
            className="mb-10"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo className="h-24 w-24 sm:h-32 sm:w-32" />
          </motion.div>

          <motion.p
            className="mb-8 font-sans text-eyebrow uppercase text-bg/60"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Launch &amp; Inauguration
          </motion.p>

          {/* The mark — the one place the gold shimmer flourish appears. */}
          <motion.h1
            className="font-display text-display-xl font-medium leading-none"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={reduce ? "text-accent-soft" : "bcsa-shimmer animate-shimmer"}>
              {site.abbr}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl font-display text-2xl font-light leading-snug text-bg/85 sm:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl font-sans text-base font-light text-bg/60"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline}
          </motion.p>

          <motion.p
            className="mt-10 font-sans text-sm tracking-widest2 uppercase text-accent-soft"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
          >
            {site.eventLine}
          </motion.p>
        </div>

        {/* Scroll-to-begin cue, in flow at the bottom of the frame. */}
        <motion.div
          className="relative z-10 mb-6 flex flex-col items-center gap-2 text-bg/55"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="font-sans text-[0.7rem] uppercase tracking-widest2">
            Scroll to begin
          </span>
          <motion.span
            aria-hidden="true"
            className="block h-8 w-px bg-gradient-to-b from-accent-soft to-transparent"
            animate={reduce ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </Section>
  );
});

export default Cover;
