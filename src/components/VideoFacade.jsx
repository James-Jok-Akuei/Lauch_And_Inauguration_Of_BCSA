import { useState } from "react";

/* VideoFacade — click-to-load YouTube embed.
 * Shows only a lightweight thumbnail until clicked; the iframe is created on
 * demand and uses the privacy-friendly youtube-nocookie.com domain. This keeps
 * first load fast (no YouTube scripts/iframes until the user opts in) and the
 * grid visually clean.
 */
export default function VideoFacade({ youtubeId, title }) {
  const [active, setActive] = useState(false);

  // hqdefault always exists for valid ids; cheap and reliable for a facade.
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="group relative aspect-video w-full overflow-hidden bg-ink">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={thumb}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-85 transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:opacity-100"
          />
          {/* Dark scrim for legibility + the play affordance. */}
          <span aria-hidden="true" className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/15" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bg/70 bg-ink/40 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:scale-110 group-hover:border-accent"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M2 2.5v17l15-8.5L2 2.5z" fill="var(--bcsa-bg)" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
