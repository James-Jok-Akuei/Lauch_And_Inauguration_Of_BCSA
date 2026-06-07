import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ============================================================================
 *  Carousel — reusable slideshow for Objectives, Leadership, Guests, Culture.
 * ----------------------------------------------------------------------------
 *  One slide per view, with a SEAMLESS infinite loop: a clone of the first
 *  slide is appended to the end, so advancing past the last slide flows
 *  forward into the clone and then resets instantly to the real first slide —
 *  no backward "rewind". Supports:
 *    • prev / next arrows
 *    • clickable dots
 *    • drag / swipe (pointer + touch) via Framer Motion
 *    • keyboard ←/→ when the carousel region is focused
 *    • continuous autoplay (never pauses; only reduced-motion disables it)
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
  // index ranges 0..count, where `count` points at the cloned first slide.
  const [index, setIndex] = useState(0);
  // When false, the track jumps with no animation (used for the seamless reset).
  const [animate, setAnimate] = useState(true);
  const reduce = useReducedMotion();
  const regionRef = useRef(null);
  const count = items.length;

  const onInk = tone === "ink";

  // Display track = all slides + a clone of the first for the seamless wrap.
  const display = count > 0 ? [...items, items[0]] : items;

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) {
        setAnimate(false); // instant wrap backward to the last slide
        return count - 1;
      }
      return i - 1;
    });
  }, [count]);
  const go = useCallback((i) => setIndex(i), []);

  // Continuous autoplay — always moving; only reduced-motion stops it.
  useEffect(() => {
    if (!autoPlay || reduce || count <= 1) return;
    const t = setInterval(() => setIndex((i) => i + 1), autoPlay);
    return () => clearInterval(t);
  }, [autoPlay, reduce, count]);

  // After the forward animation lands on the clone, snap back to the real
  // first slide instantly (invisible, since the clone is identical to it).
  const onTrackAnimationComplete = () => {
    if (index >= count) {
      setAnimate(false);
      setIndex(0);
    }
  };

  // Re-enable animation on the next frame after any instant jump.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate, index]);

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

  // The dot that reads as active (the clone position maps back to the first).
  const activeDot = count > 0 ? index % count : 0;

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
            !animate || reduce
              ? { duration: 0 }
              : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
          }
          onAnimationComplete={onTrackAnimationComplete}
        >
          {display.map((item, di) => {
            // The trailing clone (di === count) shows the first slide's content.
            const logical = di === count ? 0 : di;
            return (
              <div
                key={di}
                className="w-full shrink-0 px-1"
                aria-hidden={di !== index}
                aria-roledescription="slide"
                aria-label={`${logical + 1} of ${count}`}
              >
                {/* Prevent a drag from triggering link clicks mid-swipe. */}
                <div className="pointer-events-auto select-none">
                  {renderItem(item, logical)}
                </div>
              </div>
            );
          })}
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
              aria-selected={i === activeDot}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={[
                "h-[6px] rounded-full transition-all duration-500 ease-editorial",
                i === activeDot
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
