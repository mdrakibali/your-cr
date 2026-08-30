import announcementImg from "@/assets/problem-section/announcement.png";
import calendarImg from "@/assets/problem-section/calendar.png";
import assignmentImg from "@/assets/problem-section/assignment.png";
import teacherImg from "@/assets/problem-section/teacher.png";

import princetonLogo from "@/assets/trusted-university/princetone-university-logo.webp";
import stanfordLogo from "@/assets/trusted-university/standford-logo.webp";
import marylandLogo from "@/assets/trusted-university/university-of-maryland-logo.webp";
import mitLogo from "@/assets/trusted-university/mit-logo.webp";
import cambridgeLogo from "@/assets/trusted-university/uoc-logo.webp";
import michiganLogo from "@/assets/trusted-university/uomichigan-logo.webp";
import lausdLogo from "@/assets/trusted-university/lausd-logo.webp";
import mcgillLogo from "@/assets/trusted-university/mgu-logo.webp";
import nusLogo from "@/assets/trusted-university/nus-logo.webp";
import melbourneLogo from "@/assets/trusted-university/tuom-logo.webp";
import yaleLogo from "@/assets/trusted-university/yu-logo.webp";
import ohioLogo from "@/assets/trusted-university/tos-uni-logo.svg";

import bookImg from "@/assets/upload-section/book.png";
import clockImg from "@/assets/upload-section/clock.png";
import notesImg from "@/assets/upload-section/notes.png";
import pdfImg from "@/assets/upload-section/pdf.png";
import bellImg from "@/assets/upload-section/bell.png";
import messageImg from "@/assets/upload-section/message.png";
import calendarUploadImg from "@/assets/upload-section/calendar.png";
import warningImg from "@/assets/upload-section/warning.png";

import {
  FaqItemProps,
  HowItWorksStepProps,
  ProblemCardProps,
  StatItemProps,
  TestimonialItemProps,
  UniversityLogoItem,
  UploadItemProps,
} from "@/types/landing";
import { NavigationItem } from "@/types/navigation";

// Navigation links for header
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "FAQ", href: "/#faq" },
];

// Hero user avatars
export const HERO_AVATARS: string[] = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcx5tLX-1xL-tZUpK7mPjkXf7RmPHjH5v3rrOVxIUDiN3IPiOpFnrx_cOB1UDqBofB_sH4rdZPFMAULi0_mE7oRUxwOFbde4xR3KfTafbmTM6orn4QUS3mjWTBlJ0vCiP1WL7oQyyi1qUhMnLJyzfdEcRb6ndTpJaHmq67UsMFHsUMRYZHwMfcGYR9pLAdDZQBku10xffC7JX9wmBDRPXiQPxreNGgE80HjZ19hoWOsswmhyYf2PnYHLUFP3rJV814eHfG5JIPqfQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB2c8ku-lDPydE54hMmTAJsYx7FNuzPvlEfIquIoX8uhx2E_2wfHWBDrhB_NAonmzZT1L8TwB8IHSxljPd6XL60SAmnyp2I2_OOlhDRVdAQCfXarsc_2pHMg6ZUzXcNIFRpV954tZA6N6sV6BLA2rgCJPFynrt_YaGg8YKzjMinfku_qdTp-p5ewzxMrikPDYOVjksuDKwm1i0dvrar1RYn9ykOCEj42ezLRX39me5Es2ciKEesiqv93q67UZZX-XmSTS2wkflk8Cs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJdXy3iuWGV2AJWotR0NrtnNPB_j0G3VhW9AI0o6_C2qMTP6hbdwG2G0vZPDASm4knVV31junCZU91kMAW2l4dwCbtiG8wDEJADdgNGBmFKL1vwHSs9uH1A7fcQyUpHI_cfg7gBJof9zFc_kpHwq16nVCnhu-aL-TjYvaago5XrNCYvPVL4UikNKL3EwRUxQnuGwyUqkyyy-EJh3LNujY6LdZwf7fFmo4ETzVzGICh3iBvg2ohtHe50-qDCRgNxVHN-Ayv_MnBVow",
];

// University partners row 1
export const TRUSTED_UNIVERSITIES_ROW_1: UniversityLogoItem[] = [
  { src: princetonLogo, alt: "Princeton University" },
  { src: stanfordLogo, alt: "Stanford University" },
  { src: marylandLogo, alt: "University of Maryland" },
  { src: mitLogo, alt: "MIT" },
  { src: cambridgeLogo, alt: "University of Cambridge" },
  { src: michiganLogo, alt: "University of Michigan" },
];

// University partners row 2
export const TRUSTED_UNIVERSITIES_ROW_2: UniversityLogoItem[] = [
  { src: lausdLogo, alt: "LAUSD" },
  { src: mcgillLogo, alt: "McGill University" },
  { src: nusLogo, alt: "NUS" },
  { src: melbourneLogo, alt: "University of Melbourne" },
  { src: yaleLogo, alt: "Yale University" },
  { src: ohioLogo, alt: "The Ohio State University" },
];

