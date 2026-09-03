import { motion } from "framer-motion";
import { Award, Bug, ShieldCheck, Zap } from "lucide-react";
import type React from "react";
import PORTFOLIO_DATA, { type Metric } from "../../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
	ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
	Zap: <Zap className="w-6 h-6 text-amber-400" />,
	Bug: <Bug className="w-6 h-6 text-emerald-400" />,
	Award: <Award className="w-6 h-6 text-purple-400" />,
};

const MetricsSpotlight: React.FC = (): React.ReactElement => (
	<section className="py-12 bg-slate-900/50 border-y border-slate-800/60">
		<div className="max-w-6xl mx-auto px-4 sm:px-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{PORTFOLIO_DATA.metrics.map((metric: Metric, idx: number) => (
					<motion.div
						key={metric.label}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: idx * 0.1 }}
						className="glass-card p-6 rounded-2xl relative overflow-hidden group"
					>
						<div className="flex items-center mb-4 gap-4">
							<div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
								{iconMap[metric.iconName] || (
									<Zap className="w-6 h-6 text-cyan-400" />
								)}
							</div>
							<span className="text-3xl font-extrabold font-mono text-slate-100 group-hover:text-cyan-400 transition-colors">
								{metric.value}
							</span>
						</div>
						<h3 className="text-sm font-semibold text-slate-200 mb-1">
							{metric.label}
						</h3>
						<p className="text-xs text-slate-400 leading-relaxed">
							{metric.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default MetricsSpotlight;
