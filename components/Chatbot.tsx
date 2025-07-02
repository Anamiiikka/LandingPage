"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  X,
  Send,
  Calendar,
  Phone,
  Mail,
  User,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Gift,
  Crown,
  CheckCircle,
  DollarSign,
  Headphones,
} from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm your AI assistant. I'm here to help you discover our premium services and book consultations. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      options: ["Book Appointment", "Get Quote", "Learn More", "Contact Us"],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentView, setCurrentView] = useState<"chat" | "booking" | "contact" | "quote">("chat");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userId] = useState(`user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [quoteForm, setQuoteForm] = useState<QuoteForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Popup logic
  useEffect(() => {
    const interval = parseInt(process.env.NEXT_PUBLIC_CHATBOT_POPUP_INTERVAL || "20000");
    const enabled = process.env.NEXT_PUBLIC_CHATBOT_ENABLED !== "false";

    if (!enabled) return;

    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPopup(true);
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const saveMessage = async (message: ChatMessage) => {
    try {
      const response = await fetch("/api/chatbot/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...message, userId }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error saving message:", response.status, errorData);
      }
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options,
    };
    setMessages((prev) => [...prev, newMessage]);
    saveMessage(newMessage); // Save all messages for admin reference
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSendMessage = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    addMessage(inputMessage, false);
    const userMessage = inputMessage.toLowerCase();
    setInputMessage("");

    simulateTyping(() => {
      const response = getBotResponse(userMessage);
      addMessage(response.text, true, response.options);
    });
  };

  const getBotResponse = (message: string): { text: string; options?: string[] } => {
    if (message.includes("appointment") || message.includes("book") || message.includes("schedule")) {
      return {
        text: "Excellent choice! I'd be delighted to help you schedule a consultation with our experts. Let me guide you through our streamlined booking process.",
        options: ["Book Now", "View Available Times", "Learn About Services", "Back to Menu"],
      };
    } else if (message.includes("price") || message.includes("cost") || message.includes("quote")) {
      return {
        text: "Our pricing is tailored to deliver exceptional value for your investment. I can provide you with a personalized quote based on your specific requirements. What service interests you most?",
        options: ["Get Custom Quote", "View Pricing Plans", "Compare Services", "Back to Menu"],
      };
    } else if (message.includes("service") || message.includes("what do you do")) {
      return {
        text: "We offer premium web development, mobile applications, UI/UX design, digital marketing, strategic consulting, and cloud solutions. Each service is crafted with attention to detail and industry best practices.",
        options: ["View All Services", "Book Consultation", "Get Quote", "Back to Menu"],
      };
    } else if (message.includes("contact") || message.includes("reach") || message.includes("talk")) {
      return {
        text: "I'd be happy to connect you with our team! You can reach us through multiple channels or fill out our contact form for a personalized response.",
        options: ["Contact Form", "Call Us", "Email Us", "Back to Menu"],
      };
    } else if (message.includes("help") || message.includes("support")) {
      return {
        text: "I'm here to help! I can assist you with booking appointments, getting quotes, learning about our services, or connecting you with our team. What would you like to do?",
        options: ["Book Appointment", "Get Quote", "Contact Support", "Back to Menu"],
      };
    } else {
      return {
        text: "Thank you for reaching out! I'm here to provide you with comprehensive information about our services and help you take the next step. How can I assist you today?",
        options: ["Book Appointment", "Get Quote", "Learn More", "Contact Us"],
      };
    }
  };

  const handleOptionClick = (option: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    addMessage(option, false);

    simulateTyping(() => {
      switch (option) {
        case "Book Appointment":
        case "Book Now":
          setCurrentView("booking");
          addMessage("Perfect! Let's get you scheduled for a premium consultation. Please fill out the booking form below.", true);
          break;

        case "Get Quote":
        case "Get Custom Quote":
          setCurrentView("quote");
          addMessage("Excellent! I'll help you get a personalized quote. Please provide some details about your project.", true);
          break;

        case "Contact Us":
        case "Contact Form":
          setCurrentView("contact");
          addMessage("I'd love to connect you with our team! Please fill out the contact form and we'll get back to you shortly.", true);
          break;

        case "Learn More":
        case "View All Services":
          addMessage(
            "We specialize in cutting-edge technology solutions: Web Development (React, Next.js), Mobile Apps (React Native, Flutter), UI/UX Design, Digital Marketing, Cloud Solutions, and Strategic Consulting. Each service is delivered with premium quality and attention to detail.",
            true,
            ["Book Consultation", "Get Quote", "Contact Us", "Back to Menu"]
          );
          break;

        case "View Available Times":
          addMessage(
            "Our consultation slots are available Monday-Friday, 9 AM - 6 PM EST. We also offer weekend appointments for urgent projects. Would you like to book a specific time?",
            true,
            ["Book Now", "Call to Schedule", "Back to Menu"]
          );
          break;

        case "View Pricing Plans":
          addMessage(
            "Our pricing is project-based and tailored to your needs:\n\n• Web Development: Starting from $5,000\n• Mobile Apps: Starting from $15,000\n• UI/UX Design: Starting from $3,000\n• Digital Marketing: Starting from $2,000/month\n\nFor accurate pricing, I recommend getting a custom quote!",
            true,
            ["Get Custom Quote", "Book Consultation", "Back to Menu"]
          );
          break;

        case "Call Us":
          addMessage(
            "You can reach us directly at: +1 (555) 123-4567\n\nOur team is available Monday-Friday, 9 AM - 6 PM EST. For immediate assistance, you can also schedule a callback!",
            true,
            ["Schedule Callback", "Send Email", "Back to Menu"]
          );
          break;

        case "Email Us":
          addMessage(
            "Send us an email at: hello@yourcompany.com\n\nWe typically respond within 2-4 hours during business days. For faster response, you can also fill out our contact form!",
            true,
            ["Contact Form", "Schedule Call", "Back to Menu"]
          );
          break;

        case "Speak to Agent":
        case "Contact Support":
          addMessage(
            "I'll connect you with one of our specialists right away! They'll be able to provide detailed information and personalized assistance for your project.",
            true,
            ["Schedule Call", "Send Message", "Back to Menu"]
          );
          break;

        case "Back to Menu":
          addMessage("How else can I assist you today?", true, [
            "Book Appointment",
            "Get Quote",
            "Learn More",
            "Contact Us",
          ]);
          break;

        default:
          addMessage("Thank you for your interest! How would you like to proceed?", true, [
            "Book Appointment",
            "Get Quote",
            "Contact Us",
            "Back to Menu",
          ]);
      }
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/chatbot/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });

      if (response.ok) {
        simulateTyping(() => {
          addMessage(
            `🎉 Perfect! Your premium consultation has been scheduled for ${bookingForm.date} at ${bookingForm.time}. 

Confirmation Details:
• Service: ${bookingForm.service}
• Date: ${bookingForm.date}
• Time: ${bookingForm.time}
• Contact: ${bookingForm.email}

You'll receive a confirmation email with meeting details and preparation materials shortly. We're excited to work with you!`,
            true,
            ["Reschedule", "Add to Calendar", "Contact Support"]
          );

          setCurrentView("chat");
          setBookingForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            time: "",
            message: "",
          });
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Error saving booking:", response.status, errorData);
        addMessage("Sorry, there was an error saving your booking. Please try again.", true);
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      addMessage("Sorry, there was an error saving your booking. Please try again.", true);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/chatbot/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        simulateTyping(() => {
          addMessage(
            `Thank you ${contactForm.name}! Your message has been received and forwarded to our team. 

We'll get back to you within 2-4 hours at ${contactForm.email}. 

For urgent matters, feel free to call us at +1 (555) 123-4567.`,
            true,
            ["Book Appointment", "Get Quote", "Call Us"]
          );

          setCurrentView("chat");
          setContactForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }, 1500);
      } else {
        const errorData = await response.json();
        console.error("Error saving contact:", response.status, errorData);
        addMessage("Sorry, there was an error saving your contact information. Please try again.", true);
      }
    } catch (error) {
      console.error("Error saving contact:", error);
      addMessage("Sorry, there was an error saving your contact information. Please try again.", true);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/chatbot/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteForm),
      });

      if (response.ok) {
        simulateTyping(() => {
          addMessage(
            `Excellent! Your custom quote request has been submitted successfully.

Project Details:
• Service: ${quoteForm.service}
• Budget Range: ${quoteForm.budget}
• Timeline: ${quoteForm.timeline}

Our team will analyze your requirements and send you a detailed proposal within 24 hours to ${quoteForm.email}. 

The proposal will include project scope, timeline, pricing, and next steps.`,
            true,
            ["Book Consultation", "Modify Request", "Contact Team"]
          );

          setCurrentView("chat");
          setQuoteForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            timeline: "",
            description: "",
          });
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Error saving quote:", response.status, errorData);
        addMessage("Sorry, there was an error saving your quote request. Please try again.", true);
      }
    } catch (error) {
      console.error("Error saving quote:", error);
      addMessage("Sorry, there was an error saving your quote request. Please try again.", true);
    }
  };

  return (
    <>
      {/* Premium Popup Notification */}
      {showPopup && !isOpen && (
        <div
          className="fixed bottom-28 right-6 z-50 premium-card p-6 max-w-sm cursor-pointer hover-lift animate-in slide-in-from-right group"
          style={{ zIndex: 60 }}
          onClick={() => {
            setIsOpen(true);
            setShowPopup(false);
          }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-white">Premium Consultation</h4>
                <Sparkles className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-sm text-white/60 mb-3">Get expert guidance tailored to your business needs</p>
              <div className="flex items-center gap-2 text-xs">
                <Gift className="w-3 h-3 text-white/60" />
                <span className="text-white/60">Limited time offer</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-white/60 text-white/60" />
                  ))}
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-white/10 z-10"
              style={{ zIndex: 70 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}
            >
              <X className="w-4 h-4 text-white/60" />
            </Button>
          </div>
        </div>
      )}

      {/* Premium Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-200 hover:from-white hover:to-white text-black shadow-2xl hover:shadow-3xl pulse-glow group"
        style={{ zIndex: 70 }}
        size="icon"
      >
        {isOpen ? (
          <X className="w-7 h-7 transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" />
        )}
      </Button>

      {/* Premium Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-6 z-50 w-[420px] h-[600px] premium-card border-white/20 shadow-2xl" style={{ zIndex: 50 }}>
          <CardHeader className="pb-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg gradient-text">AI Assistant</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Online & Ready</span>
                    <Crown className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                style={{ zIndex: 60 }}
              >
                <X className="w-5 h-5 text-white/60" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[calc(600px-100px)]">
            {currentView === "chat" && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ zIndex: 10 }}>
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`max-w-[85%] ${
                          message.isBot
                            ? 'chat-bubble bg-gradient-to-br from-white/10 to-white/5 text-white border border-white/10'
                            : 'bg-gradient-to-r from-white to-gray-200 text-black'
                        } p-4 rounded-2xl shadow-lg relative z-20`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        {message.options && (
                          <div className="mt-4 space-y-2 z-30">
                            {message.options.map((option, idx) => (
                              <Button
                                key={idx}
                                size="sm"
                                variant="outline"
                                className="w-full text-xs border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-xl z-30"
                                onClick={handleOptionClick(option)}
                                style={{ pointerEvents: 'auto', position: 'relative' }}
                              >
                                <span className="flex items-center gap-2">
                                  {option.includes("Book") && <Calendar className="w-3 h-3" />}
                                  {option.includes("Quote") && <DollarSign className="w-3 h-3" />}
                                  {option.includes("Learn") && <Sparkles className="w-3 h-3" />}
                                  {option.includes("Contact") && <Mail className="w-3 h-3" />}
                                  {option}
                                </span>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 text-white border border-white/10 p-4 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span className="text-xs text-white/60">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/5 border-white/20 rounded-xl focus:border-white/40 transition-colors duration-300 z-20"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      disabled={isTyping}
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      disabled={isTyping || !inputMessage.trim()}
                      className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl px-4 disabled:opacity-50 z-20"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {currentView === "booking" && (
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentView("chat")}
                    className="h-10 w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ArrowRight className="w-5 h-5 rotate-180 text-white/60" />
                  </Button>
                  <div>
                    <h3 className="font-semibold text-lg gradient-text">Book Premium Consultation</h3>
                    <p className="text-sm text-white/60">Schedule your personalized session</p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <select
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, service: e.target.value }))}
                    className="w-full h-12 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  >
                    <option value="" className="bg-black">
                      Select Service
                    </option>
                    <option value="Web Development" className="bg-black">
                      Web Development
                    </option>
                    <option value="Mobile Development" className="bg-black">
                      Mobile Development
                    </option>
                    <option value="UI/UX Design" className="bg-black">
                      UI/UX Design
                    </option>
                    <option value="Digital Marketing" className="bg-black">
                      Digital Marketing
                    </option>
                    <option value="Strategic Consulting" className="bg-black">
                      Strategic Consulting
                    </option>
                    <option value="Cloud Solutions" className="bg-black">
                      Cloud Solutions
                    </option>
                  </select>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, date: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      min={new Date().toISOString().split('T')[0]}
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Input
                      type="time"
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, time: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>

                  <Textarea
                    placeholder="Tell us about your project or requirements..."
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 min-h-[80px] resize-none z-10"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl py-3 font-semibold z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </form>
              </div>
            )}

            {currentView === "contact" && (
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentView("chat")}
                    className="h-10 w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ArrowRight className="w-5 h-5 rotate-180 text-white/60" />
                  </Button>
                  <div>
                    <h3 className="font-semibold text-lg gradient-text">Contact Our Team</h3>
                    <p className="text-sm text-white/60">We'll get back to you within 2-4 hours</p>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Textarea
                    placeholder="How can we help you? Tell us about your project, questions, or requirements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 min-h-[120px] resize-none z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl py-3 font-semibold z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            )}

            {currentView === "quote" && (
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentView("chat")}
                    className="h-10 w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ArrowRight className="w-5 h-5 rotate-180 text-white/60" />
                  </Button>
                  <div>
                    <h3 className="font-semibold text-lg gradient-text">Request a Quote</h3>
                    <p className="text-sm text-white/60">Get a personalized quote for your project</p>
                  </div>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>

                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <select
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, service: e.target.value }))}
                    className="w-full h-12 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  >
                    <option value="" className="bg-black">
                      Select Service
                    </option>
                    <option value="Web Development" className="bg-black">
                      Web Development
                    </option>
                    <option value="Mobile Development" className="bg-black">
                      Mobile Development
                    </option>
                    <option value="UI/UX Design" className="bg-black">
                      UI/UX Design
                    </option>
                    <option value="Digital Marketing" className="bg-black">
                      Digital Marketing
                    </option>
                    <option value="Strategic Consulting" className="bg-black">
                      Strategic Consulting
                    </option>
                    <option value="Cloud Solutions" className="bg-black">
                      Cloud Solutions
                    </option>
                  </select>

                  <select
                    value={quoteForm.budget}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, budget: e.target.value }))}
                    className="w-full h-12 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  >
                    <option value="" className="bg-black">
                      Select Budget Range
                    </option>
                    <option value="$1,000 - $5,000" className="bg-black">
                      $1,000 - $5,000
                    </option>
                    <option value="$5,000 - $10,000" className="bg-black">
                      $5,000 - $10,000
                    </option>
                    <option value="$10,000 - $25,000" className="bg-black">
                      $10,000 - $25,000
                    </option>
                    <option value="$25,000+" className="bg-black">
                      $25,000+
                    </option>
                  </select>

                  <select
                    value={quoteForm.timeline}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, timeline: e.target.value }))}
                    className="w-full h-12 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  >
                    <option value="" className="bg-black">
                      Select Timeline
                    </option>
                    <option value="1-3 months" className="bg-black">
                      1-3 months
                    </option>
                    <option value="3-6 months" className="bg-black">
                      3-6 months
                    </option>
                    <option value="6-12 months" className="bg-black">
                      6-12 months
                    </option>
                    <option value="12+ months" className="bg-black">
                      12+ months
                    </option>
                  </select>

                  <Textarea
                    placeholder="Describe your project or requirements..."
                    value={quoteForm.description}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, description: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 min-h-[120px] resize-none z-10"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl py-3 font-semibold z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}