import { portfolioData } from './portfolioData';

export const handleTerminalCommand = (rawInput, context) => {
  const input = rawInput.trim();
  const [cmd, ...args] = input.split(' ');
  const command = (cmd || '').toLowerCase();
  const arg = (args[0] || '').toLowerCase();

  switch (command) {
    case 'help':
      return [
        { type: 'output', text: 'COMMANDES DISPONIBLES DANS LE SYSTÈME :' },
        { type: 'help-item', cmd: 'about / bio', desc: "Affiche le profil d'ingénieur" },
        { type: 'help-item', cmd: 'skills', desc: 'Affiche la matrice des compétences techniques' },
        { type: 'help-item', cmd: 'education', desc: 'Affiche les formations et diplômes universitaires' },
        { type: 'help-item', cmd: 'projects', desc: 'Liste des projets clés' },
        { type: 'help-item', cmd: 'project <id>', desc: 'Inspecte un projet (ex: project mono-core)' },
        { type: 'help-item', cmd: 'contact', desc: 'Coordonnées directes et canaux de contact' },
        { type: 'help-item', cmd: 'hire', desc: 'Disponibilité & proposition de collaboration' },
        { type: 'help-item', cmd: 'confetti', desc: 'Lance un easter-egg visuel' },
        { type: 'help-item', cmd: 'clear', desc: "Efface l'écran du terminal" },
        { type: 'help-item', cmd: 'exit', desc: 'Ferme la console interactive' },
      ];

    case 'about':
    case 'bio':
      return [
        { type: 'heading', text: `// PROFIL: ${portfolioData.profile.name} ${portfolioData.profile.firstname}` },
        { type: 'output', text: `Rôle: ${portfolioData.profile.title}` },
        { type: 'output', text: `Localisation: ${portfolioData.profile.location}` },
        { type: 'output', text: `Statut: ${portfolioData.profile.status}` },
        { type: 'output', text: `---` },
        { type: 'output', text: portfolioData.profile.bio },
      ];

    case 'skills':
      return [
        { type: 'heading', text: '// SKILLS :' },
        ...portfolioData.skills.categories.flatMap((cat) => [
          { type: 'section', text: `[${cat.code}] ${cat.name}` },
          ...cat.items.map((item) => ({
            type: 'skill-row',
            text: `  > ${item.name.padEnd(26, '.')} [${item.tag}] ${item.level}%`,
          })),
        ]),
      ];

    case 'education':
    case 'formation':
    case 'formations':
      return [
        { type: 'heading', text: '// FORMATIONS & DIPLÔMES :' },
        ...portfolioData.education.flatMap((edu) => [
          { type: 'section', text: `[${edu.period}] ${edu.degree}` },
          { type: 'output', text: `  Institution: ${edu.institution} (${edu.location})` },
          { type: 'output', text: `  Détails: ${edu.description}` },
        ]),
      ];

    case 'projects':
      return [
        { type: 'heading', text: '// PROJECTS :' },
        ...portfolioData.projects.map((p) => ({
          type: 'output',
          text: `[${p.id}] ${p.title} (${p.category})`,
        })),
        { type: 'hint', text: 'Tapez "project <id>" pour inspecter le blueprint technique.' },
      ];

    case 'project': {
      if (!arg) {
        return [
          { type: 'error', text: 'Usage : project <id>. Exemples : "project mono-core", "project zenith-ui"' },
        ];
      }
      const p = portfolioData.projects.find((proj) => proj.id.toLowerCase() === arg);
      if (!p) {
        return [
          { type: 'error', text: `Projet "${arg}" introuvable. Tapez "projects" pour la liste.` },
        ];
      }
      return [
        { type: 'heading', text: `// FICHE TECHNIQUE DU PROJET : ${p.title}` },
        { type: 'output', text: `Poste: ${p.category} | Année: ${p.year}` },
        { type: 'output', text: `Résumé: ${p.summary}` },
        { type: 'output', text: `Stack: ${p.techStack.join(', ')}` },
      ];
    }

    case 'contact':
      return [
        { type: 'heading', text: '// PROTOCOLE DE CONTACT DIRECT :' },
        { type: 'output', text: `Email    : ${portfolioData.profile.social.email}` },
        { type: 'output', text: `GitHub   : ${portfolioData.profile.social.github}` },
        { type: 'output', text: `Statut   : ${portfolioData.profile.status} (${portfolioData.profile.availability})` },
      ];

    case 'hire':
      if (context?.triggerConfetti) context.triggerConfetti();
      return [
        { type: 'heading', text: '// PROPOSITION DE RECRUTEMENT ACTIVÉE :' },
        { type: 'output', text: `Je suis ouvert aux rôles Software Engineer, Tech Lead & Développeur Fullstack.` },
        { type: 'output', text: `Valeur apportée : Conception robuste, rapidité d'exécution, qualité de code irréprochable.` },
        { type: 'output', text: `Contact direct : ${portfolioData.profile.social.email}` },
        { type: 'success', text: '>> Confetti déclenché. Parlons de votre prochain projet !' },
      ];

    case 'audio': {
      if (arg === 'on') {
        if (context?.setSoundEnabled) context.setSoundEnabled(true);
        return [{ type: 'success', text: 'Audio UI activé.' }];
      } else if (arg === 'off') {
        if (context?.setSoundEnabled) context.setSoundEnabled(false);
        return [{ type: 'output', text: 'Audio UI désactivé.' }];
      }
      return [{ type: 'error', text: 'Usage : audio <on | off>' }];
    }

    case 'confetti':
      if (context?.triggerConfetti) context.triggerConfetti();
      return [{ type: 'success', text: 'Salve de particules physiques monochrome déclenchée !' }];

    case 'sudo':
      return [
        { type: 'error', text: 'Permission refusée: Vous êtes déjà administrateur de votre propre curiosité.' },
      ];

    case 'ls':
      return [
        { type: 'output', text: 'README.md  projects/  skills.json  credentials.key.enc' },
      ];

    case 'cat':
      if (arg === 'readme.md') {
        return [
          { type: 'output', text: '# Portfolio Monochrome' },
          { type: 'output', text: 'Architecturé avec React 18, Tailwind CSS et Web Audio API.' },
        ];
      }
      return [{ type: 'error', text: `cat: ${arg || 'fichier manquant'}: Accès restreint ou inconnu.` }];

    case 'exit':
      if (context?.closeTerminal) context.closeTerminal();
      return [{ type: 'output', text: 'Fermeture du terminal...' }];

    case '':
      return [];

    default:
      return [
        { type: 'error', text: `Commande inconnue: "${rawInput}". Tapez "help" pour voir la liste.` },
      ];
  }
};
