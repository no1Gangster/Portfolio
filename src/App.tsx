import type React from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Certifications from "./components/sections/Certifications";
import ContactSection from "./components/sections/ContactSection";
import ExperienceTimeline from "./components/sections/ExperienceTimeline";
import HeroSection from "./components/sections/HeroSection";
import MetricsSpotlight from "./components/sections/MetricsSpotlight";
import ProjectsGrid from "./components/sections/ProjectsGrid";
import SkillsGrid from "./components/sections/SkillsGrid";

const App: React.FC = (): React.ReactElement => {
	return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
			<Navbar />
			<main className="flex-grow">
				<HeroSection />
				<MetricsSpotlight />
				<ExperienceTimeline />
				<SkillsGrid />
				<ProjectsGrid />
				<Certifications />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
};

export default App;
