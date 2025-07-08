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
    
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full premium-card mb-8 hover-lift group">
          <div className="w-2 h-2 bg-white rounded-full" />
          <Sparkles className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Solutions
          </span>
          <Star className="w-4 h-4 text-white/60" />
        </div>

        {/* Main heading - optimized for LCP */}
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

        {/* Feature cards - simplified hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Lightning Fast</h3>
            <p className="text-white/60 leading-relaxed">Optimized for speed and performance with cutting-edge technology</p>
          </div>
          
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Secure & Reliable</h3>
            <p className="text-white/60 leading-relaxed">Built with security as a priority and enterprise-grade reliability</p>
          </div>
          
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Modern Design</h3>
            <p className="text-white/60 leading-relaxed">Beautiful, responsive interfaces that captivate and convert</p>
          </div>
        </div>
      </div>
    </section>
  );
}