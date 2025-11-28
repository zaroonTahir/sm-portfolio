import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function Experience() {
  const skills = [
    { name: "Design & Branding", percent: 87 },
    { name: "Web & App Developer", percent: 91 },
    { name: "Digital Marketing", percent: 74 },
    { name: "Social Media Management", percent: 83 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-white">
              Experience the magic of Interiokit.
              <br className="hidden sm:inline" />
              Contact us to discuss your project.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Maecenas massa inceptos placerat ultricies ridiculus vulputate
              torquent curae. Tortor cubilia risus nam cursus sit dui. Facilisis
              vivamus fermentum commodo nascetur orci morbi quisque ipsum
              suscipit vel.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-6 pt-4">
              {skills.map((skill, i) => (
                <SkillBar key={i} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-float max-w-lg mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-2xl transition-all duration-500"></div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------
   SKILL PROGRESS BAR WITH ANIMATION ON VIEW
------------------------------------------------------ */
function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(`${skill.percent}%`);
      }, index * 200); // stagger animation
    }
  }, [isInView, skill.percent, index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">{skill.name}</span>
        <span className="font-bold text-cyan-400">{skill.percent}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}
