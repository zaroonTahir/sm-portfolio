import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    contactMethod: "",
    budget: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const services = [
    "Web Development",
    "Mobile Development",
    "AI Automation",
    "SEO & Digital Marketing",
    "ERP & SaaS Solutions",
    "Creative & Media Production",
    "GHL Development & Integration",
    "Marketing consultation and strategies",
    "Other",
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-10 h-10 text-cyan-400" />,
      title: "Visit Us",
      lines: [
        <span key="pak" className="flex items-center gap-3">
          <img
            src="/flags/pakistan.png"
            className="w-8 h-5 object-cover rounded-sm border border-slate-700"
            alt="Pakistan Flag"
          />
          commerical 20, khawaja banglows, RYK. PAKISTAN
        </span>,
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      lines: ["+97450445267", "+923216716065"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      lines: ["info@smjsols.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      lines: ["Mon - Fri: 9:00 AM - 6:00 PM"],
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) return toast.error("Please enter your name");
    if (!formData.email.trim()) return toast.error("Please enter your email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return toast.error("Invalid email");
    if (!formData.service) return toast.error("Please select a service");
    if (!formData.message.trim()) return toast.error("Please enter a message");
    if (!formData.contactMethod) return toast.error("Select contact method");
    if (!formData.agree) return toast.error("You must agree to the terms");

    setLoading(true);

    try {
      const response = await fetch("https://sm-portfolio-sigma.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          contactMethod: "",
          budget: "",
          agree: false,
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-slate-400 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 XXXX XXX XXX"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">
                      Project *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                    >
                      <option value="">Select a project</option>
                      {services.map((service, i) => (
                        <option key={i} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    How Should We Contact You? *
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  >
                    <option value="">Choose an option</option>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>SMS</option>
                    <option>WhatsApp</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  >
                    <option value="">Select budget</option>
                    <option>$100–500</option>
                    <option>$500–1,000</option>
                    <option>$1,000–5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none placeholder-slate-500"
                  ></textarea>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-5 h-5 accent-cyan-500 cursor-pointer mt-1"
                  />
                  <p className="text-slate-400 text-sm leading-relaxed">
                    I agree to the{" "}
                    <span className="text-cyan-400">Privacy Policy</span> and{" "}
                    <span className="text-cyan-400">Terms & Conditions.</span>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && (
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
