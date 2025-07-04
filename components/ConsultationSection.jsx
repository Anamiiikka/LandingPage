"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function ConsultationSection() {
  const handleBookConsultation = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  // Generate random star positions, sizes, and delays
  const stars = Array.from({ length: 20 }, (_, index) => ({
    key: index,
    size: Math.floor(Math.random() * 4) + 2, // Random size between 2px and 5px
    top: `${Math.random() * 100}%`, // Random top position 0% to 100%
    left: `${Math.random() * 100}%`, // Random left position 0% to 100%
    delay: `${Math.random() * 1.5}s`, // Random delay between 0s and 1.5s
  }));

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden bg-black">
      {/* Embedded CSS */}
      <style>
        {`
          .star {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: blink 1.5s infinite;
          }
          @keyframes blink {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
          .floating-orb {
            position: absolute;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
          }
          .floating-orb.animation-delay-2000 {
            animation-delay: 2s;
          }
          .floating-orb.animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .glow-text {
            position: relative;
            animation: glow 2s ease-in-out infinite;
          }
          .glow-text::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2));
            animation: pulse 1.5s infinite;
            z-index: -1;
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

      {/* Floating Orbs and Random Blinking Stars */}
      <div className="floating-orb top-1/4 left-1/4 w-96 h-96 bg-white/[0.03]" />
      <div className="floating-orb bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.02] animation-delay-2000" />
      <div className="floating-orb top-1/2 left-1/2 w-64 h-64 bg-white/[0.01] animation-delay-4000" />
      {stars.map((star) => (
        <div
          key={star.key}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold leading-[2] tracking-tight">
          <span className="gradient-text shimmer">Idea in your mind?</span>
          <br className="my-8" />
          <span className="text-5xl md:text-7xl text-white/90" style={{ background: 'linear-gradient(90deg, #00c4cc, #7d2ae8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Convert it into Reality
          </span>
          <br className="my-8" />
          <span className="text-white/90 relative">
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
}