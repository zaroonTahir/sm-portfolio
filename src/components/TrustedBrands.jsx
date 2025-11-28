import React from 'react';
import SECPLogo from '../assets/secp.jpeg';
import PashaLogo from '../assets/pasha.png';
import PSEBLogo from '../assets/pseb.png';
import ChamberLogo from '../assets/chamber.jpeg';
import FBRLogo from '../assets/fbr.png';

export default function TrustedBrands() {
  const brands = [
    { name: "SECP", logo: SECPLogo },
    { name: "Pasha", logo: PashaLogo },
    { name: "PSEB", logo: PSEBLogo },
    { name: "Chamber of Commerce", logo: ChamberLogo },
    { name: "FBR", logo: FBRLogo }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
       <div className="text-center mb-16 animate-slide-up">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Trusted by leading Pakistani organizations
    <br />
    and regulatory authorities.
  </h2>
</div>

        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20 overflow-hidden">
          {/* Gradient overlay background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-transparent opacity-50"></div>

          {/* SINGLE ROW → moves RIGHT */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-right hover-pause">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 mx-8 flex-shrink-0 group"
                >
                  <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain group-hover:animate-pulse" />
                  <span className="sr-only">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-right { animation: marquee-right 25s linear infinite; }
        .hover-pause:hover { animation-play-state: paused; }
        .animate-marquee-right { width: max-content; }
      `}</style>
    </section>
  );
}
