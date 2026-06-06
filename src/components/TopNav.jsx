import { useState } from "react";
import Logo from "./Logo.jsx";
import { site } from "../content.js";

/* TopNav — the slim top navigation bar.
 * Desktop (lg+): brand on the left, inline section links on the right that
 * underline the active section and jump on click.
 * Mobile/tablet: brand + a menu button that opens a tidy dropdown of sections.
 *
 * The bar is transparent over the dark Cover/Closing slides and switches to a
 * blurred ivory bar over the light sections so links stay legible.
 *
 * Props: sections, active (index), goTo(index), tone ("default" | "ink").
 */
export default function TopNav({ sections, active, goTo, tone = "default" }) {
  const [open, setOpen] = useState(false);
  const onInk = tone === "ink";

  const jump = (i) => {
    goTo(i);
    setOpen(false);
  };

  const barText = onInk ? "text-bg" : "text-ink";
  const barBg = onInk
    ? "bg-transparent"
    : "border-b border-hairline bg-bg/80 backdrop-blur-md";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${barBg}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        {/* Brand → cover */}
        <button
          onClick={() => jump(0)}
          aria-label="Go to top"
          className={`flex items-center gap-3 ${barText}`}
        >
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg leading-none">{site.abbr}</span>
        </button>

        {/* Desktop inline links */}
        <nav className="hidden items-center gap-x-5 lg:flex" aria-label="Sections">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => jump(i)}
              aria-current={i === active ? "true" : undefined}
              className={`relative font-sans text-[0.76rem] uppercase tracking-wide transition-opacity duration-300 ${barText} ${
                i === active ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
            >
              {s.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  i === active ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile / tablet menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="bcsa-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`lg:hidden ${barText}`}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile / tablet dropdown */}
      {open && (
        <nav
          id="bcsa-mobile-nav"
          aria-label="Sections"
          className="border-t border-hairline bg-bg lg:hidden"
        >
          <ol className="mx-auto max-w-content px-6 py-1 sm:px-10">
            {sections.map((s, i) => (
              <li key={s.id}>
                <button
                  onClick={() => jump(i)}
                  aria-current={i === active ? "true" : undefined}
                  className="flex w-full items-baseline gap-4 border-b border-hairline/70 py-3 text-left last:border-b-0"
                >
                  <span className="font-display text-sm tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-sans text-sm uppercase tracking-wide ${
                      i === active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}

/* Animated hamburger / close icon. */
function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={open ? "M6 6l12 12" : "M3 7h18"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d={open ? "M18 6L6 18" : "M3 17h18"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {!open && (
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
}
