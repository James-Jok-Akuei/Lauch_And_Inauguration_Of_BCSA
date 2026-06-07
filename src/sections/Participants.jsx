import { forwardRef } from "react";
import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Reveal from "../components/Reveal.jsx";
import { participants } from "../content.js";

/* PARTICIPANTS — invited universities and community associations / cultural
 * groups presenting speeches and cultural dances. Display-only directory:
 * two responsive grids (universities, then associations) of image + name. */
const Participants = forwardRef(function Participants(_props, ref) {
  return (
    <Section ref={ref} id="participants" label="Universities and Associations">
      <Reveal>
        <Eyebrow>Speeches &amp; Cultural Dances</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-display-md font-light leading-[1.05]">
          Universities &amp; Associations
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-base font-light leading-relaxed text-muted">
          {participants.intro}
        </p>
      </Reveal>

      {/* Universities */}
      <Reveal className="mt-12">
        <Group title="Universities" count={participants.universities.length} />
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-6">
        {participants.universities.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.05} amount={0.15}>
            <Card photo={item.photo} name={item.name} tag={item.abbr} />
          </Reveal>
        ))}
      </div>

      {/* Associations & Cultural Groups */}
      <Reveal className="mt-12">
        <Group
          title="Associations &amp; Cultural Groups"
          count={participants.associations.length}
        />
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {participants.associations.map((item, i) => (
          <Reveal key={item.id} delay={(i % 4) * 0.05} amount={0.12}>
            <Card photo={item.photo} name={item.name} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
});

/* Sub-heading row with a hairline rule and a count. */
function Group({ title, count }) {
  return (
    <div className="flex items-baseline gap-4">
      <h3
        className="font-sans text-eyebrow uppercase text-accent"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
      <span className="font-sans text-sm tabular-nums text-muted">{count}</span>
    </div>
  );
}

/* A single participant card: framed image + name (and optional abbreviation). */
function Card({ photo, name, tag }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface shadow-[0_18px_40px_-24px_rgba(21,20,15,0.4)] ring-1 ring-black/10">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
        />
      </div>
      <figcaption className="mt-3">
        {tag && (
          <span className="font-sans text-[0.7rem] uppercase tracking-widest2 text-accent">
            {tag}
          </span>
        )}
        <p className="mt-0.5 font-display text-base font-normal leading-tight text-ink">
          {name}
        </p>
      </figcaption>
    </figure>
  );
}

export default Participants;
