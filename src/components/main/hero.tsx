"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-primary/10 py-16 lg:py-20">
			<div className="container flex flex-col items-center text-center">
				<div className="flex items-center justify-center lg:justify-start gap-4 pb-4 opacity-90 text-sm md:text-base">
            <div className="flex -space-x-2 sm:-space-x-3">
              <Image
                alt="User avatar"
                width={44}
                height={44}
                className="size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcx5tLX-1xL-tZUpK7mPjkXf7RmPHjH5v3rrOVxIUDiN3IPiOpFnrx_cOB1UDqBofB_sH4rdZPFMAULi0_mE7oRUxwOFbde4xR3KfTafbmTM6orn4QUS3mjWTBlJ0vCiP1WL7oQyyi1qUhMnLJyzfdEcRb6ndTpJaHmq67UsMFHsUMRYZHwMfcGYR9pLAdDZQBku10xffC7JX9wmBDRPXiQPxreNGgE80HjZ19hoWOsswmhyYf2PnYHLUFP3rJV814eHfG5JIPqfQ"
              />
              <Image
                alt="User avatar"
                width={44}
                height={44}
                className="size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2c8ku-lDPydE54hMmTAJsYx7FNuzPvlEfIquIoX8uhx2E_2wfHWBDrhB_NAonmzZT1L8TwB8IHSxljPd6XL60SAmnyp2I2_OOlhDRVdAQCfXarsc_2pHMg6ZUzXcNIFRpV954tZA6N6sV6BLA2rgCJPFynrt_YaGg8YKzjMinfku_qdTp-p5ewzxMrikPDYOVjksuDKwm1i0dvrar1RYn9ykOCEj42ezLRX39me5Es2ciKEesiqv93q67UZZX-XmSTS2wkflk8Cs"
              />
              <Image
                alt="User avatar"
                width={44}
                height={44}
                className="size-9 rounded-full border-2 border-white dark:border-background-dark object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJdXy3iuWGV2AJWotR0NrtnNPB_j0G3VhW9AI0o6_C2qMTP6hbdwG2G0vZPDASm4knVV31junCZU91kMAW2l4dwCbtiG8wDEJADdgNGBmFKL1vwHSs9uH1A7fcQyUpHI_cfg7gBJof9zFc_kpHwq16nVCnhu-aL-TjYvaago5XrNCYvPVL4UikNKL3EwRUxQnuGwyUqkyyy-EJh3LNujY6LdZwf7fFmo4ETzVzGICh3iBvg2ohtHe50-qDCRgNxVHN-Ayv_MnBVow"
              />
            </div>
            <div className="font-semibold text-sm">
             Used by 150k+ students to coordinate classes easily.
            </div>
          </div>

				<h1 className="text-3xl sm:text-5xl lg:text-[54px] font-medium text-[#333333] leading-[1.2]">Simplify Class Management <br /> <span className="italic text-primary">with Your CR</span></h1> 
				{/* Description */}
				<p className="mt-6 max-w-3xl text-base md:text-lg lg:text-[19px] leading-relaxed text-gray-500">
					The all-in-one platform bridging the gap between students, reps, and faculty. Announcements, polls, and resources — all in one place.
				</p>

				{/* CTA Buttons */}
				<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						href="/login"
						className="text-base"
					>
						<Button
							variant="default"
							className="font-bold text-white bg-primary rounded-md px-8 h-13 text-sm transition-all cursor-pointer"
						>
							Get Started as CR
						</Button>
					</Link>
					<Button
							className="font-bold bg-white border border-gray-600 text-gray-600 rounded-md px-5 h-13 text-sm transition-all cursor-pointer hover:bg-transparent"
						>
						<Play className="h-5 w-5 text-gray-600"/>	Watch How It Works
						</Button>
				</div>
			</div>
		</section>
	);
}
