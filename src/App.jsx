import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedPage from "./components/AnimatedPage";
import PageLoader from "./components/PageLoader";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ServiceDetail from "./components/ServiceDetail";

import {
  fadeUp,
  slideLeft,
  slideRight,
  scaleFade,
} from "./animations/pageAnimations";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // show loader on every route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Static Header */}
      <Header />

      {/* 🔥 Always scroll to top on route change */}
      <ScrollToTop />

      {/* Page Loader */}
      <AnimatePresence>
        {loading && <PageLoader />}
      </AnimatePresence>

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
  <div className="app-page">
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <AnimatedPage animation={scaleFade}>
            <Home />
          </AnimatedPage>
        }
      />

      <Route
        path="/about"
        element={
          <AnimatedPage animation={fadeUp}>
            <About />
          </AnimatedPage>
        }
      />

      <Route
        path="/services"
        element={
          <AnimatedPage animation={slideLeft}>
            <Services />
          </AnimatedPage>
        }
      />

      <Route
        path="/services/:slug"
        element={
          <AnimatedPage animation={slideRight}>
            <ServiceDetail />
          </AnimatedPage>
        }
      />

      <Route
        path="/contact"
        element={
          <AnimatedPage animation={fadeUp}>
            <Contact />
          </AnimatedPage>
        }
      />
    </Routes>
  </div>
</AnimatePresence>

    </>
  );
}
