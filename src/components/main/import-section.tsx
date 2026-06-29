import React from "react";
import { Bell, FileText, Link2, Calendar, FolderOpen, ArrowRight, Users, CloudUpload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ImportSection() {
	const leftFloating = [
		{ icon: <FileText className="h-5 w-5 text-emerald-600" />, title: "Assignment briefs", subtitle: "Guidelines & PDFs" },
		{ icon: <Calendar className="h-5 w-5 text-red-600" />, title: "Routine changes", subtitle: "Rescheduled classes" },
		{ icon: <Link2 className="h-5 w-5 text-blue-600" />, title: "Lecture slides", subtitle: "Drive & folder links" },
		{ icon: <Bell className="h-5 w-5 text-amber-600" />, title: "Exam notices", subtitle: "Dates & syllabi" },
	];

	const rightFloating = [
		{ icon: <Users className="h-5 w-5 text-purple-600" />, title: "Faculty contacts", subtitle: "Teacher emails" },
		{ icon: <FileText className="h-5 w-5 text-cyan-600" />, title: "Course syllabus", subtitle: "Semester outlines" },
		{ icon: <Link2 className="h-5 w-5 text-sky-600" />, title: "Meeting links", subtitle: "Zoom / Meet slots" },
		{ icon: <FolderOpen className="h-5 w-5 text-indigo-600" />, title: "Class resources", subtitle: "Handouts & sheets" },
	];

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="container px-4 mx-auto max-w-6xl text-center">
				{/* Header */}
				<div className="mb-12 max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl lg:text-[43px] font-medium text-gray-900 leading-tight">
						Upload once.{" "}
						<span className="italic text-primary font-normal">Notify everyone</span>
					</h2>
					<p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
						No more copy-pasting announcements or files 50 times in group chats. CRs upload class details once, and YourCR organizes them for the entire class instantly.
					</p>
				</div>

				{/* Layout Container */}
				<div className="relative w-full max-w-5xl mx-auto min-h-[550px] flex flex-col lg:flex-row items-center justify-between gap-8 pt-8">
					
					{/* Mobile/Tablet Grid of inputs (Visible on small screens) */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:hidden order-1">
						{leftFloating.map((item, idx) => (
							<div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl flex flex-col items-center text-center">
								<div className="p-2 bg-gray-50 rounded-lg mb-2">
									{item.icon}
								</div>
								<span className="text-xs font-bold text-gray-800">{item.title}</span>
								<span className="text-[10px] text-gray-400 mt-0.5">{item.subtitle}</span>
							</div>
						))}
					</div>

					{/* Left Column (Desktop Absolute) */}
					<div className="hidden lg:block w-72 shrink-0 space-y-6 z-10 text-left">
						{/* Positioned relatively around the center block using margins / flex */}
						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-12">
							<div className="p-2 bg-gray-50 rounded-lg">{leftFloating[0].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{leftFloating[0].title}</p>
								<p className="text-[10px] text-gray-400">{leftFloating[0].subtitle}</p>
							</div>
						</div>
						
						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-4">
							<div className="p-2 bg-gray-50 rounded-lg">{leftFloating[1].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{leftFloating[1].title}</p>
								<p className="text-[10px] text-gray-400">{leftFloating[1].subtitle}</p>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-16">
							<div className="p-2 bg-gray-50 rounded-lg">{leftFloating[2].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{leftFloating[2].title}</p>
								<p className="text-[10px] text-gray-400">{leftFloating[2].subtitle}</p>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-2">
							<div className="p-2 bg-gray-50 rounded-lg">{leftFloating[3].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{leftFloating[3].title}</p>
								<p className="text-[10px] text-gray-400">{leftFloating[3].subtitle}</p>
							</div>
						</div>
					</div>

					{/* Center Card */}
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center order-2 lg:mx-4 shrink-0 z-20">
						<div className="p-4 bg-primary/10 rounded-full mb-6">
							<CloudUpload className="h-8 w-8 text-primary" />
						</div>
						
						<h3 className="text-xl font-medium text-gray-900 mb-2">
							Upload once.
						</h3>
						<h3 className="text-xl font-medium text-gray-900 mb-4">
							Sync the class.
						</h3>
						
						<p className="text-xs text-gray-400 leading-relaxed max-w-xs mb-8">
							Share assignment guidelines, routine changes, syllabus details, and teacher contacts in one click.
						</p>

						<Link href="/login" className="w-full">
							<Button className="w-full h-12 text-sm font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
								Get Started as CR <ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
					</div>

					{/* Right Column (Desktop Absolute) */}
					<div className="hidden lg:block w-72 shrink-0 space-y-6 z-10 text-left">
						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-12">
							<div className="p-2 bg-gray-50 rounded-lg">{rightFloating[0].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{rightFloating[0].title}</p>
								<p className="text-[10px] text-gray-400">{rightFloating[0].subtitle}</p>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-4">
							<div className="p-2 bg-gray-50 rounded-lg">{rightFloating[1].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{rightFloating[1].title}</p>
								<p className="text-[10px] text-gray-400">{rightFloating[1].subtitle}</p>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-16">
							<div className="p-2 bg-gray-50 rounded-lg">{rightFloating[2].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{rightFloating[2].title}</p>
								<p className="text-[10px] text-gray-400">{rightFloating[2].subtitle}</p>
							</div>
						</div>

						<div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-2">
							<div className="p-2 bg-gray-50 rounded-lg">{rightFloating[3].icon}</div>
							<div>
								<p className="text-xs font-bold text-gray-800">{rightFloating[3].title}</p>
								<p className="text-[10px] text-gray-400">{rightFloating[3].subtitle}</p>
							</div>
						</div>
					</div>

					{/* Mobile/Tablet Grid of inputs (Visible on small screens) */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:hidden order-3">
						{rightFloating.map((item, idx) => (
							<div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl flex flex-col items-center text-center">
								<div className="p-2 bg-gray-50 rounded-lg mb-2">
									{item.icon}
								</div>
								<span className="text-xs font-bold text-gray-800">{item.title}</span>
								<span className="text-[10px] text-gray-400 mt-0.5">{item.subtitle}</span>
							</div>
						))}
					</div>

				</div>
			</div>
		</section>
	);
}
