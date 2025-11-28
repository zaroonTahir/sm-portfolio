import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import fixit from "../assets/fixit.jpg";
import blog from "../assets/aiblog.png";
import un from "../assets/un.png";
import lms from "../assets/lms.jpg";

export default function AllProjects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

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
      description: "Mobile-first repair platform with real-time tracking",
    },
    {
      title: "AI Blog Generator",
      category: "AI",
      image: blog,
      slug: "ai-blog-generator",
      color: "from-purple-500 to-pink-500",
      description: "SEO-optimized content generation using AI",
    },
    {
      title: "Crypto Tracker",
      category: "Websites",
      image:
        "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "crypto-tracker",
      color: "from-green-500 to-teal-500",
      description: "Real-time cryptocurrency monitoring dashboard",
    },
    {
      title: "GHL Funnel Booster",
      category: "Automation",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "ghl-funnel-booster",
      color: "from-red-500 to-pink-500",
      description: "Advanced automation suite for marketing agencies",
    },
    {
      title: "EduLearn LMS",
      category: "Web Apps",
      image: lms,
      slug: "edulearn-lms",
      color: "from-indigo-500 to-blue-500",
      description: "Complete Learning Management System",
    },
    {
      title: "Unique Engineering",
      category: "Website",
      image: un,
      slug: "unique-engineering",
      color: "from-pink-500 to-rose-500",
      description: "Engineering for a Sustainable Future",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleViewProject = (slug) => {
    navigate(`/portfolio/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          {/* <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button> */}

          <div className="text-center animate-slide-up">
            <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              All Our Projects
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore our complete collection of successful projects across web,
              mobile, AI, and automation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/30  top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
                onClick={() => handleViewProject(item.slug)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-multiply opacity-80 group-hover:opacity-60 transition-all duration-500`}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-semibold mb-2 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 opacity-90">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                  <button className="flex items-center space-x-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-white hover:text-cyan-300 cursor-pointer">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>

                {/* Border on Hover */}
                <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-400">
                No projects found in this category
              </h3>
            </div>
          )}

          {/* Project Count */}
          <div className="text-center mt-16">
            <p className="text-slate-400">
              Showing{" "}
              <span className="text-cyan-400 font-bold">
                {filteredItems.length}
              </span>{" "}
              of{" "}
              <span className="text-cyan-400 font-bold">
                {portfolioItems.length}
              </span>{" "}
              projects
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how we can help you achieve your goals
              </p>
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo(0, 0);
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 cursor-pointer"
              >
                Get In Touch
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

      <Footer />
    </div>
  );
}
