import Image from "next/image";
import princetonLogo from "@/assets/trusted-university/princetone-university-logo.webp";
import stanfordLogo from "@/assets/trusted-university/standford-logo.webp";
import marylandLogo from "@/assets/trusted-university/university-of-maryland-logo.webp";
import mitLogo from "@/assets/trusted-university/mit-logo.webp";
import cambridgeLogo from "@/assets/trusted-university/uoc-logo.webp";
import michiganLogo from "@/assets/trusted-university/uomichigan-logo.webp";

import lausdLogo from "@/assets/trusted-university/lausd-logo.webp";
import mcgillLogo from "@/assets/trusted-university/mgu-logo.webp";
import nusLogo from "@/assets/trusted-university/nus-logo.webp";
import melbourneLogo from "@/assets/trusted-university/tuom-logo.webp";
import yaleLogo from "@/assets/trusted-university/yu-logo.webp";
import ohioLogo from "@/assets/trusted-university/tos-uni-logo.svg";

export default function TrustedUniversities() {
	const row1 = [
		{ src: princetonLogo, alt: "Princeton University" },
		{ src: stanfordLogo, alt: "Stanford University" },
		{ src: marylandLogo, alt: "University of Maryland" },
		{ src: mitLogo, alt: "MIT" },
		{ src: cambridgeLogo, alt: "University of Cambridge" },
		{ src: michiganLogo, alt: "University of Michigan" },
	];

	const row2 = [
		{ src: lausdLogo, alt: "LAUSD" },
		{ src: mcgillLogo, alt: "McGill University" },
		{ src: nusLogo, alt: "NUS" },
		{ src: melbourneLogo, alt: "University of Melbourne" },
		{ src: yaleLogo, alt: "Yale University" },
		{ src: ohioLogo, alt: "The Ohio State University" },
	];

	return (
		<section className="py-12 bg-white overflow-hidden">
			<div className="container px-4 mx-auto flex flex-col items-center">
				<h2 className="text-xs font-semibold tracking-widest text-[#8c94a5] uppercase text-center mb-8">
					Trusted by Students at Top Universities
				</h2>

				{/* First Row of Universities */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center w-full max-w-5xl mb-8">
					{row1.map((uni, idx) => (
						<div key={idx} className="flex items-center justify-center h-10 sm:h-12 w-full px-2">
							<Image
								src={uni.src}
								alt={uni.alt}
								style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
								className="max-h-9 sm:max-h-11 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
								priority
							/>
						</div>
					))}
				</div>

				{/* Second Row of Universities */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center w-full max-w-5xl">
					{row2.map((uni, idx) => (
						<div key={idx} className="flex items-center justify-center h-10 sm:h-12 w-full px-2">
							<Image
								src={uni.src}
								alt={uni.alt}
								style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
								className="max-h-9 sm:max-h-11 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
								priority
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
