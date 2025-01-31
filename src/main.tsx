import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./stylesheets/main.stylesheet.css";
import "./stylesheets/responsive.stylesheet.css";
import "./stylesheets/page.components.stylesheet.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
