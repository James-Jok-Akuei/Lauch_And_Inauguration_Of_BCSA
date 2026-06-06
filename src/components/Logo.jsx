import { site } from "../content.js";

/* Logo — the BCSA emblem rendered as a clean circular "seal".
 * The source artwork is a circular emblem on a white field, so we clip it to a
 * white round chip with a faint ring. This keeps it crisp on both the ivory
 * sections and the dark charcoal Cover/Closing slides.
 *
 * Props:
 *   className — sizing + spacing classes (e.g. "h-20 w-20 sm:h-32 sm:w-32").
 *               Defaults to a medium 80px circle.
 */
export default function Logo({ className = "h-20 w-20" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <img
        src={site.logo}
        alt={`${site.abbr} emblem`}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
