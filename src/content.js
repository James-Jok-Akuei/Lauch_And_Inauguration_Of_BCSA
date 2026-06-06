/* ============================================================================
 *  BCSA — CENTRAL CONTENT FILE
 * ----------------------------------------------------------------------------
 *  This is the ONE place to edit everything shown on the website. No copy,
 *  names, titles, bios, image URLs, or video IDs live anywhere else.
 *
 *  HOW TO REPLACE PLACEHOLDER CONTENT LATER
 *  ----------------------------------------
 *  • Every placeholder string is marked with the word "PLACEHOLDER" so you can
 *    find them all instantly (search the project for: PLACEHOLDER).
 *  • Replace the text in quotes. Keep the keys (e.g. `name`, `title`) intact.
 *  • Images: swap the placehold.co URLs for real photo URLs or local files.
 *      - Remote URL:   photo: "https://example.com/photo.jpg"
 *      - Local file:   put it in /public and use  photo: "/photos/name.jpg"
 *    Portrait images look best at a 3:4 ratio (e.g. 600 × 800).
 *  • Videos: replace `youtubeId` with the 11-character id from a YouTube URL.
 *      youtube.com/watch?v=XXXXXXXXXXX  ->  youtubeId: "XXXXXXXXXXX"
 *
 *  You can add or remove array items freely (more guests, more leaders, etc.).
 *  Guidance on recommended counts is noted above each list.
 * ========================================================================== */

/* Placeholder portrait helper — neutral ivory/charcoal cards so the layout
 * reads cleanly before real photos arrive. Replace `photo` values directly. */
const portrait = (label) =>
  `https://placehold.co/600x800/f4f3ec/6b675e?text=${encodeURIComponent(label)}`;

/* ---------------------------------------------------------------------------
 *  SITE — global identity used on the Cover, header mark, and Closing slide.
 * ------------------------------------------------------------------------- */
export const site = {
  name: "Bor County Students' Association",
  abbr: "BCSA",
  // Tagline taken from the official emblem. Edit if you'd prefer different copy.
  tagline: "Rooted in Identity, Rising in Excellence",
  // Event line shown on the cover (date · venue).
  eventLine: "13 June 2026 · M Hotel",
  // Official BCSA emblem (in /public/photos/logo). Replace the file to update.
  logo: "/photos/logo/logo.jpeg",
};

/* ---------------------------------------------------------------------------
 *  MISSION & VISION — two elegant statements.
 * ------------------------------------------------------------------------- */
export const missionVision = {
  mission:
    "PLACEHOLDER mission statement — a clear, single-paragraph expression of " +
    "why BCSA exists and what it commits to doing for its members.",
  vision:
    "PLACEHOLDER vision statement — a forward-looking description of the future " +
    "BCSA is working to create for Bor County students.",
};

/* ---------------------------------------------------------------------------
 *  OBJECTIVES — what the new leadership aims to implement this term.
 *  Recommended: 4–6 items.
 * ------------------------------------------------------------------------- */
export const objectives = [
  {
    id: 1,
    title: "PLACEHOLDER objective one",
    detail:
      "PLACEHOLDER detail — a sentence or two describing this objective and the " +
      "outcome it is meant to deliver.",
  },
  {
    id: 2,
    title: "PLACEHOLDER objective two",
    detail:
      "PLACEHOLDER detail — a sentence or two describing this objective and the " +
      "outcome it is meant to deliver.",
  },
  {
    id: 3,
    title: "PLACEHOLDER objective three",
    detail:
      "PLACEHOLDER detail — a sentence or two describing this objective and the " +
      "outcome it is meant to deliver.",
  },
  {
    id: 4,
    title: "PLACEHOLDER objective four",
    detail:
      "PLACEHOLDER detail — a sentence or two describing this objective and the " +
      "outcome it is meant to deliver.",
  },
  {
    id: 5,
    title: "PLACEHOLDER objective five",
    detail:
      "PLACEHOLDER detail — a sentence or two describing this objective and the " +
      "outcome it is meant to deliver.",
  },
];

