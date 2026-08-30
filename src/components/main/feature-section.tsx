import Image from "next/image";
import React from "react";
import bellImg from "@/assets/features/bell.png";
import routineImg from "@/assets/features/routine.png";
import approveImg from "@/assets/features/approve.png";
import studentImg from "@/assets/features/student.png";
import folderImg from "@/assets/features/folder.png";
import { NoticeMockup } from "@/components/main/notice-mockup";
import { RoutineMockup } from "@/components/main/routine-mockup";
import { AssignmentMockup } from "@/components/main/assignment-mockup";
import { StudentMockup } from "@/components/main/student-mockup";
import { FacultyMockup } from "@/components/main/faculty-mockup";

// Feature showcase section presenting YourCR core capabilities
export function FeatureSection(): React.JSX.Element {
  return (
    <section id="features" className="py-12 sm:py-16 2xl:py-20 bg-[#F8F8F8] scroll-mt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 2xl:mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#8c94a5] uppercase block mb-2 sm:mb-3">
            Introducing YourCR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            We turn classroom chaos into a{" "}
            <span className="italic text-primary font-normal">
              complete coordination hub
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
            An all-in-one portal for CRs to organize everything and for students
            to stay updated on routine, assignments, faculty contacts, and
            announcements.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 2xl:gap-12">
          {/* Feature 1: Notice Board */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r from-white to-[#fff8f2] p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-6 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
                  <Image
                    src={bellImg}
                    alt="Notice Icon"
                    width={48}
                    height={48}
                    className="object-contain size-8 sm:size-10 2xl:size-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
                    Smart Notice Board
                  </h3>
                  <h4 className="text-xs sm:text-sm 2xl:text-base font-semibold text-amber-700 mb-2 sm:mb-4">
                    Never miss an official update
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
                CRs can publish class announcements, exam schedules, and slides.
                Students get instant notifications, and all updates remain in a
                clean timeline.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                No more searching through hundreds of message logs to find an
                attachment link.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <NoticeMockup />
            </div>
          </div>

          {/* Feature 2: Dynamic Routine Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r from-white to-[#f2faf6] p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-6 lg:order-2 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
                  <Image
                    src={routineImg}
                    alt="Routine Icon"
                    width={48}
                    height={48}
                    className="object-contain size-8 sm:size-10 2xl:size-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
                    Live Routine Tracker
                  </h3>
                  <h4 className="text-xs sm:text-sm 2xl:text-base font-semibold text-emerald-700 mb-2 sm:mb-4">
                    Up-to-the-minute class schedules
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
                CRs update the daily schedule when teachers reschedule classes
                or switch classrooms. Students always see the active status
                instantly.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                No more looking at stale PDFs from the department board. Room
                shifts are updated live.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1 flex justify-center">
              <RoutineMockup />
            </div>
          </div>

          {/* Feature 3: Assignment & Exam Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r from-white to-[#fff2f3] p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-6 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
                  <Image
                    src={approveImg}
                    alt="Assignment Icon"
                    width={48}
                    height={48}
                    className="object-contain size-8 sm:size-10 2xl:size-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
                    Assignment Tracker
                  </h3>
                  <h4 className="text-xs sm:text-sm 2xl:text-base font-semibold text-rose-700 mb-2 sm:mb-4">
                    Track deadlines without stress
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
                Add assignment parameters, project guidelines, resource links,
                and submission schedules in one centralized hub.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Students get automatic warnings for upcoming submissions,
                ensuring high submission rates.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <AssignmentMockup />
            </div>
          </div>

          {/* Feature 4: Student Directory & Registration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r from-white to-[#faf6ff] p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-6 lg:order-2 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
                  <Image
                    src={studentImg}
                    alt="Student Icon"
                    width={48}
                    height={48}
                    className="object-contain size-8 sm:size-10 2xl:size-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
                    Student Directory
                  </h3>
                  <h4 className="text-xs sm:text-sm 2xl:text-base font-semibold text-purple-700 mb-2 sm:mb-4">
                    Class rosters and easy contact details
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
                CRs approve student entries to join the class directory.
                Students fill out profiles, creating a secure database
                accessible to the section.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Allows clicking to call, email, or WhatsApp message classmates
                for team projects immediately.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1 flex justify-center">
              <StudentMockup />
            </div>
          </div>

          {/* Feature 5: Teacher Directory & Syllabus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-gradient-to-r from-white to-[#f0fdff] p-5 sm:p-7 md:p-9 2xl:p-12 rounded-2xl sm:rounded-3xl shadow-[0_0_1px_0_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-6 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 2xl:p-3 rounded-lg bg-primary/10">
                  <Image
                    src={folderImg}
                    alt="Folder Icon"
                    width={48}
                    height={48}
                    className="object-contain size-8 sm:size-10 2xl:size-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-900 mb-1 sm:mb-2">
                    Faculty & Course Directory
                  </h3>
                  <h4 className="text-xs sm:text-sm 2xl:text-base font-semibold text-cyan-700 mb-2 sm:mb-4">
                    Quick instructor details & files
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm 2xl:text-base mb-2">
                Keep professors' emails, office hours, consultancy locations,
                and syllabus drafts sorted by active semesters.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Students get immediate resources to contact course coordinators
                without messaging CRs repeatedly.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <FacultyMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
