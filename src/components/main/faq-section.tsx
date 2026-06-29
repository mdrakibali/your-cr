"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
	const faqs = [
		{
			question: "Who is YourCR for?",
			answer: "YourCR is designed for Class Representatives (CRs) who want to coordinate coursework efficiently, and students who want to track schedules, notices, and assignments without getting lost in busy group chats.",
		},
		{
			question: "How does a CR get verified?",
			answer: "Upon registration, a CR submits their college, department, and class section details. Our administrative team reviews and verifies the profile to ensure there is only one authentic hub per section.",
		},
		{
			question: "How do students join their class board?",
			answer: "Once the CR's account is verified, they can enroll students using their roll numbers and email addresses. Enrolled students receive an automated invitation email with their dashboard credentials.",
		},
		{
			question: "Can students modify routines or post notices?",
			answer: "No, only the verified Class Representative (CR) has permission to publish announcements, edit schedules, and list teacher contact details. Students have read-only access to view these updates.",
		},
		{
			question: "Is YourCR free to use?",
			answer: "Yes, YourCR is 100% free for both Class Representatives and students to manage their classrooms and coordinate semesters.",
		},
	];

	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const toggleFaq = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="container px-4 mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					
					{/* Left Side: Header */}
					<div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-24">
						<h2 className="text-3xl md:text-4xl lg:text-[43px] font-medium text-gray-900 leading-tight">
							Frequently Asked Questions
						</h2>
						<p className="text-base md:text-lg text-gray-500 leading-relaxed">
							Everything you need to know about setting up your class coordination hub and registration.
						</p>
					</div>

					{/* Right Side: Accordion Accordion List */}
					<div className="lg:col-span-7 divide-y divide-gray-100 border-t border-b border-gray-100">
						{faqs.map((faq, idx) => {
							const isOpen = openIdx === idx;
							return (
								<div key={idx} className="py-5 text-left">
									<button
										onClick={() => toggleFaq(idx)}
										className="w-full flex items-start gap-4 text-left cursor-pointer focus:outline-none"
									>
										{/* Circular Plus/Minus Icon */}
										<div className={`mt-0.5 size-5 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-200 ${
											isOpen ? "bg-primary/10 border-primary text-primary" : "bg-white border-gray-200 text-gray-400"
										}`}>
											{isOpen ? (
												<Minus className="h-3 w-3" />
											) : (
												<Plus className="h-3 w-3" />
											)}
										</div>

										{/* Question Text */}
										<span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
											{faq.question}
										</span>
									</button>

									{/* Smoothly Expandable Answer */}
									<div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
										isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
									}`}>
										<div className="overflow-hidden text-xs sm:text-sm text-gray-500 leading-relaxed ml-9 pr-4">
											{faq.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>

				</div>
			</div>
		</section>
	);
}
