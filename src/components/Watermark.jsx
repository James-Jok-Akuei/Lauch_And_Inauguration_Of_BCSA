import { site } from "../content.js";

/* Watermark — a large, faint, blurred BCSA emblem used as a shared backdrop.
 * Rendered ONCE behind a group of transparent sections (Leadership + Guests)
 * so a single mark spans both rather than repeating per section. Centered, so
 * its middle sits at the seam between the two sections. `mix-blend-multiply`
 * drops the logo's white background into the ivora page tone. */
export default function Watermark() {
  return (
    <img
      src={site.logo}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(95vw,110vh)] w-[min(95vw,110vh)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.06] blur-[4px] mix-blend-multiply"
    />
  );
}
