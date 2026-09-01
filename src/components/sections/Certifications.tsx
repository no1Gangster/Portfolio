import { motion } from "framer-motion";
import {
	Award,
	Cloud,
	Code,
	GraduationCap,
	Server,
	Shield,
} from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA, {
	type Certification,
	type Education,
} from "../../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
	Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
	Server: <Server className="w-5 h-5 text-blue-400" />,
	Shield: <Shield className="w-5 h-5 text-purple-400" />,
	Code: <Code className="w-5 h-5 text-emerald-400" />,
};

const Certifications: React.FC = (): React.ReactElement => {
	return (
		<section
			id="certifications"
			className="py-24 bg-slate-900/30 border-y border-slate-800/60"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column: Certifications */}
					<div>
						<span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
							Verified Credentials
						</span>
						<h2 className="text-3xl font-bold text-slate-100 mt-3 mb-8">
							Certifications & Programs
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{PORTFOLIO_DATA.certifications.map(
								(cert: Certification, idx: number) => (
									<motion.div
										key={cert.title}
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: idx * 0.1 }}
										className="glass-card p-4 rounded-xl border border-slate-800 flex items-start gap-3 hover:border-cyan-500/40 transition-colors"
									>
										<div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
											{iconMap[cert.icon] || (
												<Award className="w-5 h-5 text-cyan-400" />
											)}
										</div>
										<div>
											<h3 className="text-sm font-semibold text-slate-200">
												{cert.title}
											</h3>
											<p className="text-xs text-slate-400 font-medium">
												{cert.issuer}
											</p>
											<span className="text-[11px] text-cyan-400 font-mono mt-1 block">
												{cert.date}
											</span>
										</div>
									</motion.div>
								),
							)}
						</div>
					</div>

					{/* Right Column: Education */}
					<div>
						<span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
							Academic Background
						</span>
						<h2 className="text-3xl font-bold text-slate-100 mt-3 mb-8">
							Education
						</h2>

						<div className="space-y-4">
							{PORTFOLIO_DATA.education.map((edu: Education, idx: number) => (
								<motion.div
									key={edu.degree}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: idx * 0.15 }}
									className="glass-card p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors"
								>
									<div className="flex items-start gap-3">
										<div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
											<GraduationCap className="w-5 h-5" />
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="text-sm sm:text-base font-bold text-slate-100">
													{edu.degree}
												</h3>
												<span className="text-xs font-mono text-cyan-400">
													{edu.period}
												</span>
											</div>
											<p className="text-xs text-slate-300 mt-1">
												{edu.institution}
											</p>
											<div className="mt-2 inline-block px-2.5 py-0.5 rounded bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">
												{edu.score}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Certifications;
