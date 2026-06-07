import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ============================================================================
 *  Carousel — reusable slideshow for Leadership & Invited Guests.
 * ----------------------------------------------------------------------------
 *  One slide per view. Supports:
 *    • prev / next arrows
 *    • clickable dots
 *    • drag / swipe (pointer + touch) via Framer Motion
 *    • keyboard ←/→ when the carousel region is focused
 *    • optional gentle autoplay (pauses on hover, focus, and reduced-motion)
 *
 *  Props:
 *    items      — array of data
 *    renderItem — (item, index) => JSX for a single slide
 *    label      — accessible label for the region
 *    autoPlay   — ms between advances, or 0/undefined to disable
 *    tone       — "default" | "ink" (affects control colors)
 * ========================================================================== */
export default function Carousel({
  items,
  renderItem,
  label = "Carousel",
  autoPlay = 0,
  tone = "default",
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const regionRef = useRef(null);
  const count = items.length;

  const onInk = tone === "ink";
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Continuous autoplay — the slides always keep moving and never pause on
  // hover or focus (sliding is the core experience). Only reduced-motion stops
  // it, for accessibility. Manual arrows/dots/swipe still reposition it.
  useEffect(() => {
    if (!autoPlay || reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoPlay);
    return () => clearInterval(t);
  }, [autoPlay, reduce, count]);

  // Keyboard navigation when the carousel is focused.
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.stopPropagation();
      next();
    } else if (e.key === "ArrowLeft") {
      e.stopPropagation();
      prev();
    }
  };

  // Swipe handling: commit a slide change past a distance/velocity threshold.
  const onDragEnd = (_e, info) => {
    const threshold = 60;
    if (info.offset.x < -threshold || info.velocity.x < -400) next();
    else if (info.offset.x > threshold || info.velocity.x > 400) prev();
  };

  const arrowBase = onInk
    ? "border-bg/25 text-bg hover:border-accent hover:text-accent"
    : "border-hairline text-ink hover:border-accent hover:text-accent";

  return (
    <div
      ref={regionRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative w-full outline-none"
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={onDragEnd}
          animate={{ x: `${-index * 100}%` }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              className="w-full shrink-0 px-1"
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {/* Prevent a drag from triggering link clicks mid-swipe. */}
              <div className="pointer-events-auto select-none">
                {renderItem(item, i)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls: arrows + dots */}
      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${arrowBase}`}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${arrowBase}`}
          >
            <Arrow dir="right" />
          </button>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {items.map((item, i) => (
            <button
              key={item.id ?? i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={[
                "h-[6px] rounded-full transition-all duration-500 ease-editorial",
                i === index
                  ? "w-6 bg-accent"
                  : onInk
                  ? "w-[6px] bg-bg/30 hover:bg-bg/60"
                  : "w-[6px] bg-ink/20 hover:bg-ink/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Arrow({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
