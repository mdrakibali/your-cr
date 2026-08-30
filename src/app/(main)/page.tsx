import React from "react";
import { Hero } from "@/components/main/hero";
import { TrustedUniversities } from "@/components/main/trusted-universities";
import { ProblemSection } from "@/components/main/problem-section";
import { FeatureSection } from "@/components/main/feature-section";
import { UploadSection } from "@/components/main/upload-section";
import { HowItWorks } from "@/components/main/how-it-works";
import { CoordinateSection } from "@/components/main/coordinate-section";
import { StatsSection } from "@/components/main/stats-section";
import { TestimonialsSection } from "@/components/main/testimonials-section";
import { FaqSection } from "@/components/main/faq-section";

// Main landing page composing all marketing sections
export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-white">
      <Hero />
      <TrustedUniversities />
      <ProblemSection />
      <FeatureSection />
      <UploadSection />
      <HowItWorks />
      <CoordinateSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
