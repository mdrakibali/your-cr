import React from "react";
import Hero from "@/components/main/hero";
import TrustedUniversities from "@/components/main/trusted-universities";

export default function HomePage() {
	return (
		<div className="bg-white">
			<Hero />
			<TrustedUniversities />
		</div>
	);
}
