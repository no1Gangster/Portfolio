import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ExternalLink, Github } from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA, { type Project } from "../../data/portfolioData";

const ProjectsGrid: React.FC = (): React.ReactElement => (
	<section id="projects" className="py-24 relative">
		<div className="max-w-6xl mx-auto px-4 sm:px-6">
			{/* Section Header */}
			<div className="mb-16">
				<span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
					Featured Works
				</span>
				<h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
					Full-Stack Projects & Applications
				</h2>
				<p className="text-slate-400 text-sm mt-2 max-w-xl">
					Hands-on personal and engineering projects demonstrating backend
					security, database architecture, and full-stack workflows.
				</p>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{PORTFOLIO_DATA.projects.map((project: Project, idx: number) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: idx * 0.2 }}
						className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/50 transition-all"
					>
						<div>
							{/* Category & Date Header */}
							<div className="flex items-center justify-between mb-4">
								<span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
									{project.category}
								</span>
								{project.date && (
									<span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
										<Calendar className="w-3.5 h-3.5" />
										{project.date}
									</span>
								)}
							</div>

							<h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
								{project.title}
							</h3>

							<p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
								{project.description}
							</p>

							{/* Key Highlights */}
							<div className="mb-6 space-y-2">
								<h4 className="text-[11px] font-mono text-slate-400 uppercase">
									Key Features:
								</h4>
								{project.highlights.map((highlight: string) => (
									<div
										key={highlight}
										className="flex items-start gap-2 text-xs text-slate-300"
									>
										<CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
										<span>{highlight}</span>
									</div>
								))}
							</div>
						</div>

						{/* Tech Stack Pills & Footer */}
						<div className="pt-4 border-t border-slate-800/60">
							<div className="flex flex-wrap gap-1.5 mb-4">
								{project.techStack.map((tech: string) => (
									<span
										key={tech}
										className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex items-center justify-end gap-3 pt-2">
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 font-mono"
									>
										<Github className="w-3.5 h-3.5" /> Code
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-mono"
									>
										<ExternalLink className="w-3.5 h-3.5" /> Demo
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default ProjectsGrid;
