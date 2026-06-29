"use client";
import React, { useState } from "react";
import { UserCheck, Mail, CloudUpload, Shield, FileText, Calendar, Users, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
	const [activeStep, setActiveStep] = useState(1);

	const steps = [
		{
			id: 1,
			title: "CR Register & Verification",
			desc: "If your section doesn't have a CR, register your department and class details. Our admins review and verify to ensure class security.",
			icon: <Shield className="h-4 w-4" />,
		},
		{
			id: 2,
			title: "Invite Class Students",
			desc: "Once verified, the CR adds classmates via email and roll number. Students instantly receive an email invite with direct access.",
			icon: <Users className="h-4 w-4" />,
		},
		{
			id: 3,
			title: "Upload & Share Class Details",
			desc: "CR uploads assignment sheets, class test notifications, faculty contact files, and schedules directly to the dashboard.",
			icon: <CloudUpload className="h-4 w-4" />,
		},
		{
			id: 4,
			title: "Access Centralized Hub",
			desc: "Students log in to view live routines, exam notice feeds, assignment countdowns, and coordinator contacts in one click.",
			icon: <UserCheck className="h-4 w-4" />,
		},
	];

	// Render the right-side visual preview depending on active step
	const renderPreview = () => {
		switch (activeStep) {
			case 1:
				return (
					<div className="flex flex-col items-center justify-center p-6 h-full space-y-4">
						<div className="border border-gray-200 bg-white rounded-xl p-5 w-full max-w-xs text-left">
							<h5 className="font-bold text-xs text-gray-400 uppercase mb-2">CR Verification Status</h5>
							<div className="flex items-center justify-between mb-4">
								<span className="text-xs font-semibold text-gray-700">Section A (CSE)</span>
								<span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">Pending Admin Review</span>
							</div>
							<div className="h-2 w-full bg-gray-100 rounded overflow-hidden">
								<div className="h-full w-2/3 bg-amber-500 rounded"></div>
							</div>
						</div>

						<div className="w-4 h-4 text-gray-300">⬇️</div>

						<div className="border border-emerald-100 bg-emerald-50/10 rounded-xl p-5 w-full max-w-xs text-left">
							<div className="flex items-center justify-between">
								<span className="text-xs font-semibold text-gray-900">Access Granted</span>
								<span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
									Verified CR ✅
								</span>
							</div>
							<p className="text-[10px] text-gray-500 mt-2">You can now add student lists and manage schedules.</p>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="flex flex-col items-center justify-center p-6 h-full space-y-4">
						<div className="border border-gray-200 bg-white rounded-xl p-5 w-full max-w-xs text-left">
							<h5 className="font-bold text-xs text-gray-800 mb-3">Add Student</h5>
							<div className="space-y-2 text-xs">
								<div>
									<label className="text-[10px] font-semibold text-gray-400">EMAIL ADDRESS</label>
									<div className="border border-gray-200 rounded p-1.5 bg-gray-50 text-gray-600">fahim@university.edu</div>
								</div>
								<div>
									<label className="text-[10px] font-semibold text-gray-400">ROLL / ID</label>
									<div className="border border-gray-200 rounded p-1.5 bg-gray-50 text-gray-600">CSE-2026-02</div>
								</div>
								<button className="w-full bg-primary text-white text-xs py-2 rounded font-bold mt-2">
									Send Invite & Email
								</button>
							</div>
						</div>
						
						{/* Email Notification Simulation */}
						<div className="border border-blue-100 bg-blue-50/20 rounded-xl p-4 w-full max-w-xs text-left">
							<div className="flex items-center gap-2 mb-1.5">
								<Mail className="h-4 w-4 text-primary" />
								<span className="font-bold text-xs text-gray-800">Mail Sent!</span>
							</div>
							<p className="text-[10px] text-gray-500 leading-relaxed">
								To: <span className="font-semibold text-gray-700">fahim@university.edu</span><br />
								"You've been added to YourCR. Click here to login using your roll..."
							</p>
						</div>
					</div>
				);
			case 3:
				return (
					<div className="flex flex-col items-center justify-center p-6 h-full space-y-4">
						<div className="border border-gray-200 bg-white rounded-xl p-5 w-full max-w-xs text-left">
							<h5 className="font-bold text-xs text-gray-800 mb-3">Upload Class Notice</h5>
							<div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50 cursor-pointer">
								<CloudUpload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
								<span className="text-[11px] font-bold text-gray-700 block">Drag & Drop File Here</span>
								<span className="text-[9px] text-gray-400">PDF, WebP, SVG, PNG or Doc (Max 10MB)</span>
							</div>
							<div className="mt-3 flex items-center justify-between p-2 border border-gray-100 bg-gray-50/50 rounded-lg">
								<span className="text-[10px] text-gray-600 truncate max-w-[180px]">📄 Algorithm_Syllabus.pdf</span>
								<span className="text-[9px] font-bold text-emerald-600">Ready</span>
							</div>
							<button className="w-full bg-primary text-white text-xs py-2 rounded font-bold mt-3">
								Publish to Notice Feed
							</button>
						</div>
					</div>
				);
			case 4:
				return (
					<div className="flex flex-col items-center justify-center p-6 h-full">
						<div className="border border-gray-200 bg-white rounded-2xl p-5 w-full max-w-xs space-y-3">
							<div className="flex items-center justify-between pb-2 border-b border-gray-100">
								<h5 className="font-bold text-xs text-gray-800">YourCR Dashboard</h5>
								<span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Sec A</span>
							</div>
							<div className="grid grid-cols-2 gap-2">
								<div className="border border-gray-100 p-2.5 rounded-xl text-center bg-gray-50/50">
									<Calendar className="h-4 w-4 text-emerald-600 mx-auto mb-1" />
									<span className="text-[10px] font-bold text-gray-700 block">Daily Routine</span>
								</div>
								<div className="border border-gray-100 p-2.5 rounded-xl text-center bg-gray-50/50">
									<Bell className="h-4 w-4 text-amber-600 mx-auto mb-1" />
									<span className="text-[10px] font-bold text-gray-700 block">Notice Feed</span>
								</div>
								<div className="border border-gray-100 p-2.5 rounded-xl text-center bg-gray-50/50">
									<FileText className="h-4 w-4 text-rose-600 mx-auto mb-1" />
									<span className="text-[10px] font-bold text-gray-700 block">Assignments</span>
								</div>
								<div className="border border-gray-100 p-2.5 rounded-xl text-center bg-gray-50/50">
									<Users className="h-4 w-4 text-purple-600 mx-auto mb-1" />
									<span className="text-[10px] font-bold text-gray-700 block">Classmates</span>
								</div>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<section className="py-20 bg-gray-50/50 overflow-hidden">
			<div className="container px-4 mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl lg:text-[43px] font-medium text-gray-900 leading-tight">
						How YourCR{" "}
						<span className="italic text-primary font-normal">coordination works</span>
					</h2>
					<p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
						From CR enrollment and admin approval to student invites and daily sharing — here is the workflow setup.
					</p>
				</div>

				{/* Flex Content Split */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
					
					{/* Left Selection Tab List */}
					<div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
						{steps.map((step) => {
							const isActive = activeStep === step.id;
							return (
								<div
									key={step.id}
									onClick={() => setActiveStep(step.id)}
									className={`cursor-pointer border text-left p-6 rounded-2xl transition-colors ${
										isActive
											? "bg-white border-primary border-l-4"
											: "bg-white/40 border-gray-100 hover:border-gray-200"
									}`}
								>
									<div className="flex items-center gap-3 mb-2">
										<span
											className={`size-6 rounded-full flex items-center justify-center text-xs font-bold ${
												isActive
													? "bg-primary text-white"
													: "bg-gray-100 text-gray-500"
											}`}
										>
											{step.id}
										</span>
										<h4 className="font-bold text-sm sm:text-base text-gray-900">
											{step.title}
										</h4>
									</div>
									{isActive && (
										<p className="text-xs sm:text-sm text-gray-500 leading-relaxed ml-9">
											{step.desc}
										</p>
									)}
								</div>
							);
						})}
					</div>

					{/* Right Display Preview Box */}
					<div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
						<div className="w-full max-w-md bg-[#faf5ff] border border-purple-100 rounded-3xl min-h-[350px] flex items-center justify-center relative overflow-hidden">
							{renderPreview()}
						</div>
					</div>

				</div>

				{/* Bottom Center CTA */}
				<div className="mt-12 text-center">
					<Link href="/register">
						<Button className="h-12 px-6 text-sm font-bold bg-primary text-white rounded-lg inline-flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
							Register Your Class CR Session <ArrowRight className="h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
