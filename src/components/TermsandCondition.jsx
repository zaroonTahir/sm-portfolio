import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Shield, AlertCircle, Scale, Mail, CheckCircle } from "lucide-react";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  const sections = [
    {
      id: "website-use",
      title: "1. Website Use",
      icon: <FileText className="w-5 h-5" />,
      content: "By using this Website, you confirm that you have read, understood, and accepted these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use the Website."
    },
    {
      id: "restrictions",
      title: "2. Restrictions",
      icon: <AlertCircle className="w-5 h-5" />,
      content: "You are strictly prohibited from:",
      list: [
        "Republishing Website content without permission",
        "Selling, sublicensing, or commercially exploiting Website materials",
        "Publicly displaying or performing Website content",
        "Using the Website in a way that may damage or disrupt services",
        "Violating any applicable laws or regulations",
        "Engaging in data mining, scraping, or harvesting activities",
        "Using the Website for unauthorized advertising or marketing"
      ],
      footer: "SMJ Solutions reserves the right to restrict access to any part of the Website at its sole discretion."
    },
    {
      id: "age-requirement",
      title: "3. Age Requirement",
      icon: <Shield className="w-5 h-5" />,
      content: "You must be at least 18 years old to use this Website. By using the Website, you confirm that you are 18 years or older and legally capable of entering into this Agreement."
    },
    {
      id: "third-party-links",
      title: "4. Links to Third-Party Websites",
      icon: <FileText className="w-5 h-5" />,
      content: "Our Website may contain links to external websites. SMJ Solutions does not control or endorse these third-party sites and is not responsible for their content, services, or practices. Visiting external links is at your own risk."
    },
    {
      id: "prohibited-uses",
      title: "5. Prohibited Uses",
      icon: <AlertCircle className="w-5 h-5" />,
      content: "You may not use the Website to:",
      list: [
        "Engage in unlawful activities",
        "Violate intellectual property rights",
        "Harass, abuse, defame, or discriminate",
        "Submit false or misleading information",
        "Upload viruses or malicious software",
        "Collect personal data without consent",
        "Spam, phish, crawl, scrape, or interfere with security features"
      ],
      footer: "Violation of these rules may result in immediate termination of access."
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property Rights",
      icon: <Shield className="w-5 h-5" />,
      content: "All content, logos, graphics, trademarks, and materials on this Website are the exclusive property of SMJ Solutions or its licensors. Unauthorized use, reproduction, or distribution is strictly prohibited."
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      icon: <Scale className="w-5 h-5" />,
      content: "To the maximum extent permitted by law, SMJ Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Website or Services.",
      footer: "Total liability shall not exceed USD $1 or the amount paid by you to SMJ Solutions in the preceding one-month period, whichever is greater."
    },
    {
      id: "indemnification",
      title: "8. Indemnification",
      icon: <Shield className="w-5 h-5" />,
      content: "You agree to indemnify and hold harmless SMJ Solutions, its affiliates, employees, and partners from any claims, losses, or damages arising out of your use of the Website or violation of these Terms."
    },
    {
      id: "severability",
      title: "9. Severability",
      icon: <FileText className="w-5 h-5" />,
      content: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect."
    },
    {
      id: "dispute-resolution",
      title: "10. Dispute Resolution",
      icon: <Scale className="w-5 h-5" />,
      content: "These Terms shall be governed by the laws of Pakistan, Islamic Republic of Pakistan. Any disputes shall be resolved exclusively in the courts located in Pakistan."
    },
    {
      id: "changes",
      title: "11. Changes to These Terms",
      icon: <AlertCircle className="w-5 h-5" />,
      content: "SMJ Solutions reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the Website constitutes acceptance of the updated Terms."
    },
    {
      id: "acceptance",
      title: "12. Acceptance of Terms",
      icon: <CheckCircle className="w-5 h-5" />,
      content: "By using this Website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-all mb-8 group bg-slate-800/50 px-4 py-2 rounded-lg hover:bg-slate-800 border border-slate-700/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </button>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-3">
                Terms and Conditions
              </h1>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <p className="text-sm sm:text-base">Last Updated: January 01, 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Welcome to SMJ Solutions. These Terms and Conditions ("Terms", "Agreement") govern your use of our website{" "}
              <a href="https://www.smjsols.com" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/30 hover:decoration-cyan-500 transition-all font-medium">
                www.smjsols.com
              </a>{" "}
              and any services provided by SMJ Solutions ("we", "our", "us").
            </p>
            
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
              <AlertCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cyan-100 font-semibold mb-1">Important Notice</p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  By accessing or using this Website, you agree to comply with and be bound by these Terms. If you do not agree, please discontinue use of the Website immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="flex items-start gap-4 sm:gap-6 mb-5">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl text-cyan-400 flex-shrink-0 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                  {section.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                  {section.title}
                </h2>
              </div>
              
              <div className="ml-0 sm:ml-20 space-y-4">
                <p className="text-slate-300 leading-relaxed text-base">
                  {section.content}
                </p>
                
                {section.list && (
                  <ul className="space-y-3 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2.5"></div>
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.footer && (
                  <div className="mt-4 pl-4 border-l-2 border-cyan-500/30">
                    <p className="text-slate-400 italic text-sm leading-relaxed">
                      {section.footer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl text-cyan-300 flex-shrink-0 border border-cyan-500/30">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  13. Contact Us
                </h2>
                <p className="text-slate-300 leading-relaxed mb-5 text-base">
                  For questions regarding these Terms, please contact us:
                </p>
                <div className="space-y-3 bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400 font-semibold">Email:</strong>{" "}
                      <a href="mailto:info@smjsols.com" className="hover:text-cyan-400 transition-colors underline decoration-cyan-500/30 hover:decoration-cyan-500">
                        info@smjsols.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400 font-semibold">Website:</strong>{" "}
                      <a href="https://www.smjsols.com" className="hover:text-cyan-400 transition-colors underline decoration-cyan-500/30 hover:decoration-cyan-500">
                        https://www.smjsols.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 border border-cyan-400/20"
          >
            <span>Return to Home</span>
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}