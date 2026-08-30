"use client";

import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { TESTIMONIALS_ITEMS } from "@/lib/mock-data/landing";

// Carousel section displaying student and CR feedback
export function TestimonialsSection(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(2);
  const [cardWidth, setCardWidth] = useState(450);
  const [gap, setGap] = useState(24);

  useEffect(() => {
    // Auto slide carousel every 4 seconds
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Responsive card width calculation across 5 device tiers
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardWidth(260);
        setGap(12);
      } else if (window.innerWidth < 640) {
        setCardWidth(290);
        setGap(16);
      } else if (window.innerWidth < 1024) {
        setCardWidth(340);
        setGap(18);
      } else if (window.innerWidth < 1440) {
        setCardWidth(390);
        setGap(20);
      } else {
        setCardWidth(450);
        setGap(24);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-[#f8f5fc] overflow-hidden border-y border-purple-100/30">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-10 2xl:mb-12 max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="font-besley text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            Loved by classrooms{" "}
            <span className="italic text-primary font-normal">everywhere</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Thousands of Class Representatives and students are saving time,
            coordinating easily, and leading stress-free semesters with YourCR.
          </p>
        </div>

        {/* Sliding Carousel Wrapper */}
        <div className="relative w-full overflow-hidden py-8 sm:py-10 2xl:py-12">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - ${cardWidth / 2}px - (${activeIndex} * (${cardWidth}px + ${gap}px))))`,
            }}
          >
            {TESTIMONIALS_ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className="bg-white border p-4.5 sm:p-5 2xl:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between shrink-0 transition-all duration-500 ease-out"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`,
                    opacity: isActive ? 1 : 0.4,
                    borderColor: isActive ? "#2459c8" : "#e2e8f0",
                    borderWidth: isActive ? "2px" : "1px",
                    transform: `scale(${isActive ? 1.04 : 0.92}) translateY(${isActive ? -12 : 12}px)`,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* User Info Header */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`size-8 sm:size-9 2xl:size-10 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${item.avatarBg}`}
                      >
                        {item.avatar}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-950">
                          {item.name}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Stars Rating */}
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="size-3.5 sm:size-4 2xl:size-4.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-left text-xs sm:text-xs md:text-sm 2xl:text-sm text-gray-600 leading-relaxed italic">
                      "{item.text}"
                    </p>
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
