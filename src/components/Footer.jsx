import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../assets/smj-logo.png"; // import your logo image

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  const handlePageClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handlePortfolioClick = () => {
    // Scroll to the Portfolio section on homepage
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("portfolio");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("portfolio");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Company */}
          <div className="sm:col-span-2 md:col-span-1">
            <div
              className="animate-slide-up cursor-pointer text-center sm:text-left"
              onClick={() => handlePageClick("/")}
            >
              <img
                src={logo}
                alt="SMJ Solutions Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 hover:scale-110 mx-auto sm:mx-0"
              />

              <div className="mt-3 sm:mt-4">
                <span className="text-lg sm:text-xl font-bold block">
                  SMJ Solutions
                </span>
                <span className="text-xs text-cyan-400">
                  Strategic Media Journey
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold text-base sm:text-lg text-white mb-4 text-center sm:text-left">
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              {[
                { name: "Web Development", slug: "web-development" },
                { name: "Mobile Development", slug: "mobile-development" },
                { name: "AI Automation", slug: "ai-automation" },
                { name: "SEO & Digital Marketing", slug: "digital-marketing" },
                { name: "ERP & SaaS Solutions", slug: "erp-saas" },
                {
                  name: "Creative & Media Production",
                  slug: "media-production",
                },
                {
                  name: "GHL Development & Integration",
                  slug: "ghl-development",
                },
                {
                  name: "Marketing Consultation & Strategies",
                  slug: "marketing-consultation",
                },
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleServiceClick(service.slug)}
                    className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block group cursor-pointer"
                  >
                    <span className="group-hover:underline">
                      {service.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold text-base sm:text-lg text-white mb-4 text-center sm:text-left">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              <li>
                <button
                  onClick={() => handlePageClick("/about")}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="group-hover:underline">About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handlePortfolioClick}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="group-hover:underline">Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick("/contact")}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="group-hover:underline">Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div
            className="sm:col-span-2 md:col-span-1 lg:col-span-1 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h4 className="font-bold text-base sm:text-lg text-white mb-4 text-center sm:text-left">
              Newsletter
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mb-4 text-center sm:text-left leading-relaxed">
              Subscribe for digital tips and latest industry insights
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 sm:py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group flex-shrink-0 flex justify-center items-center"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-slate-400 text-xs sm:text-sm">
          <p className="text-center sm:text-left order-2 sm:order-1">
            &copy; 2025 SMJ Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm flex-wrap justify-center order-1 sm:order-2">
            <button className="hover:text-cyan-400 transition-colors whitespace-nowrap">
              Privacy Policy
            </button>
            <button className="hover:text-cyan-400 transition-colors whitespace-nowrap">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors whitespace-nowrap">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}