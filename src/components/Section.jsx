import { forwardRef } from "react";
import { site } from "../content.js";

/* Section — a full-viewport "slide" and scroll-snap stop.
 * Every top-level section of the deck is wrapped in this so they share the
 * same height, snapping, padding, and content max-width / vertical rhythm.
 *
 * Props:
 *   id        — anchor id (matches the dot-nav)
 *   label     — accessible region label
 *   tone      — "default" (ivory) or "ink" (charcoal slide, used for Cover/Closing)
 *   watermark — when true, render a large, faint, blurred BCSA emblem behind the
 *               content (used on the Leadership and Guests sections)
 */
const Section = forwardRef(function Section(
  { id, label, tone = "default", watermark = false, className = "", children },
  ref
) {
  const toneClass =
    tone === "ink" ? "bg-ink text-bg" : "bg-bg text-ink";

  return (
    <section
      ref={ref}
      id={id}
      aria-label={label}
      className={`bcsa-snap relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden ${toneClass} ${className}`}
    >
      {watermark && (
        <img
          src={site.logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(88vw,46rem)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.07] blur-[3px] mix-blend-multiply"
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-20 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
});

export default Section;
