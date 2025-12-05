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
          Commerical 20, Khawaja Banglows, RYK, Pakistan
        </span>,
        <span key="dubai" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
            className="w-8 h-5 object-cover rounded-sm border border-slate-700"
            alt="UAE Flag"
          />
          Khalidiyah Towers, Block A, Abu Dhabi, UAE
        </span>,
        <span key="qatar" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg"
            className="w-8 h-5 object-cover rounded-sm border border-slate-700"
            alt="Qatar Flag"
          />
          Transworld Tower 1, Doha, Qatar
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
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    if (!formData.contactMethod) {
      toast.error("Please select a contact method");
      return;
    }

    if (!formData.agree) {
      toast.error("You must agree to the terms before submitting");
      return;
    }

    setLoading(true);

    try {
      // IMPORTANT: Replace with your deployed backend URL
      // Local: http://localhost:5000
      // Production: https://your-backend.railway.app or https://your-backend.render.com
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

      console.log("Sending to:", `${BACKEND_URL}/api/contact`);

      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          contactMethod: formData.contactMethod,
          budget: formData.budget,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok && data.success) {
        toast.success(data.message || "Message sent successfully! We'll get back to you soon.");
        // Reset form
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
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please check if the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

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
          {/* Contact Info Cards */}
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
                  <p key={j} className="text-slate-400 text-sm mb-2">
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
                    <span className="text-cyan-400">Terms & Conditions.</span> I
                    agree to receive SMS, email, and phone updates regarding
                    services and promotions.
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

            {/* Map & Why Choose Us */}
            <div className="space-y-6">
              {/* Google Map */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2747.9171320572445!2d51.544349675384765!3d25.286661077653505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE3JzEyLjAiTiA1McKwMzInNDguOSJF!5e1!3m2!1sen!2s!4v1764847310286!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Why Choose Us */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Fast Response Time",
                      desc: "We typically respond within 24 hours on business days.",
                    },
                    {
                      title: "Expert Team",
                      desc: "Our experienced professionals are ready to tackle your project.",
                    },
                    {
                      title: "Quality Assured",
                      desc: "We deliver high-quality solutions that exceed expectations.",
                    },
                    {
                      title: "Transparent Pricing",
                      desc: "No hidden fees, clear communication throughout the process.",
                    },
                    {
                      title: "24/7 Support",
                      desc: "Round-the-clock customer support available for your needs.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's bring your vision to life with our expert digital solutions
              </p>

              <a
                href="tel:+97450445267"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}