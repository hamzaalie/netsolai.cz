import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import RealEstatePage from "./pages/RealEstatePage";
import FreeConsultationPage from "./pages/FreeConsultationPage";
import BlogJakNeprijitPage from "./pages/BlogJakNeprijitPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import "../styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/cookies-policy" element={<CookiesPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/free-consultation" element={<FreeConsultationPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/jak-neprijit-o-zakazniky" element={<BlogJakNeprijitPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);
