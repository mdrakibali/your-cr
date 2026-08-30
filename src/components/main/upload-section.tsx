import Image from "next/image";
import React from "react";
import {
  UPLOAD_ITEMS_LEFT,
  UPLOAD_ITEMS_RIGHT,
} from "@/lib/mock-data/landing";
import { UploadFloatingBadge } from "@/components/main/upload-floating-badge";
import { UploadCenterCard } from "@/components/main/upload-center-card";

// Upload showcase section demonstrating single-upload synchronization
export function UploadSection(): React.JSX.Element {
  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-white overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            Upload once.{" "}
            <span className="italic text-primary font-normal">
              Notify everyone
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
            No more copy-pasting announcements or files 50 times in group chats.
            CRs upload class details once, and YourCR organizes them for the
            entire class instantly.
          </p>
        </div>

        {/* Layout Container */}
        <div className="relative w-full max-w-5xl mx-auto min-h-[480px] sm:min-h-[500px] 2xl:min-h-[550px] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pt-4 sm:pt-6 2xl:pt-8">
          {/* Mobile/Tablet Grid of inputs (Visible on small screens) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full lg:hidden order-1">
            {UPLOAD_ITEMS_LEFT.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-3 sm:p-4 rounded-xl flex flex-col items-center text-center"
              >
                <div className="size-7 sm:size-8 flex items-center justify-center mb-1.5 sm:mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain size-6 sm:size-7"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800">
                  {item.title}
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Left Column (Desktop Absolute) */}
          <div className="hidden lg:block w-72 shrink-0 space-y-4 xl:space-y-6 z-10 text-left">
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_LEFT[0]}
              className="translate-x-8 xl:translate-x-12"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_LEFT[1]}
              className="-translate-x-2 xl:-translate-x-4"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_LEFT[2]}
              className="translate-x-10 xl:translate-x-16"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_LEFT[3]}
              className="-translate-x-1 xl:-translate-x-2"
            />
          </div>

          {/* Center Card */}
          <UploadCenterCard />

          {/* Right Column (Desktop Absolute) */}
          <div className="hidden lg:block w-72 shrink-0 space-y-4 xl:space-y-6 z-10 text-left">
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_RIGHT[0]}
              className="-translate-x-8 xl:-translate-x-12"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_RIGHT[1]}
              className="translate-x-2 xl:translate-x-4"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_RIGHT[2]}
              className="-translate-x-10 xl:-translate-x-16"
            />
            <UploadFloatingBadge
              {...UPLOAD_ITEMS_RIGHT[3]}
              className="translate-x-1 xl:translate-x-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
