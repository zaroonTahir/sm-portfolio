// File: src/components/AnimatedText.jsx
import React, { useRef, useEffect, useState } from 'react';

/**
 * Component that animates text character by character
 * @param {string} text - Text to animate
 * @param {string} className - CSS classes to apply
 * @param {number} delay - Delay in ms before animation starts
 * @param {number} charDelay - Delay between each character
 * @returns {JSX.Element}
 */
export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  charDelay = 0.03
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: isInView ? 1 : 0,
            transform: isInView 
              ? 'translateY(0) rotateX(0deg)' 
              : 'translateY(20px) rotateX(-90deg)',
            transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * charDelay}s`,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/**
 * Alternative: Word by word animation
 */
export function AnimatedTextWord({ 
  text, 
  className = '', 
  delay = 0,
  wordDelay = 0.1
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            marginRight: '0.25em',
            opacity: isInView ? 1 : 0,
            transform: isInView 
              ? 'translateY(0) scale(1)' 
              : 'translateY(20px) scale(0.9)',
            transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * wordDelay}s`
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/**
 * Alternative: Line by line animation
 */
export function AnimatedTextLine({ 
  lines, 
  className = '', 
  delay = 0,
  lineDelay = 0.15
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            overflow: 'hidden',
            opacity: isInView ? 1 : 0,
            transform: isInView 
              ? 'translateY(0)' 
              : 'translateY(30px)',
            transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * lineDelay}s`
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}