/* ---------------------------------------------------------------------------
 *  LEADERSHIP BOARD — the new executive (carousel of photo / name / position).
 *  Add as many as needed.
 * ------------------------------------------------------------------------- */
// Names below are first names taken from the photo filenames — replace with the
// full names. Positions were inferred from the filenames; adjust as needed.
export const leadership = [
  { id: "l1", name: "Akech", position: "President", photo: "/photos/leadership/akech-president.jpg" },
  { id: "l2", name: "Teta", position: "General Secretary", photo: "/photos/leadership/teta-general-secretary.png" },
  { id: "l3", name: "Jok", position: "Speaker", photo: "/photos/leadership/jok-speaker.jpg" },
  { id: "l4", name: "Athiak", position: "Finance Secretary", photo: "/photos/leadership/athiak-finance.jpg" },
  { id: "l5", name: "Agau", position: "Academic Lead", photo: "/photos/leadership/agau-academic-lead.png" },
  { id: "l6", name: "Achol", position: "Cultural Lead", photo: "/photos/leadership/achol-cultural-lead.png" },
  { id: "l7", name: "Shushu", position: "PLACEHOLDER — position", photo: "/photos/leadership/shushu.png" },
];

/* ---------------------------------------------------------------------------
 *  INVITED GUESTS — each has its OWN detail page at /guests/:id.
 *  `bio` and `speechNote` only appear on the detail page.
 * ------------------------------------------------------------------------- */
// Names are first names from the photo filenames — replace with full names.
// `bio` and `speechNote` (shown only on each guest's detail page) are still
// PLACEHOLDER — fill them in when ready.
export const guests = [
  {
    id: "g1",
    name: "Mayol",
    title: "Guest of Honour",
    photo: "/photos/guests/mayol-guest-of-honor.jpg",
    bio:
      "PLACEHOLDER longer biography for the detail page — several sentences about " +
      "this guest's background, role, and connection to Bor County and to BCSA.",
    speechNote:
      "PLACEHOLDER note about their address at the launch — theme, dedication, or " +
      "a short summary of the remarks they are expected to give.",
  },
  {
    id: "g2",
    name: "Jacob",
    title: "Invited Guest",
    photo: "/photos/guests/jacob-invited-guest.png",
    bio:
      "PLACEHOLDER longer biography for the detail page — several sentences about " +
      "this guest's background, role, and connection to Bor County and to BCSA.",
    speechNote:
      "PLACEHOLDER note about their address at the launch — theme, dedication, or " +
      "a short summary of the remarks they are expected to give.",
  },
  {
    id: "g3",
    name: "Peter",
    title: "Invited Guest",
    photo: "/photos/guests/peter-invited-guest.jpg",
    bio:
      "PLACEHOLDER longer biography for the detail page — several sentences about " +
      "this guest's background, role, and connection to Bor County and to BCSA.",
    speechNote:
      "PLACEHOLDER note about their address at the launch — theme, dedication, or " +
      "a short summary of the remarks they are expected to give.",
  },
];

/* Landscape placeholder helper for cultural scenes (replace `photo` directly). */
const scene = (label) =>
  `https://placehold.co/1200x900/15140f/c69749?text=${encodeURIComponent(label)}`;

/* ---------------------------------------------------------------------------
 *  OUR CULTURE — a showcase of Bor community heritage.
 *  A display-only gallery (no detail pages). The FIRST item is the large
 *  "feature" tile (the centrepiece — cattle, our pride); the rest fill a grid.
 *
 *  EDITING:
 *   • `photo`   — your cultural images. Landscape shots work best here.
 *                 Drop files in /public/photos/culture and use, e.g.,
 *                 "/photos/culture/cattle-camp.jpg".
 *   • `title`   — the short heading shown on the tile.
 *   • `caption` — one elegant sentence describing this part of our culture.
 *   The captions below are real starter text — edit them freely to match your
 *   own words. Add or remove items as you like (keep one feature at the top).
 * ------------------------------------------------------------------------- */
