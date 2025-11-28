import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import fixit from "../assets/fixit.jpg";
import blog from "../assets/aiblog.png";
import un from "../assets/un.png";
import lms from "../assets/lms.jpg";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const categories = [
    "All",
    "Websites",
    "Mobile Apps",
    "AI",
    "Automation",
    "Web Apps",
  ];

  const portfolioItems = [
    {
      title: "FixIt App",
      category: "Mobile Apps",
      image: fixit,
      slug: "fixit-app",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Blog Generator",
      category: "AI",
      image: blog,
      slug: "ai-blog-generator",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Crypto Tracker",
      category: "Websites",
      image:
        "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "crypto-tracker",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Unique Engineering",
      category: "Website",
      image: un,
      slug: "unique-engineering",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "GHL Funnel Booster",
      category: "Automation",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "ghl-funnel-booster",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "EduLearn LMS",
      category: "Web Apps",
      image: lms,
      slug: "edulearn-lms",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleViewProject = (slug) => {
    navigate(`/portfolio/${slug}`);
    // window.scrollTo(0, 0);
  };

  const handleViewAllProjects = () => {
    navigate("/portfolio");
    // window.scrollTo(0, 0);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase animate-slide-down">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up stagger-1">
            Projects We've Delivered
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            We have delivered 50+ successful projects across multiple industries
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up stagger-3">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ${
                activeFilter === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-105"
                  : "bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/50"
              }`}
              style={{
                animation: isVisible
                  ? `scaleIn 0.5s ease-out forwards`
                  : "none",
                animationDelay: `${index * 0.05}s`,
                opacity: isVisible ? 1 : 0,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredItems.map((item, i) => (
            <PortfolioCard
              key={i}
              item={item}
              index={i}
              isVisible={isVisible}
              onViewProject={handleViewProject}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in-up stagger-4">
          <button
            onClick={handleViewAllProjects}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center space-x-2 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * Portfolio Card Component with Smooth Animations
 */
function PortfolioCard({ item, index, isVisible, onViewProject }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
      onClick={() => onViewProject(item.slug)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: isVisible
          ? `fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
          : "none",
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-60 transition-all duration-700`}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        {/* Category Badge */}
        <div
          className="mb-4 inline-block w-fit"
          style={{
            transform: isHovered
              ? "translateY(0) rotateZ(0deg)"
              : "translateY(10px) rotateZ(-5deg)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="text-sm font-semibold px-3 py-1 bg-cyan-500/30 border border-cyan-400 text-cyan-300 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-4 opacity-90 transition-all duration-500"
          style={{
            transform: isHovered ? "translateY(-10px)" : "translateY(0)",
            transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {item.title}
        </h3>

        {/* Button */}
        <button
          className="flex cursor-pointer items-center space-x-2 text-sm font-semibold transition-all duration-500 delay-100 text-white hover:text-cyan-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
          }}
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Border on Hover */}
      <div
        className="absolute inset-0 border-2 rounded-2xl transition-all duration-500 pointer-events-none"
        style={{
          borderColor: isHovered
            ? "rgba(34, 211, 238, 0.5)"
            : "rgba(34, 211, 238, 0)",
          boxShadow: isHovered
            ? "0 0 30px rgba(34, 211, 238, 0.3) inset"
            : "none",
        }}
      ></div>

      {/* Animated shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          transform: isHovered ? "translateX(200%)" : "translateX(-200%)",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}
