"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, ArrowRight } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">All Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 leading-tight">
              Client Transformations
            </h1>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              Explore our complete collection of success stories and see how we have helped
              businesses across industries achieve remarkable growth and digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="premium-card overflow-hidden hover-lift glow-effect group transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div
                    className="aspect-[4/3] bg-gradient-to-br from-white/15 to-white/5 relative overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${testimonial.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
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
                  <Link href={`/testimonials/${testimonial.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group/btn"
                      onClick={() => console.log(`Navigating to /testimonials/${testimonial.id}`)}
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}