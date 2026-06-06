import { useDeck } from "./hooks/useDeck.js";
import ProgressBar from "./components/ProgressBar.jsx";
import TopNav from "./components/TopNav.jsx";
import SlideStepper from "./components/SlideStepper.jsx";
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

export default function App() {
  const { deckRef, sectionRefs, active, progress, goTo } = useDeck(SECTIONS.length);
  const tone = INK_SLIDES.has(active) ? "ink" : "default";

  return (
    <>
      <ProgressBar progress={progress} />
      <TopNav sections={sectionMeta} active={active} goTo={goTo} tone={tone} />
      <SlideStepper active={active} count={SECTIONS.length} goTo={goTo} tone={tone} />

      {/* The scroll-snap deck. Each section is a full-viewport snap stop. */}
      <main ref={deckRef} className="bcsa-deck">
        {SECTIONS.map((SectionComp, i) => (
          <SectionComp key={sectionMeta[i].id} ref={(el) => (sectionRefs.current[i] = el)} />
        ))}
      </main>
    </>
  );
}
