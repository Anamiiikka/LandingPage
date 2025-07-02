"use client";

import { useParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Calendar, Clock, CheckCircle } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import Link from 'next/link';

export default function TestimonialPage() {
  const params = useParams();
  const testimonialId = parseInt(params.id as string);
  const testimonial = testimonialsData.find(t => t.id === testimonialId);

  if (!testimonial) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Testimonial Not Found</h1>
          <Link href="/">
            <Button className="premium-button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="premium-card p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                <span className="text-sm font-medium text-white">{testimonial.category}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              {testimonial.title}
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {testimonial.summary}
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Timeline: {testimonial.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Result: {testimonial.results}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <Card className="premium-card p-8 mb-8">
                {/* Hero Image */}
                <div 
                  className="aspect-video rounded-2xl mb-8 relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${testimonial.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold gradient-text mb-6">The Challenge</h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    When {testimonial.company} approached us, they were facing significant challenges in their digital infrastructure. 
                    Their existing systems were outdated, inefficient, and couldn't scale with their growing business needs. 
                    They needed a comprehensive solution that would not only solve their immediate problems but also position 
                    them for future growth.
                  </p>

                  <h2 className="text-2xl font-bold gradient-text mb-6">Our Solution</h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We developed a custom solution tailored specifically to {testimonial.company}'s unique requirements. 
                    Our team worked closely with their stakeholders to understand their business processes and design 
                    a system that would streamline operations while providing the flexibility they needed to adapt to 
                    changing market conditions.
                  </p>

                  <h2 className="text-2xl font-bold gradient-text mb-6">The Results</h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    The implementation exceeded all expectations. {testimonial.company} saw immediate improvements in 
                    efficiency and user satisfaction. The new system not only solved their original challenges but 
                    also opened up new opportunities for growth and innovation.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 my-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Client Testimonial</h3>
                    <blockquote className="text-lg text-white/80 italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="font-semibold text-white">{testimonial.client}</div>
                      <div className="text-white/60">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold gradient-text mb-6">Key Achievements</h2>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Achieved {testimonial.results} within {testimonial.timeline}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Implemented scalable architecture for future growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Improved user experience and operational efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Delivered comprehensive training and ongoing support</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="premium-card p-6 mb-6">
                <h3 className="text-xl font-semibold gradient-text mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Client</div>
                    <div className="font-medium text-white">{testimonial.company}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Industry</div>
                    <div className="font-medium text-white">{testimonial.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Timeline</div>
                    <div className="font-medium text-white">{testimonial.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Key Result</div>
                    <div className="font-medium text-white">{testimonial.results}</div>
                  </div>
                </div>
              </Card>

              <Card className="premium-card p-6 mb-6">
                <h3 className="text-xl font-semibold gradient-text mb-4">Services Provided</h3>
                <div className="space-y-2">
                  {testimonial.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/70 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="premium-card p-6">
                <h3 className="text-xl font-semibold gradient-text mb-4">Ready to Start?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Get similar results for your business with our proven approach.
                </p>
                <Button className="w-full premium-button mb-3">
                  Get Free Consultation
                </Button>
                <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                  View Portfolio
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}