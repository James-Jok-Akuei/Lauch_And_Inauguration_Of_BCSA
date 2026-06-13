import { useEffect, useState } from "react";

/* PageScroller — floating up / down arrows for a long, window-scrolling page
 * (e.g. the Participants directory). Each press glides one near-viewport down
 * or up. Disabled at the very top / bottom. */
export default function PageScroller() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 20);
      setAtBottom(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 20
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const step = (dir) =>
    window.scrollBy({ top: dir * window.innerHeight * 0.85, behavior: "smooth" });

  const base =
    "flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-bg/80 text-ink backdrop-blur transition-colors duration-300 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-2 lg:right-8">
      <button type="button" onClick={() => step(-1)} disabled={atTop} aria-label="Scroll up" className={base}>
        <Chevron dir="up" />
      </button>
      <button type="button" onClick={() => step(1)} disabled={atBottom} aria-label="Scroll down" className={base}>
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
