import { motion } from "framer-motion";
import {
	ArrowRight,
	Cpu,
	Database,
	type LucideProps,
	Mail,
	ShieldCheck,
	Zap,
} from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA from "../../data/portfolioData";

type TechHighlight = {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	title: string;
	description: string;
};

const TECH_HIGHLIGHTS: TechHighlight[] = [
	{
		icon: Database,
		title: "ACID Compliance",
		description: "Distributed Payments",
	},
	{
		icon: ShieldCheck,
		title: "99.9% Uptime SLA",
		description: "Core Banking Backend",
	},
	{
		icon: Zap,
		title: "-30% Token Costs",
		description: "AI Context Chunking",
	},
	{
		icon: Cpu,
		title: "AWS Cloud Fargate",
		description: "CloudFormation Infra",
	},
];

const HeroSection: React.FC = (): React.ReactElement => {
	return (
		<section id="about" className="relative pt-32 pb-20 overflow-hidden">
			{/* Glow background effects */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
			<div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Status Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-6"
				>
					<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
					<span>SDE-1 @ Surya Digitech • Core Banking & AI Systems</span>
				</motion.div>

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] mb-6 max-w-4xl"
				>
					Architecting High-Concurrency <br className="hidden sm:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
						Banking Backends & AI Tooling
					</span>
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8 font-light"
				>
					{PORTFOLIO_DATA.personal.summary}
				</motion.p>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-wrap items-center gap-4 mb-16"
				>
					<a
						href="#experience"
						className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-500 text-slate-100 dark:text-slate-900 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
					>
						Explore Experience
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</a>

					<a
						href="#contact"
						className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all flex items-center gap-2"
					>
						<Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
						Contact Me
					</a>
				</motion.div>

				{/* Tech Highlights Pill Strip */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4"
				>
					{TECH_HIGHLIGHTS.map((techHighlight: TechHighlight) => (
						<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
							<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
								<techHighlight.icon className="w-5 h-5" />
							</div>
							<div>
								<p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
									{techHighlight.title}
								</p>
								<p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
									{techHighlight.description}
								</p>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
