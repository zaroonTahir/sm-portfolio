import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Smartphone,
  Zap,
  TrendingUp,
  Palette,
  Video,
  ArrowRight,
  CheckCircle,
  Target,
  Headphones,
} from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import seo from "../assets/seo.jpg";
import software from "../assets/software.jpg";
import ai from "../assets/ai.jpg";

export default function Services() {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      desc: "Custom web and mobile solutions engineered for performance and scalability.",
      slug: "web-development",
      features: [
        "React & Next.js",
        "Node.js & Laravel",
        "Full Stack Solutions",
      ],
      delay: 0,
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      desc: "Android, iOS, and cross-platform mobile solutions using the latest technologies.",
      slug: "mobile-development",
      features: ["Flutter", "React Native", "Cross-Platform"],
      delay: 1,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Automation",
      desc: "Automated workflows, AI-powered systems, and digital transformation tools.",
      slug: "ai-automation",
      features: ["AI Chatbots", "Workflow Automation", "Process Automation"],
      delay: 2,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing & SEO",
      desc: "SEO, social media, paid ads, and creative branding to elevate your digital presence.",
      slug: "digital-marketing",
      features: ["SEO", "Social Media", "Paid Ads"],
      delay: 3,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ERP & SaaS Solutions",
      desc: "Customized ERP and SaaS systems to manage operations from one platform.",
      slug: "erp-saas",
      features: ["Custom ERP", "SaaS Development", "CRM Systems"],
      delay: 4,
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Creative & Media Production",
      desc: "Branding, video production, and content creation that builds brand identity.",
      slug: "media-production",
      features: ["Video Production", "Branding", "Graphic Design"],
      delay: 5,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "GHL Development",
      desc: "GoHighLevel development, automation, and integration services for agencies.",
      slug: "ghl-development",
      features: ["GHL Setup", "Automations", "White-Label"],
      delay: 6,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Consultation",
      desc: "Data-driven marketing strategies for consistent business growth.",
      slug: "marketing-consultation",
      features: ["Strategy Planning", "Market Analysis", "Growth Plans"],
      delay: 7,
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "GHL Tech Support",
      desc: "24/7 white-label tech support for your clients under your brand name.",
      slug: "ghl-tech-support",
      features: ["24/7 Support", "Zoom Call Support", "White-Label Service"],
      delay: 8,
    },
  ];

  const handleLearnMore = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase animate-slide-down">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6 mb-4 sm:mb-6 animate-fade-in-up stagger-1 px-4">
            End-to-End Digital Transformation Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up stagger-2 px-4">
            From software development to digital marketing, we provide
            comprehensive solutions for your business
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isVisible={isVisible}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* Featured Services Section */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Service 1: Web Development */}
          <FeaturedServiceRow
            image={software}
            title="Software & App Development"
            description="We build secure, scalable, and high-performance web applications tailored to your business needs using cutting-edge technologies like React, Next.js, Node.js, and more."
            features={[
              {
                title: "Web Applications",
                desc: "Custom solutions built with modern frameworks",
              },
              {
                title: "Mobile Apps",
                desc: "iOS, Android, and cross-platform development",
              },
              {
                title: "Enterprise Solutions",
                desc: "ERP, CRM, and SaaS applications",
              },
            ]}
            buttonText="Web Development"
            onLearnMore={() => handleLearnMore("web-development")}
            imagePosition="left"
          />

          {/* Service 2: AI Automation */}
          <FeaturedServiceRow
            image={ai}
            title="AI Automation"
            description="Automate repetitive tasks and streamline your business workflows with intelligent AI systems and automation solutions designed for scale."
            features={[
              {
                title: "Business Process Automation",
                desc: "Streamline and automate workflows",
              },
              {
                title: "AI Chatbots",
                desc: "Intelligent bots for customer service",
              },
              {
                title: "Data Automation",
                desc: "Automated data processing and integration",
              },
            ]}
            buttonText="AI Automation"
            onLearnMore={() => handleLearnMore("ai-automation")}
            imagePosition="right"
          />

          {/* Service 3: Digital Marketing */}
          <FeaturedServiceRow
            image={seo}
            title="Digital Marketing & SEO"
            description="Achieve higher rankings, drive organic growth, and build your brand with our comprehensive SEO and digital marketing strategies."
            features={[
              {
                title: "SEO Optimization",
                desc: "On-page, technical, and local SEO",
              },
              {
                title: "Social Media Management",
                desc: "Content creation and community engagement",
              },
              {
                title: "Paid Advertisement",
                desc: "Google Ads and Meta advertising campaigns",
              },
            ]}
            buttonText="Digital Marketing"
            onLearnMore={() => handleLearnMore("digital-marketing")}
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Service Card Component
 */
function ServiceCard({ service, index, isVisible, onLearnMore }) {
  return (
    <div
      className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
      style={{
        animation: isVisible
          ? `fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
          : "none",
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed min-h-12">
        {service.desc}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6 sm:mb-8">
        {service.features.map((feature, j) => (
          <li
            key={j}
            className="flex items-center space-x-2 text-slate-300 transform hover:translate-x-1 transition-transform"
            style={{
              animation: isVisible
                ? `slideInLeft 0.6s ease-out forwards`
                : "none",
              animationDelay: `${0.1 + j * 0.05}s`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => onLearnMore(service.slug)}
        className="text-cyan-400 flex items-center space-x-2 group-hover:space-x-3 transition-all font-semibold cursor-pointer hover:text-cyan-300 active:scale-95 text-sm sm:text-base"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Animated border on hover */}
      <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}

/**
 * Featured Service Row Component
 */
function FeaturedServiceRow({
  image,
  title,
  description,
  features,
  buttonText,
  onLearnMore,
  imagePosition = "left",
}) {
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const imageElement = (
    <div ref={ref} className="relative overflow-hidden animate-float w-full">
      <img
        src={image}
        alt={title}
        className={`rounded-2xl shadow-xl shadow-cyan-500/20 w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      />
    </div>
  );

  const content = (
    <div
      className="space-y-4 sm:space-y-6"
      style={{
        animation: isVisible
          ? `fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
          : "none",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fade-in-up">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed animate-fade-in-up stagger-1">
        {description}
      </p>
      <div className="space-y-3 sm:space-y-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start space-x-3 transform hover:translate-x-1 transition-transform"
            style={{
              animation: isVisible
                ? `slideInLeft 0.6s ease-out forwards`
                : "none",
              animationDelay: `${0.2 + i * 0.1}s`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h4 className="font-semibold text-sm sm:text-base">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onLearnMore}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base mt-2"
      >
        View Full Services →
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
      {imagePosition === "left" ? (
        <>
          <div className="order-2 lg:order-1">{imageElement}</div>
          <div className="order-1 lg:order-2">{content}</div>
        </>
      ) : (
        <>
          <div className="order-1">{content}</div>
          <div className="order-2">{imageElement}</div>
        </>
      )}
    </div>
  );
}