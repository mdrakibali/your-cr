"use client";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7fe] via-[#fafbff] to-white py-16 lg:py-24">
			<div className="container flex flex-col items-center text-center">

				{/* Description */}
				<p className="mt-6 max-w-3xl text-base md:text-lg lg:text-[19px] leading-relaxed text-gray-500">
					Turn class schedules, routine changes, exam notices, and student directory spreadsheets into a complete, AI-powered class hub—so you organize instantly and lead effortlessly.
				</p>

				{/* CTA Buttons */}
				<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button className="h-14 px-8 text-base font-bold bg-primary text-white rounded-lg flex items-center gap-2 transition-transform active:scale-[0.98]">
						Start My Free CR Session <ArrowRight className="h-5 w-5" />
					</Button>
					<Button variant="outline" className="h-14 px-8 text-base font-bold border border-gray-200 text-gray-700 bg-white rounded-lg flex items-center gap-2">
						<Play className="h-5 w-5 fill-gray-500 text-gray-500" /> Watch How It Works
					</Button>
				</div>
			</div>
		</section>
	);
}
