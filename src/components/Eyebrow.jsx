/* Eyebrow — the small uppercase label that sits above a section title.
 * A short accent rule + spaced caps. Used consistently to open each section. */
export default function Eyebrow({ children, tone = "default", className = "" }) {
  const text = tone === "ink" ? "text-bg/70" : "text-muted";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      <span className={`font-sans text-eyebrow font-medium uppercase ${text}`}>
        {children}
      </span>
    </div>
  );
}
