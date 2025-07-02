"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Award, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle, gradient: "from-white/15 to-white/5" },
  { label: "Client Satisfaction", value: "99%", icon: Star, gradient: "from-white/12 to-white/3" },
  { label: "Awards Won", value: "25+", icon: Award, gradient: "from-white/18 to-white/7" },
  { label: "Team Members", value: "50+", icon: Users, gradient: "from-white/10 to-white/2" },
];

const features = [
  {
    title: "Component Packs",
    subtitle: "20+",
    description: "Ever growing collection of components to help you ship more website features faster with modern design patterns",
    gradient: "from-white/8 to-white/2",
    icon: CheckCircle
  },
  {
    title: "Templates",
    subtitle: "8+",
    description: "Beautiful, modern and best templates to help you stand out from the crowd with unique designs",
    gradient: "from-white/12 to-white/4",
    icon: TrendingUp
  },
  {
    title: "Lifetime Updates",
    subtitle: "∞",
    description: "Get the latest components and templates forever with our lifetime updates. No extra fees, ever.",
    gradient: "from-white/15 to-white/6",
    icon: Clock
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <Card key={index} className="premium-card text-center p-8 hover-lift glow-effect group">
              <CardContent className="p-0">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Premium Features</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="premium-card overflow-hidden hover-lift glow-effect group">
              <div className={`aspect-video bg-gradient-to-br ${feature.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="text-4xl font-bold text-white mb-2">{feature.subtitle}</div>
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                {/* Abstract Design Elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm border border-white/10"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}