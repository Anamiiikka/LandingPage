'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ConsultationSection() {
  const handleBookConsultation = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-white/[0.02]" />
      <div className="floating-orb bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.01]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Get Started Today</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Idea in your mind? <br />
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-600">
              Convert it into Reality
            </span>
            <br /> Don’t Wait
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Have an idea in your mind? Don’t wait—let’s bring it to life together with our expert consultation services.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            onClick={handleBookConsultation}
            className="bg-gradient-to-r from-white to-gray-200 text-black font-semibold text-lg px-10 py-6 rounded-2xl mt-6"
          >
            Book Free Consultation Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}