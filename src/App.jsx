import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import MatrixBackground from './components/MatrixBackground';
import CustomCursor from './components/CustomCursor';
import TerminalDrawer from './components/TerminalDrawer';
import CommandPalette from './components/CommandPalette';
import { sound } from './utils/sound';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ffffff', '#bbbbbb', '#666666'],
    });
  };

  const handleOpenTerminal = () => {
    sound.playClick();
    setTerminalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#e5e5e5] relative selection:bg-white selection:text-black">
      {/* Interactive Custom Inverted Cursor */}
      <CustomCursor />

      {/* Interactive Canvas Star/Matrix Background */}
      <MatrixBackground />

      {/* Film grain texture overlay */}
      <div className="fixed inset-0 grain-overlay z-10" />

      {/* Header / Nav */}
      <Header
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        openTerminal={handleOpenTerminal}
        openCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-20">
        <HeroSection openTerminal={handleOpenTerminal} />
        <ProjectsSection />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Interactive Terminal CLI Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        setSoundEnabled={setSoundEnabled}
        triggerConfetti={triggerConfetti}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={setCommandPaletteOpen}
        setSoundEnabled={setSoundEnabled}
        soundEnabled={soundEnabled}
        openTerminal={handleOpenTerminal}
        triggerConfetti={triggerConfetti}
      />
    </div>
  );
}
