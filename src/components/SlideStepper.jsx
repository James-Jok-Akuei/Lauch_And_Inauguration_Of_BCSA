/* SlideStepper — floating Prev / Next controls (the second navigation aid).
 * A vertical pair of up/down buttons, fixed bottom-right, that move one slide
 * at a time. Disabled at the first/last slide. Tone-aware so it stays visible
 * over both ivory and charcoal sections. Works on phone and during the live
 * presentation alongside the keyboard arrows.
 *
 * Props: active (index), count, goTo(index), tone ("default" | "ink").
 */
export default function SlideStepper({ active, count, goTo, tone = "default" }) {
  const onInk = tone === "ink";
  const atStart = active === 0;
  const atEnd = active === count - 1;

  const base = onInk
    ? "border-bg/30 text-bg hover:border-accent hover:text-accent"
    : "border-hairline bg-bg/70 text-ink backdrop-blur hover:border-accent hover:text-accent";

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-2 lg:right-8">
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        disabled={atStart}
        aria-label="Previous section"
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${base}`}
      >
        <Chevron dir="up" />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        disabled={atEnd}
        aria-label="Next section"
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30 ${base}`}
      >
        <Chevron dir="down" />
      </button>
    </div>
  );
}

function Chevron({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "up" ? "M5 15l7-7 7 7" : "M5 9l7 7 7-7"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
