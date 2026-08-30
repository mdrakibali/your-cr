import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";

import announcementImg from "@/assets/upload-section/announcement.png";
import approveImg from "@/assets/upload-section/approve.png";
import assignmentImg from "@/assets/upload-section/assignment.png";
import bellImg from "@/assets/upload-section/bell.png";
import folderImg from "@/assets/upload-section/folder.png";
import routineImg from "@/assets/upload-section/routine.png";
import studentImg from "@/assets/upload-section/student.png";
import teacherImg from "@/assets/upload-section/teacher.png";

export default function UploadSection() {
  const leftFloating = [
    {
      image: assignmentImg,
      title: "Assignment briefs",
      subtitle: "Guidelines & PDFs",
    },
    {
      image: routineImg,
      title: "Routine changes",
      subtitle: "Rescheduled classes",
    },
    {
      image: folderImg,
      title: "Lecture slides",
      subtitle: "Drive & folder links",
    },
    { image: bellImg, title: "Exam notices", subtitle: "Dates & syllabi" },
  ];

  const rightFloating = [
    {
      image: teacherImg,
      title: "Faculty contacts",
      subtitle: "Teacher emails",
    },
    {
      image: announcementImg,
      title: "Course syllabus",
      subtitle: "Semester outlines",
    },
    {
      image: approveImg,
      title: "Meeting links",
      subtitle: "Zoom / Meet slots",
    },
    {
      image: studentImg,
      title: "Class resources",
      subtitle: "Handouts & sheets",
    },
  ];

  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-white overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            Upload once.{" "}
            <span className="italic text-primary font-normal">
              Notify everyone
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 leading-relaxed">
            No more copy-pasting announcements or files 50 times in group chats.
            CRs upload class details once, and YourCR organizes them for the
            entire class instantly.
          </p>
        </div>

        {/* Layout Container */}
        <div className="relative w-full max-w-5xl mx-auto min-h-[480px] sm:min-h-[500px] 2xl:min-h-[550px] flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pt-4 sm:pt-6 2xl:pt-8">
          {/* Mobile/Tablet Grid of inputs (Visible on small screens) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full lg:hidden order-1">
            {leftFloating.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-3 sm:p-4 rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mb-1.5 sm:mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain size-6 sm:size-7"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800">
                  {item.title}
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Left Column (Desktop Absolute) */}
          <div className="hidden lg:block w-72 shrink-0 space-y-4 xl:space-y-6 z-10 text-left">
            <div className="bg-white border border-gray-100 p-3.5 2xl:p-4 rounded-xl flex items-center gap-3 w-60 xl:w-64 translate-x-8 xl:translate-x-12">
              <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center shrink-0">
                <Image
                  src={leftFloating[0].image}
                  alt={leftFloating[0].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {leftFloating[0].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {leftFloating[0].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-3.5 2xl:p-4 rounded-xl flex items-center gap-3 w-60 xl:w-64 -translate-x-2 xl:-translate-x-4">
              <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center shrink-0">
                <Image
                  src={leftFloating[1].image}
                  alt={leftFloating[1].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {leftFloating[1].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {leftFloating[1].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-3.5 2xl:p-4 rounded-xl flex items-center gap-3 w-60 xl:w-64 translate-x-10 xl:translate-x-16">
              <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center shrink-0">
                <Image
                  src={leftFloating[2].image}
                  alt={leftFloating[2].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {leftFloating[2].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {leftFloating[2].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-3.5 2xl:p-4 rounded-xl flex items-center gap-3 w-60 xl:w-64 -translate-x-1 xl:-translate-x-2">
              <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center shrink-0">
                <Image
                  src={leftFloating[3].image}
                  alt={leftFloating[3].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {leftFloating[3].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {leftFloating[3].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 2xl:p-8 flex flex-col items-center justify-center text-center order-2 lg:mx-4 shrink-0 z-20">
            <div className="p-3 sm:p-3.5 2xl:p-4 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <CloudUpload className="size-6 sm:size-7 2xl:size-8 text-primary" />
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1">
              Upload once.
            </h3>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
              Sync the class.
            </h3>

            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed max-w-xs mb-5 sm:mb-6 2xl:mb-8">
              Share assignment guidelines, routine changes, syllabus details,
              and teacher contacts in one click.
            </p>

            <Link href="/login" className="w-full">
              <Button className="w-full h-10 sm:h-11 2xl:h-12 text-xs sm:text-sm font-semibold 2xl:font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer">
                Get Started as CR <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>

          {/* Right Column (Desktop Absolute) */}
          <div className="hidden lg:block w-72 shrink-0 space-y-6 z-10 text-left">
            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-12">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src={rightFloating[0].image}
                  alt={rightFloating[0].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {rightFloating[0].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {rightFloating[0].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-4">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src={rightFloating[1].image}
                  alt={rightFloating[1].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {rightFloating[1].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {rightFloating[1].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 -translate-x-16">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src={rightFloating[2].image}
                  alt={rightFloating[2].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {rightFloating[2].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {rightFloating[2].subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 w-64 translate-x-2">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <Image
                  src={rightFloating[3].image}
                  alt={rightFloating[3].title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  {rightFloating[3].title}
                </p>
                <p className="text-[10px] text-gray-400">
                  {rightFloating[3].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Grid of inputs (Visible on small screens) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:hidden order-3">
            {rightFloating.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-4 rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-gray-800">
                  {item.title}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
