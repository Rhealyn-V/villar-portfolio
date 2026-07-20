import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Service from "./Components/Service";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import ResumeSection from "./Components/ResumeSection";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Resume from "./pages/Resume";

// Reset scroll position when navigating between routes (e.g. /resume)
function ScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Landing() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Service />
      <Projects />
      <Certificates />
      <ResumeSection />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollReset />
      <div className="min-h-screen bg-brand-light text-slate-800 transition-colors duration-300 dark:bg-brand-dark dark:text-slate-100">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
