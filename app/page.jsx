"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";


const ConsultationSection = dynamic(() => import("../components/ConsultationSection"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationSection />
      <Footer />
      <Chatbot />
    </main>
  );
}