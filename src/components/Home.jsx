import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustedBrands from "./TrustedBrands";
import Services from "./Services";
import Portfolio from "./Portfolio";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

// CTA Component
function CTA() {
  const handleScheduleClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden group">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/50 animate-slide-right"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-white/50 animate-slide-left"></div>
          </div>

          <div className="relative z-10 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <button
              onClick={handleScheduleClick}
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const reasons = [
    {
      icon: "⭐",
      title: "Certified & Experienced Team",
      desc: "Our team consists of certified experts with 5+ years of experience",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      desc: "We deliver projects on time without compromising on quality",
    },
    {
      icon: "💬",
      title: "Transparent Communication",
      desc: "Regular updates and clear communication throughout your project",
    },
    {
      icon: "✓",
      title: "100% Quality & Satisfaction",
      desc: "We guarantee quality and your complete satisfaction",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Why Businesses Choose SMJ Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="text-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all group"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedBrands />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
