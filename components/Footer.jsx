'use client';

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
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/adalabs.in/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/AdaLabsInfo", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/adalabs.in/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/adalabs/posts/?feedView=all", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact us", href: "/contact" },
    { label: "Hire Developers from Us", href: "/contact-us/hire-from-us" },
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
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Subscribe to the newsletter
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Join our newsletter to stay up to date on features and releases.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-2xl max-w-md mx-auto">
                <CheckCircle className="w-5 h-5" />
                <span className="text-base font-medium">Successfully subscribed! Thank you for joining us.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      className="h-12 px-5 bg-white/5 border-white/20 rounded-xl focus:border-white/40 text-white placeholder:text-white/50"
                      disabled={isLoading}
                    />
                    {emailError && (
                      <p className="text-red-400 text-sm mt-1 text-left">{emailError}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
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

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              What We Do
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button 
              asChild
              className="h-10 px-5 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-all duration-300 mb-4"
            >
              <Link href="https://adalabs.in/contact-us" target="_blank" rel="noopener noreferrer">
                Talk to Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@adalabs.in</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">1234 India</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 5678970000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold gradient-text mb-1">
                @2025 Adalabs & Co.
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-105"
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/[0.01] rounded-full blur-3xl" />
      </div>
    </footer>
  );
}