import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* AutoScroll — a fixed-height region whose content scrolls itself vertically,
 * entirely on its own (no manual scrolling needed). Used for long content such
 * as a lengthy guest biography. It only activates when the content overflows;
 * it gently drifts down, pauses briefly at the bottom, eases back to the top,
 * and repeats — continuously. Honors prefers-reduced-motion (static box).
 *
 * Props:
 *   pxPerSec — scroll speed in pixels/second (default 30)
 *   pauseMs  — dwell time at the top/bottom before reversing (default 1400)
 */
export default function AutoScroll({
  children,
  className = "",
  pxPerSec = 30,
  pauseMs = 1400,
}) {
  const ref = useRef(null);
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

  // The continuous auto-scroll loop — always running on its own.
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
      if (max > 8 && t >= holdUntil) {
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
      className={`no-scrollbar overflow-hidden ${className}`}
      style={maskStyle}
    >
      {children}
    </div>
  );
}
