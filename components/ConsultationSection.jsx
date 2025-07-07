'use client';

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ConsultationSection = () => {
  const handleBookConsultation = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="consultation-section" className="py-16 bg-background px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold leading-[2] tracking-tight">
          <span className="gradient-text">Idea in your mind?</span>
          <br className="my-8" />
          <span style={{ background: 'linear-gradient(90deg, #00c4cc, #7d2ae8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Convert it into Reality.
          </span>
          <br className="my-8" />
          <span className="text-white/90">
            Don’t wait
          </span>
        </h2>

        <Button
          onClick={handleBookConsultation}
          className="bg-gradient-to-r from-white to-gray-200 text-black font-semibold text-lg px-10 py-6 rounded-2xl mt-8"
        >
          Book Free Consultation Now
          <Sparkles className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default ConsultationSection;