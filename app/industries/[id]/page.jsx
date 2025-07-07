import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import Link from "next/link";
import Footer from "@/components/Footer.jsx";
import industriesData from "@/data/industriesData.json";
import { 
  ArrowLeft, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Target,
  Award,
  Lightbulb,
  Code2,
  Plane,
  Sun,
  Heart,
  GraduationCap,
  ShoppingCart,
  Building2,
  Truck
} from "lucide-react";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Code2,
  Plane,
  Sun,
  Heart,
  GraduationCap,
  ShoppingCart,
  Building2,
  Truck
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }) {
  const industry = industriesData[params.id];
  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }
  return {
    title: `${industry.title} Solutions | Adalabs`,
    description: industry.description,
  };
}

export default function IndustryPage({ params }) {
  const industry = industriesData[params.id];

  if (!industry) {
    notFound();
  }

  // Get the icon component from the mapping
  const IconComponent = iconMap[industry.icon];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="floating-orb top-1/4 right-1/4 w-64 h-64 bg-white/[0.02]" />
        
        <div className="max-w-6xl mx-auto">
          <Link href="/#industries" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                {IconComponent && <IconComponent className="w-4 h-4 text-white/60" />}
                <span className="text-sm font-medium text-white/80">Industry Focus</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
                {industry.title}
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="premium-button px-8 py-3 rounded-xl">
                  Start Your Project
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="premium-card overflow-hidden">
                <img 
                  src={industry.heroImage} 
                  alt={industry.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="premium-card p-8 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Our Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.services.map((service, index) => (
                <div key={index} className="glass-card p-4 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="premium-card p-8 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Technologies We Use</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {industry.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="premium-card p-8 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Key Benefits</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="premium-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Success Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {industry.caseStudies.map((study, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{study.title}</h3>
                  <p className="text-white/70 mb-4">{study.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/20 border border-green-400/30">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{study.results}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="premium-card p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Transform Your {industry.title.split(' &')[0]} Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise in {industry.title.toLowerCase()} can help you achieve your business goals with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button px-8 py-3 rounded-xl">
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}