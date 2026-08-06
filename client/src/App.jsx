import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Hero3D from "./components/Hero3D";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { fetchPortfolioData } from "./services/portfolioService";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchPortfolioData();
      setData(result);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.backgroundColor = "#030712";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f8fafc";
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && data && (
        <div className="relative min-h-screen flex flex-col justify-between text-slate-900 dark:text-slate-100">
          <CustomCursor />
          <ParticleBackground />
          <Hero3D />
          <div className="grid-backdrop fixed inset-0 pointer-events-none -z-15 w-full h-full" />
          <div className="aurora-bg fixed inset-0 pointer-events-none -z-20 w-full h-full" />

          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="relative z-10 flex-grow">
            <Routes>
              <Route path="/" element={<Home personal={data.personal} statistics={data.statistics} codingProfiles={data.codingProfiles} />} />
              <Route path="/about" element={<About personal={data.personal} statistics={data.statistics} education={data.education} internships={data.internships} />} />
              <Route path="/projects" element={<Projects projects={data.projects} />} />
              <Route path="/resume" element={<Resume personal={data.personal} education={data.education} internships={data.internships} projects={data.projects} skills={data.skills} certifications={data.certifications} achievements={data.achievements} codingProfiles={data.codingProfiles} />} />
              <Route path="/contact" element={<Contact personal={data.personal} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer personal={data.personal} />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
