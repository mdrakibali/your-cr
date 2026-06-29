import type { Metadata } from "next";
import { Besley, Lato } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-sans",
});
const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-besley",
});
export const metadata: Metadata = {
  title: {
    default: "Your CR - Simplified Class Management",
    template: "%s | Your CR",
  },
  description:
    "The ultimate platform for Class Representatives to manage routines, notices, and student activities efficiently.",
  keywords: [
    "Class Representative",
    "CR",
    "Student Management",
    "Academic Planner",
    "Routine Management",
    "Notice Board",
    "Your CR",
  ],
  authors: [{ name: "Rakib Islam", url: "https://yourcr.com" }],
  creator: "Rakib Islam",
  publisher: "Your CR Team",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourcr.com",
    siteName: "Your CR",
    title: "Your CR - Empowering Class Representatives",
    description:
      "Manage your class like a pro. Routines, assignments, and notices - all in one place.",
    images: [
      {
        url: "https://yourcr.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your CR Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your CR - Simplified Class Management",
    description:
      "The best tool for CRs to organize their classroom efficiently.",
    images: ["https://yourcr.com/twitter-image.png"],
    creator: "@yourcr_official",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${besley.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-1132020137464868" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
