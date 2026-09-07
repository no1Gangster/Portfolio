import { ArrowUp, Linkedin, Mail, Terminal } from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA from "../../data/portfolioData";

const Footer: React.FC = (): React.ReactElement => {
	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900 py-12 text-slate-500 dark:text-slate-400">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-3">
					<div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
						<Terminal className="w-4 h-4" />
					</div>
					<div>
						<p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
							{PORTFOLIO_DATA.personal.name}
						</p>
						<p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
							Built with React 19 & Bun 1.3
						</p>
					</div>
				</div>

				<div className="flex items-center gap-4 text-xs">
					<a
						href={PORTFOLIO_DATA.personal.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
					>
						<Linkedin className="w-4 h-4" /> LinkedIn
					</a>
					<a
						href={`mailto:${PORTFOLIO_DATA.personal.email}`}
						className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
					>
						<Mail className="w-4 h-4" /> Email
					</a>
				</div>

				<div className="flex items-center gap-3">
					<span className="text-xs text-slate-400 dark:text-slate-500">
						© {new Date().getFullYear()} All rights reserved.
					</span>
					<button
						type="button"
						onClick={scrollToTop}
						className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all text-slate-500 dark:text-slate-400"
						title="Back to Top"
					>
						<ArrowUp className="w-4 h-4" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
