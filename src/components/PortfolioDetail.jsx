import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import fixit from "../assets/fixit.jpg";
import fixit1 from "../assets/fixit1.jpeg";
import fixit2 from "../assets/fixit2.jpeg";
import blog from "../assets/aiblog.png";
import blog1 from "../assets/blog2.png";
import blog3 from "../assets/blog3.webp";
import un from "../assets/un.png";
import un1 from "../assets/un1.png";
import un2 from "../assets/un2.png";
import lms from "../assets/lms.jpg";
import lms1 from "../assets/lms1.jpg";
import lms2 from "../assets/lms2.webp";

export default function PortfolioDetail() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "fixit-app": {
      title: "FixIt App",
      category: "Mobile Apps",
      heroImage: fixit,
      overview:
        "FixIt is a mobile-first platform that connects users with reliable repair technicians. Includes live tracking, job updates, and a full admin panel for management.",
      challenge:
        "Finding trusted technicians while ensuring real-time communication and job tracking was a major challenge.",
      solution:
        "Developed a seamless app using React Native, Firebase, Node.js, and an admin dashboard using React + TailwindCSS.",
      technologies: [
        "React Native",
        "Node.js",
        "Firebase",
        "TailwindCSS",
        "MongoDB",
      ],
      gallery: [fixit1, , fixit2],
    },
    "ai-blog-generator": {
      title: "AI Blog Generator",
      category: "AI",
      heroImage: blog,
      overview:
        "A smart tool that creates SEO-optimized blog posts from user prompts using AI.",
      challenge:
        "Writers struggle to generate content quickly while maintaining quality.",
      solution:
        "Integrated OpenAI API with an Express backend and React frontend to auto-generate high-quality content.",
      technologies: [
        "React",
        "Express",
        "OpenAI API",
        "MongoDB",
        "TailwindCSS",
      ],
      gallery: [blog1, blog3],
    },
    "crypto-tracker": {
      title: "Crypto Tracker",
      category: "Websites",
      heroImage:
        "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview:
        "A real-time cryptocurrency monitoring dashboard with live price updates and historic trend charts.",
      challenge:
        "Fetching real-time crypto data and updating UI with minimal delay.",
      solution:
        "Developed using React + Redux with CoinGecko API and Chart.js for graphs.",
      technologies: [
        "React",
        "Redux",
        "CoinGecko API",
        "Chart.js",
        "TailwindCSS",
      ],
      gallery: [
        "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    "unique-engineering": {
      title: "Unique Engineering",
      category: "Website",
      heroImage: un,
      overview:
        "A full-stack Unique Engineering Website for handling construction and site work operations efficiently.",
      challenge:
        "Managing multiple teams and tasks on-site with real-time status tracking.",
      solution:
        "Created using MERN stack with powerful dashboards for admins and workers.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      gallery: [un1, un2],
    },
    "ghl-funnel-booster": {
      title: "GHL Funnel Booster",
      category: "Automation",
      heroImage:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
      overview:
        "A custom automation suite designed for marketing agencies using GoHighLevel.",
      challenge:
        "Agencies needed automated lead workflows, advanced funnels, and optimized pipelines.",
      solution:
        "Built automation flows using GHL, Zapier, webhooks, and CRM workflows.",
      technologies: ["GoHighLevel", "Zapier", "Webhooks", "CRM Workflows"],
      gallery: [
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    "edulearn-lms": {
      title: "EduLearn LMS",
      category: "Web Apps",
      heroImage: lms,
      overview:
        "A complete Learning Management System featuring lessons, quizzes, certificates, and teacher dashboards.",
      challenge:
        "Building a scalable system to handle video content, quizzes, students, and payments.",
      solution:
        "Created a powerful MERN-based LMS with Stripe payments and analytics.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Stripe API",
        "TailwindCSS",
      ],
      gallery: [lms1, lms2],
    },
  };

  const project = projectsData[projectSlug];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          {/* <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button> */}

          {/* Project Header */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 mb-20 animate-float">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                <span className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400">
                  <CheckCircle className="w-6 h-6" />
                </span>
                The Challenge
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3">
                <span className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400">
                  <CheckCircle className="w-6 h-6" />
                </span>
                Our Solution
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
