import { useEffect } from "react";
import { useDeck } from "./hooks/useDeck.js";
import ProgressBar from "./components/ProgressBar.jsx";
import TopNav from "./components/TopNav.jsx";
import SlideStepper from "./components/SlideStepper.jsx";
import Watermark from "./components/Watermark.jsx";
import { sections as sectionMeta } from "./content.js";

import Cover from "./sections/Cover.jsx";
import MissionVision from "./sections/MissionVision.jsx";
import Objectives from "./sections/Objectives.jsx";
import Leadership from "./sections/Leadership.jsx";
import Guests from "./sections/Guests.jsx";
import Culture from "./sections/Culture.jsx";
import Videos from "./sections/Videos.jsx";
import Closing from "./sections/Closing.jsx";

/* The eight deck slides, in order. Index lines up with `sectionMeta` from
 * content.js, which also drives the side dot-navigation. */
const SECTIONS = [
  Cover,
  MissionVision,
  Objectives,
  Leadership,
  Guests,
  Culture,
  Videos,
  Closing,
];

/* Which slides use the dark "ink" tone (Cover + Closing) — used to keep the
 * dot-navigation legible over dark backgrounds. */
const INK_SLIDES = new Set([0, SECTIONS.length - 1]);

/* Leadership + Guests are adjacent and share ONE emblem watermark spanning
 * both, so they're grouped together behind a single backdrop. */
const LEAD_IDX = sectionMeta.findIndex((s) => s.id === "leadership");
const GUEST_IDX = sectionMeta.findIndex((s) => s.id === "guests");

export default function App() {
  const { deckRef, sectionRefs, active, progress, goTo } = useDeck(SECTIONS.length);
  const tone = INK_SLIDES.has(active) ? "ink" : "default";

  // When returning from a guest detail page, jump straight back to the section
  // the visitor came from (set in sessionStorage on the way out) instead of
  // landing on the cover. Runs once on mount and then clears the flag.
  useEffect(() => {
    const target = sessionStorage.getItem("bcsa:returnSection");
    if (!target) return;
    sessionStorage.removeItem("bcsa:returnSection");
    const idx = sectionMeta.findIndex((s) => s.id === target);
    if (idx <= 0) return;
    // Wait for layout, then snap directly to the section (no animation).
    requestAnimationFrame(() => {
      sectionRefs.current[idx]?.scrollIntoView({ block: "start", behavior: "instant" });
    });
  }, [sectionRefs]);

  return (
    <>
      <ProgressBar progress={progress} />
      <TopNav sections={sectionMeta} active={active} goTo={goTo} tone={tone} />
      <SlideStepper active={active} count={SECTIONS.length} goTo={goTo} tone={tone} />

      {/* The scroll-snap deck. Each section is a full-viewport snap stop. */}
      <main ref={deckRef} className="bcsa-deck">
        {SECTIONS.map((SectionComp, i) => {
          // Guests is rendered inside the Leadership group below — skip here.
          if (i === GUEST_IDX) return null;

          const node = (
            <SectionComp key={sectionMeta[i].id} ref={(el) => (sectionRefs.current[i] = el)} />
          );
          if (i !== LEAD_IDX) return node;

          // Leadership + Guests share ONE emblem watermark spanning both.
          const GuestsComp = SECTIONS[GUEST_IDX];
          return (
            <div key="leadership-guests" className="relative bg-bg">
              <Watermark />
              {node}
              <GuestsComp
                key={sectionMeta[GUEST_IDX].id}
                ref={(el) => (sectionRefs.current[GUEST_IDX] = el)}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}
