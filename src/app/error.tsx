"use client";
import React, { useEffect } from "react";
import { RefreshCw, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 text-center shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        {/* Warning Icon Container */}
        <div className="inline-flex p-4 bg-red-50 text-red-600 rounded-full mb-6">
          <AlertTriangle className="h-10 w-10 animate-bounce" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3 font-heading">
          Something went wrong!
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
          An unexpected error occurred while loading this section. Our team is
          already looking into it. Let's try reloading!
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto h-11 px-6 bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" /> Try Again
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full h-11 px-6 border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
