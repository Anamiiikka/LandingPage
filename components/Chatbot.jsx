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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! 👋 I'm your AI assistant. I'm here to help you discover our premium services and book consultations. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      options: ["Book Appointment", "Get Quote", "Learn More", "Contact Us"],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentView, setCurrentView] = useState("chat");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [userId] = useState(`user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  // Load FAQ data
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    import('../data/faqData.json').then((module) => {
      setFaqData(module.default);
    }).catch((error) => {
      console.error("Error loading FAQ data:", error);
    });
  }, []);

  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  
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

  const saveMessage = async (message) => {
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

  const addMessage = (text, isBot, options) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options,
    };
    setMessages((prev) => [...prev, newMessage]);
    saveMessage(newMessage);
  };

  const simulateTyping = (callback, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    addMessage(inputMessage, false);
    const userMessage = inputMessage.toLowerCase();
    setInputMessage("");

    setIsTyping(true);
    const response = await getAIResponse(userMessage);
    setIsTyping(false);
    addMessage(response.text, true, response.options);
  };

  const getAIResponse = async (message) => {
  const prompt = `You are a friendly AI assistant for a premium service company offering Web Development, Mobile Apps, UI/UX Design, Digital Marketing, Cloud Solutions, and Strategic Consulting. Respond concisely (30-35 words), naturally, like a human, using FAQ data: ${JSON.stringify(faqData)}. For unknown questions, provide a helpful response based on services and suggest booking an appointment. Avoid phrases like "As per the FAQ." User question: ${message}`;

  try {
    const response = await fetch('/api/chatbot/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch AI response');
    }

    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        fullText += chunk;
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.isBot) {
            return [...prev.slice(0, -1), { ...lastMessage, text: fullText }];
          }
          return prev;
        });
        scrollToBottom();
      }

      return { text: fullText, options: ["Book Appointment", "Get Quote", "Learn More", "Contact Us"] };
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return {
      text: "I'm not sure about that. For doubts or queries, you may book an appointment.",
      options: ["Book Appointment", "Contact Support", "Back to Menu"],
    };
  }
};
  const handleOptionClick = (option) => (e) => {
    e.stopPropagation();
    addMessage(option, false);

    simulateTyping(() => {
      switch (option) {
        case "Book Appointment":
        case "Book Now":
          addMessage(
            "Redirecting you to our booking page to schedule your premium consultation!",
            true,
            ["Back to Menu", "Contact Support"]
          );
          window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, "_blank", "noopener,noreferrer");
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
          setCurrentView("contact");
          addMessage(
            "Here's our mock support contact information:\n\n- **Phone:** +1 (555) 987-6543\n- **Email:** support@yourcompany.com\n- **Hours:** Monday-Friday, 9 AM - 6 PM EST\n\nPlease fill out the form below to send a message to our support team.",
            true
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
            "Back to Menu"],
          );
      }
    });
  };

  const handleContactSubmit = async (e) => {
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

  const handleQuoteSubmit = async (e) => {
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
      
 {showPopup && !isOpen && (
  <div
    className="fixed bottom-20 sm:bottom-28 right-4 sm:right-6 z-50 p-4 sm:p-6 max-w-xs sm:max-w-sm cursor-pointer rounded-2xl shadow-xl border border-gray-300 bg-white text-black hover:scale-[1.02] transition-all"
    onClick={() => {
      setIsOpen(true);
      setShowPopup(false);
    }}
   
  >
    <div className="flex items-start gap-3 sm:gap-4">
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold text-black text-sm sm:text-base">Premium Consultation</h4>
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
        </div>
        <p className="text-xs sm:text-sm text-gray-700 mb-3">
          Get expert guidance tailored to your business needs
        </p>
        <div className="flex items-center gap-2 text-xs">
          <Gift className="w-3 h-3 text-gray-600" />
          <span className="text-gray-600">Limited time offer</span>
          <div className="flex gap-1 ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-100"
        onClick={(e) => {
          e.stopPropagation();
          setShowPopup(false);
        }}
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
      </Button>
    </div>
  </div>
)}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-white to-gray-200 hover:from-white hover:to-white text-black shadow-2xl hover:shadow-3xl group transition-all duration-300"
        style={{ zIndex: 70 }}
        size="icon"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110 duration-300" />
        )}
      </Button>
      {isOpen && (
        <Card className="fixed bottom-16 sm:bottom-28 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[calc(100vh-8rem)] sm:h-[600px] max-w-[420px] premium-card border-white/20 shadow-2xl" style={{ zIndex: 50 }}>
          <CardHeader className="pb-3 sm:pb-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-base sm:text-lg gradient-text">AI Assistant</CardTitle>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Online & Ready</span>
                    <Crown className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                style={{ zIndex: 60 }}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[calc(100%-80px)] sm:h-[calc(600px-100px)]">
            {currentView === "chat" && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6" style={{ zIndex: 10 }}>
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`max-w-[85%] ${
                          message.isBot
                            ? 'chat-bubble bg-gradient-to-br from-white/10 to-white/5 text-white border border-white/10'
                            : 'bg-gradient-to-r from-white to-gray-200 text-black'
                        } p-3 sm:p-4 rounded-2xl shadow-lg relative z-20`}
                      >
                        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        {message.options && (
                          <div className="mt-3 sm:mt-4 space-y-2 z-30">
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
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 text-white border border-white/10 p-3 sm:p-4 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full" />
                            <div className="w-2 h-2 bg-white/60 rounded-full" />
                            <div className="w-2 h-2 bg-white/60 rounded-full" />
                          </div>
                          <span className="text-xs text-white/60">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 sm:p-6 border-t border-white/10">
                  <div className="flex gap-2 sm:gap-3">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/5 border-white/20 rounded-xl focus:border-white/40 transition-colors duration-300 z-20 text-sm"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      disabled={isTyping}
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      disabled={isTyping || !inputMessage.trim()}
                      className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl px-3 sm:px-4 disabled:opacity-50 z-20"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {currentView === "contact" && (
              <div className="p-3 sm:p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentView("chat")}
                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-white/60" />
                  </Button>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg gradient-text">Contact Our Team</h3>
                    <p className="text-xs sm:text-sm text-white/60">We'll get back to you within 2-4 hours</p>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-5">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Textarea
                    placeholder="How can we help you? Tell us about your project, questions, or requirements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 min-h-[100px] sm:min-h-[120px] resize-none z-10 text-sm"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl py-2 sm:py-3 font-semibold z-10 text-sm"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            )}

            {currentView === "quote" && (
              <div className="p-3 sm:p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentView("chat")}
                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-white/10 rounded-xl z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-white/60" />
                  </Button>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg gradient-text">Request a Quote</h3>
                    <p className="text-xs sm:text-sm text-white/60">Get a personalized quote for your project</p>
                  </div>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      placeholder="Full Name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                      required
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>

                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 z-10 text-sm"
                    style={{ pointerEvents: 'auto' }}
                  />

                  <select
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm((prev) => ({ ...prev, service: e.target.value }))}
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10 text-sm"
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
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10 text-sm"
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
                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 transition-colors duration-300 z-10 text-sm"
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
                    className="bg-white/5 border-white/20 rounded-xl focus:border-white/40 min-h-[100px] sm:min-h-[120px] resize-none z-10 text-sm"
                    required
                    style={{ pointerEvents: 'auto' }}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-white hover:to-white rounded-xl py-2 sm:py-3 font-semibold z-10 text-sm"
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