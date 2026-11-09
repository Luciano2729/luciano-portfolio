import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { sound } from '../utils/sound';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('TOUS');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['TOUS', ...new Set(portfolioData.projects.map((p) => p.category.toUpperCase()))];

  const filteredProjects = activeCategory === 'TOUS'
    ? portfolioData.projects
    : portfolioData.projects.filter(
        (p) => p.category.toUpperCase() === activeCategory
      );

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2 flex items-center space-x-2">
              <span className="text-white font-bold">// 01</span>
              <span>INDEX DES ARCHITECTURES & PROJETS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              RÉALISATIONS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md font-mono">
            Chaque système ci-dessous a été pensé avec des critères stricts de performance, d'ergonomie et de maintenabilité logicielle.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                sound.playClick();
                setActiveCategory(category);
              }}
              className={`px-3 py-1.5 border transition-all ${
                activeCategory === category
                  ? 'border-white bg-white text-black font-bold'
                  : 'border-white/15 text-neutral-400 hover:text-white hover:border-white/40 bg-black/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
