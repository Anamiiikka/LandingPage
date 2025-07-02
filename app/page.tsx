"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <ServicesSection /> */}
      <TestimonialsSection />
      <Chatbot />
    </main>
  );
}