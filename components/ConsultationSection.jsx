// app/components/ConsultationSection.jsx
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ConsultationSection = () => {
  const handleBookConsultation = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Generate and append stars to the section client-side with a unique class
    const section = document.querySelector("#consultation-section");
    if (section) {
      for (let i = 0; i < 20; i++) {
        const star = document.createElement("div");
        star.className = "consultation-star";
        star.style.width = `${Math.floor(Math.random() * 4) + 2}px`;
        star.style.height = `${Math.floor(Math.random() * 4) + 2}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1.5}s`;
        star.style.position = "absolute";
        section.appendChild(star);
      }
    }
  }, []);

  return (
    <section id="consultation-section" className="py-16 bg-background px-4 relative overflow-hidden">
      {/* Embedded CSS with scoped class */}
      <style>
        {`
          .consultation-star {
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: consultation-blink 1.5s infinite;
          }
          @keyframes consultation-blink {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
          .glow-text {
            position: relative;
            display: inline-block; /* Ensure proper positioning */
            animation: glow 2s ease-in-out infinite;
          }
          .glow-text::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px; /* Increased height for visibility */
            bottom: -6px; /* Adjusted to position below text */
            left: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
            animation: pulse 1.5s infinite;
            z-index: 1; /* Ensure it’s above other elements */
          }
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
            50% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.6); }
          }
          @keyframes pulse {
            0%, 100% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold leading-[2] tracking-tight">
          <span className="gradient-text shimmer">Idea in your mind?</span>
          <br className="my-8" />
          <span className="text-5xl md:text-7xl text-white/90" style={{ background: 'linear-gradient(90deg, #00c4cc, #7d2ae8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Convert it into Reality.
          </span>
          <br className="my-8" />
          <span className="text-white/90">
            <span className="glow-text">Don’t wait</span>
          </span>
        </h2>

        {/* CTA Button */}
        <Button
          onClick={handleBookConsultation}
          className="premium-button group text-lg px-10 py-6 rounded-2xl mt-8"
        >
          Book Free Consultation Now
          <Sparkles className="ml-3 w-5 h-5 transition-transform group-hover:scale-110" />
        </Button>
      </div>
    </section>
  );
};

export default ConsultationSection;