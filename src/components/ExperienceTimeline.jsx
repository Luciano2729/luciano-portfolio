import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2 flex items-center space-x-2">
              <span className="text-white font-bold">// 03</span>
              <span>PARCOURS PROFESSIONNEL & IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              EXPÉRIENCES
            </h2>
          </div>

          {/* <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md font-mono">
            Historique de responsabilités techniques, d'optimisations d'architecture et de livraisons critiques.
          </p> */}
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {portfolioData.experiences.map((exp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 sm:p-8 bg-neutral-950/60 border border-white/15 hover:border-white/40 hover:bg-neutral-900/30 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400 mb-2">
                    <span className="px-2 py-0.5 bg-white text-black font-semibold">
                      {exp.period}
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-neutral-300 mt-1">
                    @ {exp.company}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Key achievements */}
              <div className="space-y-2 font-mono text-xs">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                  // Faits Marquants & Réalisations :
                </div>
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2 text-neutral-200">
                    <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
