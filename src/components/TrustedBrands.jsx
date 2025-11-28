import React from 'react';

export default function TrustedBrands() {
  const brands = [
    { name: "logoipsum", icon: "▪️▪️⚫", subtitle: "®" },
    { name: "logoipsum", icon: "📷", subtitle: "" },
    { name: "logoipsum", icon: "⚡", subtitle: "" },
    { name: "logoipsum", icon: "🛡️", subtitle: "®" },
    { name: "logoipsum", icon: "🔷", subtitle: "®" },
    { name: "logoipsum", icon: "⚡", subtitle: "" },
    { name: "LOGOIPSUM", icon: "|||", subtitle: "" },
    { name: "LOGOIPSUM", icon: "🌾", subtitle: "" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join over 300,000+ businesses to
            <br />
            create unique brand designs.
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20 overflow-hidden">
          {/* Gradient overlay background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-transparent opacity-50"></div>

          {/* TOP ROW → moves RIGHT */}
          <div className="relative mb-10 overflow-hidden">
            <div className="flex animate-marquee-right hover-pause">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 mx-8 flex-shrink-0 group"
                >
                  <span className="text-3xl group-hover:animate-pulse">{brand.icon}</span>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-lg whitespace-nowrap">{brand.name}</span>
                      {brand.subtitle && <span className="text-xs">{brand.subtitle}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW → moves LEFT */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-left hover-pause">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 mx-8 flex-shrink-0 group"
                >
                  <span className="text-3xl group-hover:animate-pulse">{brand.icon}</span>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-lg whitespace-nowrap">{brand.name}</span>
                      {brand.subtitle && <span className="text-xs">{brand.subtitle}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated glow effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }

        .hover-pause:hover {
          animation-play-state: paused;
        }

        /* Smooth infinite scroll */
        .animate-marquee-left,
        .animate-marquee-right {
          width: max-content;
        }
      `}</style>
    </section>
  );
}