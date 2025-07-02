"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
  Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Web Development", href: "/services/web" },
    { label: "Mobile Apps", href: "/services/mobile" },
    { label: "UI/UX Design", href: "/services/design" },
    { label: "Digital Marketing", href: "/services/marketing" },
    { label: "Consulting", href: "/services/consulting" },
  ];

  const legal = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-3">
              Professional Services
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Your trusted partner for innovative digital solutions and expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-3 h-3" />
                <span>hello@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 gradient-text">
              Stay Updated
            </h4>
            <p className="text-white/60 mb-4 text-sm">
              Get the latest insights and updates.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-2 rounded-lg">
                <Send className="w-3 h-3" />
                <span className="text-xs font-medium">Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/20 rounded-lg focus:border-white/40 text-white placeholder:text-white/40 text-sm h-9"
                    required
                  />
                  <Button 
                    type="submit"
                    size="sm"
                    className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-lg px-3"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 gradient-text">Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3 gradient-text">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex gap-3 items-center">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-xs text-white/60">ISO 27001</span>
              </div>
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-xs text-white/60">SOC 2</span>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Professional Services. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              {legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
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