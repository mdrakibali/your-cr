import React from "react";
import bellImg from "@/assets/features/bell.png";
import routineImg from "@/assets/features/routine.png";
import approveImg from "@/assets/features/approve.png";
import studentImg from "@/assets/features/student.png";
import folderImg from "@/assets/features/folder.png";
import { FeatureBlock } from "@/components/main/feature-block";
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
          <FeatureBlock
            icon={bellImg}
            title="Smart Notice Board"
            subtitle="Never miss an official update"
            subtitleColorClass="text-amber-700"
            description1="CRs can publish class announcements, exam schedules, and slides. Students get instant notifications, and all updates remain in a clean timeline."
            description2="No more searching through hundreds of message logs to find an attachment link."
            bgGradientClass="from-white to-[#fff8f2]"
          >
            <NoticeMockup />
          </FeatureBlock>

          <FeatureBlock
            icon={routineImg}
            title="Live Routine Tracker"
            subtitle="Up-to-the-minute class schedules"
            subtitleColorClass="text-emerald-700"
            description1="CRs update the daily schedule when teachers reschedule classes or switch classrooms. Students always see the active status instantly."
            description2="No more looking at stale PDFs from the department board. Room shifts are updated live."
            bgGradientClass="from-white to-[#f2faf6]"
            reversed
          >
            <RoutineMockup />
          </FeatureBlock>

          <FeatureBlock
            icon={approveImg}
            title="Assignment Tracker"
            subtitle="Track deadlines without stress"
            subtitleColorClass="text-rose-700"
            description1="Add assignment parameters, project guidelines, resource links, and submission schedules in one centralized hub."
            description2="Students get automatic warnings for upcoming submissions, ensuring high submission rates."
            bgGradientClass="from-white to-[#fff2f3]"
          >
            <AssignmentMockup />
          </FeatureBlock>

          <FeatureBlock
            icon={studentImg}
            title="Student Directory"
            subtitle="Class rosters and easy contact details"
            subtitleColorClass="text-purple-700"
            description1="CRs approve student entries to join the class directory. Students fill out profiles, creating a secure database accessible to the section."
            description2="Allows clicking to call, email, or WhatsApp message classmates for team projects immediately."
            bgGradientClass="from-white to-[#faf6ff]"
            reversed
          >
            <StudentMockup />
          </FeatureBlock>

          <FeatureBlock
            icon={folderImg}
            title="Faculty & Course Directory"
            subtitle="Quick instructor details & files"
            subtitleColorClass="text-cyan-700"
            description1="Keep professors' emails, office hours, consultancy locations, and syllabus drafts sorted by active semesters."
            description2="Students get immediate resources to contact course coordinators without messaging CRs repeatedly."
            bgGradientClass="from-white to-[#f0fdff]"
          >
            <FacultyMockup />
          </FeatureBlock>
        </div>
      </div>
    </section>
  );
}
