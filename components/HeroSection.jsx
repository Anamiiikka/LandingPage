"use client";

import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Sparkles, Zap, Shield, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      
     
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto text-center z-10">
    
      
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="gradient-text">One-stop solution</span>
          <br />
          <span className="text-white/90">for all your</span>
          <br />
          <span className="gradient-text">IT needs</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          We are a team of passionate professionals dedicated to helping you achieve 
          your business goals with cutting-edge solutions and expert guidance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button size="lg" className="premium-button group text-lg px-10 py-6 rounded-2xl">
            Get Started
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-6 rounded-2xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            View Portfolio
          </Button>
        </div>

        
      </div>
    </section>
  );
}