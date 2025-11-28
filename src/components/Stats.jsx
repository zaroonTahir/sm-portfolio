import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 250, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 50, label: "Team Members", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Animated Counter Component
--------------------------------*/
function StatItem({ stat, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1200; // 1.2 seconds
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="text-center group cursor-default"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
}
