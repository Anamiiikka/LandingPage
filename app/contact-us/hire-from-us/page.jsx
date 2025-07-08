// 'use client';

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import pointersData from '@/data/hire-from-us-pointers.json';

// export default function HireFromUsPage() {
//   return (
//     <section className="py-32 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
//             <span className="text-sm font-medium text-white/80">Hire Developers from Us</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             <span className="gradient-text">Build Your Dream Team with Adalabs</span>
//           </h2>
//           <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
//             Hire top-tier developers from Adalabs to bring your projects to life. Our skilled professionals deliver innovative software, web, and application solutions tailored to your needs.
//           </p>
//         </div>

//         {/* Why Partner With Us */}
//         <div className="premium-card p-8 mb-16">
//           <h3 className="text-2xl font-bold gradient-text mb-6">Why Partner With Us for Your Development Needs</h3>
//           <p className="text-white/80 mb-6">
//             Choosing the right development partner is critical to your project's success. At Adalabs, we offer more than just technical talent — we deliver reliability, expertise, and long-term value. Here’s why global businesses trust us:
//           </p>
//           <ul className="space-y-6">
//             {pointersData.map((pointer, index) => (
//               <li key={index}>
//                 <h4 className="text-xl font-semibold text-white/80">{`${index + 1}. ${pointer.title}`}</h4>
//                 <p className="text-white/60">{pointer.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mb-16">
//           <Button asChild size="lg" className="premium-button px-12 py-3 rounded-xl">
//             <Link href="/contact-us/request-for-services">
//               Talk to an Expert
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowRight, Users, Target, Award, Zap } from 'lucide-react';

export default function Home() {
  const cards = [
    {
      title: "Highly Skilled & Experienced Developers",
      description: "Our team comprises seasoned professionals with deep expertise in modern technologies, ensuring faster execution and higher quality outcomes.",
      gradient: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=600&fit=crop&crop=center",
    },
    {
      title: "24/7 Availability & Global Support",
      description: "We provide round-the-clock availability across time zones, ensuring seamless collaboration and proactive issue resolution.",
      gradient: "from-gray-900 to-black",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop&crop=center",
    },
    {
      title: "Agile Delivery with Flexible Engagement Models",
      description: "We offer flexible hiring models from rapid prototyping to long-term scaling, tailored to your business goals.",
      gradient: "from-red-600 to-red-700",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&crop=center",
    },
    {
      title: "Transparent Communication & Project Management",
      description: "Our structured workflow includes clear milestones and dedicated managers for complete visibility.",
      gradient: "from-blue-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center space-x-8">
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Talent
          </button>
        </div>
        <div className="text-white font-medium">Services</div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2">
                  View Our Developers
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all">
                  Get Project Quote
                </button>
              </div>
            </div>

        {/* Right Visual Elements */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Premium Workspace</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-16 left-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Target className="w-12 h-12 mx-auto mb-3" />
                      <p className="text-sm font-medium">Strategic Focus</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-12 w-40 h-40 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl transform -rotate-12 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-sm font-medium">Top Skills</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-12 left-16 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs font-medium">Innovation</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 right-24 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute bottom-24 left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-6 py-16">
        <div className="w-full mx-auto">
          <div className="relative">
            {cards.map((card, index) => {
              const cardHeight = 384; // 96px (h-96) in pixels
              const verticalStep = cardHeight * 0.25; // 25% of card height
              const cardCount = cards.length;
              const totalSideGap = 40; // 20px on left + 20px on right
              const totalInternalGap = (cardCount - 1) * 30; // 30px gap between cards
              const availableWidth = 100 - (totalSideGap / 10); // 100vw - 40px (converted to vw, 1vw ≈ 10px)
              const cardWidthPercentage = (availableWidth - (totalInternalGap / 100)) / cardCount; // Adjusted width in vw

              return (
                <div
                  key={index}
                  className={`h-96 rounded-2xl overflow-hidden relative group hover:scale-105 transition-all duration-300`}
                  style={{
                    background: `linear-gradient(to bottom right, ${card.gradient}, rgba(0, 0, 0, 0.8))`,
                    position: 'absolute',
                    left: `${(20 / 10) + (index * (cardWidthPercentage + 0.3)) * 100 / 100}vw`, // Start at 20px (2vw) + gap
                    top: `${index * verticalStep}px`, // Vertical stair-step
                    width: `${cardWidthPercentage}vw`, // Width in vw
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative z-10 p-6 text-center flex flex-col justify-center h-full">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-[650px]"></div>
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