import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Portrait from "../components/Portrait.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Logo from "../components/Logo.jsx";
import { guests, site } from "../content.js";

/* GUEST DETAIL — its own route at /guests/:id.
 * Larger portrait, fuller bio, and a dedicated space for notes about the
 * guest's speech. Includes a clear "Back" control to the deck. */
export default function GuestDetail() {
  const { id } = useParams();
  const reduce = useReducedMotion();
  const guest = guests.find((g) => g.id === id);

  // Always start at the top of the detail page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!guest) {
    return (
      <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-display text-3xl">Guest not found</p>
        <BackLink label="Back to the programme" />
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-bg text-ink">
      <div className="mx-auto w-full max-w-content px-6 py-10 sm:px-10 lg:px-16">
        {/* Header / back control */}
        <div className="flex items-center justify-between">
          <BackLink label="Back" />
          <Link
            to="/"
            onClick={() => sessionStorage.removeItem("bcsa:returnSection")}
            className="flex items-center gap-3"
          >
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg">{site.abbr}</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-16">
          {/* Portrait */}
          <motion.div
            className="md:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Portrait
              src={guest.photo}
              alt={`Portrait of ${guest.name}`}
              priority
              className="w-full"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="md:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Invited Guest</Eyebrow>
            <h1 className="mt-6 font-display text-display-lg font-light leading-[1.0]">
              {guest.name}
            </h1>
            <p className="mt-4 font-sans text-lg text-accent">{guest.title}</p>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-sans text-eyebrow uppercase text-muted">Biography</h2>
              <p className="mt-4 font-display text-2xl font-light leading-relaxed text-ink">
                {guest.bio}
              </p>
            </div>

            <div className="mt-10 max-w-2xl border-l-2 border-accent pl-6">
              <h2 className="font-sans text-eyebrow uppercase text-muted">
                On Their Address
              </h2>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-muted">
                {guest.speechNote}
              </p>
            </div>

            <div className="mt-14">
              <BackLink label="Return to the programme" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* Reusable back link to the main deck. */
function BackLink({ label }) {
  return (
    <Link
      to="/"
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
