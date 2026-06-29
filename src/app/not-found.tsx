"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 text-center shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        {/* Large 404 number with gradient */}
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-transparent mb-4 select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3 font-heading">
          Lost in Classroom?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
          The page you are looking for might have been shifted, renamed, or
          simply doesn't exist. Let's get you back to class!
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto h-11 px-5 border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full h-11 px-5 bg-primary text-white font-bold hover:bg-primary/95 flex items-center justify-center gap-2 cursor-pointer">
              <Home className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
