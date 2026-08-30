import { ArrowRight, CloudUpload } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

// Central upload dropzone and CTA card
export function UploadCenterCard(): React.JSX.Element {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 2xl:p-8 flex flex-col items-center justify-center text-center order-2 lg:mx-4 shrink-0 z-20">
      <div className="p-3 sm:p-3.5 2xl:p-4 bg-primary/10 rounded-full mb-4 sm:mb-6">
        <CloudUpload className="size-6 sm:size-7 2xl:size-8 text-primary" />
      </div>

      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1">
        Upload once.
      </h3>
      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
        Sync the class.
      </h3>

      <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed max-w-xs mb-5 sm:mb-6 2xl:mb-8">
        Share assignment guidelines, routine changes, syllabus details, and
        teacher contacts in one click.
      </p>

      <Link href="/login" className="w-full">
        <Button className="w-full h-10 sm:h-11 2xl:h-12 text-xs sm:text-sm font-semibold 2xl:font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
          Get Started as CR <ArrowRight className="size-3.5 sm:size-4" />
        </Button>
      </Link>
    </div>
  );
}
