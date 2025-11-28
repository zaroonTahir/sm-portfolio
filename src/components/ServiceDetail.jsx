import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Zap,
  BarChart,
  Clock,
  Shield,
  Code,
  Smartphone,
  Video,
  Palette,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ai2 from "../assets/ai2.jpg";
import seo2 from "../assets/seo2.webp";
import ghl2 from "../assets/ghl2.webp";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    "web-development": {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "High-Performance Websites Tailored for Modern Businesses",
      description:
        "We design and develop high-performance websites tailored for modern businesses. Our focus is on clean UI/UX, fast loading speed, and scalable architecture, ensuring your site not only looks great but converts visitors into customers.",
      heroImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      features: [
        "Custom Website Development (HTML, React, Next.js, PHP, Laravel)",
        "WordPress Development (Themes, Plugins, Custom CMS)",
        "E-commerce Development (Shopify, WooCommerce, Custom Stores)",
        "Landing Page Design & Development",
        "Webflow Development",
        "UI/UX Design & Prototyping",
        "Website Speed Optimisation",
        "Website Maintenance & Support",
        "API Development & Integrations",
      ],
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Fast & Responsive",
          desc: "Lightning-fast websites optimized for all devices and screen sizes",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "SEO Optimized",
          desc: "Built with SEO best practices to rank higher in search results",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Secure & Scalable",
          desc: "Enterprise-grade security and infrastructure that grows with you",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Conversion Focused",
          desc: "Designed to turn visitors into customers with strategic UX",
        },
      ],
      process: [
        {
          step: "01",
          title: "Discovery & Planning",
          desc: "Understanding your business goals and project requirements",
        },
        {
          step: "02",
          title: "Design",
          desc: "Creating wireframes, mockups, and interactive prototypes",
        },
        {
          step: "03",
          title: "Development",
          desc: "Building your website with clean, maintainable code",
        },
        {
          step: "04",
          title: "Testing & QA",
          desc: "Rigorous testing across devices and browsers",
        },
        {
          step: "05",
          title: "Launch & Support",
          desc: "Deployment and ongoing maintenance support",
        },
      ],
      stats: [
        { value: "300+", label: "Websites Delivered" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "50ms", label: "Average Load Time" },
      ],
    },
    "mobile-development": {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      subtitle: "Powerful, Intuitive, and Scalable Mobile Apps",
      description:
        "We build powerful, intuitive, and scalable mobile apps that work flawlessly across all devices. Whether you need a simple MVP or a fully featured product, we deliver apps that engage and retain users.",
      heroImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform App Development (Flutter, React Native)",
        "Mobile App UI/UX Design",
        "App Testing & QA",
        "App Maintenance & Updates",
        "API & Backend Development for Apps",
      ],
      benefits: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Native Performance",
          desc: "Smooth, fast apps with native-like performance on all platforms",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "User Engagement",
          desc: "Intuitive interfaces that keep users coming back",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Secure & Reliable",
          desc: "Bank-grade security and reliable performance",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Scalable Architecture",
          desc: "Built to handle growth from hundreds to millions of users",
        },
      ],
      process: [
        {
          step: "01",
          title: "Strategy",
          desc: "Define app goals, features, and target audience",
        },
        {
          step: "02",
          title: "Design",
          desc: "Create intuitive UI/UX designs and user flows",
        },
        {
          step: "03",
          title: "Development",
          desc: "Build native or cross-platform mobile applications",
        },
        {
          step: "04",
          title: "Testing",
          desc: "Comprehensive testing on real devices",
        },
        {
          step: "05",
          title: "Launch & Grow",
          desc: "App store submission and post-launch support",
        },
      ],
      stats: [
        { value: "150+", label: "Apps Launched" },
        { value: "4.8/5", label: "Average App Rating" },
        { value: "2M+", label: "Active Users" },
      ],
    },
    "ai-automation": {
      icon: <Zap className="w-12 h-12" />,
      title: "AI Automations",
      subtitle: "Automate Tasks, Streamline Operations, Scale Faster",
      description:
        "We leverage artificial intelligence to automate repetitive tasks, streamline operations, and improve overall business efficiency. Our AI solutions help you reduce manual workload and scale faster.",
      heroImage: ai2,
      features: [
        "AI Chatbot Development (Customer support, lead qualification)",
        "Workflow Automations (Zapier, Make, n8n)",
        "Business Process Automation",
        "AI-Powered Analytics & Insights",
        "Custom AI Tool Development",
        "Automated Email & CRM Systems",
        "Data Extraction & Document Automation",
      ],
      benefits: [
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Save Time",
          desc: "Automate repetitive tasks and free up your team",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increase Efficiency",
          desc: "Streamline operations and boost productivity by 10x",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Reduce Errors",
          desc: "Eliminate human error with automated workflows",
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Data-Driven Insights",
          desc: "Make smarter decisions with AI-powered analytics",
        },
      ],
      process: [
        {
          step: "01",
          title: "Analysis",
          desc: "Identify automation opportunities in your workflow",
        },
        {
          step: "02",
          title: "Design",
          desc: "Create automation architecture and logic",
        },
        {
          step: "03",
          title: "Build",
          desc: "Develop and integrate AI automation systems",
        },
        {
          step: "04",
          title: "Test",
          desc: "Thoroughly test all automation workflows",
        },
        {
          step: "05",
          title: "Optimize",
          desc: "Monitor and continuously improve performance",
        },
      ],
      stats: [
        { value: "100+", label: "Automations Built" },
        { value: "70%", label: "Time Saved" },
        { value: "5x", label: "ROI Increase" },
      ],
    },
    "digital-marketing": {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO & Digital Marketing",
      subtitle: "Increase Visibility, Generate Leads, Maximize ROI",
      description:
        "We help businesses grow through targeted marketing strategies and high-performance SEO campaigns. Our goal is to increase visibility, generate leads, and maximize ROI.",
      heroImage: seo2,
      features: [
        "Search Engine Optimisation (SEO)",
        "Technical SEO & Audits",
        "Social Media Marketing (SMM)",
        "Pay-Per-Click (PPC) Management",
        "Content Writing & Blogging",
        "Email Marketing Campaigns",
        "Brand Positioning & Messaging",
        "Conversion Rate Optimisation (CRO)",
        "Analytics & Reporting",
      ],
      benefits: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Traffic",
          desc: "Drive consistent organic traffic to your website",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Better Rankings",
          desc: "Achieve top positions for your target keywords",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Quality Leads",
          desc: "Attract visitors who are ready to convert",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Measurable Results",
          desc: "Track ROI with comprehensive analytics and reporting",
        },
      ],
      process: [
        {
          step: "01",
          title: "Audit",
          desc: "Comprehensive SEO and marketing audit",
        },
        {
          step: "02",
          title: "Research",
          desc: "Keyword research and competitor analysis",
        },
        {
          step: "03",
          title: "Strategy",
          desc: "Create comprehensive marketing roadmap",
        },
        {
          step: "04",
          title: "Execute",
          desc: "Implement campaigns across all channels",
        },
        {
          step: "05",
          title: "Optimize",
          desc: "Continuously improve and scale results",
        },
      ],
      stats: [
        { value: "200+", label: "Marketing Campaigns" },
        { value: "5x", label: "Average Traffic Increase" },
        { value: "92%", label: "Client Retention" },
      ],
    },
    "erp-saas": {
      icon: <Target className="w-12 h-12" />,
      title: "ERP & SaaS Solutions",
      subtitle: "Customized Systems to Manage Operations from One Platform",
      description:
        "We design and develop fully customized ERP and SaaS systems that empower businesses to manage operations, processes, and teams from a single centralized platform.",
      heroImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      features: [
        "Custom ERP Development",
        "SaaS Product Development",
        "CRM System Development",
        "HRM / Inventory / Accounting Systems",
        "Cloud Integration & Migration",
        "Role-Based Access & User Management",
        "API Integrations for ERP/SaaS",
        "Dashboard & Reporting Solutions",
      ],
      benefits: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Centralized Management",
          desc: "Manage all business operations from one platform",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Efficiency",
          desc: "Streamline workflows and boost productivity",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Secure & Scalable",
          desc: "Enterprise-grade security that grows with you",
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Data-Driven Decisions",
          desc: "Real-time insights and analytics at your fingertips",
        },
      ],
      process: [
        {
          step: "01",
          title: "Requirements",
          desc: "Gather detailed business requirements",
        },
        {
          step: "02",
          title: "Architecture",
          desc: "Design system architecture and database",
        },
        {
          step: "03",
          title: "Development",
          desc: "Build custom modules and features",
        },
        {
          step: "04",
          title: "Integration",
          desc: "Connect with existing systems and tools",
        },
        {
          step: "05",
          title: "Support",
          desc: "Training and ongoing technical support",
        },
      ],
      stats: [
        { value: "50+", label: "ERP Systems Built" },
        { value: "98%", label: "Uptime Guaranteed" },
        { value: "40%", label: "Cost Reduction" },
      ],
    },
    "media-production": {
      icon: <Video className="w-12 h-12" />,
      title: "Creative & Media Production",
      subtitle: "Visually Compelling Content That Builds Brand Identity",
      description:
        "We create visually compelling content that builds brand identity and engages your audience across all platforms. Our creative team ensures your brand stands out.",
      heroImage:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
      features: [
        "Branding & Graphic Design",
        "Logo Design & Brand Identity",
        "Video Production (ads, promos, explainers)",
        "Photography & Product Shoots",
        "Social Media Creative Design",
        "Infographics & Presentation Design",
        "Motion Graphics & Animation",
      ],
      benefits: [
        {
          icon: <Award className="w-6 h-6" />,
          title: "Professional Quality",
          desc: "Studio-grade production and design quality",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Audience Engagement",
          desc: "Content that resonates and drives action",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Brand Consistency",
          desc: "Cohesive visual identity across all platforms",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Conversions",
          desc: "Visual content that drives results",
        },
      ],
      process: [
        {
          step: "01",
          title: "Brief",
          desc: "Understand your vision and objectives",
        },
        {
          step: "02",
          title: "Concept",
          desc: "Create concepts and storyboards",
        },
        {
          step: "03",
          title: "Production",
          desc: "Professional shooting and creation",
        },
        {
          step: "04",
          title: "Post-Production",
          desc: "Editing, color grading, and effects",
        },
        {
          step: "05",
          title: "Delivery",
          desc: "Finalize and deliver in multiple formats",
        },
      ],
      stats: [
        { value: "500+", label: "Videos Produced" },
        { value: "10M+", label: "Views Generated" },
        { value: "95%", label: "Client Satisfaction" },
      ],
    },
    "ghl-development": {
      icon: <Zap className="w-12 h-12" />,
      title: "GHL Development & Integration",
      subtitle: "Unlock the Full Potential of GoHighLevel",
      description:
        "We help businesses unlock the full potential of GoHighLevel by building advanced automations, pipelines, and integrated systems that boost conversions and streamline operations.",
      heroImage: ghl2,
      features: [
        "GHL CRM Setup & Optimisation",
        "Funnel & Pipeline Creation",
        "Automation Workflows",
        "Email/SMS Campaign Setup",
        "Custom GHL Snapshots",
        "Integration With Third-Party Tools",
        "Calendar Booking & Lead Management",
        "White-Label Setup for Agencies",
      ],
      benefits: [
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Automation Power",
          desc: "Automate lead capture, follow-ups, and conversions",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Conversions",
          desc: "Optimized funnels that convert leads into customers",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Streamlined Operations",
          desc: "Manage all marketing from one centralized platform",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Better Client Management",
          desc: "Enhanced CRM features for superior client relationships",
        },
      ],
      process: [
        {
          step: "01",
          title: "Consultation",
          desc: "Understand your business and GHL needs",
        },
        {
          step: "02",
          title: "Setup",
          desc: "Configure GHL account and basic settings",
        },
        {
          step: "03",
          title: "Automation",
          desc: "Build custom workflows and automations",
        },
        {
          step: "04",
          title: "Integration",
          desc: "Connect with your existing tools and systems",
        },
        {
          step: "05",
          title: "Training",
          desc: "Train your team and provide ongoing support",
        },
      ],
      stats: [
        { value: "80+", label: "GHL Setups" },
        { value: "3x", label: "Lead Conversion Rate" },
        { value: "60%", label: "Time Saved" },
      ],
    },
    "marketing-consultation": {
      icon: <Target className="w-12 h-12" />,
      title: "Marketing Consultation & Strategies",
      subtitle: "Data-Driven Strategies for Consistent Business Growth",
      description:
        "We provide data-driven marketing strategies that help businesses grow consistently. Our consultation focuses on positioning, customer acquisition, sales funnels, and brand visibility.",
      heroImage:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
      features: [
        "Brand Strategy & Market Positioning",
        "Business Growth Strategy Planning",
        "Sales Funnel Planning & Optimisation",
        "Competitor Analysis & Research",
        "Performance Optimisation Roadmaps",
        "Quarterly & Monthly Marketing Plans",
        "Customer Journey Mapping",
      ],
      benefits: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Strategic Direction",
          desc: "Clear roadmap for achieving marketing goals",
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Data-Driven Insights",
          desc: "Make informed decisions based on real data",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Sustainable Growth",
          desc: "Build long-term strategies that deliver results",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Competitive Advantage",
          desc: "Stand out in your market with proven strategies",
        },
      ],
      process: [
        {
          step: "01",
          title: "Discovery",
          desc: "Understand your business and market landscape",
        },
        {
          step: "02",
          title: "Analysis",
          desc: "Analyze competitors and identify opportunities",
        },
        {
          step: "03",
          title: "Strategy",
          desc: "Develop comprehensive marketing strategy",
        },
        {
          step: "04",
          title: "Planning",
          desc: "Create actionable implementation roadmap",
        },
        {
          step: "05",
          title: "Execution Support",
          desc: "Guide implementation and measure results",
        },
      ],
      stats: [
        { value: "120+", label: "Strategies Delivered" },
        { value: "4x", label: "Average ROI" },
        { value: "94%", label: "Client Success Rate" },
      ],
    },
    "ui-ux-design": {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      subtitle: "User-Centered Designs That Convert",
      description:
        "User-centered, modern, and intuitive designs that convert. We create beautiful interfaces backed by research and data to ensure exceptional user experiences.",
      heroImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      features: [
        "User Research & Analysis",
        "Wireframes & Prototyping",
        "User Flow Mapping",
        "Interactive Mockups",
        "Usability Testing",
        "Design Systems",
        "Responsive Design",
        "Accessibility Standards",
      ],
      benefits: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Better User Experience",
          desc: "Intuitive designs that users love to interact with",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Higher Conversions",
          desc: "Strategic design that guides users to take action",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Brand Consistency",
          desc: "Cohesive design language across all touchpoints",
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "User Satisfaction",
          desc: "Designs that meet and exceed user expectations",
        },
      ],
      process: [
        {
          step: "01",
          title: "Research",
          desc: "User research and competitive analysis",
        },
        {
          step: "02",
          title: "Wireframes",
          desc: "Create low-fidelity wireframes and user flows",
        },
        {
          step: "03",
          title: "Design",
          desc: "High-fidelity mockups and interactive prototypes",
        },
        {
          step: "04",
          title: "Testing",
          desc: "Usability testing and feedback collection",
        },
        {
          step: "05",
          title: "Handoff",
          desc: "Developer handoff and design system documentation",
        },
      ],
      stats: [
        { value: "250+", label: "Designs Created" },
        { value: "40%", label: "Conversion Increase" },
        { value: "4.9/5", label: "User Satisfaction" },
      ],
    },
  };

  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg cursor-pointer"
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ">
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
            className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button> */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-2xl text-cyan-400 mb-6">{service.subtitle}</p>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative animate-float">
              <img
                src={service.heroImage}
                alt={service.title}
                className="rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's Included
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive services designed to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CheckCircle className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transform your business with measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Process Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto">
        A proven methodology that delivers consistent results
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6 items-stretch">
      {service.process.map((step, i) => (
        <div key={i} className="relative h-full">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 
                          rounded-xl p-6 hover:border-cyan-500/50 transition-all 
                          duration-300 group h-full flex flex-col">
            
            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 
                            to-blue-500 bg-clip-text text-transparent mb-4">
              {step.step}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
              {step.title}
            </h3>

            <p className="text-slate-400 text-sm mt-auto">{step.desc}</p>
          </div>

          {i < service.process.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 
                            bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          )}
        </div>
      ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how our {service.title.toLowerCase()} services can
                help your business grow
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 cursor-pointer"
              >
                Schedule a Free Consultation
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
