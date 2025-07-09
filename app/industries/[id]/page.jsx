
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
  GitBranch,
  Sparkles,
  Rocket,
  Eye,
  MessageCircle,
  PlayCircle
} from "lucide-react";

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
  GitBranch,
  Sparkles,
  Rocket
};

const techIconMap = {
  "React": "Code2",
  "React.js": "Code2",
  "Next.js": "Code2",
  "Node.js": "Database", 
  "AWS": "Cloud",
  "AWS HIPAA": "Cloud",
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
  "Google Cloud": "Cloud",
  "Blockchain": "Shield",
  "Security": "Shield",
  "APIs": "GitBranch",
  "Machine Learning": "Sparkles",
  "AI/ML": "Sparkles",
  "Kafka": "Database",
  "Elasticsearch": "Database",
  "WebRTC": "Smartphone",
  "Shopify": "ShoppingCart",
  "WooCommerce": "ShoppingCart",
  "Stripe": "ShoppingCart",
  "PayPal": "ShoppingCart",
  "FHIR": "Heart",
  "HL7": "Heart",
  "Encryption": "Shield",
  "SAP": "Database",
  "IoT": "Zap",
  "Progressive Web Apps": "Smartphone",
  "InfluxDB": "Database",
  "Grafana": "Database",
  "MQTT": "Zap",
  "Cloud Analytics": "Cloud",
  "GPS Tracking": "Truck",
  "Real-time APIs": "GitBranch",
  "Mobile": "Smartphone",
  "GIS": "Globe",
  "PLC Programming": "Zap",
  "SCADA": "Zap",
  "Bioinformatics": "Heart"
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

  const IconComponent = iconMap[industry.icon];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
     
      <div className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Industry Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                {IconComponent && <IconComponent className="w-5 h-5 text-blue-400" />}
                <span className="text-sm font-medium text-white">{industry.title} Solutions</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Collaborate with{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    expert
                  </span>{" "}
                  teams to create
                  <span className="block mt-2">
                    innovative{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {industry.title}
                    </span>{" "}
                    solutions.
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-1 transition-transform duration-300 hover:scale-105">
                <img 
                  src={industry.heroImage} 
                  alt={industry.title}
                  className="w-full h-auto object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
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

          {/* Technologies Section */}
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
                <p className="text-xl text-gray-700">Unlock the potential of your industry with tailored solutions.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {industry.benefits.map((benefit, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="font-bold">{benefit.title}:</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
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

      {/* CTA Section */}
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