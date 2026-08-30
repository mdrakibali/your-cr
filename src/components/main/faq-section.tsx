"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/mock-data/landing";

// Frequently Asked Questions accordion section
export function FaqSection(): React.JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Toggle FAQ accordion item
  const toggleFaq = (idx: number): void => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 2xl:py-20 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side: Header */}
          <div className="lg:col-span-5 text-left space-y-3 sm:space-y-4 lg:sticky lg:top-24">
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
              Everything you need to know about setting up your class
              coordination hub and registration.
            </p>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-7 divide-y divide-gray-100 border-t border-b border-gray-100">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-3.5 sm:py-4 2xl:py-5 text-left">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-start gap-3 sm:gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    {/* Circular Plus/Minus Icon */}
                    <div
                      className={`mt-0.5 size-4.5 sm:size-5 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-white border-gray-200 text-gray-400"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="size-2.5 sm:size-3" />
                      ) : (
                        <Plus className="size-2.5 sm:size-3" />
                      )}
                    </div>

                    {/* Question Text */}
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm 2xl:text-base leading-snug">
                      {faq.question}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden text-[11px] sm:text-xs 2xl:text-sm text-gray-500 leading-relaxed ml-7.5 sm:ml-9 pr-2 sm:pr-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
