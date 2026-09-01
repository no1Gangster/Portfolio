import { motion } from "framer-motion";
import { CheckCircle, Linkedin, Mail, Phone, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";
import PORTFOLIO_DATA from "../../data/portfolioData";

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

const ContactSection: React.FC = (): React.ReactElement => {
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout((): void => {
			window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
		}, 800);
	};

	return (
		<section id="contact" className="py-24 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Column: Direct Info */}
					<div>
						<span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
							Get in Touch
						</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3 mb-4">
							Let's Build Something High Performance
						</h2>
						<p className="text-slate-400 text-sm leading-relaxed mb-8">
							Open to opportunities in SDE-1 backend, distributed systems, core
							banking engineering, and full-stack AI platform roles.
						</p>

						<div className="space-y-4">
							<a
								href={`mailto:${PORTFOLIO_DATA.personal.email}`}
								className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50 transition-colors group"
							>
								<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
									<Mail className="w-5 h-5" />
								</div>
								<div>
									<span className="text-xs font-mono text-slate-400 block">
										Direct Email
									</span>
									<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
										{PORTFOLIO_DATA.personal.email}
									</span>
								</div>
							</a>

							<a
								href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
								className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50 transition-colors group"
							>
								<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
									<Phone className="w-5 h-5" />
								</div>
								<div>
									<span className="text-xs font-mono text-slate-400 block">
										Phone
									</span>
									<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
										{PORTFOLIO_DATA.personal.phone}
									</span>
								</div>
							</a>

							<a
								href={PORTFOLIO_DATA.personal.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-cyan-500/50 transition-colors group"
							>
								<div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
									<Linkedin className="w-5 h-5" />
								</div>
								<div>
									<span className="text-xs font-mono text-slate-400 block">
										LinkedIn Profile
									</span>
									<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
										linkedin.com/in/cheerag-routaray
									</span>
								</div>
							</a>
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="glass-card p-8 rounded-2xl border border-slate-800"
					>
						{submitted ? (
							<div className="text-center py-12 space-y-4">
								<div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
									<CheckCircle className="w-6 h-6" />
								</div>
								<h3 className="text-lg font-bold text-slate-100">
									Opening Mail Client...
								</h3>
								<p className="text-xs text-slate-400">
									Thank you for reaching out! Your default email program will
									pop up shortly.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<h3 className="text-lg font-bold text-slate-100 mb-2">
									Send a Message
								</h3>

								<div>
									<label
										htmlFor="contact-name"
										className="block text-xs font-mono text-slate-300 mb-1.5"
									>
										Your Name
									</label>
									<input
										id="contact-name"
										type="text"
										required
										value={formData.name}
										onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
											setFormData({ ...formData, name: e.target.value })
										}
										placeholder="e.g. Alex Morgan"
										className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
									/>
								</div>

								<div>
									<label
										htmlFor="contact-email"
										className="block text-xs font-mono text-slate-300 mb-1.5"
									>
										Email Address
									</label>
									<input
										id="contact-email"
										type="email"
										required
										value={formData.email}
										onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
											setFormData({ ...formData, email: e.target.value })
										}
										placeholder="alex@company.com"
										className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
									/>
								</div>

								<div>
									<label
										htmlFor="contact-message"
										className="block text-xs font-mono text-slate-300 mb-1.5"
									>
										Message
									</label>
									<textarea
										id="contact-message"
										required
										rows={4}
										value={formData.message}
										onChange={(
											e: React.ChangeEvent<HTMLTextAreaElement>,
										): void =>
											setFormData({ ...formData, message: e.target.value })
										}
										placeholder="Hi Cheerag, I came across your profile and would love to connect..."
										className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
									/>
								</div>

								<button
									type="submit"
									className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
								>
									<Send className="w-4 h-4" /> Send Message
								</button>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
