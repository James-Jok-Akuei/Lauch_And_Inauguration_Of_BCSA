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
  name: "Bor County Students' Association in Rwanda",
  abbr: "BCSAR",
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
    "The Bor County Students' Association in Rwanda (BCSAR) exists to unite Bor students " +
    "through inclusive leadership, promote academic excellence, safeguard student " +
    "welfare, preserve cultural heritage, and foster peace and collaboration within " +
    "Rwanda and beyond.",
  vision:
    "To build a united, empowered, and purpose-driven Bor student community in " +
    "Rwanda that excels academically, preserves cultural identity, promotes peace, " +
    "and supports the holistic welfare of all its members.",
};

/* ---------------------------------------------------------------------------
 *  OBJECTIVES / STRATEGIC PRIORITIES — from the BCSA Leadership Manifesto.
 *  Each item: { id, title, commitments: [...], focus }.
 *  Shown one-per-slide in a carousel on the Objectives section.
 * ------------------------------------------------------------------------- */
export const objectives = [
  {
    id: 1,
    title: "Peacebuilding and Unity as a Foundation",
    commitments: [
      "Promote dialogue, tolerance, and mutual respect among Bor students.",
      "Actively engage in peacebuilding initiatives with neighboring student and community groups.",
      "Establish conflict-resolution mechanisms to address misunderstandings and disputes peacefully.",
      "Use cultural and social events as platforms for reconciliation and unity.",
    ],
    focus:
      "A neutral, inclusive platform that prioritizes peace over division and collective progress over individual differences.",
  },
  {
    id: 2,
    title: "Academic Excellence and Educational Support",
    commitments: [
      "Establish an academic support program, including peer mentorship, tutoring, and academic guidance.",
      "Create a platform for sharing academic opportunities, scholarships, internships, and resources.",
      "Support students facing tuition-related challenges or delays through financial assistance and referrals.",
      "Promote a culture of discipline, excellence, and accountability in academics.",
    ],
    focus: "No Bor student should struggle academically in isolation.",
  },
  {
    id: 3,
    title: "Comprehensive Student Welfare and Protection",
    commitments: [
      "Address welfare concerns, including tuition, rent, health, and emergency needs.",
      "Support students facing legal or criminal-related challenges through guidance and mediation where appropriate.",
      "Conduct regular welfare check-ins and student visits.",
      "Establish a welfare desk or committee to respond promptly to student needs.",
    ],
    focus: "A student who is safe, supported, and stable is empowered to succeed.",
  },
  {
    id: 4,
    title: "Inclusion, Representation, and Communication",
    commitments: [
      "Ensure comprehensive registration and inclusion of all Bor students across institutions.",
      "Strengthen internal communication channels for timely information sharing.",
      "Promote participatory leadership and member engagement in decision-making.",
      "Uphold transparency and accountability in leadership actions.",
    ],
    focus: "Leadership that listens builds trust and unity.",
  },
  {
    id: 5,
    title: "Cultural Preservation and Identity Promotion",
    commitments: [
      "Organize cultural events showcasing Bor traditions, values, and attire.",
      "Encourage the use of cultural costumes during official events.",
      "Use cultural activities to foster unity, pride, and intercultural understanding.",
      "Preserve cultural values while embracing diversity and mutual respect.",
    ],
    focus: "Our culture connects our past, present, and future.",
  },
  {
    id: 6,
    title: "Sports, Talent Development, and Well-being",
    commitments: [
      "Support student participation in sports and recreational activities.",
      "Use sports as a platform for unity, health, and positive representation.",
      "Identify and nurture talents within the Bor student community.",
      "Collaborate with other student associations through sports engagements.",
    ],
    focus: "Strong bodies and creative minds build strong communities.",
  },
];

/* ---------------------------------------------------------------------------
 *  LEADERSHIP BOARD — the new executive (carousel of photo / name / position).
 *  Add as many as needed.
 * ------------------------------------------------------------------------- */
