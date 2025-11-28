import React from "react";
import ScrollUpButton from "./components/ScrollUpButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetail from "./components/ServiceDetail";
import PortfolioDetail from "./components/PortfolioDetail";
import AllProjects from "./components/AllProjects";

function App() {
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
