import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto text-center cursor-pointer">
        <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden group">
          {/* Overlay */}
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
              Let's discuss how we can help you achieve your digital marketing goals
            </p>

            <button
              onClick={handleScheduleClick}
              className=" group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              {/* Animated background with pointer-events-none to allow cursor */}
              <div className="absolute inset-0 bg-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none "></div>
            </button>
          </div>

          {/* Floating decorative circles */}
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
