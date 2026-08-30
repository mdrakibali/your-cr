"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS } from "@/lib/mock-data/landing";
import { StepRegisterPreview } from "@/components/main/step-register-preview";
import { StepInvitePreview } from "@/components/main/step-invite-preview";
import { StepRoutinePreview } from "@/components/main/step-routine-preview";

// Interactive 3-step workflow walkthrough section
export function HowItWorks(): React.JSX.Element {
  const [activeStep, setActiveStep] = useState(1);

  // Render preview component based on active selected step
  const renderPreview = (): React.JSX.Element => {
    switch (activeStep) {
      case 1:
        return <StepRegisterPreview />;
      case 2:
        return <StepInvitePreview />;
      case 3:
        return <StepRoutinePreview />;
      default:
        return <StepRegisterPreview />;
    }
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 2xl:py-20 bg-gray-50/50 overflow-hidden scroll-mt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 2xl:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[43px] font-medium text-gray-900 leading-tight">
            How YourCR{" "}
            <span className="italic text-primary font-normal">
              coordination works
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
            From CR enrollment and admin approval to student invites and daily
            sharing — here is the workflow setup.
          </p>
        </div>

        {/* Flex Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
          {/* Left Selection Tab List */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer border text-left p-4 sm:p-5 2xl:p-6 rounded-xl sm:rounded-2xl transition-colors ${
                    isActive
                      ? "bg-white border-primary border-l-4"
                      : "bg-white/40 border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                    <span
                      className={`size-5 sm:size-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {step.id}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm 2xl:text-base text-gray-900">
                      {step.title}
                    </h4>
                  </div>
                  {isActive && (
                    <p className="text-[11px] sm:text-xs 2xl:text-sm text-gray-500 leading-relaxed ml-7 sm:ml-9">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Display Preview Box */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md bg-[#faf5ff] border border-purple-100 rounded-2xl sm:rounded-3xl min-h-[280px] sm:min-h-[300px] 2xl:min-h-[350px] flex items-center justify-center relative overflow-hidden">
              {renderPreview()}
            </div>
          </div>
        </div>

        {/* Bottom Center CTA */}
        <div className="mt-8 sm:mt-10 2xl:mt-12 text-center">
          <Link href="/register">
            <Button className="h-10 sm:h-11 2xl:h-12 px-5 sm:px-6 text-xs sm:text-sm font-semibold 2xl:font-bold bg-primary text-white rounded-lg inline-flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
              Register Your Class CR Session <ArrowRight className="size-3.5 sm:size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
