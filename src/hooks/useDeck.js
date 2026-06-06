import { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================================
 *  useDeck — the "slide deck" engine
 * ----------------------------------------------------------------------------
 *  Wires up the scroll-snap container so the site behaves like a presentation:
 *    • tracks the active section (IntersectionObserver) for the side dot-nav
 *    • tracks scroll progress (0–1) for the slim top progress bar
 *    • exposes goTo(index) to jump to a section (dot click)
 *    • handles keyboard navigation: ↓/→/PageDown/Space advance,
 *      ↑/←/PageUp go back, Home/End jump to first/last
 *
 *  `count` is the number of sections. Returns a ref to attach to the scroller,
 *  refs to attach to each section, plus active index + progress + goTo().
 * ========================================================================== */
export function useDeck(count) {
  const deckRef = useRef(null);
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Keep the array of section refs sized to `count`.
  if (sectionRefs.current.length !== count) {
    sectionRefs.current = Array.from({ length: count }, (_, i) => sectionRefs.current[i] || null);
  }

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(count - 1, index));
    const el = sectionRefs.current[clamped];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [count]);

  // Track scroll progress for the top bar.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const onScroll = () => {
      const max = deck.scrollHeight - deck.clientHeight;
      setProgress(max > 0 ? deck.scrollTop / max : 0);
    };
    onScroll();
    deck.addEventListener("scroll", onScroll, { passive: true });
    return () => deck.removeEventListener("scroll", onScroll);
  }, []);

  // Track the active section with an IntersectionObserver (most-visible wins).
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: deck, threshold: 0.55 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  // Keyboard / presentation controls.
  useEffect(() => {
    const onKey = (e) => {
      // Don't hijack typing in form fields.
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;

      const forward = ["ArrowDown", "ArrowRight", "PageDown"];
      const backward = ["ArrowUp", "ArrowLeft", "PageUp"];

      if (forward.includes(e.key) || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        goTo(active + 1);
      } else if (backward.includes(e.key) || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(count - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, count, goTo]);

  return { deckRef, sectionRefs, active, progress, goTo };
}
