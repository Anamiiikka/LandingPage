"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides configuration
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, testimonialsData.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxSlides]);

  const handleReadFullStory = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
  };

  const handleCardClick = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
  };

  const handleViewAllStories = () => {
    router.push('/testimonials');
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

        {/* Testimonials Slider */}
        <div className="relative mb-20">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: `${(testimonialsData.length / slidesToShow) * 100}%`
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / testimonialsData.length}%` }}
                >
                  <Card 
                    className="premium-card overflow-hidden hover-lift glow-effect group transition-all duration-500 cursor-pointer h-full"
                    onClick={() => handleCardClick(testimonial.id)}
                  >
                    {/* Image Section */}
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
                        
                        {/* Category Badge */}
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
                          e.stopPropagation();
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
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
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
                onClick={handleViewAllStories}
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