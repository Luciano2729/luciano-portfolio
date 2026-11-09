import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Terminal, Cpu, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl border border-white/25 bg-[#0a0a0a] p-6 sm:p-8 font-sans shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        

        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 border border-white/20 text-neutral-400 hover:text-white hover:border-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mt-4 pb-4 border-b border-white/10">
          <div className="flex items-center space-x-3 font-mono text-xs text-neutral-400 mb-2">
            <span className="px-2 py-0.5 border border-white/20 bg-white/5 text-white">
              {project.category}
            </span>
            <span>{project.year}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            {project.title}
          </h2>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Summary */}
          <div>
            <p className="text-neutral-200 text-justify leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          {/* Components breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              // Modules Principaux Développés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.blueprint.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 p-2 border border-white/10 bg-neutral-950 font-mono text-xs text-neutral-300"
                >
                  <span className="text-white font-semibold">0{idx + 1}.</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              // Technologies Clés
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white text-black font-mono text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-xs font-mono text-neutral-400 hover:text-white"
          >
            Fermer [Esc]
          </button>
        </div>
      </div>
    </div>
  );
}

