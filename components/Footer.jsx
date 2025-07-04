"use client";

import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Separator } from "@/components/ui/separator.jsx";

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmailError("");
    
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setIsLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact us", href: "/contact" },
  ];

  const services = [
    { label: "Artificial Intelligence", href: "/services/ai" },
    { label: "Engineering and R&D", href: "/services/engineering" },
    { label: "Software Products", href: "/services/software" },
    { label: "Enterprise Solutions", href: "/services/enterprise" },
    { label: "Automation and IoT Services", href: "/services/iot" },
    { label: "Customer Experience", href: "/services/cx" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Subscribe to the newsletter
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Join our newsletter to stay up to date on features and releases.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 text-green-400 bg-green-400/10 p-6 rounded-2xl max-w-md mx-auto">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">Successfully subscribed! Thank you for joining us.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      className="h-14 px-6 bg-white/5 border-white/20 rounded-xl focus:border-white/40 text-white placeholder:text-white/50 text-lg"
                      disabled={isLoading}
                    />
                    {emailError && (
                      <p className="text-red-400 text-sm mt-2 text-left">{emailError}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Subscribing...
                      </div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              What We Do
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-4">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talk to Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Talk to Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">adalabs1234@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">1234 India</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-base">+91 5678970000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Company Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Professional Services
              </h3>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Professional Services. All rights reserved.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb bottom-0 left-1/4 w-32 h-32 bg-white/[0.02]" />
        <div className="floating-orb bottom-0 right-1/4 w-24 h-24 bg-white/[0.01]" />
      </div>
    </footer>
  );
}