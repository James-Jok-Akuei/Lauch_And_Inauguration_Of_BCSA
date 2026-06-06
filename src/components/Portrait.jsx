/* Portrait — a consistent, lazy-loaded portrait image in a fixed 3:4 frame.
 * Used by leadership, guest, and serving-Bor cards so every photo shares the
 * same ratio, softly curved corners, fine hairline frame, and soft lifted
 * shadow — a framed-print feel that suits the editorial brand.
 */
export default function Portrait({ src, alt, className = "", priority = false }) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface shadow-[0_22px_48px_-24px_rgba(21,20,15,0.45)] ring-1 ring-black/10 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial"
      />
      {/* Inset hairline highlight for the fine, framed-print edge. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}