// Problem section cards
export const PROBLEM_CARDS: ProblemCardProps[] = [
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

// Upload section floating badges (left)
export const UPLOAD_ITEMS_LEFT: UploadItemProps[] = [
  { image: bookImg, title: "Syllabus Update", subtitle: "Physics 101" },
  { image: clockImg, title: "Lab Rescheduled", subtitle: "Room 402 → 501" },
  { image: notesImg, title: "Class Slide #4", subtitle: "CS-204 Uploaded" },
  { image: pdfImg, title: "Assignment #2 Brief", subtitle: "Due in 3 Days" },
];

// Upload section floating badges (right)
export const UPLOAD_ITEMS_RIGHT: UploadItemProps[] = [
  { image: bellImg, title: "Important Notice", subtitle: "Exam Form Fillup" },
  { image: messageImg, title: "Teacher's Message", subtitle: "Prof. Rahman" },
  { image: calendarUploadImg, title: "Routine Changed", subtitle: "Wednesday 2:00 PM" },
  { image: warningImg, title: "Deadline Approaching", subtitle: "Math Assignment" },
];

// How it works steps
export const HOW_IT_WORKS_STEPS: HowItWorksStepProps[] = [
  {
    id: 1,
    title: "CR Enrollment & Section Setup",
    desc: "CR registers with university roll, department, and section credentials. Admin verifies and activates the dashboard.",
  },
  {
    id: 2,
    title: "Invite Classmates & Upload Roster",
    desc: "Import your class student roll sheet or share your section link. Students get instant portal access.",
  },
  {
    id: 3,
    title: "Publish Notices, Routines & Deadlines",
    desc: "Update routine shifts, create assignment deadlines with submission links, and keep everyone synced effortlessly.",
  },
];

// Stats counters
export const STATS_ITEMS: StatItemProps[] = [
  {
    value: "150k+",
    label: "Active Students Across Departments",
    bgClass: "bg-blue-50/50 border-blue-100",
    textClass: "text-primary",
  },
  {
    value: "2,400+",
    label: "Class Representatives Coordinating Daily",
    bgClass: "bg-emerald-50/50 border-emerald-100",
    textClass: "text-emerald-600",
  },
  {
    value: "99.4%",
    label: "Assignment Submission On-Time Rate",
    bgClass: "bg-amber-50/50 border-amber-100",
    textClass: "text-amber-600",
  },
  {
    value: "80%",
    label: "Reduction in Repetitive Chat Inquiries",
    bgClass: "bg-purple-50/50 border-purple-100",
    textClass: "text-purple-600",
  },
];

// Student reviews & testimonials
export const TESTIMONIALS_ITEMS: TestimonialItemProps[] = [
  {
    name: "Farhan Tanvir",
    role: "Class Representative, CSE Dept, DU",
    avatar: "FT",
    avatarBg: "bg-blue-100 text-primary",
    rating: 5,
    text: "Before YourCR, every class cancellation meant answering 40 messages on WhatsApp. Now, I just shift the routine card on my dashboard and everyone gets updated instantly.",
  },
  {
    name: "Sadia Afrin",
    role: "3rd Year Student, EEE, BUET",
    avatar: "SA",
    avatarBg: "bg-purple-100 text-purple-700",
    rating: 5,
    text: "The assignment deadline tracker with direct Google Drive and classroom links saved my semester. No more hunting for old messages in messy group chats.",
  },
  {
    name: "Sajid Hasan",
    role: "Lead CR, Software Eng, NSU",
    avatar: "SH",
    avatarBg: "bg-emerald-100 text-emerald-700",
    rating: 5,
    text: "Managing 65 students across 5 labs was chaos. YourCR centralized our routine, notices, and teacher office hours in one clean web portal.",
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

// FAQ items
export const FAQ_ITEMS: FaqItemProps[] = [
  {
    question: "Is YourCR completely free for students and CRs?",
    answer:
      "Yes! YourCR is 100% free for all students, class representatives, and educators. There are no hidden fees or paywalled core features.",
  },
  {
    question: "How does CR verification work?",
    answer:
      "When a Class Representative registers, our system verifies their university department and session to ensure authorized coordination.",
  },
  {
    question: "How do classmates join our section?",
    answer:
      "CRs can upload a class roll list or share a unique invite link. Students register and are instantly linked to their section hub.",
  },
  {
    question: "Can routine changes be updated in real-time?",
    answer:
      "Yes, when a CR modifies a routine timing or room number, all students see the live change immediately on their dashboard.",
  },
  {
    question: "How are assignments and deadlines managed?",
    answer:
      "CRs post assignment titles, deadlines, guidelines, and submission links. Students receive countdown warnings as due dates approach.",
  },
];
