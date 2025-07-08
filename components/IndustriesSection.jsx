import React from 'react';
import { Lightbulb, Building2, Truck, Heart, GraduationCap, ShoppingCart, Sun, Plane } from 'lucide-react';
import industriesData from '@/data/industriesData.json';

const industries = {
  "Banking": { icon: Building2, id: "fintech" },
  "Capital Markets": { icon: Building2, id: "fintech" },
  "Communications, Media, and Information Services": { icon: Lightbulb, id: "software" },
  "Consumer Goods and Distribution": { icon: ShoppingCart, id: "ecommerce" },
  "Education": { icon: GraduationCap, id: "education" },
  "Energy, Resources, and Utilities": { icon: Sun, id: "solar" },
  "Healthcare": { icon: Heart, id: "healthcare" },
  "High Tech": { icon: Lightbulb, id: "software" },
  "Insurance": { icon: Building2, id: "fintech" },
  "Life Sciences": { icon: Heart, id: "healthcare" },
  "Manufacturing": { icon: Lightbulb, id: "software" },
  "Public Services": { icon: Building2, id: "fintech" },
  "Retail": { icon: ShoppingCart, id: "ecommerce" },
  "Travel and Logistics": { icon: Truck, id: "logistics" },
};

const IndustriesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
          Select your domain. Discover the value we bring.
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Explore how we tailor our solutions to meet the unique needs of your industry.
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-4">
        {Object.entries(industries).map(([title, { icon: Icon, id }]) => {
          const industry = industriesData[id] || {};
          return (
            <div key={title} className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <Icon className="w-8 h-8 text-white/70 mr-4" />
              <div className="flex-1 text-left">
                <h3 className="text-sm font-medium text-white">{title}</h3>
                <p className="text-xs text-white/70">{industry.description || 'Tailored solutions'}</p>
              </div>
              <a href={`/industries/${id}`} className="premium-button px-2 py-1 text-xs rounded-xl">Learn More</a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesSection;