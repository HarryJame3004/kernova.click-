import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { AboutPage } from './pages/AboutPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from './components/ui/SEOHead';

const NotFoundPage: React.FC = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
    <SEOHead title="Page Not Found — KERNOVA" />
    <span className="font-mono text-xs font-semibold text-zinc-500">404 ERROR</span>
    <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
      Page Not Found
    </h1>
    <p className="mt-2 max-w-sm text-xs text-zinc-500">
      The requested URL does not exist on the Kernova site.
    </p>
    <div className="mt-5">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        <ArrowLeft className="h-3 w-3" />
        <span>Return to Overview</span>
      </Link>
    </div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-zinc-900 transition-colors duration-150 dark:bg-zinc-950 dark:text-zinc-100">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
