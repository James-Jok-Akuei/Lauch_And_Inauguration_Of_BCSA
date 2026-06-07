import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import GuestDetail from "./pages/GuestDetail.jsx";
import ParticipantsPage from "./pages/ParticipantsPage.jsx";
import "./index.css";

/* HashRouter keeps deep links (e.g. /guests/g1) working on any static host
 * — GitHub Pages, Netlify, Vercel — with no server rewrite rules required. */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guests/:id" element={<GuestDetail />} />
        <Route path="/participants" element={<ParticipantsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
