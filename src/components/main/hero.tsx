import { MoveRight, Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { HERO_AVATARS } from "@/lib/mock-data/landing";

// Hero section highlighting value proposition and primary call-to-actions
export function Hero(): React.JSX.Element {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="container flex flex-col items-center text-center">
        {/* Social Proof Badges */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 pb-3 sm:pb-3.5 md:pb-4 opacity-90">
          <div className="flex -space-x-2 sm:-space-x-2.5 2xl:-space-x-3">
            {HERO_AVATARS.map((avatar, idx) => (
              <div
                key={idx}
                className={`size-7 sm:size-8 2xl:size-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold ${avatar.bg}`}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
          <div className="font-semibold text-xs sm:text-xs md:text-sm 2xl:text-sm text-gray-700">
            Used by 150k+ students to coordinate classes easily.
          </div>
        </div>

        {/* Main Hero Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] 2xl:text-[50px] font-medium text-[#333333] leading-[1.2]">
          Simplify Class Management <br />{" "}
          <span className="italic text-primary">with Your CR</span>
        </h1>

        {/* Description */}
        <p className="mt-3.5 sm:mt-4 md:mt-5 2xl:mt-6 max-w-xl sm:max-w-2xl 2xl:max-w-3xl text-xs sm:text-sm md:text-base lg:text-[17px] 2xl:text-[19px] leading-relaxed text-gray-500">
          The all-in-one platform bridging the gap between students, reps, and
          faculty. Announcements, polls, and resources — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 2xl:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-3.5 2xl:gap-4 justify-center items-center">
          <Link href="/register">
            <Button className="w-full sm:w-auto h-10 sm:h-11 md:h-11 2xl:h-12 px-5 sm:px-6 2xl:px-8 text-xs sm:text-sm 2xl:text-base font-semibold 2xl:font-bold rounded-lg bg-primary text-white hover:bg-primary/95 flex items-center justify-center gap-2 cursor-pointer">
              Register as CR <MoveRight className="size-3.5 sm:size-4" />
            </Button>
          </Link>
          <Link href="/#how-it-works">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-10 sm:h-11 md:h-11 2xl:h-12 px-5 sm:px-6 2xl:px-8 text-xs sm:text-sm 2xl:text-base font-semibold 2xl:font-bold rounded-lg border border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="size-3.5 sm:size-4 fill-primary" /> How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
