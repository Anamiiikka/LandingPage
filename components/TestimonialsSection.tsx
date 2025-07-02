"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Clock, Users, Award } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

const categoryIcons = {
  "Web Development": TrendingUp,
  "E-commerce": Users,
  "Healthcare": Award,
  "FinTech": Star,
  "Education": Clock,
  "Manufacturing": TrendingUp
};

export default function TestimonialsSection() {
  const handleCardClick = (testimonialId: number) => {
    // In a real application, this would navigate to the full testimonial/blog page
    console.log(`Navigate to testimonial ${testimonialId}`);
    // For now, we'll just scroll to top or show an alert
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Client Transformations</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable growth 
            and digital transformation through innovative solutions and strategic partnerships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => {
            const IconComponent = categoryIcons[testimonial.category as keyof typeof categoryIcons] || TrendingUp;
            
            return (
              <Card 
                key={testimonial.id} 
                className="premium-card overflow-hidden hover-lift glow-effect group cursor-pointer transition-all duration-500"
                onClick={() => handleCardClick(testimonial.id)}
              >
                {/* Blog Preview Section */}
                <div className="relative overflow-hidden">
                  <div 
                    className="aspect-video bg-gradient-to-br from-white/15 to-white/5 relative overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${testimonial.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10">
                        <IconComponent className="w-3 h-3 text-white" />
                        <span className="text-xs font-medium text-white">{testimonial.category}</span>
                      </div>
                    </div>

                    {/* Results Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/20">
                        <span className="text-xs font-semibold text-green-300">{testimonial.results}</span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{testimonial.timeline}</span>
                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Blog Title */}
                  <h3 className="text-xl font-semibold mb-3 gradient-text group-hover:text-white transition-colors duration-300 line-clamp-2">
                    {testimonial.title}
                  </h3>
                  
                  {/* One-liner Summary */}
                  <p className="text-white/60 text-sm mb-4 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {testimonial.summary}
                  </p>

                  {/* Testimonial Quote */}
                  <blockquote className="text-white/70 text-sm italic mb-6 border-l-2 border-white/20 pl-4 group-hover:text-white/90 transition-colors duration-300">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-medium text-white text-sm">{testimonial.client}</div>
                      <div className="text-white/50 text-xs">{testimonial.role}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.services.slice(0, 2).map((service, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-lg border border-white/10"
                      >
                        {service}
                      </span>
                    ))}
                    {testimonial.services.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded-lg border border-white/5">
                        +{testimonial.services.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group/btn"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="premium-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white/60 mb-8 text-lg">
              Join hundreds of businesses that have transformed their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button px-8 py-3 text-lg rounded-xl">
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View All Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}