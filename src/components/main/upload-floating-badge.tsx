import Image from "next/image";
import React from "react";
import { UploadFloatingBadgeProps } from "@/types/landing";

// Floating notification/upload badge
export function UploadFloatingBadge({
  image,
  title,
  subtitle,
  className = "",
}: UploadFloatingBadgeProps): React.JSX.Element {
  return (
    <div
      className={`bg-white border border-gray-100 p-3.5 2xl:p-4 rounded-xl flex items-center gap-3 w-60 xl:w-64 ${className}`}
    >
      <div className="size-7 xl:size-8 flex items-center justify-center shrink-0">
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-800">{title}</p>
        <p className="text-[10px] text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
