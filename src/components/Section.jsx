import { forwardRef } from "react";

/* Section — a full-viewport "slide" and scroll-snap stop.
 * Every top-level section of the deck is wrapped in this so they share the
 * same height, snapping, padding, and content max-width / vertical rhythm.
 *
 * Props:
 *   id          — anchor id (matches the dot-nav)
 *   label       — accessible region label
 *   tone        — "default" (ivory) or "ink" (charcoal, used for Cover/Closing)
 *   transparent — omit the section background so a shared backdrop behind it
 *                 (e.g. the Leadership+Guests emblem watermark) shows through
 */
const Section = forwardRef(function Section(
  { id, label, tone = "default", transparent = false, className = "", children },
  ref
) {
  const toneClass = transparent
    ? "z-10 text-ink"
    : tone === "ink"
    ? "bg-ink text-bg"
    : "bg-bg text-ink";

  return (
    <section
      ref={ref}
      id={id}
      aria-label={label}
      className={`bcsa-snap relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden ${toneClass} ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-20 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
});

export default Section;
