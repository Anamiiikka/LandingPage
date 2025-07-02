"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb top-1/4 left-1/4 w-96 h-96 bg-white/[0.03]" />
      <div className="floating-orb bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.02] animation-delay-2000" />
      <div className="floating-orb top-1/2 left-1/2 w-64 h-64 bg-white/[0.01] animation-delay-4000" />
      
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full premium-card mb-8 hover-lift group">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <Sparkles className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Solutions
          </span>
          <Star className="w-4 h-4 text-white/60" />
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="gradient-text shimmer">One-stop solution</span>
          <br />
          <span className="text-white/90">for all your</span>
          <br />
          <span className="gradient-text">business needs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          We're a team of passionate professionals dedicated to helping you achieve 
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Lightning Fast</h3>
            <p className="text-white/60 leading-relaxed">Optimized for speed and performance with cutting-edge technology</p>
          </div>
          
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Secure & Reliable</h3>
            <p className="text-white/60 leading-relaxed">Built with security as a priority and enterprise-grade reliability</p>
          </div>
          
          <div className="premium-card p-8 hover-lift glow-effect group">
            <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
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