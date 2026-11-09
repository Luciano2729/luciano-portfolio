import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onMouseEnter={() => sound.playHover()}
      className="group relative flex flex-col justify-between border border-white/10 bg-neutral-950/70 p-6 hover:border-white/40 hover:bg-neutral-900/40 transition-all duration-200"
    >
      {/* Top Header info */}
      <div>
        <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-3 pb-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            {/* <span className="text-white font-semibold">[{project.id.toUpperCase()}]</span> */}
            {/* <span className="text-white/20">/</span> */}
            <span>{project.category}</span>
          </div>
          <span className="text-white/40 font-mono">{project.year}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
          {project.title}
        </h3>

        <div className="mt-3">
          <p className="text-sm text-neutral-300 text-justify leading-relaxed font-light">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Footer Info: Tech Stack and Actions */}
      <div className="mt-6 pt-4 border-t border-white/10">
        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-neutral-900 border border-white/10 text-[11px] font-mono text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Controls */}
        <div className="flex items-center justify-between pt-2">
          {/* Modal Detail button */}
          <button
            onClick={() => {
              sound.playClick();
              onSelect(project);
            }}
            className="px-3 py-1.5 text-xs font-mono bg-white text-black font-semibold hover:bg-neutral-200 flex items-center space-x-1.5 transition-all"
          >
            <span>Détails</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-2">
            {/* External Links */}
            {/* <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-1.5 border border-white/15 text-neutral-400 hover:text-white hover:border-white transition-colors"
              title="Code source GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a> */}
            {/* <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-1.5 border border-white/15 text-neutral-400 hover:text-white hover:border-white transition-colors"
              title="Démo en ligne"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
