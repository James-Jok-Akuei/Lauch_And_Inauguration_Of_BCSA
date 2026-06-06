# BCSA — Launch & Inauguration Website

A static, presentation-style website for the launch and inauguration of the
**Bor County Students' Association (BCSA)**. It reads like a cinematic slide
deck: full-screen sections that snap into view and animate as you scroll, with
keyboard / on-screen navigation for live projection at the event.

100% static — no backend, no database, no API calls. Builds to plain HTML/CSS/JS
and can be hosted on GitHub Pages, Netlify, or Vercel.

## Stack
- **Vite + React** (JSX)
- **Tailwind CSS** for styling (design tokens in `tailwind.config.js` + `src/index.css`)
- **Framer Motion** for entrance + carousel motion (honors `prefers-reduced-motion`)
- **react-router-dom** for the per-guest detail pages

## Commands
```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # static production bundle -> /dist
npm run preview  # preview the built bundle
```

## ✏️ Editing content (the important part)
**All content lives in one file: [`src/content.js`](src/content.js).**
Nothing is hard-coded in the components. To replace the placeholder copy,
images, and videos, edit only that file.

- Every placeholder string contains the word `PLACEHOLDER` — search the project
  for it to find everything that still needs real content.
- **Images:** replace the `photo` URLs. Use a remote URL, or drop a file in
  `/public` and reference it as `/photos/name.jpg`. Portraits look best at 3:4.
- **Videos:** set each `youtubeId` to the 11-character id from a YouTube link
  (`youtube.com/watch?v=XXXXXXXXXXX` → `youtubeId: "XXXXXXXXXXX"`). There are
  exactly four, loaded only when clicked (privacy-friendly facade).
- You can add/remove list items (leaders, guests, etc.) freely.

## 🎨 Changing the look
The whole palette is driven by CSS variables at the top of
[`src/index.css`](src/index.css). To swap the single accent color, change
`--bcsa-accent` (and `--bcsa-accent-soft`) in **one place** — e.g. to the
institutional deep slate-blue `#243B53` / `#35577A`.

## Sections (in order)
1. **Cover / Hero** — title slide with the BCSA mark + tagline
2. **Mission & Vision**
3. **Objectives** — numbered editorial list
4. **Leadership Board** — carousel (arrows · dots · swipe · keyboard · autoplay)
5. **Invited Guests** — carousel; each card links to `/guests/:id` detail page
6. **Our Culture** — a showcase gallery of Bor heritage (cattle, men, women, kinship)
7. **Videos** — four click-to-load YouTube embeds
8. **Closing** — thank-you slide

## Navigation
- Full-height scroll-snap sections (reads like slides)
- Side dot-navigation + slim top progress bar
- **Keyboard:** ↑/↓, ←/→, PageUp/PageDown, Space to advance; Home/End to jump
- Carousels: arrows, dots, drag/swipe, and ←/→ when focused
