import React, { useState } from 'react';
import { Search, TrendingUp, Link, MapPin, ShoppingCart, FileText, CheckCircle, ArrowRight, BarChart3, Zap, Award, Users } from 'lucide-react';

export default function SEOServicesComponent() {
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
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
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Get Free SEO Audit
              </button>
              <button className="border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                View Our Work
              </button>
            </div>
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our SEO Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-cyan-400 relative overflow-hidden"
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-slate-700">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-cyan-600 hover:text-blue-600 font-semibold transition-colors group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900">
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-400 transition-all hover:shadow-lg">
                <div className="text-cyan-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
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
          <button className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2 group">
            Get Your Free Audit Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-cyan-100 text-sm">
            No credit card required • Results in 48 hours • Completely free
          </p>
        </div>
      </section>
    </div>
  );
}