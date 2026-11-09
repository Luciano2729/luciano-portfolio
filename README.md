# PORTFOLIO MONOCHROME // CREATIVE SOFTWARE ENGINEER

Portfolio réactif, minimaliste et haute performance conçu avec **React 18**, **Tailwind CSS**, **Vite** et **Web Audio API**.

---

## ⚡ La Spécificité : Une architecture à 3 Modes Interactifs

Contrairement aux portfolios classiques, ce projet intègre un système d'exploration multi-facettes :

1. **`[01 // EDITORIAL]` (Mode Minimaliste)** :
   - Typographie suisse & brutaliste en noir et blanc pur.
   - Micro-interactions fluides, cartes de projets épurées et hiérarchie visuelle stricte.

2. **`[02 // BLUEPRINT]` (Mode Ingénieur / Schématique)** :
   - Révèle instantanément les entrailles du code : règles de mesure, repères d'axes, limites de composants du DOM, diagrammes de flux de données et architecture détaillée pour chaque projet.
   - Démontre une maîtrise profonde de la conception logicielle auprès des recruteurs et pairs.

3. **`[03 // TERMINAL CLI]` (Mode Console Interactif)** :
   - Véritable émulateur de terminal en bas d'écran avec historique de commandes (touches `↑` / `↓`), suggestions rapides et autocomplétion.
   - Commandes supportées : `help`, `bio`, `skills`, `projects`, `project <id>`, `contact`, `hire`, `mode <editorial|blueprint>`, `audio <on|off>`, `confetti`, `clear`.

---

## 🛠️ Fonctionnalités Supplémentaires

- **Moteur Audio Web Audio API** : Micro-sons synthétisés en temps réel (clics mécaniques, transitions d'état) sans aucune dépendance audio externe. Toggle activable/désactivable dans l'en-tête.
- **Palette de commandes universelle (`Ctrl+K` ou `⌘K`)** : Recherche rapide et navigation instantanée entre les sections et les modes.
- **Arrière-plan Canvas Réactif** : Constellation géométrique interactive réagissant au curseur de souris en monochrome.
- **Curseur Personnalisé Inversé & Réticule** : Réticule technique avec affichage des coordonnées `[X:Y]` en temps réel en mode Blueprint.
- **Formulaire de transmission directe** : Simulation d'envoi chiffré TLS avec feedback `200 OK` et pluie de particules physiques.
- **Commande NPX copiable en un clic** : `npx randrianasolo` pour impressionner en un coup d'œil.

---

## 🚀 Démarrage Rapide

Dans le terminal :

```bash
# Lancer le serveur de développement local
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

Le serveur sera accessible sur `http://localhost:3000`.

---

## ✏️ Personnaliser vos Informations

Toutes vos données (nom, bio, projets, stack technique, coordonnées) sont centralisées dans un seul fichier facile à modifier :

👉 [`src/data/portfolioData.js`](file:///media/randrianasolo/DaLissa1/Portfolio/src/data/portfolioData.js)

