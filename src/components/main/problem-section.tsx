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
    <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
      {/* Image Container instead of Icon */}
      <div className="w-14 h-14 flex items-center justify-center mb-6">
        <Image
          src={image}
          alt={title}
          width={54}
          height={54}
          className="object-contain"
        />
      </div>

      {/* Card Title */}
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>

      {/* Quote */}
      <p className="text-base leading-relaxed text-gray-500 italic">{quote}</p>
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
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#8c94a5] uppercase block mb-3">
            Sound familiar?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-900 leading-tight">
            Class coordination feels{" "}
            <span className="italic text-primary font-normal">
              harder than it should
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card, idx) => (
            <ProblemCard key={idx} {...card} />
          ))}
        </div>

        {/* Banner Call-to-Action */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                There's a better way.
              </span>{" "}
              YourCR turns group chat chaos into a structured class coordination
              system — automatically.
            </p>
          </div>
          <Link href="/login" className="shrink-0 w-full md:w-auto">
            <Button className="w-full md:w-auto h-12 px-6 text-sm font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/95 transition-all duration-300 cursor-pointer">
              Start Your Free Session <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
