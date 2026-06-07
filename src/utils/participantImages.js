/* Auto-loads gallery images for each participant from
 *   src/assets/participants/<slug>/
 * Drop image files into a group's folder and they appear in its slideshow
 * automatically (resolved by Vite at build time — no code edits needed).
 * Images are ordered by filename (use 01.jpg, 02.jpg, ... to control order).
 */
const modules = import.meta.glob(
  "../assets/participants/**/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" }
);

const bySlug = {};
for (const path in modules) {
  const m = path.match(/participants\/([^/]+)\//);
  if (!m) continue;
  (bySlug[m[1]] ||= []).push({ path, url: modules[path] });
}
for (const slug in bySlug) {
  bySlug[slug].sort((a, b) =>
    a.path.localeCompare(b.path, undefined, { numeric: true })
  );
}

/* Returns an array of image URLs for a participant slug (empty if none yet). */
export function getParticipantImages(slug) {
  return (bySlug[slug] || []).map((x) => x.url);
}
