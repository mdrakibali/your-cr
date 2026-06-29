"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
	const testimonials = [
		{
			name: "Arafat Rahman",
			role: "Class Representative, DU",
			avatar: "AR",
			avatarBg: "bg-blue-100 text-blue-700",
			rating: 5,
			text: "YourCR has completely changed how I coordinate Section B. I used to spend hours answering the same questions about routines and room changes. Now, I just upload it once, and everyone sees it instantly.",
		},
		{
			name: "Tahmina Akter",
			role: "Student, NSU",
			avatar: "TA",
			avatarBg: "bg-emerald-100 text-emerald-700",
			rating: 5,
			text: "As a student, I was always missing exam notices and assignment deadlines in WhatsApp chat floods. Now, I just open YourCR and see all official notices in order. It's an absolute lifesaver!",
		},
		{
			name: "Sajid Hasan",
			role: "Class Representative, BUET",
			avatar: "SH",
			avatarBg: "bg-purple-100 text-purple-700",
			rating: 5,
			text: "Excellent tool for managing directories and classroom resources. I can register students, assign lab groups, and link teacher emails instantly. The system is extremely fast and intuitive.",
		},
		{
			name: "Maria Chowdhury",
			role: "Student, RU",
			avatar: "MC",
			avatarBg: "bg-pink-100 text-pink-700",
			rating: 5,
			text: "The assignment tracker with countdown warnings is so helpful. I haven't missed a single deadline since we started using YourCR. Highly recommend it to other CRs!",
		},
		{
			name: "Nayeem Islam",
			role: "Class Representative, IUT",
			avatar: "NI",
			avatarBg: "bg-amber-100 text-amber-700",
			rating: 5,
			text: "Admin approval was fast, and inviting my entire class via roll sheet was seamless. Managing room changes during exams is now a single-tap job instead of 20 chat messages.",
		},
	];

	const [activeIndex, setActiveIndex] = useState(2); // Start at center (Sajid)
	const [cardWidth, setCardWidth] = useState(450);
	const [gap, setGap] = useState(24);

	useEffect(() => {
		// Auto slide every 4 seconds
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearInterval(timer);
	}, [testimonials.length]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setCardWidth(280); // Mobile card width
				setGap(16); // Mobile gap
			} else {
				setCardWidth(450); // Desktop card width
				setGap(24); // Desktop gap
			}
		};
		
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="py-20 bg-[#f8f5fc] overflow-hidden border-y border-purple-100/30">
			<div className="container px-4 mx-auto max-w-6xl text-center">
				
				{/* Header */}
				<div className="mb-12 max-w-3xl mx-auto space-y-4">
					<h2 className="font-besley text-3xl md:text-4xl lg:text-[43px]  text-gray-900 leading-tight">
						Loved by classrooms{" "}
						<span className="italic text-primary font-normal">everywhere</span>
					</h2>
					<p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
						Thousands of Class Representatives and students are saving time, coordinating easily, and leading stress-free semesters with YourCR.
					</p>
				</div>

				{/* Sliding Carousel Wrapper */}
				<div className="relative w-full overflow-hidden py-12">
					<div
						className="flex transition-transform duration-500 ease-out"
						style={{
							transform: `translateX(calc(50% - ${cardWidth / 2}px - (${activeIndex} * (${cardWidth}px + ${gap}px))))`,
						}}
					>
						{testimonials.map((item, idx) => {
							const isActive = idx === activeIndex;
							return (
								<div
									key={idx}
									className="bg-white border p-6 rounded-2xl flex flex-col justify-between shrink-0 transition-all duration-500 ease-out"
									style={{
										width: `${cardWidth}px`,
										marginRight: `${gap}px`,
										opacity: isActive ? 1 : 0.4,
										borderColor: isActive ? "#2459c8" : "#e2e8f0", // Primary blue for active card
										borderWidth: isActive ? "2px" : "1px",
										transform: `scale(${isActive ? 1.05 : 0.92}) translateY(${isActive ? -16 : 16}px)`,
										zIndex: isActive ? 10 : 1,
									}}
								>
									<div className="space-y-4">
										{/* User Info Header */}
										<div className="flex items-center gap-3">
											<div className={`size-10 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${item.avatarBg}`}>
												{item.avatar}
											</div>
											<div className="text-left">
												<h4 className="font-bold text-sm text-gray-950">{item.name}</h4>
												<p className="text-[10px] text-gray-400 font-medium">{item.role}</p>
											</div>
										</div>

										{/* Stars Rating */}
										<div className="flex items-center gap-0.5 text-amber-400">
											{[...Array(item.rating)].map((_, sIdx) => (
												<Star key={sIdx} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
											))}
										</div>

										{/* Review Text */}
										<p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal text-left">
											"{item.text}"
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Bottom Pagination Dots */}
				<div className="mt-8 flex justify-center items-center gap-1.5">
					{testimonials.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setActiveIndex(idx)}
							className={`rounded-full transition-all duration-300 cursor-pointer ${
								idx === activeIndex
									? "w-2.5 h-2.5 bg-primary"
									: "w-1.5 h-1.5 bg-purple-200"
							}`}
						/>
					))}
				</div>

			</div>
		</section>
	);
}
