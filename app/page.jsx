"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import JoinTeamSection from "@/components/JoinTeamSection";


const ConsultationSection = dynamic(() => import("../components/ConsultationSection"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
       <ServicesSection />
      <section id="industries">
        <IndustriesSection />
      </section> 
      <TestimonialsSection />
      <FAQSection />
      <ConsultationSection />
      <JoinTeamSection/>
      <Footer />
      <Chatbot />
    </main>
  );
}