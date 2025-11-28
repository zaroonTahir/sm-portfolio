import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Emma W.",
      company: "StyleHive",
      project: "Social Media Marketing",
      rating: 5,
      review:
        "Their team completely transformed our online presence. Leads are flowing in like never before.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Raj P.",
      company: "TechSolutions",
      project: "SEO & Content Marketing",
      rating: 4,
      review:
        "We trusted them with SEO, and now our website ranks on the first page for all major keywords.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Sophia L.",
      company: "Fresh Eats Co.",
      project: "Paid Advertising / PPC",
      rating: 5,
      review:
        "PPC campaigns that actually convert! They know how to target the right audience.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Arjun K.",
      company: "Urban Threads",
      project: "Branding & Creative",
      rating: 5,
      review:
        "Creative, professional, and attentive. They redesigned our brand beautifully.",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Laura M.",
      company: "HealthHub",
      project: "Email Marketing",
      rating: 5,
      review:
        "Our email open rates have improved dramatically thanks to their campaigns.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "David S.",
      company: "EcoDrive",
      project: "Website Design & Development",
      rating: 4,
      review:
        "The website they built is stunning and user‑friendly. Bounce rates have dropped!",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const maxSlides = Math.ceil(testimonials.length / slidesPerView);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [slidesPerView, isAutoPlay, testimonials.length]);

  const maxSlides = Math.ceil(testimonials.length / slidesPerView);
  const translatePercentage = 100 / slidesPerView;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxSlides);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase animate-slide-down">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up stagger-1">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Real feedback from businesses we've helped transform
          </p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * translatePercentage
                }%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${translatePercentage}%` }}
                >
                  <TestimonialCard testimonial={t} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute -left-4 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 group/btn hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300 group/btn hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          {Array.from({ length: maxSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goToSlide(dotIndex)}
              className="transition-all duration-300 rounded-full transform hover:scale-125 outline-none focus:outline-none"
              style={{
                width: currentIndex === dotIndex ? "12px" : "8px",
                height: currentIndex === dotIndex ? "12px" : "8px",
                background:
                  currentIndex === dotIndex
                    ? "linear-gradient(135deg, #06b6d4, #3b82f6)"
                    : "#475569",
                boxShadow:
                  currentIndex === dotIndex
                    ? "0 0 15px rgba(34, 211, 238, 0.5)"
                    : "none",
              }}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Testimonial Card Component with Smooth Animations
 */
function TestimonialCard({ testimonial, index }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-500 group hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Star Rating */}
      <div
        className="flex items-center space-x-1 mb-4 transform transition-all duration-500"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transformOrigin: "left",
        }}
      >
        {[...Array(testimonial.rating)].map((_, j) => (
          <Star
            key={j}
            className="w-5 h-5 fill-cyan-400 text-cyan-400 transition-all duration-300"
            style={{
              animation: isHovered
                ? `bounce ${0.5 + j * 0.1}s ease-in-out`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Review Text */}
      <p
        className="text-slate-300 mb-6 leading-relaxed italic text-sm sm:text-base transition-all duration-500 min-h-20"
        style={{
          color: isHovered ? "#e0e7ff" : "#cbd5e1",
        }}
      >
        "{testimonial.review}"
      </p>

      {/* Divider */}
      <div
        className="border-t border-slate-700/50 pt-6 transition-all duration-500"
        style={{
          borderColor: isHovered
            ? "rgba(34, 211, 238, 0.3)"
            : "rgba(51, 65, 85, 0.5)",
        }}
      ></div>

      {/* Author Info */}
      <div className="flex items-center space-x-4 mt-6">
       <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 transition-all duration-500"
            style={{
             borderColor: isHovered ? 'rgba(34, 211, 238, 0.5)' : 'rgba(51, 65, 85, 0.5)',
             transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />

        <div
          className="transform transition-all duration-500"
          style={{
            transform: isHovered ? "translateX(5px)" : "translateX(0)",
          }}
        >
          <h4
            className="font-bold text-white text-sm transition-colors duration-500"
            style={{
              color: isHovered ? "#22d3ee" : "#ffffff",
            }}
          >
            {testimonial.name}
          </h4>
          <p className="text-cyan-400 text-xs font-semibold transition-colors duration-500">
            {testimonial.project} • {testimonial.company}
          </p>
        </div>
      </div>

      {/* Animated shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none rounded-2xl"
        style={{
          transform: isHovered ? "translateX(200%)" : "translateX(-200%)",
          transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      ></div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl pointer-events-none"
        style={{
          opacity: isHovered ? 0.5 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      ></div>
    </div>
  );
}
