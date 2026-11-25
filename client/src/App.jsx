import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Hero3D from "./components/Hero3D";
import AnimatedPage from "./components/AnimatedPage";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

import { fetchPortfolioData } from "./services/portfolioService";
import { fallbackPortfolioData } from "./constants/portfolioData";

function AppRoutes({ data }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnimatedPage key={location.pathname}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Home
                personal={data.personal}
                statistics={data.statistics}
                codingProfiles={data.codingProfiles}
                projects={data.projects}
                achievements={data.achievements}
                skills={data.skills}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                personal={data.personal}
                statistics={data.statistics}
                education={data.education}
                internships={data.internships}
                skills={data.skills}
                achievements={data.achievements}
                certifications={data.certifications}
                codingProfiles={data.codingProfiles}
              />
            }
          />
          <Route
            path="/skills"
            element={<Skills skills={data.skills} codingProfiles={data.codingProfiles} />}
          />
          <Route path="/projects" element={<Projects projects={data.projects} />} />
          <Route
            path="/resume"
            element={
              <Resume
                personal={data.personal}
                education={data.education}
                internships={data.internships}
                projects={data.projects}
                skills={data.skills}
                certifications={data.certifications}
                achievements={data.achievements}
                codingProfiles={data.codingProfiles}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact personal={data.personal} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatedPage>
    </AnimatePresence>
  );
}

function App() {
  const [data, setData] = useState(fallbackPortfolioData);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return saved ? saved === "dark" : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchPortfolioData();
      setData(result);
    };
    loadData();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.backgroundColor = "#080B14";
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#f8fafc";
    }
    try {
      localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [darkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <LoadingScreen />

        {data && (
          <div className="relative min-h-screen flex flex-col justify-between text-slate-900 dark:text-[#F8FAFC]">
            <CustomCursor />
            <ParticleBackground />
            <Hero3D />
            <div className="grid-backdrop fixed inset-0 pointer-events-none -z-10 w-full h-full" />
            <div className="aurora-bg fixed inset-0 pointer-events-none -z-20 w-full h-full" />

            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="relative z-10 flex-grow">
              <AppRoutes data={data} />
            </main>

            <Footer personal={data.personal} />
          </div>
        )}
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
