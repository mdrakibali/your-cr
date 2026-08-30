import React from "react";
import { STATS_ITEMS } from "@/lib/mock-data/landing";

// Classroom stats and social proof metrics section
export function StatsSection(): React.JSX.Element {
  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side: 2x2 Grid of Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 2xl:gap-6 order-2 lg:order-1">
            {STATS_ITEMS.map((stat, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 md:p-6 2xl:p-8 rounded-2xl sm:rounded-3xl border flex flex-col items-center justify-center text-center ${stat.bgClass}`}
              >
                <span
                  className={`text-2xl sm:text-3xl md:text-3.5xl 2xl:text-4xl font-extrabold tracking-tight ${stat.textClass} mb-1 sm:mb-1.5 2xl:mb-2`}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs 2xl:text-sm font-semibold text-gray-500 leading-relaxed max-w-[140px] 2xl:max-w-[150px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side: Text Description */}
          <div className="lg:col-span-6 text-left space-y-4 sm:space-y-5 2xl:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
              Trusted by classrooms{" "}
              <span className="italic text-primary font-normal">worldwide</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
              Join thousands of Class Representatives, students, and course
              coordinators using YourCR to eliminate group chat clutter, prevent
              routine confusion, and build a structured hub for their academic
              sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
