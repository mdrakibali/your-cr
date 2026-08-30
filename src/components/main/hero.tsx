"use client";
import { Button } from "@/components/ui/button";
import { MoveRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-10 sm:py-12 md:py-14 lg:py-16 2xl:py-20">
      <div className="container flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 pb-3 sm:pb-3.5 md:pb-4 opacity-90">
          <div className="flex -space-x-2 sm:-space-x-2.5 2xl:-space-x-3">
            <Image
              alt="User avatar"
              width={44}
              height={44}
              className="size-7 sm:size-8 2xl:size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcx5tLX-1xL-tZUpK7mPjkXf7RmPHjH5v3rrOVxIUDiN3IPiOpFnrx_cOB1UDqBofB_sH4rdZPFMAULi0_mE7oRUxwOFbde4xR3KfTafbmTM6orn4QUS3mjWTBlJ0vCiP1WL7oQyyi1qUhMnLJyzfdEcRb6ndTpJaHmq67UsMFHsUMRYZHwMfcGYR9pLAdDZQBku10xffC7JX9wmBDRPXiQPxreNGgE80HjZ19hoWOsswmhyYf2PnYHLUFP3rJV814eHfG5JIPqfQ"
            />
            <Image
              alt="User avatar"
              width={44}
              height={44}
              className="size-7 sm:size-8 2xl:size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2c8ku-lDPydE54hMmTAJsYx7FNuzPvlEfIquIoX8uhx2E_2wfHWBDrhB_NAonmzZT1L8TwB8IHSxljPd6XL60SAmnyp2I2_OOlhDRVdAQCfXarsc_2pHMg6ZUzXcNIFRpV954tZA6N6sV6BLA2rgCJPFynrt_YaGg8YKzjMinfku_qdTp-p5ewzxMrikPDYOVjksuDKwm1i0dvrar1RYn9ykOCEj42ezLRX39me5Es2ciKEesiqv93q67UZZX-XmSTS2wkflk8Cs"
            />
            <Image
              alt="User avatar"
              width={44}
              height={44}
              className="size-7 sm:size-8 2xl:size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJdXy3iuWGV2AJWotR0NrtnNPB_j0G3VhW9AI0o6_C2qMTP6hbdwG2G0vZPDASm4knVV31junCZU91kMAW2l4dwCbtiG8wDEJADdgNGBmFKL1vwHSs9uH1A7fcQyUpHI_cfg7gBJof9zFc_kpHwq16nVCnhu-aL-TjYvaago5XrNCYvPVL4UikNKL3EwRUxQnuGwyUqkyyy-EJh3LNujY6LdZwf7fFmo4ETzVzGICh3iBvg2ohtHe50-qDCRgNxVHN-Ayv_MnBVow"
            />
          </div>
          <div className="font-semibold text-xs sm:text-xs md:text-sm 2xl:text-sm text-gray-700">
            Used by 150k+ students to coordinate classes easily.
          </div>
        </div>

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
          <Link href="/login" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full sm:w-auto font-semibold 2xl:font-bold text-white bg-primary rounded-md px-5 sm:px-6 2xl:px-8 h-10 sm:h-11 2xl:h-13 text-xs sm:text-sm 2xl:text-sm transition-all cursor-pointer"
            >
              Get Started as CR <MoveRight className="size-3.5 sm:size-4 ml-1"/>
            </Button>
          </Link>
          <Button className="w-full sm:w-auto font-semibold 2xl:font-bold bg-white border border-gray-300 text-gray-600 rounded-md px-4 sm:px-5 2xl:px-5 h-10 sm:h-11 2xl:h-13 text-xs sm:text-sm 2xl:text-sm transition-all cursor-pointer hover:bg-white">
            <Play className="size-3.5 sm:size-4 2xl:size-5 mr-1" /> Watch How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
