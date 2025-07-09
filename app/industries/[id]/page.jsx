import { notFound } from "next/navigation";
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
  Truck,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Briefcase,
  ChevronRight
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
  Truck,
  TrendingUp,
  Shield,
  Zap,
  Users
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
    openGraph: {
      title: `${industry.title} Solutions | Adalabs`,
      description: industry.description,
      images: [industry.heroImage],
    },
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb top-1/4 right-1/4 w-64 h-64 bg-white/[0.02] animate-pulse" />
        <div className="floating-orb bottom-1/4 left-1/4 w-48 h-48 bg-white/[0.01] animate-pulse delay-1000" />
        <div className="floating-orb top-1/2 right-1/6 w-32 h-32 bg-white/[0.015] animate-pulse delay-500" />
      </div>

      {/* Enhanced Hero Section (Unchanged) */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#industries" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">{industry.title}</span>
          </div>

          <Link href="/#industries" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card">
                {IconComponent && <IconComponent className="w-5 h-5 text-white/60" />}
                <span className="text-sm font-medium text-white/80">Industry Focus</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
                {industry.title}
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed">
                {industry.description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{industry.services.length}+</div>
                  <div className="text-sm text-white/60">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{industry.technologies.length}+</div>
                  <div className="text-sm text-white/60">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{industry.caseStudies.length}</div>
                  <div className="text-sm text-white/60">Success Stories</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="premium-button px-8 py-4 rounded-xl group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="premium-card overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                <div className="relative">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">Global Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Our Services</h2>
                <p className="text-white/60 text-sm mt-1">Comprehensive solutions tailored for your industry</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.services.map((service, index) => (
                <div 
                  key={index} 
                  className="p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Technologies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Technologies We Use</h2>
                <p className="text-white/60 text-sm mt-1">Cutting-edge tools and frameworks</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {industry.technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm hover:bg-white/20 hover:text-white transition-all duration-300 cursor-pointer inline-flex items-center gap-2">
                    <Code2 className="w-3 h-3" />
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Benefits */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">BENEFITS</h2>
                <p className="text-white/60 text-sm mt-1">Unlock the potential of IoT for your business.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {industry.benefits.map((benefit, index) => (
                <p key={index} className="text-white/70">
                  {benefit.title}: {benefit.description}
                </p>
              ))}
            </div>
          </div>

          {/* Enhanced Case Studies */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Success Stories</h2>
                <p className="text-white/60 text-sm mt-1">Real results from real clients</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {industry.caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="p-6 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 hover:text-white/90 transition-colors">{study.title}</h3>
                      <p className="text-white/70 mb-4 hover:text-white/80 transition-colors">{study.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/20">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">{study.results}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Ready to Transform Your {industry.title.split(' &')[0]} Business?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expertise in {industry.title.toLowerCase()} can help you achieve your business goals with innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="premium-button px-8 py-4 rounded-xl group">
                <Star className="w-4 h-4 mr-2" />
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <Users className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm">Industry Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}