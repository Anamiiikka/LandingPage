import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import Link from "next/link";
import Footer from "@/components/Footer.jsx";
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

// Industry data
const industriesData = {
  software: {
    id: "software",
    title: "Software & Technology",
    icon: Code2,
    description: "Empowering businesses with cutting-edge software solutions and digital transformation services",
    heroImage: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-blue-500/20 to-cyan-500/20",
    services: [
      "Custom Software Development",
      "Web Application Development", 
      "Mobile App Development",
      "API Development & Integration",
      "Cloud Migration Services",
      "DevOps & Automation",
      "Software Modernization",
      "Technical Consulting"
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"],
    benefits: [
      { title: "Faster Time to Market", description: "Accelerate product launches with agile development" },
      { title: "Scalable Architecture", description: "Build systems that grow with your business" },
      { title: "Cost Optimization", description: "Reduce operational costs through automation" },
      { title: "Enhanced Security", description: "Enterprise-grade security implementations" }
    ],
    caseStudies: [
      {
        title: "TechFlow Platform Transformation",
        description: "Increased revenue by 300% through custom web platform",
        results: "300% Revenue Growth"
      },
      {
        title: "Enterprise Software Modernization", 
        description: "Legacy system migration to cloud-native architecture",
        results: "75% Performance Improvement"
      }
    ]
  },
  drone: {
    id: "drone",
    title: "Drone & Aerospace",
    icon: Plane,
    description: "Advanced UAV systems and aerospace technology solutions for next-generation applications",
    heroImage: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-purple-500/20 to-indigo-500/20",
    services: [
      "UAV Flight Control Systems",
      "Drone Fleet Management",
      "Aerial Data Analytics",
      "Autonomous Navigation",
      "Real-time Monitoring",
      "Mission Planning Software",
      "Payload Integration",
      "Regulatory Compliance"
    ],
    technologies: ["C++", "Python", "ROS", "OpenCV", "TensorFlow", "GPS/GNSS", "IoT Sensors", "Edge Computing"],
    benefits: [
      { title: "Operational Efficiency", description: "Automate complex aerial operations" },
      { title: "Data Accuracy", description: "Precise data collection and analysis" },
      { title: "Safety Enhancement", description: "Reduce human risk in dangerous environments" },
      { title: "Cost Reduction", description: "Lower operational costs vs traditional methods" }
    ],
    caseStudies: [
      {
        title: "Agricultural Monitoring System",
        description: "Precision agriculture with drone-based crop monitoring",
        results: "40% Yield Improvement"
      },
      {
        title: "Infrastructure Inspection Platform",
        description: "Automated inspection of power lines and bridges",
        results: "60% Time Savings"
      }
    ]
  },
  solar: {
    id: "solar",
    title: "Solar & Renewable Energy",
    icon: Sun,
    description: "Smart energy management systems and renewable energy monitoring solutions for sustainable future",
    heroImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-yellow-500/20 to-orange-500/20",
    services: [
      "Solar Panel Monitoring",
      "Energy Management Systems",
      "Grid Integration Solutions",
      "Performance Analytics",
      "Predictive Maintenance",
      "Smart Inverter Control",
      "Energy Storage Management",
      "Carbon Footprint Tracking"
    ],
    technologies: ["IoT", "Python", "React", "InfluxDB", "Grafana", "MQTT", "Machine Learning", "Cloud Analytics"],
    benefits: [
      { title: "Energy Optimization", description: "Maximize energy production and efficiency" },
      { title: "Predictive Maintenance", description: "Prevent failures before they occur" },
      { title: "Cost Savings", description: "Reduce operational and maintenance costs" },
      { title: "Environmental Impact", description: "Track and reduce carbon footprint" }
    ],
    caseStudies: [
      {
        title: "Smart Solar Farm Management",
        description: "IoT-enabled monitoring for 100MW solar installation",
        results: "25% Efficiency Increase"
      },
      {
        title: "Residential Energy Platform",
        description: "Home energy management with solar integration",
        results: "35% Energy Savings"
      }
    ]
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare & Medical",
    icon: Heart,
    description: "HIPAA-compliant healthcare solutions improving patient care and operational efficiency",
    heroImage: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-red-500/20 to-pink-500/20",
    services: [
      "Electronic Health Records",
      "Patient Management Systems",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "Healthcare Analytics",
      "Appointment Scheduling",
      "Billing & Insurance",
      "Compliance Management"
    ],
    technologies: ["React", "Node.js", "FHIR", "HL7", "AWS HIPAA", "MongoDB", "Encryption", "Blockchain"],
    benefits: [
      { title: "Patient Care Quality", description: "Improve patient outcomes and satisfaction" },
      { title: "Operational Efficiency", description: "Streamline healthcare workflows" },
      { title: "Compliance Assurance", description: "Meet HIPAA and regulatory requirements" },
      { title: "Data Security", description: "Protect sensitive patient information" }
    ],
    caseStudies: [
      {
        title: "MedConnect Patient Portal",
        description: "Comprehensive patient management system",
        results: "75% Time Savings"
      },
      {
        title: "Telemedicine Platform",
        description: "Remote consultation and monitoring system",
        results: "90% Patient Satisfaction"
      }
    ]
  },
  education: {
    id: "education",
    title: "Education & E-Learning",
    icon: GraduationCap,
    description: "Interactive learning platforms and educational technology solutions for modern education",
    heroImage: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-green-500/20 to-emerald-500/20",
    services: [
      "Learning Management Systems",
      "Interactive Course Platforms",
      "Student Assessment Tools",
      "Virtual Classrooms",
      "Educational Mobile Apps",
      "Progress Tracking",
      "Gamification Features",
      "Content Management"
    ],
    technologies: ["React", "Next.js", "Node.js", "WebRTC", "MongoDB", "Firebase", "AI/ML", "Progressive Web Apps"],
    benefits: [
      { title: "Student Engagement", description: "Increase participation and motivation" },
      { title: "Personalized Learning", description: "Adaptive learning paths for each student" },
      { title: "Administrative Efficiency", description: "Streamline educational operations" },
      { title: "Accessibility", description: "Make education available anywhere, anytime" }
    ],
    caseStudies: [
      {
        title: "LearnHub Academy Platform",
        description: "Comprehensive LMS with gamification features",
        results: "85% Engagement Boost"
      },
      {
        title: "Virtual Science Lab",
        description: "Interactive online laboratory simulations",
        results: "95% Learning Retention"
      }
    ]
  },
  ecommerce: {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    icon: ShoppingCart,
    description: "Comprehensive e-commerce solutions driving online sales and customer satisfaction",
    heroImage: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-teal-500/20 to-cyan-500/20",
    services: [
      "E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Relationship Management",
      "Order Fulfillment Systems",
      "Analytics & Reporting",
      "Mobile Commerce Apps",
      "Multi-vendor Marketplaces"
    ],
    technologies: ["React", "Next.js", "Shopify", "WooCommerce", "Stripe", "PayPal", "AWS", "Elasticsearch"],
    benefits: [
      { title: "Sales Growth", description: "Increase online revenue and conversions" },
      { title: "Customer Experience", description: "Enhance shopping experience and satisfaction" },
      { title: "Operational Efficiency", description: "Automate order processing and inventory" },
      { title: "Market Reach", description: "Expand to new markets and channels" }
    ],
    caseStudies: [
      {
        title: "RetailMax E-commerce Platform",
        description: "Modern e-commerce with AI recommendations",
        results: "200% Conversion Increase"
      },
      {
        title: "Multi-vendor Marketplace",
        description: "Comprehensive marketplace platform",
        results: "150% Vendor Growth"
      }
    ]
  },
  fintech: {
    id: "fintech",
    title: "FinTech & Banking",
    icon: Building2,
    description: "Secure financial platforms and innovative banking solutions for the digital economy",
    heroImage: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-slate-500/20 to-gray-500/20",
    services: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Blockchain Solutions",
      "Cryptocurrency Exchanges",
      "Risk Management Systems",
      "Compliance & Reporting",
      "Mobile Banking Apps",
      "Trading Platforms"
    ],
    technologies: ["React", "Node.js", "Blockchain", "Solidity", "PostgreSQL", "Redis", "Kubernetes", "Security"],
    benefits: [
      { title: "Security & Compliance", description: "Bank-grade security and regulatory compliance" },
      { title: "Transaction Speed", description: "Fast and reliable payment processing" },
      { title: "User Experience", description: "Intuitive financial interfaces" },
      { title: "Scalability", description: "Handle millions of transactions daily" }
    ],
    caseStudies: [
      {
        title: "CryptoVault Trading Platform",
        description: "High-performance cryptocurrency trading system",
        results: "99.99% Uptime"
      },
      {
        title: "Digital Banking Solution",
        description: "Complete mobile banking platform",
        results: "500K+ Active Users"
      }
    ]
  },
  logistics: {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: Truck,
    description: "Smart logistics solutions optimizing supply chain operations and delivery efficiency",
    heroImage: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "from-amber-500/20 to-yellow-500/20",
    services: [
      "Fleet Management Systems",
      "Route Optimization",
      "Warehouse Management",
      "Real-time Tracking",
      "Inventory Control",
      "Supply Chain Analytics",
      "Delivery Management",
      "IoT Integration"
    ],
    technologies: ["React", "Node.js", "GPS Tracking", "IoT", "Machine Learning", "MongoDB", "Real-time APIs", "Mobile"],
    benefits: [
      { title: "Cost Reduction", description: "Optimize routes and reduce fuel costs" },
      { title: "Delivery Speed", description: "Faster and more reliable deliveries" },
      { title: "Visibility", description: "Real-time tracking and monitoring" },
      { title: "Efficiency", description: "Streamlined warehouse and fleet operations" }
    ],
    caseStudies: [
      {
        title: "Smart Fleet Management",
        description: "IoT-enabled fleet tracking and optimization",
        results: "30% Cost Reduction"
      },
      {
        title: "Warehouse Automation",
        description: "Automated inventory and order management",
        results: "50% Efficiency Gain"
      }
    ]
  }
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
                <industry.icon className="w-4 h-4 text-white/60" />
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