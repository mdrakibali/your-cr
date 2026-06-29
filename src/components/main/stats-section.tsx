import React from "react";

export default function StatsSection() {
	const stats = [
		{
			value: "10k+",
			label: "Verified Class Representatives",
			bgClass: "bg-[#fff8f2] border-amber-100/50",
			textClass: "text-amber-600",
		},
		{
			value: "500+",
			label: "Colleges & Universities",
			bgClass: "bg-[#fff2f3] border-rose-100/50",
			textClass: "text-rose-600",
		},
		{
			value: "150k+",
			label: "Students staying synchronized",
			bgClass: "bg-[#f0fdff] border-cyan-100/50",
			textClass: "text-cyan-600",
		},
		{
			value: "1M+",
			label: "Notice & routine updates shared",
			bgClass: "bg-[#faf6ff] border-purple-100/50",
			textClass: "text-purple-600",
		},
	];

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="container px-4 mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					
					{/* Left Side: 2x2 Grid of Stat Cards */}
					<div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
						{stats.map((stat, idx) => (
							<div
								key={idx}
								className={`p-6 sm:p-8 rounded-3xl border flex flex-col items-center justify-center text-center ${stat.bgClass}`}
							>
								<span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.textClass} mb-2`}>
									{stat.value}
								</span>
								<span className="text-xs sm:text-sm font-semibold text-gray-500 leading-relaxed max-w-[150px]">
									{stat.label}
								</span>
							</div>
						))}
					</div>

					{/* Right Side: Text Description */}
					<div className="lg:col-span-6 text-left space-y-6 order-1 lg:order-2">
						<h2 className="text-3xl md:text-4xl lg:text-[43px] font-medium text-gray-900 leading-tight">
							Trusted by classrooms{" "}
							<span className="italic text-primary font-normal">worldwide</span>
						</h2>
						
						<p className="text-base md:text-lg text-gray-500 leading-relaxed">
							Join thousands of Class Representatives, students, and course coordinators using YourCR to eliminate group chat clutter, prevent routine confusion, and build a structured hub for their academic sessions.
						</p>
					</div>

				</div>
			</div>
		</section>
	);
}
