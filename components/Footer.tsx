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
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const services = [
    { label: "Web Development", href: "/services/web" },
    { label: "Mobile Apps", href: "/services/mobile" },
    { label: "UI/UX Design", href: "/services/design" },
    { label: "Digital Marketing", href: "/services/marketing" },
    { label: "Cloud Solutions", href: "/services/cloud" },
    { label: "Consulting", href: "/services/consulting" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Professional Services
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-md">
                Your trusted partner for innovative digital solutions. We help businesses 
                transform and grow through cutting-edge technology and expert guidance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4" />
                  <span>hello@yourcompany.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>123 Business Ave, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="premium-card p-6">
              <h4 className="text-lg font-semibold mb-3 gradient-text">
                Stay Updated
              </h4>
              <p className="text-white/60 mb-4 text-sm">
                Subscribe to our newsletter for the latest insights, tips, and updates 
                on digital transformation and technology trends.
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-xl">
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 text-white placeholder:text-white/40"
                      required
                    />
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl px-6"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/40">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16">
          <Separator className="bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 gradient-text text-center md:text-left">
                Follow Us
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Awards/Certifications */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 gradient-text">
                Trusted & Certified
              </h4>
              <div className="flex gap-4 justify-center md:justify-end items-center">
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/60">ISO 27001</span>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/60">SOC 2</span>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/60">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Professional Services. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
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
        <div className="floating-orb bottom-0 left-1/4 w-64 h-64 bg-white/[0.02]" />
        <div className="floating-orb bottom-0 right-1/4 w-48 h-48 bg-white/[0.01]" />
      </div>
    </footer>
  );
}