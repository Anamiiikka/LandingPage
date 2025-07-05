"use client";

import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import {
  Code2,
  Plane,
  Sun,
  Heart,
  GraduationCap,
  ShoppingCart,
  Building2,
  Truck
} from "lucide-react";

const industries = [
  {
    id: "software",
    title: "Software & Technology",
    icon: Code2,
    description: "Custom software solutions, web applications, and digital transformation services",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    hoverColor: "hover:border-blue-500/60"
  },
  {
    id: "drone",
    title: "Drone & Aerospace",
    icon: Plane,
    description: "UAV systems, flight control software, and aerospace technology solutions",
    gradient: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    hoverColor: "hover:border-purple-500/60"
  },
  {
    id: "solar",
    title: "Solar & Renewable Energy",
    icon: Sun,
    description: "Smart energy management systems and renewable energy monitoring solutions",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    hoverColor: "hover:border-yellow-500/60"
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    icon: Heart,
    description: "HIPAA-compliant systems, patient management, and medical device integration",
    gradient: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30",
    hoverColor: "hover:border-red-500/60"
  },
  {
    id: "education",
    title: "Education & E-Learning",
    icon: GraduationCap,
    description: "Learning management systems, educational apps, and interactive platforms",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    hoverColor: "hover:border-green-500/60"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    icon: ShoppingCart,
    description: "Online stores, inventory management, and customer experience platforms",
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30",
    hoverColor: "hover:border-teal-500/60"
  },
  {
    id: "fintech",
    title: "FinTech & Banking",
    icon: Building2,
    description: "Secure financial platforms, payment systems, and blockchain solutions",
    gradient: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
    hoverColor: "hover:border-slate-500/60"
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: Truck,
    description: "Fleet management, tracking systems, and supply chain optimization",
    gradient: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30",
    hoverColor: "hover:border-amber-500/60"
  }
];

export default function IndustriesSection() {
  const router = useRouter();

  const handleIndustryClick = (industryId) => {
    router.push(`/industries/${industryId}`);
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Industries We Serve</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            From cutting-edge technology to traditional industries, we deliver tailored solutions 
            that drive innovation and growth across diverse sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <Card 
              key={industry.id}
              className={`premium-card overflow-hidden hover-lift glow-effect group cursor-pointer transition-all duration-500 ${industry.borderColor} ${industry.hoverColor}`}
              onClick={() => handleIndustryClick(industry.id)}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg border border-white/10`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 gradient-text group-hover:text-white transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                  {industry.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group/btn p-0 h-auto"
                >
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="premium-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-white/60 mb-6">
              We work with businesses across all sectors. Let's discuss how we can help transform your industry with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button px-8 py-3 rounded-xl">
                Discuss Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-white/[0.02]" />
        <div className="floating-orb bottom-1/4 right-1/4 w-48 h-48 bg-white/[0.01]" />
      </div>
    </section>
  );
}