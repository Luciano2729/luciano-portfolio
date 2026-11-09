import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-white/10 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2 flex items-center space-x-2">
              <span className="text-white font-bold">// 04</span>
              <span>CURSUS ACADÉMIQUE & DIPLÔMES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              FORMATIONS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md font-mono">
            Solide bagage universitaire en informatique et génie logiciel à l'École Nationale d'Informatique (ENI).
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education?.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 sm:p-8 bg-black/80 border border-white/15 hover:border-white/40 hover:bg-neutral-900/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-4 pb-3 border-b border-white/10">
                  <span className="px-2.5 py-0.5 bg-white text-black font-semibold">
                    {item.period}
                  </span>
                  <div className="flex items-center space-x-1.5 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px]">{item.location}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 mb-1">
                    <GraduationCap className="w-4 h-4 text-white" />
                    <span>DIPLÔME D'ÉTAT</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-mono text-neutral-300 mt-1">
                    @ {item.institution}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skills tags */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {item.skills?.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 bg-neutral-900 border border-white/10 text-[11px] font-mono text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

