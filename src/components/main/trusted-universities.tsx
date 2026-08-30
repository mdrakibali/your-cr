import Image from "next/image";
import React from "react";
import {
  TRUSTED_UNIVERSITIES_ROW_1,
  TRUSTED_UNIVERSITIES_ROW_2,
} from "@/lib/mock-data/landing";

// Partner universities logo showcase section
export function TrustedUniversities(): React.JSX.Element {
  return (
    <section className="py-8 sm:py-10 2xl:py-12 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-[#8c94a5] uppercase text-center mb-5 sm:mb-6 2xl:mb-8">
          Trusted by Students at Top Universities
        </h2>

        {/* First Row of Universities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 2xl:gap-8 items-center justify-items-center w-full max-w-5xl 2xl:max-w-6xl mb-4 sm:mb-6 2xl:mb-8">
          {TRUSTED_UNIVERSITIES_ROW_1.map((uni, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-8 sm:h-10 2xl:h-12 w-full px-2"
            >
              <Image
                src={uni.src}
                alt={uni.alt}
                style={{
                  objectFit: "contain",
                  maxHeight: "100%",
                  width: "auto",
                }}
                className="max-h-7 sm:max-h-8 md:max-h-9 2xl:max-h-11 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                priority
              />
            </div>
          ))}
        </div>

        {/* Second Row of Universities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 2xl:gap-8 items-center justify-items-center w-full max-w-5xl 2xl:max-w-6xl">
          {TRUSTED_UNIVERSITIES_ROW_2.map((uni, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-8 sm:h-10 2xl:h-12 w-full px-2"
            >
              <Image
                src={uni.src}
                alt={uni.alt}
                style={{
                  objectFit: "contain",
                  maxHeight: "100%",
                  width: "auto",
                }}
                className="max-h-7 sm:max-h-8 md:max-h-9 2xl:max-h-11 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
