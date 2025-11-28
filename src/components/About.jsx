import React from "react";
import {
  Target,
  Rocket,
  Heart,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
      facebook: "https://facebook.com/janesmith",
    },
    {
      name: "Mike Johnson",
      role: "Lead Designer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      linkedin: "https://linkedin.com/in/mikejohnson",
      instagram: "https://instagram.com/mikejohnson",
      facebook: "https://facebook.com/mikejohnson",
    },
    {
      name: "Emily Davis",
      role: "Marketing Head",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      linkedin: "https://linkedin.com/in/emilydavis",
      instagram: "https://instagram.com/emilydavis",
      facebook: "https://facebook.com/emilydavis",
    },
  ];

  const globalLocations = [
    {
      name: "Pakistan",
      flag: "/flags/pakistan.png",
      fallback:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    },
    {
      name: "UAE",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
      fallback:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    },
    {
      name: "Qatar",
      flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
      fallback:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
    },
    {
      name: "UK",
      flag: "https://flagcdn.com/gb.svg",
      fallback: "https://flagcdn.com/gb.svg",
    },
    {
      name: "International Clients",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg",
      fallback:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg",
    },
  ];

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

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">
            ABOUT US
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Who We Are — SMJ Solutions Pvt Ltd
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A passionate team of digital innovators dedicated to transforming
            businesses through cutting-edge technology and creative excellence.
          </p>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                SMJ Solutions Overview
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                SMJ Solutions is a next-generation digital transformation firm
                providing modern software, automation, and digital marketing
                services to businesses worldwide. We combine strategy,
                creativity, and technology to help brands grow and stay
                competitive in an evolving digital era.
              </p>
              <p className="text-slate-400">
                With a global presence and a team of certified experts, we
                deliver comprehensive solutions that drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  300+
                </div>
                <div className="text-slate-400">Projects Delivered</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-slate-400">International Clients</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-slate-400">Regional Offices</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">7+</div>
                <div className="text-slate-400">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
              <Target className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-400 leading-relaxed">
                To empower businesses with high-impact digital solutions that
                enhance efficiency, visibility, and revenue.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
              <Rocket className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                Our Vision
              </h3>
              <p className="text-slate-400 leading-relaxed">
                To become a globally trusted digital innovation partner by
                delivering consistent quality, high-end technology, and
                transformational growth.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
              <Heart className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                Our Values
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Integrity, Innovation, Customer-Centric Approach, Continuous
                Improvement, and Long-term Partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Integrity & Transparency",
                desc: "Honesty and ethical practices in all relationships",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Innovation & Excellence",
                desc: "Embracing new technologies and creative solutions",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Customer-Centric",
                desc: "Your success is our success and priority",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Continuous Improvement",
                desc: "Always learning and evolving our methods",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Global Collaboration",
                desc: "Diverse perspectives creating better solutions",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Quality Assurance",
                desc: "Excellence in every project we deliver",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Global Reach
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Operating from strategic locations worldwide
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {globalLocations.map((location, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all group"
              >
                <img
                  src={location.flag}
                  alt={location.name}
                  className="w-20 h-12 object-cover rounded-md mx-auto mb-3 border border-slate-700 group-hover:border-cyan-400 transition-all"
                  onError={(e) => {
                    e.target.src = location.fallback;
                  }}
                />
                <p className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {location.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/*
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-slate-400 mb-12">
            A passionate team driving innovation and excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500/30 group-hover:border-cyan-400 transition-all"
                />
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-400 mb-4">{member.role}</p>

               
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's create something amazing and take your business to the
                next level
              </p>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
