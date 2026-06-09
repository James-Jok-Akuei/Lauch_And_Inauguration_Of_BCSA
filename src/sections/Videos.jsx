import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import VideoFacade from "../components/VideoFacade.jsx";
import { videos } from "../content.js";

/* VIDEOS — exactly four YouTube videos in a 2×2 grid, each a click-to-load
 * facade (no iframe loads until the user presses play). */
const Videos = forwardRef(function Videos(_props, ref) {
  return (
    <Section ref={ref} id="videos" label="Videos">
      <Reveal>
        <Eyebrow>In Motion</Eyebrow>
        <h2 className="mt-6 font-display text-display-md font-light leading-[1.05]">
          Videos
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {videos.map((v, i) => (
          <Reveal key={v.id} delay={(i % 3) * 0.08} amount={0.2}>
            <figure>
              <VideoFacade youtubeId={v.youtubeId} title={v.title} />
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-base tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-base font-light text-ink">
                  {v.title}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
});

export default Videos;
