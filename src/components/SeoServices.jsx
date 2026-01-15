import React, { useState } from 'react';
import { Search, TrendingUp, Link, MapPin, ShoppingCart, FileText, CheckCircle, ArrowRight, BarChart3, Zap, Award, Users, Mail, Phone, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('udznJym6zm12-dR5l');

export default function SEOServicesComponent() {
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    company: ''
  });

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technical SEO",
      description: "Optimize your website's foundation for search engines",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "XML Sitemaps", "Crawlability Fixes"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "On-Page SEO",
      description: "Content and keyword optimization for better rankings",
      features: ["Keyword Research", "Content Optimization", "Meta Tags", "Internal Linking", "URL Structure"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Off-Page SEO",
      description: "Build authority through quality backlinks",
      features: ["Link Building", "Brand Mentions", "Guest Posting", "Digital PR", "Authority Building"],
      color: "from-cyan-600 to-blue-700"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local SEO",
      description: "Dominate local search results in your area",
      features: ["Google Business Profile", "Local Citations", "Review Management", "Local Keywords", "NAP Consistency"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Drive sales with optimized product pages",
      features: ["Product Optimization", "Category Structure", "Rich Snippets", "User Experience", "Conversion Focus"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Marketing",
      description: "SEO-focused content strategy that converts",
      features: ["Content Strategy", "Blog Writing", "Topic Clusters", "Content Calendar", "Performance Analysis"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const process = [
    {
      title: "Audit & Analysis",
      description: "Comprehensive SEO audit to identify opportunities and issues",
      points: ["Technical analysis", "Competitor research", "Keyword gap analysis"]
    },
    {
      title: "Strategy Development",
      description: "Custom SEO roadmap tailored to your business goals",
      points: ["Priority action plan", "KPI definition", "Timeline creation"]
    },
    {
      title: "Implementation",
      description: "Execute optimization across all critical areas",
      points: ["Technical fixes", "Content creation", "Link building"]
    },
    {
      title: "Monitor & Report",
      description: "Track progress and continuously optimize performance",
      points: ["Monthly reports", "Ranking tracking", "ROI analysis"]
    }
  ];

  const stats = [
    { icon: <TrendingUp />, value: "250%", label: "Avg Traffic Increase" },
    { icon: <Users />, value: "500+", label: "Happy Clients" },
    { icon: <Award />, value: "98%", label: "Client Retention" },
    { icon: <BarChart3 />, value: "#1", label: "Rankings Achieved" }
  ];

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async () => {
    // Validation
    if (!formData.website.trim()) {
      alert('Please enter your website URL');
      return;
    }
    
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_2thmr8d', // Your EmailJS service ID
        'template_k4lggba', // Your EmailJS template ID
        {
          to_email: 'info@smjsols.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          website: formData.website,
          company: formData.company || 'Not provided',
          message: `SEO Audit Request for ${formData.website}`,
          submitted_at: new Date().toLocaleString()
        }
      );

      if (response.status === 200) {
        setFormSubmitted(true);
        
        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setShowAuditForm(false);
          setFormSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            website: '',
            company: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Audit Form Modal */}
      {showAuditForm && (
       <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full border border-slate-800 my-8">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Request Free SEO Audit</h2>
                  <p className="text-slate-400 text-sm md:text-base">Submit your details and we'll respond within 2 hours with your comprehensive SEO audit</p>
                </div>
                <button
                  onClick={() => {
                    setShowAuditForm(false);
                    setFormSubmitted(false);
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!formSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Website URL *</label>
                    <input
                      type="url"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleFormChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Your Company"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      What You'll Receive:
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Comprehensive technical SEO analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Performance and speed optimization report</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Mobile responsiveness evaluation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Security and HTTPS validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>Actionable recommendations to improve rankings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span><strong>Response within 2 hours via email</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setShowAuditForm(false)}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Request Free Audit'}
                    </button>
                  </div>

                  <p className="text-center text-sm text-slate-400">
                    No credit card required • 100% Free • Detailed report via email in 2 hours
                  </p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-slate-400 mb-4">Thank you for your interest. We've received your request.</p>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 max-w-md mx-auto mb-6">
                    <p className="text-sm text-slate-300">
                      <Mail className="w-4 h-4 inline mr-2 text-cyan-400" />
                      Check your email (<strong>{formData.email}</strong>) within the next <strong>2 hours</strong> for your comprehensive SEO audit report.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowAuditForm(false);
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        website: '',
                        company: ''
                      });
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-cyan-900/20 to-slate-950/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                SEO Services
              </span>
              <br />
              <span className="text-white">That Drive Real Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Increase organic traffic, rankings, and revenue with data-driven SEO strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowAuditForm(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Free SEO Audit
              </button>
              {/* <button className="border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                View Our Work
              </button> */}
            </div>
            <p className="mt-4 text-cyan-100 text-sm">
              💌 Get your detailed audit report via email within 2 hours
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex justify-center mb-3 text-cyan-400">
                  {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our SEO Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer border border-slate-800 hover:border-cyan-500/50 relative overflow-hidden"
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven 4-step methodology to SEO success
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 shadow-lg shadow-cyan-500/50"
                style={{ width: `${(activeStep / (process.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className={`bg-slate-800 rounded-xl p-6 border-2 transition-all ${
                    activeStep === idx 
                      ? 'border-cyan-500 shadow-xl shadow-cyan-500/20' 
                      : 'border-slate-700 shadow-md hover:border-cyan-600'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4 transition-all ${
                      activeStep === idx 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50' 
                        : 'bg-slate-700'
                    }`}>
                      {idx + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.points.map((point, pidx) => (
                        <li key={pidx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Partner with SEO experts who deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Proven Expertise", desc: "Years of experience with hundreds of successful campaigns", icon: <Award className="w-8 h-8" /> },
              { title: "Data-Driven", desc: "Every decision backed by analytics and performance metrics", icon: <BarChart3 className="w-8 h-8" /> },
              { title: "Transparent Reporting", desc: "Monthly detailed reports showing exactly what we've done", icon: <FileText className="w-8 h-8" /> },
              { title: "Dedicated Support", desc: "Your own account manager available whenever you need", icon: <Users className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Get a free SEO audit and discover how we can grow your organic traffic
          </p>
          <button
            onClick={() => setShowAuditForm(true)}
            className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2 group"
          >
            Get Your Free Audit Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-cyan-100 text-sm">
            No credit card required • Detailed report via email in 2 hours • Completely free
          </p>
        </div>
      </section>
    </div>
  );
}