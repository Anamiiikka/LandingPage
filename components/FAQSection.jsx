"use client";

import { useState } from "react";
import faqData from "../data/faqData.json";;

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleFAQ = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text shimmer">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="border border-white/20 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <div className="text-xl font-semibold text-white/90 flex justify-between items-center">
                {item.question}
                <span className="text-white/60">
                  {openItems.includes(index) ? "−" : "+"}
                </span>
              </div>
              {openItems.includes(index) && (
                <p className="mt-4 text-white/70 leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}