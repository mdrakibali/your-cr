import React from "react";
import Hero from "@/components/main/hero";
import TrustedUniversities from "@/components/main/trusted-universities";
import ProblemSection from "@/components/main/problem-section";
import ImportSection from "@/components/main/import-section";
import CoordinateSection from "@/components/main/coordinate-section";
import HowItWorks from "@/components/main/how-it-works";
import FeatureSection from "@/components/main/feature-section";

export default function HomePage() {
	return (
		<div className="bg-white">
			<Hero />
			<TrustedUniversities />
			<ProblemSection />
			<ImportSection />
			<CoordinateSection />
			<HowItWorks />
			<FeatureSection />
		</div>
	);
}
