import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsSpotlight } from './components/sections/MetricsSpotlight';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { SkillsGrid } from './components/sections/SkillsGrid';
import { ProjectsGrid } from './components/sections/ProjectsGrid';
import { Certifications } from './components/sections/Certifications';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
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
}

export default App;
