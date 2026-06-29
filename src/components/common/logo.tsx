import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="YourCR Logo"
        width={140}
        height={80}
        className="w-28 sm:w-36 cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
