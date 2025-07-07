"use client";

import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import EmblaCarousel from 'embla-carousel-react';

export default function TestimonialsSection() {
  const router = useRouter();
  const [emblaRef, emblaApi] = EmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToShow: 2, slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToShow: 3, slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emblaApi]);

  const handleReadFullStory = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
  };

  const handleCardClick = (testimonialId) => {
    router.push(`/testimonials/${testimonialId}`);
  };

  // Get the first testimonial's video URL for the main video section
  const featuredVideoUrl = testimonialsData[0]?.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
      
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

        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <Card 
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
                      <h3 className="text-lg font-semibold mb-3 gradient-text group-hover:text-white transition-colors duration-300 line-clamp-2">
                        {testimonial.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                        {testimonial.summary}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-medium text-white text-sm">{testimonial.client}</div>
                          <div className="text-white/50 text-xs">{testimonial.company}</div>
                        </div>
                      </div>
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

        
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/10 p-0 pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>
            <Button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/10 p-0 pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>

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