import React from "react";
import { ChevronRight } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      desc: "We understand your vision, goals, and specific business challenges to lay a strong foundation.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Planning",
      desc: "Create a detailed roadmap outlining the solution architecture and project timeline.",
      icon: "🗺️",
    },
    {
      number: "03",
      title: "Design",
      desc: "Design user-friendly interfaces and scalable system architecture for optimal performance.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Development",
      desc: "Build robust, secure systems using cutting-edge technologies and best practices.",
      icon: "⚙️",
    },
    {
      number: "05",
      title: "QA & Testing",
      desc: "Rigorous testing of functionality, performance, and user experience to ensure quality.",
      icon: "✓",
    },
    {
      number: "06",
      title: "Launch & Support",
      desc: "Smooth deployment and ongoing support to ensure your success beyond launch.",
      icon: "🚀",
    },
  ];

  const benefits = [
    {
      title: "Transparent Communication",
      desc: "Regular updates and clear communication throughout every phase of your project.",
      icon: "💬",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing and quality checks at every stage to ensure perfection.",
      icon: "✅",
    },
    {
      title: "On-Time Delivery",
      desc: "We respect your timeline and deliver projects on schedule, every time.",
      icon: "⏱️",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-blue-900/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase animate-slide-down">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in-up stagger-1">
            Our Process & Methodology
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            A proven 6-step approach to deliver exceptional digital solutions
          </p>
        </div>

        {/* Timeline Steps */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((step, i) => (
            <ProcessStep 
              key={i} 
              step={step} 
              index={i}
              isVisible={isVisible}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <BenefitCard 
              key={i} 
              benefit={benefit} 
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Process Step Card Component
 */
function ProcessStep({ step, index, isVisible, totalSteps }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: isVisible ? `fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards` : 'none',
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0
      }}
    >
      {/* Card */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/20">
        {/* Step Number Badge */}
        <div className="mb-6">
          <div
            className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
            style={{
              background: isHovered 
                ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)'
                : 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {step.number}
            </span>
          </div>
        </div>

        {/* Icon */}
        <div
          className="text-5xl mb-4 transition-all duration-500 transform"
          style={{
            transform: isHovered ? 'scale(1.2) rotateZ(10deg)' : 'scale(1) rotateZ(0deg)',
            filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
          }}
        >
          {step.icon}
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-3 transition-all duration-500"
          style={{
            color: isHovered ? '#22d3ee' : '#ffffff',
          }}
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6 transition-colors duration-500">
          {step.desc}
        </p>

        {/* Arrow Indicator */}
       

        {/* Hover Effect Border */}
        <div
          className="absolute inset-0 border-2 rounded-2xl transition-all duration-500 pointer-events-none"
          style={{
            borderColor: isHovered ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0)',
            boxShadow: isHovered ? '0 0 20px rgba(34, 211, 238, 0.2) inset' : 'none'
          }}
        ></div>
      </div>

      {/* Connector Line (hidden on mobile) */}
      {index < 5 && index % 3 !== 2 && (
        <div
          className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 transition-all duration-500"
          style={{
            scaleX: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.5
          }}
        ></div>
      )}
    </div>
  );
}

/**
 * Benefit Card Component
 */
function BenefitCard({ benefit, index, isVisible }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-500 group  transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: isVisible ? `slideInLeft 0.6s ease-out forwards` : 'none',
        animationDelay: `${0.3 + index * 0.1}s`,
        opacity: isVisible ? 1 : 0
      }}
    >
      <div
        className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-2xl mb-4 transform transition-all duration-500"
        style={{
          transform: isHovered ? 'scale(1.3) rotateZ(-15deg)' : 'scale(1) rotateZ(0deg)',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)'
            : 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
        }}
      >
        {benefit.icon}
      </div>
      <h4
        className="text-lg font-bold mb-2 transition-all duration-500"
        style={{
          color: isHovered ? '#22d3ee' : '#ffffff',
        }}
      >
        {benefit.title}
      </h4>
      <p className="text-slate-400 text-sm transition-colors duration-500">
        {benefit.desc}
      </p>
    </div>
  );
}