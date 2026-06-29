import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "./logo";

// Inline brand SVGs to bypass lucide-react brand logo limitations
const GithubIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			fillRule="evenodd"
			d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
			clipRule="evenodd"
		/>
	</svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

export default function Footer() {
	return (
		<footer className="w-full border-t border-gray-100 bg-gray-50/50 py-12">
			<div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
				{/* Brand Column */}
				<div className="flex flex-col gap-4">
					<Logo/>
					<p className="text-sm text-gray-500 leading-relaxed">
						An all-in-one student management and class representative coordination tool designed for modern classrooms.
					</p>
					{/* Social Links */}
					<div className="flex items-center gap-4 mt-2">
						<a href="#" className="text-gray-400 hover:text-primary transition-colors">
							<GithubIcon className="h-5 w-5" />
						</a>
						<a href="#" className="text-gray-400 hover:text-primary transition-colors">
							<TwitterIcon className="h-5 w-5" />
						</a>
						<a href="#" className="text-gray-400 hover:text-primary transition-colors">
							<Mail className="h-5 w-5" />
						</a>
					</div>
				</div>

				{/* Quick Links Column */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Features</h3>
					<ul className="space-y-2.5">
						<li>
							<Link href="/cr" className="text-sm text-gray-500 hover:text-primary transition-colors">
								CR Portal
							</Link>
						</li>
						<li>
							<Link href="/students" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Student Directory
							</Link>
						</li>
						<li>
							<Link href="/routine" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Class Routines
							</Link>
						</li>
					</ul>
				</div>

				{/* Support Column */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
					<ul className="space-y-2.5">
						<li>
							<Link href="/docs" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Documentation
							</Link>
						</li>
						<li>
							<Link href="/help" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Help Center
							</Link>
						</li>
						<li>
							<Link href="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Legal Column */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
					<ul className="space-y-2.5">
						<li>
							<Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
								Terms of Service
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="container mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-xs text-gray-400">
					&copy; {new Date().getFullYear()} YourCR. All rights reserved.
				</p>
				<p className="text-xs text-gray-400">
					Built with Next.js & Tailwind CSS
				</p>
			</div>
		</footer>
	);
}
