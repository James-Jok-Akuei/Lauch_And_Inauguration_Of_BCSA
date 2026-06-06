import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build — outputs plain HTML/CSS/JS to /dist for GitHub Pages / Netlify / Vercel.
// `base: "./"` keeps asset paths relative so the bundle works from any subpath.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
