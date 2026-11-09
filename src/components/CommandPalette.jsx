import React, { useState, useEffect } from 'react';
import { Search, Terminal, Volume2, Mail, Github, Sparkles, ArrowRight, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function CommandPalette({
  isOpen,
  onClose,
  setSoundEnabled,
  soundEnabled,
  openTerminal,
  triggerConfetti,
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'open-terminal',
      label: 'Ouvrir la console CLI interactive',
      category: 'Outils',
      icon: <Terminal className="w-4 h-4" />,
      run: () => {
        openTerminal();
      },
    },
    {
      id: 'nav-projects',
      label: 'Aller à la section : Projets & Réalisations',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      run: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });  
      },
    },
    {
      id: 'nav-skills',
      label: 'Aller à la section : Compétences & Matrice',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      run: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-experience',
      label: 'Aller à la section : Expériences & Parcours',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      run: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-education',
      label: 'Aller à la section : Formations & Diplômes',
      category: 'Navigation',
      icon: <ArrowRight className="w-4 h-4" />,
      run: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-contact',
      label: 'Aller à la section : Contact & Recrutement',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4" />,
      run: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'trigger-confetti',
      label: 'Déclencher la pluie de particules monochrome',
      category: 'Easter Egg',
      icon: <Sparkles className="w-4 h-4" />,
      run: () => {
        triggerConfetti();
      },
    },
    {
      id: 'open-github',
      label: 'Consulter le profil GitHub externe',
      category: 'Externe',
      icon: <Github className="w-4 h-4" />,
      run: () => {
        window.open(portfolioData.profile.social.github, '_blank');
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-xl border border-white/20 bg-neutral-950 p-4 font-mono text-xs shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center space-x-3 pb-3 border-b border-white/15">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tapez une action ou commande..."
            className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none text-sm"
          />
          <button
            onClick={() => onClose(false)}
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Actions list */}
        <div className="mt-3 max-h-72 overflow-y-auto space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-6 text-center text-neutral-500">
              Aucune commande correspondante.
            </div>
          ) : (
            filteredActions.map((action) => (
              <button
                key={action.id}
                onClick={() => {
                  sound.playClick();
                  action.run();
                  onClose(false);
                }}
                className="w-full p-2.5 flex items-center justify-between text-left hover:bg-white hover:text-black transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-neutral-400 group-hover:text-black">
                    {action.icon}
                  </span>
                  <span className="font-medium text-white group-hover:text-black">
                    {action.label}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500 group-hover:text-neutral-700 uppercase">
                  {action.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-[10px] text-neutral-500">
          <span>Sélectionner : Clic / Entrée</span>
          <span>Fermer : Échap</span>
        </div>
      </div>
    </div>
  );
}
