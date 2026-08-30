import Image from "next/image";
import React from "react";
import { FeatureBlockProps } from "@/types/landing";

// Feature spotlight row with alternating icon headline and live preview mockup
export function FeatureBlock({
  icon,
  title,
  subtitle,
  subtitleColorClass,
  description1,
  description2,
  bgGradientClass,
  reversed = false,
  children,
}: FeatureBlockProps): React.JSX.Element {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r ${bgGradientClass} p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]`}
    >
      <div className={`lg:col-span-6 text-left ${reversed ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
            <Image
              src={icon}
              alt={`${title} Icon`}
              width={48}
              height={48}
              className="object-contain size-8 sm:size-10 2xl:size-12"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
              {title}
            </h3>
            <h4 className={`text-xs sm:text-sm 2xl:text-base font-semibold ${subtitleColorClass} mb-2 sm:mb-4`}>
              {subtitle}
            </h4>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
          {description1}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          {description2}
        </p>
      </div>
      <div className={`lg:col-span-6 flex justify-center ${reversed ? "lg:order-1" : ""}`}>
        {children}
      </div>
    </div>
  );
}

