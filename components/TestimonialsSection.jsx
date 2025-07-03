"use client";

import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { useRouter } from 'next/navigation';

export default function TestimonialsSection() {
  const router = useRouter();

  const handleReadFullStory = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
  };

  const handleCardClick = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
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
            Discover how we have helped businesses across industries achieve remarkable growth 
            and digital transformation through innovative solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="premium-card overflow-hidden hover-lift glow-effect group transition-all duration-500 cursor-pointer"
              onClick={() => handleCardClick(testimonial.id)}
            >
              <div className="relative overflow-hidden">
                <div 
                  className="aspect-[4/3] bg-gradient-to-br from-white/15 to-white/5 relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${testimonial.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10">
                      <span className="text-xs font-medium text-white">{testimonial.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Topic/Title */}
                <h3 className="text-lg font-semibold mb-3 gradient-text group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {testimonial.title}
                </h3>
                
                {/* One-line Summary */}
                <p className="text-white/60 text-sm mb-4 leading-relaxed group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                  {testimonial.summary}
                </p>

                {/* Client Info with Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.client}</div>
                    <div className="text-white/50 text-xs">{testimonial.company}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Read Full Story Button */}
                <Button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when button is clicked
                    handleReadFullStory(testimonial.id);
                  }}
                  variant="ghost" 
                  className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group/btn"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="premium-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white/60 mb-6">
              Join hundreds of businesses that have transformed their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button px-8 py-3 rounded-xl">
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
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