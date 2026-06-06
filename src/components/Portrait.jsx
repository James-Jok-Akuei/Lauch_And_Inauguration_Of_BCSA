/* Portrait — a consistent, lazy-loaded portrait image in a fixed 3:4 frame.
 * Used by leadership, guest, and serving-Bor cards so every photo shares the
 * same ratio, hairline frame, and quiet hover lift.
 */
export default function Portrait({ src, alt, className = "", priority = false }) {
  return (
    <div className={`relative aspect-[3/4] overflow-hidden bg-surface ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial"
      />
      {/* Hairline inner frame for the editorial, framed-print feel. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-ink/5"
      />
    </div>
  );
}
