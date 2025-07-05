import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";
import testimonialsData from "@/data/testimonials.json";
import Footer from "@/components/Footer.jsx";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Quote,
  Play,
  Award,
  Target,
  Lightbulb
} from "lucide-react";

export async function generateStaticParams() {
  return testimonialsData.map((testimonial) => ({
    id: testimonial.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const testimonial = testimonialsData.find((t) => t.id === parseInt(params.id));
  if (!testimonial) {
    return {
      title: "Case Study Not Found",
    };
  }
  return {
    title: `${testimonial.title} | Case Study`,
    description: testimonial.summary,
    openGraph: {
      images: [testimonial.image],
    },
  };
}

export default function TestimonialPage({ params }) {
  const testimonial = testimonialsData.find((t) => t.id === parseInt(params.id));

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="floating-orb top-1/4 right-1/4 w-64 h-64 bg-white/[0.02]" />
        
        <div className="max-w-6xl mx-auto">
          <Link href="/testimonials#testimonials" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Award className="w-4 h-4 text-white/60" />
                <span className="text-sm font-medium text-white/80">Case Study</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
                {testimonial.title}
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {testimonial.summary}
              </p>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {testimonial.highlights && testimonial.highlights.map((highlight, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex items-center gap-3 mb-2">
                      {highlight.icon === 'Clock' && <Clock className="w-5 h-5 text-white/60" />}
                      {highlight.icon === 'TrendingUp' && <TrendingUp className="w-5 h-5 text-white/60" />}
                      {highlight.icon === 'Award' && <Award className="w-5 h-5 text-white/60" />}
                      {highlight.icon === 'Users' && <Users className="w-5 h-5 text-white/60" />}
                      <span className="text-sm text-white/60">{highlight.label}</span>
                    </div>
                    <div className="font-semibold text-white">{highlight.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="premium-card overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.company}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.client}</div>
                      <div className="text-white/70 text-sm">{testimonial.role}</div>
                      <div className="text-white/60 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          {testimonial.introduction && (
            <div className="premium-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Introduction</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                {testimonial.introduction}
              </p>
            </div>
          )}

          {/* Opportunity */}
          {testimonial.opportunity && (
            <div className="premium-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">The Opportunity</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {testimonial.opportunity.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/70">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Goals</h3>
                  <ul className="space-y-3">
                    {testimonial.opportunity.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/70">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Solution */}
          {testimonial.solution && (
            <div className="premium-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Our Solution</h2>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {testimonial.solution.approach}
              </p>
              
              {testimonial.solution.keyFeatures && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features Delivered</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {testimonial.solution.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 glass-card p-4">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {testimonial.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Outcome */}
          {testimonial.outcome && (
            <div className="premium-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Results & Impact</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {testimonial.outcome.metrics.map((metric, index) => (
                  <div key={index} className="glass-card p-6 text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                    <div className="font-semibold text-white mb-1">{metric.label}</div>
                    <div className="text-white/60 text-sm">{metric.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Long-term Impact</h3>
                <p className="text-white/80 leading-relaxed">{testimonial.outcome.longTermImpact}</p>
              </div>
            </div>
          )}

          {/* Client Quote */}
          <div className="premium-card p-8 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <Quote className="w-16 h-16 text-white/10" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Client Testimonial</h2>
            </div>
            
            <blockquote className="text-xl text-white/90 leading-relaxed mb-6 italic">
              "{testimonial.testimonial}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.client}</div>
                <div className="text-white/70">{testimonial.role}</div>
                <div className="text-white/60">{testimonial.company}</div>
              </div>
            </div>
          </div>

          {/* Video Testimonial */}
          {testimonial.videoTestimonial && testimonial.videoTestimonial.available && (
            <div className="premium-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Video Testimonial</h2>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={testimonial.videoUrl}
                  title={`${testimonial.client} - Video Testimonial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <p className="text-white/70 mt-4 text-center">
                Hear directly from {testimonial.client} about their experience working with our team.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="premium-card p-8 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results. Our team is ready to create a custom solution for your unique challenges.
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
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}