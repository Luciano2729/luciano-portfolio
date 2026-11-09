export const portfolioData = {
  profile: {
    name: "RANDRIANASOLO",
    firstname: "Luciano",
    title: "Développeur FullStack",
    subtitle: "Conception d'applications web & mobiles modernes, architectures réactives et solutions sur mesure de bout en bout.",
    location: "Antananarivo, MG",
    status: "DISPONIBLE POUR MISSIONS & CDI",
    availability: "Immediate / Q1",
    tagline: "Concevoir des architectures logicielles rigoureuses drapées dans un minimalisme radical.",
    bio: "Développeur passionné par l'intersection entre le design d'ingénierie logiciel, l'ergonomie utilisateur et la robustesse architecturale. Je transforme des problématiques complexes en systèmes scalables, élégants et réactifs.",
    metrics: [
      { label: "Années d'Expérience", value: "+2", detail: "Web, Mobile & API" },
      { label: "PROJETS LIVRÉS", value: "+5", detail: "Fullstack & Cross-Platform" },
      { label: "ENGAGEMENT QUALITÉ", value: "100%", detail: "Clean Code & MVVM" },
      { label: "PERFORMANCE & FLUIDITÉ", value: "95%", detail: "Optimisation & UX" }
    ],
    social: {
      github: "https://github.com/Luciano2729",
      email: "randrianasololuc73@gmail.com",
      facebook: "https://www.facebook.com/luciano.esmeraldo.10"
    }
  },

  skills: {
    categories: [
      {
        name: "Mobile & Frontend Engineering",
        code: "SYS.01",
        description: "Applications mobiles cross-platform réactives, interfaces web modernes et design systems soignés.",
        items: [
          { name: "Flutter & Dart", level: 85, tag: "Mobile Core" },
          { name: "React Native / Expo", level: 70, tag: "Cross-Platform" },
          { name: "React.js & Vue.js", level: 85, tag: "Web Apps" },
          { name: "Tailwind CSS", level: 90, tag: "Design Systems" },
          { name: "State (Bloc, Provider, Zustand)", level: 80, tag: "State Arch" },
          { name: "Offline-First & TFLite", level: 82, tag: "Edge Mobile" }
        ]
      },
      {
        name: "Backend, Data & Géospatial (SIG)",
        code: "SYS.02",
        description: "APIs robustes, microservices, bases relationnelles spatiales et plateformes de traçabilité.",
        items: [
          { name: "Node.js / Express", level: 75, tag: "REST API" },
          { name: "Python / Flask", level: 80, tag: "Microservices" },
          { name: "Laravel (PHP)", level: 90, tag: "Full-Stack" },
          { name: "PostgreSQL & PostGIS", level: 85, tag: "Spatial / RDBMS" },
          { name: "Supabase & Firebase", level: 88, tag: "BaaS & Auth" },
          { name: "Télédétection & APIs Satellite", level: 84, tag: "GIS / Remote" }
        ]
      },
      {
        name: "DevOps, Environnements & Ingénierie",
        code: "SYS.03",
        description: "Systèmes Linux, conteneurisation, outillage mobile natif et déploiement cloud.",
        items: [
          { name: "Docker & Compose", level: 70, tag: "Containers" },
          { name: "Linux Debian & Shell Scripting", level: 80, tag: "Server & OS" },
          { name: "Tooling Mobile (Android Studio, Gradle, ADB)", level: 90, tag: "Mobile Toolchain" },
          { name: "Git, GitHub Actions & CI/CD", level: 88, tag: "Version & CI" },
          { name: "Cloud & Hosting (Netlify, VPS, Supabase)", level: 85, tag: "Deployment" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "smartsahabio_id",
      title: "SMARTSAHABIO",
      category: "Développeur Fullstack",
      featured: true,
      year: "Août - Oct 2026",
      summary: "Plateforme de gestion coopérative agricole et certification bio avec cartographie parcellaire et suivi satellitaire d'incendies. Elle centralise la gestion administrative des membres, le suivi des parcelles géoréférencées. Grâce à l’intégration de données géospatiales et à la surveillance satellitaire en temps réel des départs de feux, la solution sécurise les récoltes, préserve la biodiversité et garantit une transparence totale du producteur jusqu'aux marchés d'exportation.",
      techStack: ["React", "Flask", "Tailwind", "PostgreSQL", "Supabase"],
      blueprint: {
        components: ["Cartographie SIG & Délimitation Parcellaire", "Suivi Satellitaire Anti-Incendie", "Audits & Conformité Bio (UE 2018/848)", "Gestion Coopérative & Sécurité RLS"],
        dataFlow: "HTTP POST -> Token Bucket Limiter -> Redis Stream -> Worker Consumer -> State DB"
      }
    },
    {
      id: "madarom_id",
      title: "Mad'Arom",
      category: "Développeur Fullstack",
      featured: true,
      year: "Juin - Juillet 2026",
      summary: "Plateforme dédiée à la production et à l'exportation d'huiles essentielles, d'épices et d'extraits naturels de Madagascar. Elle met en valeur la richesse aromatique malgache à travers une démarche durable, éthique et rigoureusement traçable auprès des producteurs locaux.",
      techStack: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      blueprint: {
        components: ["Gestion du multilingue dynamique (anglais / français) et de l'authentification client.", "Fiches techniques détaillées avec système de panier (Add to cart).", "Formulaires de devis, prise de contact qualifiée et onboarding pour partenaires internationaux.", "Navigation par catégories et filtres spécifiques"],
      }
    },
    {
      id: "antsikatour_id",
      title: "ANTSIKA TOUR",
      category: "Développeur Backend",
      featured: true,
      year: "Avril - Mai 2026",
      summary: "Plateforme touristique multilingue dédiée à la découverte et à la réservation d'excursions incontournables autour de Nosy Be et ses îles voisines (Nosy Tanikely, Nosy Komba, Nosy Iranja, Nosy Sakatia). Elle met en lumière la biodiversité marine et terrestre de Madagascar.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      blueprint: {
        components: ["Conception et développement des API RESTful alimentant la plateforme web et mobile de réservation touristique.",
          "Implémentation du moteur de réservation (gestion des jauges, dates saisonnières et notifications automatiques).",
          "Mise en place de l'authentification sécurisée et des interfaces d'administration pour la gestion autonome des circuits et des avis clients."],
      }
    },
    {
      id: "pok_id",
      title: "POK",
      category: "Développeur Mobile",
      featured: false,
      year: "Sept - Déc 2025",
      summary: "Application mobile spécialisée dans la gestion opérationnelle et le suivi rigoureux des essais cliniques sur le terrain. Elle optimise la coordination entre investigateurs et promoteurs grâce au suivi protocolaire des visites de participants et à la gestion dématérialisée des remboursements de frais.",
      architecture: "WebSockets bidirectionnels avec algorithme Yjs CRDT pour résolution de conflits sans serveur central bloquant.",
      techStack: ["Flutter", "Node.js", "NoSQL"],
      blueprint: {
        components: ["Gestion des rôles (RBAC)",
          "Suivi des participants & Protocole des visites",
          "Gestion des notes de frais & Dédommagements (Expenses)"],
      }
    },
    {
      id: "ikaonty_id",
      title: "IKAONTY",
      category: "Développeur Fullstack",
      featured: false,
      year: "Sept - Déc 2024",
      summary: "Plateforme de gestion financière et comptable pensée pour simplifier le suivi des flux de trésorerie, la facturation et le bilan d'activité des structures locales. Elle centralise les écritures de recettes et de dépenses afin d'offrir une visibilité claire et en temps réel sur la santé financière de l'organisation.",
      architecture: "WebSockets bidirectionnels avec algorithme Yjs CRDT pour résolution de conflits sans serveur central bloquant.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      blueprint: {
        components: ["Gestion de trésorerie et écritures comptables",
          "Modélisation de la base de données relationnelle dédiée à la tenue comptable et aux flux financiers.",
          "Implémentation des règles métiers de double écriture, calcul automatique des soldes et validation des transactions.",
          "Conception du tableau de bord d'analyse financière et de génération de rapports d'activité exportables."],
      }
    }
  ],

  experiences: [
    {
      role: "Développeur Fullstack",
      company: "SmartSaha (SmartSahaBio)",
      period: "Juin - Oct 2026",
      location: "Madagascar (Fianarantsoa / Antananarivo)",
      description: "Conception et développement de la plateforme de gestion coopérative agricole, de traçabilité biologique et de cartographie parcellaire géoréférencée.",
      highlights: [
        "Modélisation et requêtage spatial sous PostgreSQL / PostGIS pour le suivi parcellaire et la conformité bio",
        "Développement de micro-services Python/Flask et interfaçage avec les flux satellitaires de détection d'incendies",
        "Architecture frontend réactive en React.js avec formulaires d'audit dynamiques et intégration Supabase"
      ]
    },
    {
      role: "Fondateur & Lead Développeur",
      company: "Ask'Avao Service",
      period: "2025 - Présent",
      location: "Fianarantsoa, Madagascar",
      description: "Direction technique et pilotage de solutions numériques sur-mesure (web, mobile et systèmes métier) pour des clients locaux et internationaux.",
      highlights: [
        "Conception et livraison de plateformes web complètes (E-kaomandy pour la gestion des commandes pour les vendeurs en ligne, Antsika Tour pour la réservation touristique)",
        "Développement d'APIs REST modulaires et sécurisées sous Laravel, Node.js et bases de données relationnelles",
        "Déploiement d'architectures optimisées sur environnements Linux Debian, conteneurs Docker et services cloud (Netlify, Supabase)"
      ]
    },
    {
      role: "Développeur Mobile",
      company: "SMEE Invest & Ads",
      period: "Juin - Déc 2025",
      location: "Fianarantsoa, Madagascar",
      description: "Conception et déploiement de solutions mobiles sécurisées et résilientes, optimisées pour la collecte de données terrain et les flux opérationnels à haute exigence de fiabilité.",
      highlights: [
        "Développement de l'application mobile POK Trial en Flutter avec contrôle d'accès strict par rôles (Investigateur / Promoteur) et suivi protocolaire de visites",
        "Dématérialisation et automatisation des workflows de validation de notes de frais et de dédommagements cliniques",
      ]
    }
  ],

  education: [
    {
      degree: "Master Professionnel en Informatique",
      institution: "École Nationale d'Informatique (ENI) Fianarantsoa",
      period: "Février 2026 - Novembre 2026",
      location: "Fianarantsoa, Madagascar",
      description: "Parcours : Génie Logiciel et Base de Données",
    },
    {
      degree: "Licence Professionnelle en Informatique",
      institution: "École Nationale d'Informatique (ENI) Fianarantsoa",
      period: "Janvier 2024 - Octobre 2024",
      location: "Fianarantsoa, Madagascar",
      description: "Parcours : Ingénierie Logiciel et Systèmes d'Information",
    }
  ],

  education: [
    {
      degree: "Master Professionnel en Informatique",
      institution: "École Nationale d'Informatique (ENI) Fianarantsoa",
      period: "Février 2026 - Novembre 2026",
      location: "Fianarantsoa, Madagascar",
      description: "Parcours : Génie Logiciel et Base de Données",
    },
    {
      degree: "Licence Professionnelle en Informatique",
      institution: "École Nationale d'Informatique (ENI) Fianarantsoa",
      period: "Janvier 2024 - Octobre 2024",
      location: "Fianarantsoa, Madagascar",
      description: "Parcours : Ingénierie Logiciel et Systèmes d'Information",
    }
  ]
};

