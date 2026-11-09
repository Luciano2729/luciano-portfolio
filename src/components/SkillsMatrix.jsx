import React, { useState } from 'react';
import { Check, Copy, Code, Layers, Server, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function SkillsMatrix() {
  const [copied, setCopied] = useState(false);
  const command = "npm i @randrianasolo/core";

  const handleCopy = () => {
    sound.playClick();
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (code) => {
    switch (code) {
      case 'SYS.01': return <Layers className="w-4 h-4" />;
      case 'SYS.02': return <Server className="w-4 h-4" />;
      case 'SYS.03': return <Cloud className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/10 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2 flex items-center space-x-2">
              <span className="text-white font-bold">// 02</span>
              <span>CAPACITÉS & ARSENAL TECHNIQUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              COMPÉTENCES
            </h2>
          </div>
        </div>

        {/* Skills System Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {portfolioData.skills.categories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 bg-black/70 border border-white/15 hover:border-white/40 hover:bg-neutral-900/30 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    {getCategoryIcon(cat.code)}
                    <span>[{cat.code}]</span>
                  </div>
                  {/* <span className="text-neutral-500 text-[10px]">VERIFIED_MODULE</span> */}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 uppercase">
                  {cat.name}
                </h3>
                <p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-3 font-mono text-xs">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-neutral-300">
                        <span className="flex items-center space-x-1.5">
                          <span className="text-neutral-500">•</span>
                          <span className="font-medium text-white">{item.name}</span>
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] px-1.5 py-0.2 bg-white/10 text-neutral-300 border border-white/10">
                            {item.tag}
                          </span>
                          <span className="text-[11px] text-neutral-400 w-8 text-right">
                            {item.level}%
                          </span>
                        </div>
                      </div>

                      {/* Technical Progress Bar */}
                      <div className="w-full h-1 bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-700 ease-out"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-neutral-500 flex justify-between">
                {/* <span>MODULE_STATUS: PRODUCTION_READY</span> */}
                <span>STACK_0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
