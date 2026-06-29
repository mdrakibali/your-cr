"use client";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navigationItems = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "FAQ", href: "/faq" },
	{ name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			<div className="container flex h-20 items-center justify-between gap-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group shrink-0">
					<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
						<GraduationCap className="h-5.5 w-5.5" />
					</div>
					<span className="text-lg font-bold tracking-tight text-gray-900 flex items-baseline">
						Your<span className="text-primary">CR</span>
						<span className="ml-0.5 text-[10px] font-semibold text-primary uppercase bg-primary/10 px-1 rounded-md leading-none self-start mt-1">
							AI
						</span>
					</span>
				</Link>
				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					{navigationItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`text-base font-semibold transition-colors hover:text-primary ${isActive ? "text-primary font-bold" : "text-gray-600"
									}`}
							>
								{item.name}
							</Link>
						);
					})}
				</nav>

				{/* Desktop Action Buttons */}
				<div className="hidden md:flex items-center gap-4 shrink-0">
					<Link
						href="/login"
						className="text-base font-semibold text-gray-700 hover:text-primary transition-colors py-2"
					>
						Sign In
					</Link>
					<Link href="/register">
						<Button
							size="sm"
							className="font-bold bg-primary text-white rounded-lg px-5 h-10 text-sm transition-all active:scale-[0.98]"
						>
							Try for Free
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer md:hidden shrink-0"
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{/* Mobile Navigation Drawer */}
			{isMobileMenuOpen && (
				<div className="absolute left-0 right-0 top-16 border-b border-gray-100 bg-white p-5 shadow-xl animate-in slide-in-from-top duration-200 md:hidden z-40">
					<nav className="flex flex-col gap-4">
						{navigationItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className={`text-base font-semibold transition-colors py-2 border-b border-gray-50 ${isActive ? "text-primary" : "text-gray-600"
										}`}
								>
									{item.name}
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</header>
	);
}