// Leaders with real photos use files in /public/photos/leadership.
// Members awaiting a photo use the neutral `portrait()` placeholder for now —
// drop their image in that folder and swap the `photo` value to replace it.
export const leadership = [
  { id: "l1", name: "Akech Majur Ngor", position: "Chairman", photo: "/photos/leadership/akech-president.jpg" },
  { id: "l2", name: "Mabiei Deng Ayuen", position: "Deputy Chairman", photo: "/photos/leadership/mabiei-deputychairman.jpeg" },
  { id: "l3", name: "Jok Dut Akuei", position: "Speaker", photo: "/photos/leadership/jok-speaker.jpg" },
  { id: "l4", name: "Nyantet Kuol Reech", position: "General Secretary", photo: "/photos/leadership/teta-general-secretary.png" },
  { id: "l5", name: "Reng Jok Manyok", position: "Deputy Secretary", photo: "/photos/leadership/reng-deputysecretary.jpeg" },
  { id: "l6", name: "Athiak Chaw Mayol", position: "Finance Secretary", photo: "/photos/leadership/athiak-finance.jpg" },
  { id: "l7", name: "Achol Akuei Deng", position: "Deputy Finance", photo: "/photos/leadership/Achol-akuei-assistantfinance.jpeg" },
  { id: "l8", name: "Mayom Wai Reng", position: "Internal Affairs", photo: "/photos/leadership/mayom-internalaffairs.jpeg" },
  { id: "l13", name: "Atong Achiek Kur", position: "Information Lead", photo: "/photos/leadership/atong-information.jpg" },
  { id: "l9", name: "Agau Kuol Guel", position: "Academic Lead", photo: "/photos/leadership/agau-academic-lead.png" },
  { id: "l10", name: "Achol Panchol Kou", position: "Cultural Lead", photo: "/photos/leadership/achol-cultural-lead.png" },
  { id: "l11", name: "Jok Maker Kur", position: "Vice Cultural Lead", photo: "/photos/leadership/jok-maker-kur-Culture.png" },
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
    name: "Mr. Mayol Mach Garang",
    title: "Special Guest",
    photo: "/photos/guests/mayol-guest-of-honor.jpg",
    bio:
      "Mayol Mach Garang is a distinguished Information and Communication " +
      "Technology (ICT) professional, currently serving as Senior Officer, ICT at " +
      "the East African Communications Organisation (EACO) — a regional body " +
      "dedicated to advancing communications and digital transformation across " +
      "East Africa. Based in Kigali, Rwanda, he represents South Sudan within the " +
      "organisation and contributes to regional efforts to strengthen connectivity " +
      "and technological development. A proud son of Bor County and a respected " +
      "member of our community, he joins us today as a Special Guest of this new " +
      "association.",
    speechNote:
      "As a Special Guest and an elder of the community, Mr. Garang will offer " +
      "guidance and encouragement to ensure the association remains committed to its " +
      "mission of serving and developing our community in a meaningful, dedicated way.",
  },
  {
    id: "g2",
    name: "Eng. Jacob Manyuon Deng",
    title: "Guest of Honor",
    photo: "/photos/guests/jacob-invited-guest.png",
    // Paragraphs are separated by "\n\n" and rendered as separate <p> blocks.
    bio:
      "J. Manyuon Deng is a distinguished energy specialist with more than two " +
      "decades of experience in the power and energy sector across Africa and " +
      "beyond. He currently serves as the Regional Power Program Officer at the " +
      "Nile Basin Initiative (NBI) under the Nile Equatorial Lakes Subsidiary " +
      "Action Program (NELSAP), based in Kigali, Rwanda." +
      "\n\n" +
      "Throughout his career, Mr. Deng has worked with leading institutions, " +
      "including GIBB International, the World Bank, and the South Sudan Electricity " +
      "Corporation, contributing significantly to the development and management of " +
      "power generation, transmission, and distribution systems. His extensive " +
      "professional experience spans energy planning, infrastructure development, " +
      "regional power integration, and utility management." +
      "\n\n" +
      "Mr. Deng holds a Master of Science (MSc) in Energy Management from the " +
      "University of Nairobi, earned in 2014, and a Bachelor's Degree in Electrical " +
      "and Electronic Engineering from the same institution. He is currently " +
      "pursuing a Doctor of Philosophy (PhD) in Energy Studies at the African " +
      "Centre of Excellence in Energy for Sustainable Development (ACE–ESD), " +
      "University of Rwanda. In addition, he obtained an Advanced Certificate in " +
      "Electricity Distribution Management (EDM) from Sweden." +
      "\n\n" +
      "Over the years, he has undertaken specialized training in power generation, " +
      "transmission, and distribution across various regions of the world, " +
      "enhancing his expertise in modern energy systems and utility operations. He " +
      "has authored numerous articles published in both national and regional media " +
      "outlets and has actively participated in international conferences and " +
      "seminars, where he has consistently presented and advocated for South " +
      "Sudan's energy development perspectives." +
      "\n\n" +
      "Beyond his professional engagements, Mr. Deng is passionate about advancing " +
      "sustainable energy systems and expanding access to reliable electricity in " +
      "South Sudan and the wider region. He has also contributed to academia as a " +
      "part-time lecturer in the Faculty of Engineering at the University of Juba, " +
      "mentoring and inspiring the next generation of engineering professionals." +
      "\n\n" +
      "His commitment to regional cooperation, energy sector development, and " +
      "knowledge sharing continues to make him a respected voice in the energy " +
      "industry.",
    speechNote:
      "Eng. Manyuon Deng joins the launch as our Guest of Honor.",
  },
  {
    id: "g3",
    name: "Peter Lual Reech Deng",
    title: "Chief Guest",
    photo: "/photos/guests/peter-invited-guest.jpg",
    bio:
      "Peter Lual Reech Deng is the Founder and Managing Director of " +
      "**Africa World Books**, a publishing company dedicated to promoting African " +
      "literature, culture, and heritage. Driven by a deep love for Africa, he " +
      "established the company to support African authors in publishing and " +
      "distributing their works across Australia and the global diaspora. Through " +
      "**Africa World Books**, he helps preserve African values, traditions, and " +
      "history while educating both African communities and the wider Australian " +
      "public about the richness of Africa's cultures and stories. His work " +
      "continues to empower African writers and strengthen cultural connections " +
      "across generations.",
    speechNote:
      "Peter Lual Reech Deng joins the launch as our Chief Guest.",
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
    { id: "cg14", title: "Dressed for the Dance", photo: "/photos/culture/ig-6.jpg" },
    { id: "cg15", title: "Sounding the Horn", photo: "/photos/culture/ig-7.jpg" },
    { id: "cg16", title: "Colours of Celebration", photo: "/photos/culture/ig-8.jpg" },
    { id: "cg17", title: "A Child of the Cattle Camp", photo: "/photos/culture/kid-removing-cowdug.png" },
    { id: "cg18", title: "Village Life", photo: "/photos/culture/village-life.jpeg" },
    { id: "cg19", title: "Homeward at Golden Hour", photo: "/photos/culture/ig-9.jpeg" },
    { id: "cg21", title: "Drying the Harvest", photo: "/photos/culture/drying-shea-nuts.jpeg" },
    { id: "cg22", title: "Driving the Herd Home", photo: "/photos/culture/ig-10.jpeg" },
    { id: "cg23", title: "Building the Tukul", photo: "/photos/culture/ig-11.jpeg" },
    { id: "cg24", title: "Carrying the Day's Load", photo: "/photos/culture/ig-12.jpeg" },
    { id: "cg25", title: "Daughter of the Cattle Camp", photo: "/photos/culture/ig-13.jpg" },
    { id: "cg26", title: "Tending the Herd", photo: "/photos/culture/ig-14.jpg" },
    { id: "cg27", title: "The Prized Ox", photo: "/photos/culture/ig-15.jpg" },
    { id: "cg28", title: "Among the Herd", photo: "/photos/culture/ig-16.jpg" },
    { id: "cg29", title: "Adorned in Beadwork", photo: "/photos/culture/beaded-corset.jpeg" },
    { id: "cg30", title: "The Art of Beadwork", photo: "/photos/culture/dinka-people.jpeg" },
    { id: "cg31", title: "Lord of the Herd", photo: "/photos/culture/ankole-cattle.jpeg" },
    { id: "cg32", title: "Resting in the Camp", photo: "/photos/culture/cows.jpeg" },
    { id: "cg33", title: "The Herder and His Ox", photo: "/photos/culture/ig-18.jpeg" },
    { id: "cg34", title: "Our Living Wealth", photo: "/photos/culture/livestock.jpeg" },
    { id: "cg35", title: "A Bond of Devotion", photo: "/photos/culture/love-demonstration.jpeg" },
    { id: "cg36", title: "The Sacred Ox", photo: "/photos/culture/mundari.jpeg" },
    { id: "cg37", title: "Crowned with Horns", photo: "/photos/culture/wat-11.jpeg" },
    { id: "cg38", title: "Gentle Giants", photo: "/photos/culture/wat-14.jpeg" },
    { id: "cg39", title: "Against the Sky", photo: "/photos/culture/wat-23.jpeg" },
    { id: "cg40", title: "The Spotted Ox", photo: "/photos/culture/ig-19.jpeg" },
    { id: "cg41", title: "Mirroring the Horns", photo: "/photos/culture/ig-20.jpeg" },
    { id: "cg42", title: "Crescent Horns", photo: "/photos/culture/ig-21.jpeg" },
    { id: "cg43", title: "Nyiir Bor — Daughters of Bor", photo: "/photos/culture/nyiir-bor.jpeg" },
    { id: "cg44", title: "Born to the Cattle", photo: "/photos/culture/wel-akau-family.jpeg" },
    { id: "cg45", title: "Dawn in the Cattle Camp", photo: "/photos/culture/shot-1.png" },
    { id: "cg46", title: "Spirit of Celebration", photo: "/photos/culture/ig-22.jpg" },
    { id: "cg47", title: "Dressed in Tradition", photo: "/photos/culture/ig-23.jpeg" },
    { id: "cg48", title: "Young Cattle Keeper", photo: "/photos/culture/ig-24.jpeg" },
    { id: "cg49", title: "A Cultural Festival", photo: "/photos/culture/wenmayam.jpg" },
    { id: "cg50", title: "Draped in Tradition", photo: "/photos/culture/ig-25.jpeg" },
  ],
};

