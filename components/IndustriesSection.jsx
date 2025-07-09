import React from 'react';
import Link from 'next/link';
import { 
  Building2,
  TrendingUp,
  Code2,
  ShoppingCart,
  GraduationCap,
  Sun,
  Heart,
  Shield,
  Zap,
  Users,
  Truck
} from 'lucide-react';
import industriesData from '@/data/industriesData.json';
const iconMap = {
  Building2,
  TrendingUp,
  Code2,
  ShoppingCart,
  GraduationCap,
  Sun,
  Heart,
  Shield,
  Zap,
  Users,
  Truck
};

const industries = Object.values(industriesData);

export default function IndustriesSection() {
  return (
    <section className="bg-gray-100 py-10 px-5 sm:px-10 md:px-52">
      <div className="container mx-auto">
        <div className="lg:w-3/4">
          <div className="py-8">
            <h2 className="text-base sm:text-xl font-bold text-black uppercase">
              INDUSTRIES WE SERVE
            </h2>
            <h3 className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo">
              Select your domain. Discover the value we bring.
            </h3>
          </div>
        </div>
        <div className="px-0">
          <div className="flex flex-wrap" role="list">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <div
                  key={industry.id}
                  className="w-full lg:w-1/2"
                  role="listitem"
                >
                  <Link
                    href={`/industries/${industry.id}`}
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10 text-black">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                        <Icon className="size-6" />
                      </span>
                      {industry.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}