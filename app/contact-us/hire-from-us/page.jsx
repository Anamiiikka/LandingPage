'use client';

import { ArrowRight, Users, Target, Award, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

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
  const advantageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.className += ' animate-collapse';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    advantageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center sticky top-0 z-20 bg-black/80 backdrop-blur-md p-4 sm:p-6 lg:p-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">Adalabs</Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="overflow-hidden flex items-center p-4 sm:p-8 lg:p-12 min-h-[600px] lg:min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="space-y-6 mb-8 lg:mb-0">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Partner with <span className="italic font-light">experienced</span> developers, build
                <span className="block">scalable solutions.</span>
              </h1>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-lg max-w-full sm:max-w-md lg:max-w-lg">
                We deliver more than just technical talent — we provide reliability, expertise, and long-term value with 24/7 support and agile delivery models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us/request-for-services">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2">
                    Talk to an Expert
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Visual Elements */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full h-80 sm:h-96 lg:h-[420px] flex justify-center items-center">
                {/* Premium Workspace */}
                <div className="absolute top-2 right-2 sm:right-8 lg:right-16 w-40 h-20 sm:w-56 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-6 shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative p-2 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-7 h-7 mx-auto mb-1" />
                      <p className="text-xs sm:text-sm font-medium">Premium Workspace</p>
                    </div>
                  </div>
                </div>
                {/* Strategic Focus */}
                <div className="absolute top-16 left-2 sm:left-8 lg:left-12 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative p-2 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Target className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1" />
                      <p className="text-xs sm:text-sm font-medium">Strategic Focus</p>
                    </div>
                  </div>
                </div>
                {/* Top Skills */}
                <div className="absolute bottom-2 right-10 sm:right-20 lg:right-32 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl -rotate-12 shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative p-2 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-7 h-7 sm:w-9 sm:h-9 mx-auto mb-1" />
                      <p className="text-xs sm:text-sm font-medium">Top Skills</p>
                    </div>
                  </div>
                </div>
                {/* Innovation */}
                <div className="absolute bottom-12 left-10 sm:left-20 lg:left-32 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative p-2 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1" />
                      <p className="text-xs font-medium">Innovation</p>
                    </div>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-32 right-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute bottom-20 left-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black">
        {/* First Three Cards */}
        <div className="pt-12 pb-4 sm:pt-8 sm:pb-8 lg:p-12 mt-12 sm:mt-8 lg:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            {/* Mobile and Tablet: Vertical Stack */}
            <div className="flex flex-col gap-6 lg:hidden">
              {cardsData.slice(0, 3).map((card, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-md mx-auto h-80 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to bottom right, ${card.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${card.gradient.replace('from-', '').replace('to-', '').split(' ')[1]}, rgba(0, 0, 0, 0.8))`,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={576}
                    height={921}
                    priority={index === 0}
                    loading={index > 0 ? 'lazy' : 'eager'}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhffwAJkwPDEwHniwAAAABJRU5ErkJggg=="
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 p-6 text-center flex flex-col justify-start h-full">
                    <h3 className="text-lg text-white">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Overlapping Layout */}
            <div className="hidden lg:block lg:relative lg:h-[40rem]">
              {cardsData.slice(0, 3).map((card, index) => (
                <div
                  key={index}
                  className="absolute w-[30%] h-[30rem] rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 z-[1]"
                  style={{
                    background: `linear-gradient(to bottom right, ${card.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${card.gradient.replace('from-', '').replace('to-', '').split(' ')[1]}, rgba(0, 0, 0, 0.8))`,
                    ...(index === 0 && { left: '1%', top: '0' }),
                    ...(index === 1 && { left: '35%', top: '6rem' }),
                    ...(index === 2 && { left: '69%', top: '12rem' }),
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={576}
                    height={921}
                    priority={index === 0}
                    loading={index > 0 ? 'lazy' : 'eager'}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhffwAJkwPDEwHniwAAAABJRU5ErkJggg=="
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 p-6 text-center flex flex-col justify-start h-full">
                    <h3 className="text-lg text-white">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-0 lg:h-24"></div>
          </div>
        </div>

        {/* Last Three Services - Text-Based Presentation */}
        <div className="p-4 sm:p-8 lg:p-12 lg:pt-12 lg:pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-bold text-black mb-4 text-2xl sm:text-3xl lg:text-4xl">Additional Advantages</h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-lg">Comprehensive support for your development journey</p>
            </div>

            <div className="space-y-8 lg:space-y-6">
              {cardsData.slice(3).map((card, index) => {
                const IconComponent = iconMap[card.icon];
                return (
                  <div
                    key={index}
                    className="py-6 pl-4 border-l-2 lg:border-l-4 border-gray-300 hover:border-gray-900 transition-colors duration-300 flex flex-col sm:flex-row sm:items-center sm:pl-8"
                    ref={(el) => (advantageRefs.current[index] = el)}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                      <IconComponent className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1 sm:ml-4">
                      <h3 className="font-bold text-black mb-4 text-xl sm:text-2xl">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{card.description}</p>
                      <div className="mt-6 flex items-center space-x-4">
                        <div className={`h-1 w-16 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-500 font-medium">Professional Excellence</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Black Background */}
      <div className="bg-black text-white p-4 sm:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl">Ready to accelerate your development?</h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Let's discuss how our experienced developers can help you build scalable, high-quality solutions.
          </p>
          <br />
          <Link href="/contact-us/request-for-services">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}