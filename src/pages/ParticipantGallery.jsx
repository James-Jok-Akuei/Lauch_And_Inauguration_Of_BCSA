import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "../components/Eyebrow.jsx";
import Logo from "../components/Logo.jsx";
import Carousel from "../components/Carousel.jsx";
import { participants, site } from "../content.js";
import { getParticipantImages } from "../utils/participantImages.js";

/* PARTICIPANT GALLERY — its own route at /participants/:slug.
 * Shows a slideshow of a single university / association's images. Images are
 * auto-loaded from src/assets/participants/<slug>/ (just drop files there). */
export default function ParticipantGallery() {
  const { slug } = useParams();
  const reduce = useReducedMotion();

  const group =
    participants.universities.find((u) => u.slug === slug) ||
    participants.associations.find((a) => a.slug === slug);

  const images = getParticipantImages(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!group) {
    return (
      <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-display text-3xl">Group not found</p>
        <BackLink label="Back to participants" />
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-bg text-ink">
      <div className="mx-auto w-full max-w-content px-6 py-10 sm:px-10 lg:px-16">
        {/* Header / back control */}
        <div className="flex items-center justify-between">
          <BackLink label="Back" />
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg">{site.abbr}</span>
          </Link>
        </div>

        {/* Title */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>{group.abbr ? "University" : "Association"}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light leading-[1.02]">
            {group.name}
          </h1>
        </motion.div>

        {/* Gallery slideshow, or a graceful empty state */}
        <div className="mt-10">
          {images.length > 0 ? (
            <Carousel
              items={images.map((url, i) => ({ id: i, url }))}
              label={`${group.name} gallery`}
              autoPlay={4500}
              tone="default"
              renderItem={(img) => (
                <div className="flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-ink ring-1 ring-black/10">
                  <img
                    src={img.url}
                    alt={group.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
            />
          ) : (
            <EmptyState slug={group.slug} />
          )}
        </div>

        <div className="mt-14">
          <BackLink label="Return to participants" />
        </div>
      </div>
    </main>
  );
}

/* Shown when no images have been added to a group's folder yet. */
function EmptyState({ slug }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl border border-dashed border-hairline bg-surface/40 px-6 text-center">
      <p className="font-display text-2xl font-light text-ink">Gallery coming soon</p>
      <p className="mt-3 max-w-md font-sans text-sm font-light text-muted">
        Photos for this group will appear here once added.
      </p>
      <p className="mt-4 font-sans text-xs text-muted/80">
        (Add images to <span className="text-accent">src/assets/participants/{slug}/</span>)
      </p>
    </div>
  );
}

/* Reusable back link to the participants directory. */
function BackLink({ label }) {
  return (
    <Link
      to="/participants"
      className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest2 text-ink"
    >
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
      <span className="border-b border-accent pb-1 transition-colors group-hover:text-accent">
        {label}
      </span>
    </Link>
  );
}
