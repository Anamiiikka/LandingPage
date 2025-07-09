import { Home, Zap, Store, Power, Camera } from 'lucide-react';

export default function CapabilitiesComponent() {
  const capabilities = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Xia Smart Home"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Xia Smart Energy"
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Ada Smart Store"
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Ada Intelligent Power Plant"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Xia Smart Surveillance"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
          OUR CAPABILITIES
        </h2>
        <div className="border-l-4 border-blue-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our solutions are driving transformation across industries.
          </h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {/* Left Column */}
        <div className="space-y-8">
          {capabilities.slice(0, 3).map((capability, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 cursor-pointer"
            >
              <div className="text-gray-700 hover:text-blue-600 transition-colors">
                {capability.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {capability.title}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {capabilities.slice(3).map((capability, index) => (
            <div
              key={index + 3}
              className="flex items-center space-x-4 p-2 hover:bg-white hover:shadow-md rounded-lg transition-all duration-200 cursor-pointer"
            >
              <div className="text-gray-700 hover:text-blue-600 transition-colors">
                {capability.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {capability.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}