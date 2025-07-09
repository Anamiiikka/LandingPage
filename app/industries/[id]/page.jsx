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
  ChevronRight,
  Database,
  Cloud,
  Smartphone,
  Server,
  GitBranch
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
  Users,
  Database,
  Cloud,
  Smartphone,
  Server,
  GitBranch
};

// Technology icon mapping
const techIconMap = {
  "React.js": "Code2",
  "Node.js": "Database", 
  "AWS": "Cloud",
  "React Native": "Smartphone",
  "MongoDB": "Server",
  "Docker": "GitBranch",
  "Python": "Code2",
  "JavaScript": "Code2",
  "TypeScript": "Code2",
  "Vue.js": "Code2",
  "Angular": "Code2",
  "Express.js": "Server",
  "PostgreSQL": "Database",
  "Redis": "Database",
  "Kubernetes": "Cloud",
  "Azure": "Cloud",
  "Google Cloud": "Cloud"
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Collaborate with <span className="italic font-light">expert</span> teams to create
                  <span className="block">innovative {industry.title} solutions.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  We empower your {industry.title.toLowerCase()} success with cutting-edge technology, dedicated support, and tailored strategies for growth.
                </p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={industry.heroImage} 
                alt={industry.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <p className="text-xl text-gray-700">Comprehensive solutions tailored for your industry.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {industry.services.map((service, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="font-bold">{service}:</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced {service.toLowerCase()} solutions designed to meet your specific business requirements and drive operational excellence.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section - Modified */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">TECHNOLOGIES WE USE</h2>
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <p className="text-xl text-gray-700">Cutting-edge tools and frameworks for optimal performance.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {industry.technologies.map((tech, index) => {
                const iconName = techIconMap[tech] || "Code2";
                const TechIcon = iconMap[iconName];
                return (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      {TechIcon && <TechIcon className="w-8 h-8 text-blue-600" />}
                    </div>
                    <span className="text-sm font-medium text-gray-800 text-center">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">BENEFITS</h2>
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <p className="text-xl text-gray-700">Unlock the potential of IoT for your business.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="font-bold">Explore New Business Horizons:</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Envision and implement innovative business models by harnessing the power of digital transformation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="font-bold">Enhance Operational Flexibility:</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Adapt quickly to changing market demands with agile and responsive business practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="font-bold">Elevate Customer Satisfaction:</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamline processes to remove friction, ensuring product and service consistency that delights customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="font-bold">Promote Sustainability:</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lower emissions and energy use, contributing to a smaller carbon footprint while improving safety and quality of life.
                </p>
              </div>
            </div>
          </div>

          {/* Case Studies Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SUCCESS STORIES</h2>
              <div className="border-l-4 border-blue-500 pl-4 mb-8">
                <p className="text-xl text-gray-700">Real results from real clients who trusted our expertise.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {industry.caseStudies.map((study, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="font-bold">{study.title}:</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {study.description} - Achieved {study.results} through innovative implementation and strategic optimization.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4 text-white">
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

