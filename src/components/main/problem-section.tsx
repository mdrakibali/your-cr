import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import announcementImg from "@/assets/problem-section/announcement.png";
import calendarImg from "@/assets/problem-section/calendar.png";
import assignmentImg from "@/assets/problem-section/assignment.png";
import teacherImg from "@/assets/problem-section/teacher.png";

interface ProblemCardProps {
  image: StaticImageData;
  title: string;
  quote: string;
}

function ProblemCard({ image, title, quote }: ProblemCardProps) {
  return (
    <div className="bg-white p-5 sm:p-6 2xl:p-8 rounded-xl sm:rounded-2xl border border-gray-100 flex flex-col items-center text-center">
      {/* Image Container instead of Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-6">
        <Image
          src={image}
          alt={title}
          width={54}
          height={54}
          className="object-contain size-9 sm:size-11 2xl:size-14"
        />
      </div>

      {/* Card Title */}
      <h3 className="text-sm sm:text-base 2xl:text-lg font-medium text-gray-900 mb-1.5 sm:mb-2 2xl:mb-3">{title}</h3>

      {/* Quote */}
      <p className="text-xs sm:text-xs md:text-sm 2xl:text-base leading-relaxed text-gray-500 italic">{quote}</p>
    </div>
  );
}

export default function ProblemSection() {
  const cards = [
    {
      image: announcementImg,
      title: "Scattered notices & updates",
      quote:
        '"Is it on WhatsApp, Messenger, or email? I scrolled for 10 minutes and still missed the quiz syllabus."',
    },
    {
      image: calendarImg,
      title: "Last-minute routine changes",
      quote:
        '"Class got rescheduled or room changed, but nobody updated the group chat. We showed up to an empty room."',
    },
    {
      image: assignmentImg,
      title: "Assignment deadline panic",
      quote:
        '"I didn\'t know we had a lab report due today. The submission link was buried in a thread of 500 messages."',
    },
    {
      image: teacherImg,
      title: "Teacher & directory chaos",
      quote:
        '"Who has the teacher\'s email? Where is the attendance spreadsheet? CRs spend all day answering the same questions."',
    },
  ];

  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-[#F8F8F8]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 2xl:mb-16">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#8c94a5] uppercase block mb-2 sm:mb-3">
            Sound familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl 2xl:text-[40px] font-medium text-gray-900 leading-tight">
            Class coordination feels
            <span className="italic text-primary font-normal"> harder than it should</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6 mb-6 sm:mb-8 2xl:mb-10">
          {cards.map((card, idx) => (
            <ProblemCard key={idx} {...card} />
          ))}
        </div>

        {/* Banner Call-to-Action */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4.5 sm:p-6 2xl:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-left max-w-2xl">
            <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                There's a better way.
              </span>{" "}
              YourCR turns group chat chaos into a structured class coordination
              system — automatically.
            </p>
          </div>
          <Link href="/login" className="shrink-0 w-full md:w-auto">
            <Button className="w-full md:w-auto h-10 sm:h-11 2xl:h-12 px-4 sm:px-5 2xl:px-6 text-xs sm:text-sm font-semibold 2xl:font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-all duration-300 cursor-pointer">
              Start Your Free Session <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
