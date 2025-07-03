"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Users, TrendingUp, Smartphone, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    gradient: "from-white/10 to-white/5"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    gradient: "from-white/8 to-white/3"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers with proven methodologies.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-white/12 to-white/4"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and maximize ROI.",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    gradient: "from-white/9 to-white/2"
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic guidance to help your business leverage technology effectively and scale efficiently.",
    features: ["Tech Strategy", "Process Optimization", "Team Training", "Project Management"],
    gradient: "from-white/11 to-white/6"
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern businesses.",
    features: ["AWS/Azure/GCP", "DevOps", "Monitoring", "Security"],
    gradient: "from-white/7 to-white/1"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your business needs, delivered by experts 
            who understand the modern digital landscape and emerging technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="premium-card hover-lift glow-effect group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 gradient-text group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/60 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-white/50 flex items-center group-hover:text-white/70 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white/40 rounded-full mr-4 group-hover:bg-white/60 transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="premium-button px-12 py-6 text-lg rounded-2xl">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}