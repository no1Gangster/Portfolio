import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Core Competencies & Tooling
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Comprehensive skill matrix across distributed backend architectures, cloud platforms, databases, and modern frontend tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_DATA.skillsCategory.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {PORTFOLIO_DATA.skillsCategory[activeTab].skills.map((skill) => (
            <div
              key={skill}
              className="glass-card p-4 rounded-xl flex items-center gap-3 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>

        {/* All Skills Overview Cloud */}
        <div className="mt-16 pt-12 border-t border-slate-800/60">
          <h3 className="text-xs font-mono text-slate-400 uppercase text-center mb-6">
            All Technologies & Tools Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {PORTFOLIO_DATA.skillsCategory.flatMap(c => c.skills).map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs font-mono text-slate-300 border border-slate-800/80 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
