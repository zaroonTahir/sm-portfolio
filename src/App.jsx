import React, { useState, useEffect } from "react";
import ScrollUpButton from "./components/ScrollUpButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetail from "./components/ServiceDetail";
import PortfolioDetail from "./components/PortfolioDetail";
import AllProjects from "./components/AllProjects";

// Professional Loader Component
const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-800 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center px-8">
        {/* Logo or Brand Name */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            SMJ Solutions
          </h1>
          <p className="text-cyan-400 text-sm mt-2 tracking-wider">Strategic Media Journey</p>
        </div>

        {/* Modern spinner with rings */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-600 rounded-full animate-spin animation-delay-150" style={{animationDuration: '1.5s'}}></div>
          <div className="absolute inset-4 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin animation-delay-300" style={{animationDuration: '2s'}}></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 ease-out shadow-lg shadow-cyan-500/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading text with percentage */}
        <div className="space-y-2">
          <p className="text-slate-400 text-sm font-medium tracking-wider">
            LOADING
          </p>
          <p className="text-cyan-400 text-2xl font-bold tabular-nums">
            {progress}%
          </p>
        </div>

        {/* Optional loading message */}
        <p className="mt-6 text-slate-500 text-xs">
          Preparing your experience...
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust duration as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds to see full animation

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<AllProjects />} />
          <Route path="/portfolio/:projectSlug" element={<PortfolioDetail />} />
        </Routes>
        <ScrollUpButton />
        <style jsx>{`
          /* ==========================================
             SMOOTH ANIMATION LIBRARY
             ========================================== */

          /* Fade Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          /* Slide Animations */
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideRight {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }

          @keyframes slideLeftAnimation {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          /* Scale Animations */
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes scaleUp {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes scaleDown {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.9);
            }
          }

          /* Float/Bounce Animations */
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes floatSlow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          /* Glow Animations */
          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
            }
          }

          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(34, 211, 238, 0.4);
            }
            100% {
              box-shadow: 0 0 10px rgba(34, 211, 238, 0.2);
            }
          }

          /* Gradient Animations */
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          /* Progress Animations */
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Utility Animation Classes */
          .animate-fade-in-up {
            animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-fade-in-down {
            animation: fadeInDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          .animate-fade-out {
            animation: fadeOut 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slide-up {
            animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slide-down {
            animation: slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-slide-right {
            animation: slideRight 2s linear infinite;
          }

          .animate-slide-left {
            animation: slideLeftAnimation 2s linear infinite;
          }

          .animate-scale-in {
            animation: scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-scale-up {
            animation: scaleUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              forwards;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: floatSlow 5s ease-in-out infinite;
          }

          .animate-bounce {
            animation: bounce 3s ease-in-out infinite;
          }

          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }

          .animate-glow-pulse {
            animation: glowPulse 2s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-shimmer {
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
          }

          .animate-progress {
            animation: progress 2s ease-out forwards;
          }

          .animate-rotate {
            animation: rotate 20s linear infinite;
          }

          /* Stagger Delays */
          .stagger-1 {
            animation-delay: 0.1s;
          }
          .stagger-2 {
            animation-delay: 0.2s;
          }
          .stagger-3 {
            animation-delay: 0.3s;
          }
          .stagger-4 {
            animation-delay: 0.4s;
          }
          .stagger-5 {
            animation-delay: 0.5s;
          }
          .stagger-6 {
            animation-delay: 0.6s;
          }
          .stagger-7 {
            animation-delay: 0.7s;
          }
          .stagger-8 {
            animation-delay: 0.8s;
          }

          /* Smooth Transitions */
          .transition-smooth {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .transition-smooth-lg {
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .transition-smooth-xl {
            transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          /* Accessibility: Respect prefers-reduced-motion */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Global smooth transitions */
          * {
            transition-property: color, background-color, border-color,
              text-decoration-color, fill, stroke, opacity, box-shadow,
              transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 200ms;
          }

          button,
          a {
            transition-duration: 300ms;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;