export const culture = {
  // Section intro shown beneath the heading.
  intro:
    "The pride of Bor lives in our cattle, our songs, and the deep respect we " +
    "hold for one another. A glimpse of the heritage we carry forward.",

  // The large centrepiece image + its caption (cattle, our pride).
  feature: {
    id: "feature",
    title: "Cattle — Our Pride",
    caption:
      "More than wealth, cattle are the heartbeat of Bor life — a measure of " +
      "pride, the bond of marriage, and the inspiration for our oldest songs.",
    photo: "/photos/culture/culture-b.jpeg",
  },

  // The gallery grid. Each tile shows a short cultural title over the image.
  // Reorder, retitle, add, or remove freely.
  gallery: [
    { id: "cg1", title: "Raised Among the Herd", photo: "/photos/culture/cattle-keepers.jpeg" },
    { id: "cg2", title: "The Cattle Camp at Dusk", photo: "/photos/culture/my-culture.jpeg" },
    { id: "cg3", title: "Our Long-Horned Cattle", photo: "/photos/culture/culture-a.jpeg" },
    { id: "cg4", title: "The Dignity of Our Women", photo: "/photos/culture/dinka-woman.jpeg" },
    { id: "cg5", title: "Strength & Honour", photo: "/photos/culture/ig-5.jpg" },
    { id: "cg6", title: "Hands That Sustain Us", photo: "/photos/culture/ig-4.jpg" },
    { id: "cg7", title: "Sons of the Cattle Camp", photo: "/photos/culture/afro.jpeg" },
    { id: "cg8", title: "Pride of the Family", photo: "/photos/culture/ig-1.jpg" },
    { id: "cg9", title: "Carrying Our Colours", photo: "/photos/culture/ig-3.jpg" },
    { id: "cg10", title: "Heritage Worn with Pride", photo: "/photos/culture/ig-2.jpg" },
    { id: "cg13", title: "Adorned for the Dance", photo: "/photos/culture/beads-dress.png" },
    { id: "cg11", title: "Life in the Cattle Camp", photo: "/photos/culture/cattle-sacred.jpeg" },
    { id: "cg12", title: "Home & Homestead", photo: "/photos/culture/homestead.jpeg" },
  ],
};

/* ---------------------------------------------------------------------------
 *  VIDEOS — EXACTLY FOUR YouTube videos (click-to-load facade in-page).
 *  Replace `youtubeId` with the 11-character id from each video's URL.
 * ------------------------------------------------------------------------- */
export const videos = [
  { id: "v1", title: "Madiing Bor — Bob Dizzy SK", youtubeId: "j76b_qsAEts" },
  { id: "v2", title: "Dergel Hit Song, Bor County — Jok Aguek Ngong", youtubeId: "5g63LvzycnI" },
  { id: "v3", title: "Nyiir Bor in Nairobi (Part 1)", youtubeId: "yo-bhotk5Nc" },
  { id: "v4", title: "2026 Bor Community Annual Conference, Lincoln NE (Part 1)", youtubeId: "w36bMnDGhpg" },
];

/* ---------------------------------------------------------------------------
 *  CLOSING — thank-you / closing slide copy and minimal credits.
 * ------------------------------------------------------------------------- */
export const closing = {
  message: "PLACEHOLDER closing message — a short word of thanks to all in attendance.",
  credits: "PLACEHOLDER — organised by the BCSA Launch Committee",
};

/* ---------------------------------------------------------------------------
 *  SECTION LABELS — the names shown in the side dot-navigation tooltips.
 *  Order here defines the order of sections on the page.
 * ------------------------------------------------------------------------- */
export const sections = [
  { id: "cover", label: "Cover" },
  { id: "mission", label: "Mission & Vision" },
  { id: "objectives", label: "Objectives" },
  { id: "leadership", label: "Leadership" },
  { id: "guests", label: "Invited Guests" },
  { id: "culture", label: "Our Culture" },
  { id: "videos", label: "Videos" },
  { id: "closing", label: "Closing" },
];
