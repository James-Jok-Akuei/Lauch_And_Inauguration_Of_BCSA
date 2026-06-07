import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* AutoScroll — a fixed-height region whose content scrolls itself vertically.
 * Used for long content (e.g. a lengthy guest biography) so readers don't have
 * to scroll manually. It only activates when the content overflows; it gently
 * drifts down, pauses at the bottom, returns to the top, and repeats. Hovering,
 * focusing, or touching pauses it so a reader can stop on a passage. Honors
 * prefers-reduced-motion (no auto-scroll; plain scrollable box).
 *
 * Props:
 *   pxPerSec — scroll speed in pixels/second (default 22)
 *   pauseMs  — dwell time at the top/bottom before reversing (default 1800)
 */
export default function AutoScroll({
  children,
  className = "",
  pxPerSec = 22,
  pauseMs = 1800,
}) {
  const ref = useRef(null);
  const pausedRef = useRef(false);
  const reduce = useReducedMotion();
  const [overflowing, setOverflowing] = useState(false);

  // Track whether the content overflows (so we only fade/auto-scroll then).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollHeight - el.clientHeight > 8);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [children]);

  // The auto-scroll loop.
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let raf;
    let last = null;
    let dir = 1; // 1 = down, -1 = up
    let holdUntil = 0;
    const step = (t) => {
      if (last === null) last = t;
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 8 && !pausedRef.current && t >= holdUntil) {
        el.scrollTop += dir * pxPerSec * dt;
        if (el.scrollTop >= max - 0.5) {
          dir = -1;
          holdUntil = t + pauseMs;
        } else if (el.scrollTop <= 0.5) {
          dir = 1;
          holdUntil = t + pauseMs;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduce, pxPerSec, pauseMs]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  // Soft fade at the top/bottom edges, only while content overflows.
  const maskStyle = overflowing
    ? {
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, #000 6%, #000 94%, transparent)",
        maskImage:
          "linear-gradient(to bottom, transparent, #000 6%, #000 94%, transparent)",
      }
    : undefined;

  return (
    <div
      ref={ref}
      className={`no-scrollbar overflow-y-auto ${className}`}
      style={maskStyle}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {children}
    </div>
  );
}
