import announcementImg from "@/assets/problem-section/announcement.png";
import calendarImg from "@/assets/problem-section/calendar.png";
import assignmentImg from "@/assets/problem-section/assignment.png";
import teacherImg from "@/assets/problem-section/teacher.png"
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

import uploadAssignmentImg from "@/assets/upload-section/assignment.png";
import uploadRoutineImg from "@/assets/upload-section/routine.png";
import uploadFolderImg from "@/assets/upload-section/folder.png";
import uploadApproveImg from "@/assets/upload-section/approve.png";
import uploadBellImg from "@/assets/upload-section/bell.png";
import uploadTeacherImg from "@/assets/upload-section/teacher.png";
import uploadCalendarImg from "@/assets/upload-section/calendar.png";
import uploadStudentImg from "@/assets/upload-section/student.png";

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

// Hero section social avatars mock data
export const HERO_AVATARS = [
  {
    initials: "AK",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    initials: "SR",
    bg: "bg-purple-100 text-purple-700",
  },
  {
    initials: "TM",
    bg: "bg-amber-100 text-amber-700",
  },
  {
    initials: "NJ",
    bg: "bg-emerald-100 text-emerald-700",
  },
];

// Trusted university logo rows
export const TRUSTED_UNIVERSITIES_ROW_1: UniversityLogoItem[] = [
  { src: princetonLogo, alt: "Princeton University" },
  { src: stanfordLogo, alt: "Stanford University" },
  { src: marylandLogo, alt: "University of Maryland" },
  { src: mitLogo, alt: "MIT" },
  { src: cambridgeLogo, alt: "University of Cambridge" },
  { src: michiganLogo, alt: "University of Michigan" },
];

export const TRUSTED_UNIVERSITIES_ROW_2: UniversityLogoItem[] = [
  { src: lausdLogo, alt: "LAUSD" },
  { src: mcgillLogo, alt: "McGill University" },
  { src: nusLogo, alt: "National University of Singapore" },
  { src: melbourneLogo, alt: "University of Melbourne" },
  { src: yaleLogo, alt: "Yale University" },
  { src: ohioLogo, alt: "The Ohio State University" },
];

// Problem section pain points cards
export const PROBLEM_CARDS: ProblemCardProps[] = [
  {
    image: announcementImg,
    title: "Messy group chats",
    quote:
      '"Official class notices get buried under hundreds of random messages, memes, and arguments every single week."',
  },
  {
    image: calendarImg,
    title: "Missed classes & room changes",
    quote:
      '"Last-minute class cancellations or sudden room swaps posted in WhatsApp leave half the class waiting in the wrong building."',
  },
  {
    image: assignmentImg,
    title: "Forgotten deadlines",
    quote:
      '"Students constantly forget quiz dates and lab report submission deadlines because there is no single deadline tracker."',
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
  { image: uploadAssignmentImg, title: "Syllabus Update", subtitle: "Physics 101" },
  { image: uploadRoutineImg, title: "Lab Rescheduled", subtitle: "Room 402 → 501" },
  { image: uploadFolderImg, title: "Class Slide #4", subtitle: "CS-204 Uploaded" },
  { image: uploadApproveImg, title: "Assignment #2 Brief", subtitle: "Due in 3 Days" },
];

// Upload section floating badges (right)
export const UPLOAD_ITEMS_RIGHT: UploadItemProps[] = [
  { image: uploadBellImg, title: "Important Notice", subtitle: "Exam Form Fillup" },
  { image: uploadTeacherImg, title: "Teacher's Message", subtitle: "Prof. Rahman" },
  { image: uploadCalendarImg, title: "Routine Changed", subtitle: "Wednesday 2:00 PM" },
  { image: uploadStudentImg, title: "Deadline Approaching", subtitle: "Math Assignment" },
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
    value: "99.8%",
    label: "Class Announcement Delivery Rate",
    bgClass: "bg-purple-50/50 border-purple-100",
    textClass: "text-purple-600",
  },
  {
    value: "4.9/5",
    label: "Average Rating by University CRs",
    bgClass: "bg-amber-50/50 border-amber-100",
    textClass: "text-amber-600",
  },
];

// Testimonials reviews
export const TESTIMONIALS_ITEMS: TestimonialItemProps[] = [
  {
    name: "Tanvir Ahmed",
    role: "CR, CSE Dept - DU",
    avatar: "TA",
    avatarBg: "bg-blue-100 text-blue-700",
    rating: 5,
    text: "YourCR reduced 80% of repetitive questions in our WhatsApp group. Managing room changes and deadlines is now instant.",
  },
  {
    name: "Nusrat Jahan",
    role: "Student, EEE - BUET",
    avatar: "NJ",
    avatarBg: "bg-purple-100 text-purple-700",
    rating: 5,
    text: "Having the daily schedule and notice board in one place means I never miss an assignment deadline or rescheduled class.",
  },
  {
    name: "Arif Hossain",
    role: "CR, BBA - NSU",
    avatar: "AH",
    avatarBg: "bg-emerald-100 text-emerald-700",
    rating: 5,
    text: "The student directory and notice broadcasting features are a lifesaver. Every class representative needs this tool!",
  },
  {
    name: "Sadia Rahman",
    role: "Student, Pharmacy - JU",
    avatar: "SR",
    avatarBg: "bg-rose-100 text-rose-700",
    rating: 5,
    text: "Everything is clean and organized. Finding teacher emails and assignment links takes 2 seconds now.",
  },
  {
    name: "Mahmud Hasan",
    role: "CR, ME - RUET",
    avatar: "MH",
    avatarBg: "bg-amber-100 text-amber-700",
    rating: 5,
    text: "Setting up our entire section took less than 5 minutes. The best classroom utility platform we have ever used.",
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

// Footer navigation links
export const FOOTER_FEATURES_LINKS = [
  { label: "CR Portal", href: "/login" },
  { label: "Student Directory", href: "/#features" },
  { label: "Class Routines", href: "/#features" },
];

export const FOOTER_SUPPORT_LINKS = [
  { label: "Documentation", href: "/#faq" },
  { label: "Help Center", href: "/#faq" },
  { label: "Contact Us", href: "/#faq" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];
