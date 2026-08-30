import { StaticImageData } from "next/image";
import React from "react";

// Standard icon props
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// Trusted university logo item
export interface UniversityLogoItem {
  src: StaticImageData | string;
  alt: string;
}

// Problem section card props
export interface ProblemCardProps {
  image: StaticImageData;
  title: string;
  quote: string;
}

// Stats counter item
export interface StatItemProps {
  value: string;
  label: string;
  bgClass: string;
  textClass: string;
}

// Testimonial review item
export interface TestimonialItemProps {
  name: string;
  role: string;
  avatar: string;
  avatarBg: string;
  rating: number;
  text: string;
}

// FAQ item
export interface FaqItemProps {
  question: string;
  answer: string;
}

// Upload section floating item
export interface UploadItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

// How it works workflow step
export interface HowItWorksStepProps {
  id: number;
  title: string;
  desc: string;
}
