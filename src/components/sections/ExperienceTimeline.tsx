import { motion } from "framer-motion";
import {
	Award,
	Briefcase,
	Building2,
	Calendar,
	CheckCircle2,
} from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA, { type Experience } from "../../data/portfolioData";

const ExperienceTimeline: React.FC = (): React.ReactElement => {
	return (
		<section id="experience" className="py-24 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Section Header */}
				<div className="mb-16">
					<span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
						Work Experience
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
						Professional Track Record
					</h2>
					<p className="text-slate-400 text-sm mt-2 max-w-xl">
						1 Year and 3 Months of full-time and intern experience delivering
						high-concurrency systems, core banking platforms, and AI
						optimization.
					</p>
				</div>

				{/* Timeline Container */}
				<div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-transparent">
					{PORTFOLIO_DATA.experience.map((exp: Experience, idx: number) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							className="relative flex flex-col md:flex-row items-start group"
						>
							{/* Timeline Icon Node */}
							<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform z-10">
								<Briefcase className="w-4 h-4" />
							</div>

							{/* Card Container */}
							<div className="ml-12 md:ml-0 md:w-full grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* Left Side: Meta info */}
								<div className="md:pr-12 md:text-right">
									<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-2">
										<Calendar className="w-3.5 h-3.5" />
										{exp.period}
									</div>
									<h3 className="text-xl font-bold text-slate-100 flex items-center md:justify-end gap-2">
										<Building2 className="w-5 h-5 text-cyan-400 hidden md:inline" />
										{exp.company}
									</h3>
									<p className="text-sm font-semibold text-slate-300 mb-1">
										{exp.role}
									</p>
									{exp.client && (
										<div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 mt-1">
											<Award className="w-3.5 h-3.5" /> Client: {exp.client}
										</div>
									)}
								</div>

								{/* Right Side: Detailed Achievements */}
								<div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
									<h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
										Key Impact & Engineering Output
									</h4>
									<ul className="space-y-3 mb-6">
										{exp.description.map((bullet: string) => (
											<li
												key={bullet}
												className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
											>
												<CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>

									{/* Skills Pills */}
									<div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
										{exp.skills.map((skill: string) => (
											<span
												key={skill}
												className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-mono text-cyan-300 border border-slate-800"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceTimeline;
