// FIXME: Linkedin icon maybe removed in future updates, currently is deprecated, but the URL provided for new icon by the depecation comments in `SimpleIcons` website is not available.
import { Linkedin, Mail, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import PORTFOLIO_DATA from "../../data/portfolioData";

type NavLink = {
	name: string;
	href: string;
};

const NAVLINKS: NavLink[] = [
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Contact", href: "#contact" },
];

const Navbar: React.FC = (): React.ReactElement => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
	const { theme, toggleTheme } = useTheme();

	useEffect((): (() => void) => {
		const handleScroll = (): void => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);

		return (): void => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
				{/* Logo and Name */}
				<a href="#about" className="flex items-center gap-2.5 group">
					<div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
						<Terminal className="w-5 h-5" />
					</div>
					<div>
						<span className="font-bold text-slate-900 dark:text-slate-100 tracking-tight block text-base leading-tight">
							{PORTFOLIO_DATA.personal.name}
						</span>
						<span className="text-[11px] text-cyan-500 dark:text-cyan-400 font-mono tracking-wide">
							Software Development Engineer
						</span>
					</div>
				</a>

				{/* Desktop Nav Links */}
				<nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
					{NAVLINKS.map((link: NavLink) => (
						<a
							key={link.name}
							href={link.href}
							className="px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-full transition-colors hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
						>
							{link.name}
						</a>
					))}
				</nav>

				{/* CTA Actions */}
				<div className="hidden md:flex items-center gap-3">
					<a
						href={PORTFOLIO_DATA.personal.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
						title="LinkedIn"
					>
						<Linkedin className="w-4 h-4" />
					</a>
					<a
						href={`mailto:${PORTFOLIO_DATA.personal.email}`}
						className="p-2 text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
						title="Email"
					>
						<Mail className="w-4 h-4" />
					</a>

					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
						className="relative w-14 h-7 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 transition-colors duration-300 flex items-center px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
					>
						<span
							className={`absolute w-6 h-6 rounded-full bg-white dark:bg-slate-950 shadow-md flex items-center justify-center transition-all duration-300 ${
								theme === "dark" ? "translate-x-7" : "translate-x-0"
							}`}
						>
							{theme === "dark" ? (
								<Moon className="w-3.5 h-3.5 text-cyan-400" />
							) : (
								<Sun className="w-3.5 h-3.5 text-amber-500" />
							)}
						</span>
					</button>

					<a
						href="#contact"
						className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-100 dark:text-slate-950 transition-all shadow-md shadow-cyan-500/20"
					>
						Get in Touch
					</a>
				</div>

				{/* Mobile: theme toggle + menu button */}
				<div className="md:hidden flex items-center gap-2">
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
						className="relative w-12 h-6 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 transition-colors duration-300 flex items-center px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
					>
						<span
							className={`absolute w-5 h-5 rounded-full bg-white dark:bg-slate-950 shadow-md flex items-center justify-center transition-all duration-300 ${
								theme === "dark" ? "translate-x-6" : "translate-x-0"
							}`}
						>
							{theme === "dark" ? (
								<Moon className="w-3 h-3 text-cyan-400" />
							) : (
								<Sun className="w-3 h-3 text-amber-500" />
							)}
						</span>
					</button>
					<button
						type="button"
						onClick={(): void => setMobileMenuOpen(!mobileMenuOpen)}
						className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
					>
						{mobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
					{NAVLINKS.map((link: NavLink) => (
						<a
							key={link.name}
							href={link.href}
							onClick={(): void => setMobileMenuOpen(false)}
							className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 py-1.5"
						>
							{link.name}
						</a>
					))}
					<div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
						<a
							href={`mailto:${PORTFOLIO_DATA.personal.email}`}
							className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5"
						>
							<Mail className="w-4 h-4" />
							{PORTFOLIO_DATA.personal.email}
						</a>
						<a
							href={PORTFOLIO_DATA.personal.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs text-cyan-500 dark:text-cyan-400 flex items-center gap-1"
						>
							<Linkedin className="w-4 h-4" /> LinkedIn
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
