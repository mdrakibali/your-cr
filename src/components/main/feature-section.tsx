import React from "react";
import { Bell, Calendar, FileText, Users, Mail, Phone, ExternalLink } from "lucide-react";

export default function FeatureSection() {
	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<span className="text-xs font-semibold tracking-widest text-[#8c94a5] uppercase block mb-3">
						Introducing YourCR
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-[43px] font-medium text-gray-900 leading-tight">
						We turn classroom chaos into a{" "}
						<span className="italic text-primary font-normal">complete coordination hub</span>
					</h2>
					<p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
						An all-in-one portal for CRs to organize everything and for students to stay updated on routine, assignments, faculty contacts, and announcements.
					</p>
				</div>

				{/* Feature Blocks */}
				<div className="flex flex-col gap-12">
					
					{/* Feature 1: Notice Board */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fff8f2] p-8 sm:p-12 rounded-3xl border border-amber-100/50">
						<div className="lg:col-span-6 text-left">
							<div className="inline-flex p-3 bg-amber-100 text-amber-700 rounded-2xl mb-6">
								<Bell className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-medium text-gray-900 mb-2">Smart Notice Board</h3>
							<h4 className="text-base font-semibold text-amber-700 mb-4">Never miss an official update</h4>
							<p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
								CRs can publish class announcements, exam schedules, and slides. Students get instant notifications, and all updates remain in a clean timeline.
							</p>
							<p className="text-gray-500 text-sm leading-relaxed">
								No more searching through hundreds of message logs to find an attachment link.
							</p>
						</div>
						<div className="lg:col-span-6 flex justify-center">
							{/* Mockup UI */}
							<div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
									<div className="flex gap-1.5">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
										yourcr.com/notices
									</div>
								</div>
								<div className="p-4 sm:p-6 space-y-4">
									<div className="border border-amber-100 bg-amber-50/20 p-4 rounded-xl">
										<div className="flex justify-between items-start mb-2">
											<span className="font-bold text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">Urgent</span>
											<span className="text-[11px] text-gray-400">10:42 AM</span>
										</div>
										<h5 className="font-bold text-sm text-gray-800 mb-1">Algorithm Midterm Rescheduled</h5>
										<p className="text-xs text-gray-500 leading-relaxed">
											The midterm scheduled for tomorrow has been shifted to Room 502 at 2:00 PM due to a slot clash.
										</p>
										<div className="mt-3 flex items-center justify-between">
											<span className="text-[11px] font-semibold text-primary hover:underline cursor-pointer flex items-center gap-1">
												📎 syllabus_v2.pdf <ExternalLink className="h-3 w-3" />
											</span>
										</div>
									</div>
									<div className="border border-gray-100 p-4 rounded-xl bg-gray-50/30">
										<div className="flex justify-between items-start mb-2">
											<span className="font-bold text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">General</span>
											<span className="text-[11px] text-gray-400">Yesterday</span>
										</div>
										<h5 className="font-bold text-sm text-gray-800 mb-1">Guest Lecture on Cloud Solutions</h5>
										<p className="text-xs text-gray-500 leading-relaxed">
											A guest lecture will occur on Wednesday in the library hall. Attendance is highly encouraged.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Feature 2: Dynamic Routine Tracker */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f2faf6] p-8 sm:p-12 rounded-3xl border border-emerald-100/50">
						<div className="lg:col-span-6 lg:order-2 text-left">
							<div className="inline-flex p-3 bg-emerald-100 text-emerald-700 rounded-2xl mb-6">
								<Calendar className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-medium text-gray-900 mb-2">Live Routine Tracker</h3>
							<h4 className="text-base font-semibold text-emerald-700 mb-4">Up-to-the-minute class schedules</h4>
							<p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
								CRs update the daily schedule when teachers reschedule classes or switch classrooms. Students always see the active status instantly.
							</p>
							<p className="text-gray-500 text-sm leading-relaxed">
								No more looking at stale PDFs from the department board. Room shifts are updated live.
							</p>
						</div>
						<div className="lg:col-span-6 lg:order-1 flex justify-center">
							{/* Mockup UI */}
							<div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
									<div className="flex gap-1.5">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
										yourcr.com/routine
									</div>
								</div>
								<div className="p-4 sm:p-6 space-y-3">
									<h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Today's Timeline</h4>
									
									<div className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/30">
										<div className="text-center shrink-0">
											<p className="text-xs font-bold text-gray-800">09:00 AM</p>
											<p className="text-[10px] text-gray-400">90 Mins</p>
										</div>
										<div className="flex-1 min-w-0">
											<h5 className="font-bold text-xs text-gray-800 truncate">Computer Networks</h5>
											<p className="text-[11px] text-gray-400">Room 402 • Prof. Anisur</p>
										</div>
										<span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">Active</span>
									</div>

									<div className="flex items-center gap-4 p-3 rounded-xl border border-amber-100 bg-amber-50/20">
										<div className="text-center shrink-0">
											<p className="text-xs font-bold text-gray-800">11:00 AM</p>
											<p className="text-[10px] text-gray-400">90 Mins</p>
										</div>
										<div className="flex-1 min-w-0">
											<h5 className="font-bold text-xs text-gray-800 truncate">Software Engineering</h5>
											<p className="text-[11px] text-gray-500">Shifted to <span className="font-bold">Room 501</span></p>
										</div>
										<span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">Room Shifted</span>
									</div>

									<div className="flex items-center gap-4 p-3 rounded-xl border border-red-100 bg-red-50/20">
										<div className="text-center shrink-0">
											<p className="text-xs font-bold text-gray-800 text-gray-400">02:00 PM</p>
											<p className="text-[10px] text-gray-400">90 Mins</p>
										</div>
										<div className="flex-1 min-w-0 opacity-50">
											<h5 className="font-bold text-xs text-gray-800 truncate line-through">Artificial Intelligence</h5>
											<p className="text-[11px] text-gray-400">Room 302 • Lab 3</p>
										</div>
										<span className="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-md">Cancelled</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Feature 3: Assignment & Exam Tracker */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fff2f3] p-8 sm:p-12 rounded-3xl border border-rose-100/50">
						<div className="lg:col-span-6 text-left">
							<div className="inline-flex p-3 bg-rose-100 text-rose-700 rounded-2xl mb-6">
								<FileText className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-medium text-gray-900 mb-2">Assignment Tracker</h3>
							<h4 className="text-base font-semibold text-rose-700 mb-4">Track deadlines without stress</h4>
							<p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
								Add assignment parameters, project guidelines, resource links, and submission schedules in one centralized hub.
							</p>
							<p className="text-gray-500 text-sm leading-relaxed">
								Students get automatic warnings for upcoming submissions, ensuring high submission rates.
							</p>
						</div>
						<div className="lg:col-span-6 flex justify-center">
							{/* Mockup UI */}
							<div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
									<div className="flex gap-1.5">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
										yourcr.com/assignments
									</div>
								</div>
								<div className="p-4 sm:p-6 space-y-4">
									<div className="border border-rose-100 bg-rose-50/20 p-4 rounded-xl">
										<div className="flex justify-between items-start mb-2">
											<span className="text-[10px] text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1">
												⏰ 14 Hours Left
											</span>
											<span className="text-[11px] text-gray-400">Due: Tomorrow, 11:59 PM</span>
										</div>
										<h5 className="font-bold text-sm text-gray-800 mb-1">Compiler Design Lab Project</h5>
										<p className="text-xs text-gray-500 mb-3">
											Submit syntax analyzer code along with document report in PDF format.
										</p>
										<button className="w-full bg-primary text-white text-xs py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors">
											Open Submission Link
										</button>
									</div>

									<div className="border border-gray-100 p-4 rounded-xl bg-gray-50/30">
										<div className="flex justify-between items-start mb-2">
											<span className="text-[10px] text-gray-500 font-bold bg-gray-100 px-2 py-0.5 rounded-full">
												⏰ 6 Days Left
											</span>
											<span className="text-[11px] text-gray-400">Due: July 5</span>
										</div>
										<h5 className="font-bold text-sm text-gray-800 mb-1">Machine Learning Assignment 2</h5>
										<p className="text-xs text-gray-500 mb-3">
											Implement K-means algorithm on custom dataset. No external library allowed.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Feature 4: Student Directory & Registration */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf6ff] p-8 sm:p-12 rounded-3xl border border-purple-100/50">
						<div className="lg:col-span-6 lg:order-2 text-left">
							<div className="inline-flex p-3 bg-purple-100 text-purple-700 rounded-2xl mb-6">
								<Users className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-medium text-gray-900 mb-2">Student Directory</h3>
							<h4 className="text-base font-semibold text-purple-700 mb-4">Class rosters and easy contact details</h4>
							<p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
								CRs approve student entries to join the class directory. Students fill out profiles, creating a secure database accessible to the section.
							</p>
							<p className="text-gray-500 text-sm leading-relaxed">
								Allows clicking to call, email, or WhatsApp message classmates for team projects immediately.
							</p>
						</div>
						<div className="lg:col-span-6 lg:order-1 flex justify-center">
							{/* Mockup UI */}
							<div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
									<div className="flex gap-1.5">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
										yourcr.com/students
									</div>
								</div>
								<div className="p-4 sm:p-6 space-y-3">
									<div className="flex justify-between items-center mb-3">
										<h4 className="text-xs font-bold text-gray-800">Class Section A (42 Students)</h4>
										<span className="text-[10px] font-bold text-primary hover:underline cursor-pointer">+ Add Student</span>
									</div>

									<div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
										<div className="flex items-center gap-3">
											<div className="size-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
												RI
											</div>
											<div>
												<h5 className="font-bold text-xs text-gray-800">Rakib Islam</h5>
												<p className="text-[10px] text-gray-400">Roll: 01 • Class Rep</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Mail className="h-3.5 w-3.5" />
											</button>
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Phone className="h-3.5 w-3.5" />
											</button>
										</div>
									</div>

									<div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
										<div className="flex items-center gap-3">
											<div className="size-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
												FA
											</div>
											<div>
												<h5 className="font-bold text-xs text-gray-800">Fahim Ahmed</h5>
												<p className="text-[10px] text-gray-400">Roll: 02 • Student</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Mail className="h-3.5 w-3.5" />
											</button>
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Phone className="h-3.5 w-3.5" />
											</button>
										</div>
									</div>

									<div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
										<div className="flex items-center gap-3">
											<div className="size-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
												AK
											</div>
											<div>
												<h5 className="font-bold text-xs text-gray-800">Amina Khatun</h5>
												<p className="text-[10px] text-gray-400">Roll: 03 • Student</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Mail className="h-3.5 w-3.5" />
											</button>
											<button className="p-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
												<Phone className="h-3.5 w-3.5" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Feature 5: Teacher Directory & Syllabus */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f0fdff] p-8 sm:p-12 rounded-3xl border border-cyan-100/50">
						<div className="lg:col-span-6 text-left">
							<div className="inline-flex p-3 bg-cyan-100 text-cyan-700 rounded-2xl mb-6">
								<Users className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-medium text-gray-900 mb-2">Faculty & Course Directory</h3>
							<h4 className="text-base font-semibold text-cyan-700 mb-4">Quick instructor details & files</h4>
							<p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-2">
								Keep professors' emails, office hours, consultancy locations, and syllabus drafts sorted by active semesters.
							</p>
							<p className="text-gray-500 text-sm leading-relaxed">
								Students get immediate resources to contact course coordinators without messaging CRs repeatedly.
							</p>
						</div>
						<div className="lg:col-span-6 flex justify-center">
							{/* Mockup UI */}
							<div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 overflow-hidden">
								<div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
									<div className="flex gap-1.5">
										<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
									</div>
									<div className="w-full text-center text-[10px] text-gray-400 font-mono truncate bg-white rounded py-0.5 border border-gray-100">
										yourcr.com/faculty
									</div>
								</div>
								<div className="p-4 sm:p-6 space-y-4">
									<div className="border border-cyan-100 bg-cyan-50/20 p-4 rounded-xl">
										<h5 className="font-bold text-xs text-cyan-800 mb-1">Instructor Details</h5>
										<h4 className="font-bold text-sm text-gray-800">Dr. Anisur Rahman</h4>
										<p className="text-[10px] text-gray-400 mb-2">Professor • Dept. of CSE</p>
										<div className="space-y-1.5">
											<p className="text-xs text-gray-600 flex items-center gap-1.5">
												<Mail className="h-3 w-3 text-cyan-700" /> anis@university.edu
											</p>
											<p className="text-xs text-gray-600">
												⏰ <span className="font-semibold text-gray-700">Office hours:</span> Mon/Wed 2:00 PM - 4:00 PM
											</p>
										</div>
										<div className="mt-3 border-t border-cyan-100/50 pt-2 flex items-center justify-between">
											<span className="text-[11px] font-semibold text-cyan-800 hover:underline cursor-pointer flex items-center gap-1">
												📄 Course_Syllabus.pdf <ExternalLink className="h-3 w-3" />
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
