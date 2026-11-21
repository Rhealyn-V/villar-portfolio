import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Hero from "./Components/Hero";
import About from "./Components/About";
import FeaturedWork from "./Components/FeaturedWork";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Leadership from "./Components/Leadership";
import Certifications from "./Components/Certifications";
import ResumeSection from "./Components/ResumeSection";
import Contact from "./Components/Contact";
import usePageMeta from "./hooks/usePageMeta";

const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Reset scroll on route changes (hash links handle their own scrolling).
function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Landing() {
  usePageMeta({ path: "/" });
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <Services />
      <Experience />
      <Skills />
      <Leadership />
      <Certifications />
      <ResumeSection />
      <Contact />
    </>
  );
}

const SiteLayout = ({ children }) => (
  <>
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <Navbar />
    <main id="main" tabIndex={-1} className="outline-none">
      <Suspense fallback={<div className="min-h-screen" />}>{children}</Suspense>
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

function App() {
  return (
    <Router>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<SiteLayout><Landing /></SiteLayout>} />
        <Route path="/projects/:slug" element={<SiteLayout><CaseStudy /></SiteLayout>} />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<div className="min-h-screen" />}>
              <Resume />
            </Suspense>
          }
        />
        <Route path="*" element={<SiteLayout><NotFound /></SiteLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
