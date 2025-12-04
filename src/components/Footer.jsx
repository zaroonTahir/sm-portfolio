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
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Company */}
<div>
  <div className="flex items-center space-x-2 group">
    <div
      className="animate-slide-up cursor-pointer"
      onClick={() => handlePageClick("/")}
    >
      <div className="relative">
        <img
          src={logo}
          alt="SMJ Solutions Logo"
          className="w-22 h-22 ml-6 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-0 transition-opacity"></div>
      </div>

      <div className="mt-1">
        <span className="text-xl font-bold block">SMJ Solutions</span>
        <span className="text-xs text-cyan-400">
          Strategic Media Journey
        </span>
      </div>
    </div>
  </div>
</div>

          {/* Column 2: Services */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h4 className="font-bold text-lg text-white">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
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
                    className="hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block text-left group cursor-pointer"
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
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <button
                  onClick={() => handlePageClick("/about")}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block text-left group"
                >
                  <span className="group-hover:underline">About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handlePortfolioClick}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block text-left group"
                >
                  <span className="group-hover:underline">Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick("/contact")}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:translate-x-1 inline-block text-left group"
                >
                  <span className="group-hover:underline">Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h4 className="font-bold text-lg text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm">
              Subscribe for digital tips and latest industry insights
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-600 px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 my-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <p>&copy; 2025 SMJ Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <button className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
