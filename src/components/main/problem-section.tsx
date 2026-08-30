import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { PROBLEM_CARDS } from "@/lib/mock-data/landing";
import { ProblemCard } from "@/components/main/problem-card";

// Problem section highlighting common classroom coordination challenges
export function ProblemSection(): React.JSX.Element {
  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-[#F8F8F8]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 2xl:mb-16">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#8c94a5] uppercase block mb-2 sm:mb-3">
            Sound familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            Class coordination feels
            <span className="italic text-primary font-normal"> harder than it should</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6 mb-6 sm:mb-8 2xl:mb-10">
          {PROBLEM_CARDS.map((card, idx) => (
            <ProblemCard key={idx} {...card} />
          ))}
        </div>

        {/* Banner Call-to-Action */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4.5 sm:p-6 2xl:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-left max-w-2xl">
            <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                There's a better way.
              </span>{" "}
              YourCR turns group chat chaos into a structured class coordination
              system — automatically.
            </p>
          </div>
          <Link href="/login" className="shrink-0 w-full md:w-auto">
            <Button className="w-full md:w-auto h-10 sm:h-11 2xl:h-12 px-4 sm:px-5 2xl:px-6 text-xs sm:text-sm font-semibold 2xl:font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-all duration-300 cursor-pointer">
              Start Your Free Session <ArrowRight className="size-3.5 sm:size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