/* ---------------------------------------------------------------------------
 *  VIDEOS — YouTube videos shown as click-to-load facades in a 2-column grid.
 *  Replace `youtubeId` with the 11-character id from each video's URL.
 *  Add or remove items freely (they flow into the grid).
 * ------------------------------------------------------------------------- */
export const videos = [
  { id: "v1", title: "Madiing Bor — Bob Dizzy SK", youtubeId: "j76b_qsAEts" },
  { id: "v2", title: "Dergel Hit Song, Bor County — Jok Aguek Ngong", youtubeId: "5g63LvzycnI" },
  { id: "v3", title: "Nyiir Bor in Nairobi (Part 1)", youtubeId: "yo-bhotk5Nc" },
  { id: "v4", title: "2026 Bor Community Annual Conference, Lincoln NE (Part 1)", youtubeId: "w36bMnDGhpg" },
  { id: "v5", title: "Bor County — Jok Aguek Ngong", youtubeId: "a6S_TM3CVOs" },
  { id: "v6", title: "Bor County Students in Rwanda", youtubeId: "t4l_oIkuyyw" },
  { id: "v7", title: "Bob Dizzy SK — Riak Ku Dheng", youtubeId: "5Auho8YzmeU" },
  { id: "v8", title: "Classic Ayaya Songs of Pathuyith (Ahechbor)", youtubeId: "Lej-GqAAsvA" },
];

