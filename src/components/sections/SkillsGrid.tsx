import { motion } from "framer-motion";
import {
	Bot,
	Box,
	Check,
	Cloud,
	Code,
	Cpu,
	Database,
	GitBranch,
	Globe,
	Layers,
	Server,
	Shield,
	Terminal,
	Workflow,
	Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import PORTFOLIO_DATA, {
	type Skill,
	type SkillCategory,
	SkillIcon,
} from "../../data/portfolioData";

const SkillsGrid: React.FC = (): React.ReactElement => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<section
			id="skills"
			className="py-24 bg-slate-100/80 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Section Header */}
				<div className="mb-12 text-center">
					<span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
						Technical Stack
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-3">
						Core Competencies & Tooling
					</h2>
					<p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl mx-auto">
						Comprehensive skill matrix across distributed backend architectures,
						cloud platforms, databases, and modern frontend tooling.
					</p>
				</div>

				{/* Category Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-10">
					{PORTFOLIO_DATA.skillsCategory.map(
						(cat: SkillCategory, idx: number) => (
							<button
								type="button"
								key={cat.name}
								onClick={(): void => setActiveTab(idx)}
								className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
									activeTab === idx
										? "bg-cyan-500 text-slate-100 dark:text-slate-900 shadow-md shadow-cyan-500/20"
										: "bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800"
								}`}
							>
								<span>{cat.name}</span>
							</button>
						),
					)}
				</div>

				{/* Skills Cards Grid */}
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="flex flex-wrap justify-center gap-4"
				>
					{PORTFOLIO_DATA.skillsCategory[activeTab].skills.map(
						(skill: Skill) => {
							let Icon = Check;

							switch (skill.icon) {
								case SkillIcon.Code:
									Icon = Code;
									break;
								case SkillIcon.Terminal:
									Icon = Terminal;
									break;
								case SkillIcon.Cpu:
									Icon = Cpu;
									break;
								case SkillIcon.Server:
									Icon = Server;
									break;
								case SkillIcon.Database:
									Icon = Database;
									break;
								case SkillIcon.Cloud:
									Icon = Cloud;
									break;
								case SkillIcon.Layers:
									Icon = Layers;
									break;
								case SkillIcon.Workflow:
									Icon = Workflow;
									break;
								case SkillIcon.GitBranch:
									Icon = GitBranch;
									break;
								case SkillIcon.Box:
									Icon = Box;
									break;
								case SkillIcon.Globe:
									Icon = Globe;
									break;
								case SkillIcon.Zap:
									Icon = Zap;
									break;
								case SkillIcon.Bot:
									Icon = Bot;
									break;
								case SkillIcon.Shield:
									Icon = Shield;
									break;
							}

							return (
								<div
									key={skill.name}
									className="glass-card p-4 rounded-xl flex items-center gap-3 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all group w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)]"
								>
									<div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
										<Icon className="w-4 h-4" />
									</div>
									<span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
										{skill.name}
									</span>
								</div>
							);
						},
					)}
				</motion.div>

				{/* All Skills Overview Cloud */}
				<div className="mt-16 pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
					<h3 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase text-center mb-6">
						All Technologies & Tools Overview
					</h3>
					<div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
						{PORTFOLIO_DATA.skillsCategory
							.flatMap((c: SkillCategory): Skill[] => c.skills)
							.map((skill: Skill) => (
								<span
									key={skill.name}
									className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-xs font-mono text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-default"
								>
									{skill.name}
								</span>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsGrid;
