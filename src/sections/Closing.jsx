import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../components/Section.jsx";
import Logo from "../components/Logo.jsx";
import { site, closing } from "../content.js";

/* CLOSING / FOOTER — the thank-you slide. Charcoal "ink" slide echoing the
 * Cover, with the BCSA mark carrying the same restrained gold shimmer flourish
 * and minimal credits. */
const Closing = forwardRef(function Closing(_props, ref) {
  const reduce = useReducedMotion();

  return (
    <Section ref={ref} id="closing" label="Closing" tone="ink">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 border border-bg/10 sm:inset-10"
      />

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className="mb-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="h-20 w-20" />
        </motion.div>

        <motion.p
          className="mb-8 font-sans text-eyebrow uppercase text-bg/60"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? {} : { opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          With Gratitude
        </motion.p>

        <motion.h2
          className="font-display text-display-lg font-medium leading-none"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={reduce ? "text-bg" : "bcsa-shimmer animate-shimmer"}>
            Thank You
          </span>
        </motion.h2>

        <motion.p
          className="mt-8 max-w-xl font-display text-2xl font-light leading-snug text-bg/80"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {closing.message}
        </motion.p>

        <div className="mt-14 h-px w-16 bg-accent" />

        <p className="mt-8 font-display text-xl font-light text-bg/85">{site.name}</p>
        <p className="mt-2 font-sans text-sm font-light text-bg/50">{closing.credits}</p>
      </div>
    </Section>
  );
});

export default Closing;
