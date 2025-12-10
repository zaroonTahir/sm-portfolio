import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import hero from "../assets/hero1.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Canvas animation for video-like background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        hue: Math.random() * 60 + 180,
      });
    }

    const animate = () => {
      time += 0.016;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#1e293b");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.sin(i * 0.001 + time) * 10;
        data[i + 3] = Math.max(0, data[i + 3] - noise);
      }
      ctx.putImageData(imageData, 0, 0);

      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(time * 0.3 + i * 0.1) * 0.5;
        p.y += p.vy + Math.cos(time * 0.25 + i * 0.1) * 0.5;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = Math.sin(time + i * 0.05) * 0.5 + 0.5;
        const finalOpacity = p.opacity * pulse;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        const hueShift = (p.hue + time * 20) % 360;
        gradient.addColorStop(
          0,
          `hsla(${hueShift}, 100%, 60%, ${finalOpacity * 0.9})`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${hueShift}, 100%, 50%, ${finalOpacity * 0.5})`
        );
        gradient.addColorStop(1, `hsla(${hueShift}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((p2, j) => {
          if (j > i) {
            const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
            if (dist < 200) {
              const connectionOpacity = (1 - dist / 200) * 0.3;
              ctx.strokeStyle = `hsla(${hueShift}, 100%, 50%, ${connectionOpacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      ctx.strokeStyle = "rgba(34, 211, 238, 0.1)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 6; i++) {
        const offset = Math.sin(time * 0.2 + i) * 30;
        ctx.beginPath();
        ctx.moveTo(0, (canvas.height / 5) * i + offset);
        ctx.lineTo(canvas.width, (canvas.height / 5) * i - offset);
        ctx.stroke();
      }

      for (let i = 0; i < 10; i++) {
        const offset = Math.cos(time * 0.15 + i) * 25;
        ctx.beginPath();
        ctx.moveTo((canvas.width / 9) * i + offset, 0);
        ctx.lineTo((canvas.width / 9) * i - offset, canvas.height);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin((x * 0.01 + time * 0.2 + i * 0.5) * Math.PI) * 100 +
            Math.cos((time * 0.3 + i) * Math.PI) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(59, 130, 246, 0.12)";
      ctx.lineWidth = 2;

      for (let i = 0; i < 4; i++) {
        const size = 150 + i * 80;
        const x = canvas.width / 2 + Math.cos(time * 0.05 + i) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.07 + i) * 250;
        const rotation = time * (0.05 + i * 0.03) + i * Math.PI;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);

        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3 + rotation;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
      }

      const flareX = canvas.width / 2 + Math.cos(time * 0.1) * 200;
      const flareY = canvas.height / 2 + Math.sin(time * 0.12) * 150;

      const flareGradient = ctx.createRadialGradient(
        flareX,
        flareY,
        0,
        flareX,
        flareY,
        300
      );
      flareGradient.addColorStop(0, "rgba(147, 197, 253, 0.1)");
      flareGradient.addColorStop(0.5, "rgba(34, 211, 238, 0.05)");
      flareGradient.addColorStop(1, "rgba(34, 211, 238, 0)");

      ctx.fillStyle = flareGradient;
      ctx.beginPath();
      ctx.arc(flareX, flareY, 300, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const handleGetConsultation = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/20"></div>

      {/* Parallax ambient glow */}
      <div
        className="absolute top-1/3 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            scrollY * 0.5
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        style={{
          transform: `translate(-${mousePosition.x * 0.015}px, -${
            scrollY * 0.3
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="font-extrabold animate-fade-in-up text-center lg:text-left">
              {/* Line 1 */}
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                Empowering Businesses with
              </span>

              {/* Line 2 */}
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                Digital Innovation & Automation
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up stagger-1">
              We build modern software, powerful AI automation systems, and
              high-performance digital strategies that drive measurable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 animate-fade-in-up stagger-2">
              <button
                onClick={handleGetConsultation}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-5 sm:px-6 py-3 rounded-lg font-medium sm:font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 backdrop-blur-sm border border-cyan-400/20 cursor-pointer text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get a Free Consultation</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group border border-cyan-500/50 px-5 sm:px-6 py-3 rounded-lg font-medium sm:font-semibold hover:bg-cyan-500/10 transition-all backdrop-blur-sm flex items-center justify-center space-x-2 hover:border-cyan-400 active:scale-95 cursor-pointer text-sm sm:text-base"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-5 md:pt-6 border-t border-slate-700/50 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up stagger-3">
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-fade-in-up">
                  300+
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Projects Completed</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-fade-in-up stagger-1">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Team Members</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-fade-in-up stagger-2">
                  7+
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Years in Business</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center lg:justify-end hero-enter mt-8 lg:mt-0">
            <div
              className="
                hero-float
                relative
                w-full
                max-w-[320px]
                sm:max-w-[380px]
                md:max-w-[500px]
                lg:max-w-[520px]
                aspect-[4/3]
                rounded-2xl
                overflow-hidden
                bg-gradient-to-br from-slate-800/50 to-slate-950/60
                backdrop-blur-xl
                shadow-2xl shadow-cyan-500/15
                transition-all duration-700 ease-out
                hover:scale-[1.04]
                group
              "
            >
              <img
                src={hero}
                alt="Digital Innovation"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.08]
                "
              />

              {/* Soft cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/15 pointer-events-none" />
            </div>

            {/* Ambient glow */}
            <div
              className="
                absolute
                -bottom-12
                -right-12
                w-[200px]
                h-[200px]
                sm:w-[280px]
                sm:h-[280px]
                md:w-[360px]
                md:h-[360px]
                bg-gradient-to-br from-cyan-500 to-blue-600
                rounded-full
                opacity-25
                blur-[90px]
                -z-10
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}