/* ---------------------------------------------------------------------------
 *  PARTICIPANTS — invited universities (leadership representatives) and the
 *  associations / community cultural groups presenting speeches and dances.
 *
 *  GALLERY IMAGES (per group): clicking a card opens that group's slideshow.
 *  Just DROP image files into the group's folder — they're picked up
 *  automatically (no code editing needed):
 *
 *      src/assets/participants/<slug>/
 *
 *  e.g. src/assets/participants/twic-east/  ->  the Twic East gallery.
 *  Each group's `slug` below is its folder name. Any .jpg/.jpeg/.png/.webp
 *  dropped in that folder appears in its slideshow, in filename order.
 *
 *  The `photo` field is the small card thumbnail (placeholder for now).
 * ------------------------------------------------------------------------- */
// Placeholder card-thumbnail helpers (replace `photo` values with real files later).
const uniImg = (label) =>
  `https://placehold.co/600x450/f4f3ec/243b53?text=${encodeURIComponent(label)}`;
const groupImg = (label) =>
  `https://placehold.co/600x450/15140f/c69749?text=${encodeURIComponent(label)}`;

export const participants = {
  intro:
    "Universities and community associations joining the celebration to share " +
    "speeches and cultural performances.",
  universities: [
    { id: "u1", slug: "mku", name: "Mount Kenya University", abbr: "MKU", photo: uniImg("MKU") },
    { id: "u2", slug: "uok", name: "University of Kigali", abbr: "UOK", photo: uniImg("UOK") },
    { id: "u3", slug: "alu", name: "African Leadership University", abbr: "ALU", photo: uniImg("ALU") },
    { id: "u4", slug: "ur", name: "University of Rwanda", abbr: "UR", photo: uniImg("UR") },
    { id: "u5", slug: "ulk", name: "Kigali Independent University", abbr: "ULK", photo: uniImg("ULK") },
    { id: "u6", slug: "ines", name: "INES-Ruhengeri", abbr: "INES", photo: uniImg("INES") },
  ],
  associations: [
    { id: "a1", slug: "south-sudanese", name: "South Sudanese Students' Association", photo: groupImg("South Sudanese SA") },
    { id: "a2", slug: "twic-mayardit", name: "Twic Mayardit Students' Association", photo: groupImg("Twic Mayardit SA") },
    { id: "a3", slug: "twic-east", name: "Twic East Students' Association", photo: groupImg("Twic East SA") },
    { id: "a4", slug: "madi", name: "Madi Students' Association", photo: groupImg("Madi SA") },
    { id: "a5", slug: "eastern-equatoria", name: "Eastern Equatoria Representatives", photo: groupImg("Eastern Equatoria") },
    { id: "a6", slug: "wau", name: "Wau Cultural Group", photo: groupImg("Wau") },
    { id: "a7", slug: "fashoda", name: "Fashoda Cultural Group", photo: groupImg("Fashoda") },
    { id: "a8", slug: "bari", name: "Bari Cultural Group", photo: groupImg("Bari") },
    { id: "a10", slug: "azande", name: "Azande Cultural Group", photo: groupImg("Azande") },
    { id: "a11", slug: "nuer", name: "Nuer Cultural Group", photo: groupImg("Nuer") },
    { id: "a13", slug: "pojulu", name: "Pojulu Cultural Group", photo: groupImg("Pojulu") },
    { id: "a14", slug: "aweil", name: "Aweil Cultural Group", photo: groupImg("Aweil") },
  ],

  // Additional communities & cultural groups shown as text-only cards (no
  // gallery). Each has a short line of writing — edit the `note` text freely.
  delegations: [
    { id: "d1", name: "Duk County Students", note: "Neighbours and kin from Duk, standing with Bor in unity and shared heritage." },
    { id: "d2", name: "Lakes State", note: "Representing the proud cattle-keeping communities of Lakes State." },
    { id: "d3", name: "Mundari", note: "The Mundari — celebrated cattle keepers of the central Nile." },
    { id: "d4", name: "Acholi", note: "The Acholi, bringing their storied songs, dance, and heritage." },
    { id: "d5", name: "Ngok Lual Yak", note: "The Ngok Lual Yak community, joining in solidarity and friendship." },
    { id: "d6", name: "Luo", note: "The Luo, sharing a rich tradition of music and community." },
    { id: "d7", name: "Maluth", note: "Representing the people of Maluth on the Upper Nile." },
    { id: "d8", name: "Abyei", note: "From Abyei — a proud people of enduring spirit." },
    { id: "d9", name: "Ruweng", note: "The Ruweng community, joining the celebration in kinship." },
    { id: "d10", name: "Moru", note: "The Moru of Equatoria, known for craft, song, and dance." },
    { id: "d11", name: "RAM Cultural Group", note: "The RAM cultural group, sharing their songs, dance, and heritage." },
    { id: "d12", name: "Renk Students' Association", note: "Students of Renk, joining Bor in unity and celebration." },
  ],
};

/* ---------------------------------------------------------------------------
 *  CLOSING — thank-you / closing slide copy and minimal credits.
 * ------------------------------------------------------------------------- */
export const closing = {
  message:
    "To our honoured guests, leaders, and members — thank you for standing with " +
    "us as we begin this journey together. Your presence marks the start of a " +
    "united, empowered, and purpose-driven Bor student community in Rwanda.",
  credits: "Launch & Inauguration · 13 June 2026 · M Hotel",
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
