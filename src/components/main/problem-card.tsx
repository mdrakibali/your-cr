import Image from "next/image";
import React from "react";
import { ProblemCardProps } from "@/types/landing";

// Problem card displaying classroom pain points
export function ProblemCard({ image, title, quote }: ProblemCardProps): React.JSX.Element {
  return (
    <div className="bg-white p-5 sm:p-6 2xl:p-8 rounded-xl sm:rounded-2xl border border-gray-100 flex flex-col items-center text-center">
      {/* Image Container */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-6">
        <Image
          src={image}
          alt={title}
          width={54}
          height={54}
          className="object-contain size-9 sm:size-11 2xl:size-14"
        />
      </div>

      {/* Card Title */}
      <h3 className="text-sm sm:text-base 2xl:text-lg font-medium text-gray-900 mb-1.5 sm:mb-2 2xl:mb-3">
        {title}
      </h3>

      {/* Quote */}
      <p className="text-xs sm:text-xs md:text-sm 2xl:text-base leading-relaxed text-gray-500 italic">
        {quote}
      </p>
    </div>
  );
}

