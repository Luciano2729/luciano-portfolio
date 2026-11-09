import React, { useState } from 'react';
import { ArrowDownRight, Terminal, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function HeroSection({ openTerminal }) {
  const [copied, setCopied] = useState(false);
  const npxCommand = "npx randrianasolo";

  const handleCopy = () => {
    sound.playClick();
    navigator.clipboard.writeText(npxCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow / Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs text-neutral-400">
          <span className="inline-flex items-center px-2.5 py-1 border border-white/20 bg-white/5 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
            DEVELOPPEMENT WEB & MOBILE
          </span>
          <span className="text-white/30">•</span>
          <span>{portfolioData.profile.location}</span>
          {/* <span className="text-white/30">•</span> */}
          {/* <span className="text-neutral-300">{portfolioData.profile.availability}</span> */}
        </div>

        {/* Main Title / Architectural Typography */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05] uppercase text-white">
            DÉVELOPPEUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600">
              FULL-STACK
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
            {portfolioData.profile.subtitle}
          </p>
        </div>

        {/* Action Buttons & Terminal Prompt */}
        <div className="flex flex-wrap items-center gap-4 pt-2 pb-12">
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            className="group px-6 py-3.5 bg-white text-black font-semibold text-sm tracking-wider uppercase flex items-center space-x-3 hover:bg-neutral-200 transition-all hover:scale-[1.02]"
          >
            <span>Explorer les projets</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => {
              sound.playClick();
              openTerminal();
            }}
            className="px-6 py-3.5 border border-white/30 bg-black/60 hover:bg-white/10 text-white font-mono text-sm tracking-wider uppercase flex items-center space-x-2 transition-all hover:border-white"
          >
            <Terminal className="w-4 h-4" />
            <span>Terminal CLI</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
          {portfolioData.profile.metrics.map((metric, i) => (
            <div
              key={i}
              onMouseEnter={() => sound.playHover()}
              className="p-5 bg-neutral-950/80 border border-white/10 hover:border-white/30 hover:bg-neutral-900/50 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1 font-medium">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
