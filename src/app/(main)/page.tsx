import CoordinateSection from "@/components/main/coordinate-section";
import FeatureSection from "@/components/main/feature-section";
import Hero from "@/components/main/hero";
import HowItWorks from "@/components/main/how-it-works";
import UploadSection from "@/components/main/upload-section";
import ProblemSection from "@/components/main/problem-section";
import TrustedUniversities from "@/components/main/trusted-universities";
import StatsSection from "@/components/main/stats-section";
import TestimonialsSection from "@/components/main/testimonials-section";
import FaqSection from "@/components/main/faq-section";

export default function HomePage() {
	return (
		<div className="bg-white">
			<Hero />
			<TrustedUniversities />
			<ProblemSection />
			<FeatureSection />
			<UploadSection />
			<HowItWorks />
			<CoordinateSection />
			<StatsSection />
			<TestimonialsSection />
			<FaqSection />
		</div>
	);
}
