import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo/logo.png";

// YourCR brand logo with home link
export function Logo(): React.JSX.Element {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="YourCR Logo"
        width={140}
        height={80}
        className="w-24 sm:w-28 md:w-28 lg:w-32 2xl:w-36 h-auto cursor-pointer"
        priority
      />
    </Link>
  );
}
