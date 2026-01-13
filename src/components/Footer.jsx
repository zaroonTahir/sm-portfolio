import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import logo from "../assets/smj-logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  const handlePageClick = (path) => {
    navigate(path);
  };

  const handlePortfolioClick = () => {
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Section - Connect with Us */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Connect with Us
            </h2>

            {/* Social Media Icons */}
            <div className="flex gap-4 mb-10">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <span className="font-bold text-lg">M</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Headoffice */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇵🇰</span>
                  <h3 className="text-white font-bold">Headoffice:</h3>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p>Rahim Yar Khan, Pakistan</p>
                  <p>Street 45, Block B</p>
                  <p>Model Town</p>
                  <p className="mt-3">
                    <a href="mailto:info@smjsols.com" className="hover:text-cyan-400 transition-colors">
                      info@smjsols.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+923001234567" className="hover:text-cyan-400 transition-colors">
                      +92 300 1234567
                    </a>
                  </p>
                </div>
              </div>

              {/* Branch 1 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇭🇰</span>
                  <h3 className="text-white font-bold">Branch:</h3>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p>HONG KONG</p>
                  <p>903 Dannies House,</p>
                  <p>20 Luard Road,</p>
                  <p>Wan Chai, Hong Kong</p>
                </div>
              </div>

              {/* Branch 2 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="text-white font-bold">Branch:</h3>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p>LONDON, UNITED KINGDOM</p>
                  <p>115 London Road,</p>
                  <p>Morden,</p>
                  <p>England, SM4 5HP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Message for us"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                required
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2"
                >
                  Submit
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p className="text-center sm:text-left">
            &copy; 2025 SMJ Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 flex-wrap justify-center">
            <button
              onClick={() => handlePageClick("/privacy-policy")}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handlePageClick("/terms-and-conditions")}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handlePageClick("/sitemap")}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}