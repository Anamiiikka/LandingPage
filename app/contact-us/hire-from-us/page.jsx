'use client';

import { ArrowRight, Users, Target, Award, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

// JSON data for cards
const cardsData = [
  {
    title: "Highly Skilled & Experienced Developers",
    description: "Our team comprises seasoned professionals with deep expertise in modern technologies, frameworks, and industry best practices. We match you with engineers who understand your domain, ensuring faster execution and higher quality outcomes.",
    gradient: "from-yellow-500 to-orange-500",
    image: "https://spaces.is/media/pages/culture/a094348f9c-1713951836/struggle-576x921.6-crop-q85.webp"
  },
  {
    title: "24/7 Availability & Global Support",
    description: "We operate across time zones and provide round-the-clock availability, ensuring seamless collaboration and real-time support regardless of your location. Our clients benefit from uninterrupted development cycles and proactive issue resolution.",
    gradient: "from-gray-900 to-black",
    image: "https://spaces.is/media/pages/culture/2703ad4de9-1713951836/employer-information-576x921.6-crop-q85.webp"
  },
  {
    title: "Agile Delivery with Flexible Engagement Models",
    description: "From rapid prototyping to long-term project scaling, we offer flexible hiring models — including dedicated teams, hourly contracts, and fixed-price engagements — designed to suit your business goals and timeline.",
    gradient: "from-red-600 to-red-700",
    image: "https://spaces.is/media/pages/culture/f85d1292b3-1713951836/team-building-576x921.6-crop-q85.webp"
  },
  {
    title: "Transparent Communication & Project Management",
    description: "Our structured workflow includes clear milestones, weekly reporting, and continuous feedback loops. Dedicated project managers ensure alignment, accountability, and complete visibility throughout the development lifecycle.",
    icon: "target",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Proven Global Delivery Experience",
    description: "We've successfully delivered projects for clients in North America, Europe, the Middle East, and Asia. Our cross-functional, multicultural teams are well-versed in global expectations and compliance requirements.",
    icon: "globe",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "End-to-End Development & Post-Deployment Support",
    description: "Our commitment doesn't end at launch. We offer comprehensive support — including maintenance, feature enhancements, performance monitoring, and security updates — to ensure your application evolves with your business.",
    icon: "award",
    gradient: "from-purple-500 to-pink-600"
  }
];

const iconMap = {
  target: Target,
  globe: Globe,
  award: Award,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center space-x-8"></div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Partner with <span className="italic font-light">experienced</span> developers, build
                  <span className="block">scalable solutions.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  We deliver more than just technical talent — we provide reliability, expertise, and long-term value with 24/7 support and agile delivery models.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us/request-for-services">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2">
                    Talk to an Expert
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Visual Cards */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] flex justify-center">
                <div className="absolute top-0 right-8 w-64 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Premium Workspace</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-16 left-8 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Target className="w-12 h-12 mx-auto mb-3" />
                      <p className="text-sm font-medium">Strategic Focus</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-16 w-40 h-40 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl transform -rotate-12 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-sm font-medium">Top Skills</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-12 left-20 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs font-medium">Innovation</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-32 right-32 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute bottom-24 left-12 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Three Cards */}
      <div className="px-6 py-16">
        <div className="w-full mx-auto">
          <div className="relative">
            {cardsData.slice(0, 3).map((card, index) => {
              const cardHeight = 384;
              const verticalStep = cardHeight * 0.2;
              const cardCount = 3;
              const cardGap = 2;
              const maxContentWidth = 90;
              const totalGapWidth = (cardCount - 1) * cardGap;
              const cardWidth = (maxContentWidth - totalGapWidth) / cardCount;
              const totalContentWidth = (cardCount * cardWidth) + totalGapWidth;
              const sideMargin = (100 - totalContentWidth) / 2;

              return (
                <div
                  key={index}
                  className="h-96 rounded-2xl overflow-hidden relative group hover:scale-105 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to bottom right, ${card.gradient}, rgba(0, 0, 0, 0.8))`,
                    position: 'absolute',
                    left: `${sideMargin + index * (cardWidth + cardGap)}vw`,
                    top: `${index * verticalStep}px`,
                    width: `${cardWidth}vw`,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative z-10 p-4 text-center flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-white text-xs leading-relaxed">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-[550px]"></div>
        </div>
      </div>

      {/* Last Three Cards */}
      <div className="px-6 py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.slice(3).map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
              <div key={index} className="bg-neutral-900 rounded-xl p-6 shadow-md border border-neutral-800 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{card.description}</p>
                
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">Ready to accelerate your development?</h2>
          <p className="text-xl text-gray-300">
            Let's discuss how our experienced developers can help you build scalable, high-quality solutions.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
