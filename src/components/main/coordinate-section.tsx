import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import happyStudent from "@/assets/main/happy-student.png";

export default function CoordinateSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-900 leading-tight">
              You won't believe how quickly you can{" "}
              <span className="italic text-primary font-normal">
                coordinate with YourCR
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              YourCR is the classroom coordination tool that never sleeps. Share
              assignment guidelines, publish priority notices, edit dynamic
              schedule changes, and list instructor contacts in one central
              dashboard. Manage anytime, from any device. What took hours of
              chat moderations now takes seconds.
            </p>

            <div className="pt-2">
              <Link href="/login">
                <Button className="h-12 px-8 text-sm font-bold bg-primary text-white rounded-lg inline-flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
                  Start Your Free Session <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Graphic/Image Side */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Background shape box */}
            <div className="relative w-full max-w-md aspect-square overflow-hidden flex items-end justify-center rounded-3xl border border-gray-100">
              <Image
                src={happyStudent}
                alt="Happy student using laptop"
                className="pointer-events-none w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
                priority
              />
            </div>

            {/* Floating pill 1: Top-Left */}
            <div className="absolute top-[10%] left-[2%] md:left-[5%] bg-white border border-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-700 shadow-[0_0_5px_0 rgba(0,0,0,0.05)]">
              Available 24/7
            </div>

            {/* Floating pill 2: Bottom-Left */}
            <div className="absolute bottom-[10%] left-[-2%] md:left-[0%] bg-white border border-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-700 shadow-[0_0_5px_0 rgba(0,0,0,0.05)] ">
              Free for all students
            </div>

            {/* Floating pill 3: Bottom-Right */}
            <div className="absolute bottom-[20%] right-[2%] md:right-[5%] bg-white border border-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-700 shadow-[0_0_5px_0 rgba(0,0,0,0.05)] ">
              Access anywhere, anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
