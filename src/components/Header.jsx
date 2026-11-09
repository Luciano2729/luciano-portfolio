import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Search, Menu, X, Globe, MapPin } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Header({
  soundEnabled,
  setSoundEnabled,
  openTerminal,
  openCommandPalette,
}) {
  const [localTime, setLocalTime] = useState('');
  const [visitorLocation, setVisitorLocation] = useState(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Madagascar';
      const city = tz.split('/')[1]?.replace(/_/g, ' ') || tz;
      return city.toUpperCase();
    } catch {
      return 'VISITEUR';
    }
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Visitor location detection
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    // Free fast IP geolocation detection
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && (data.country_name || data.country)) {
          const country = data.country_name || data.country;
          const city = data.city ? `${data.city.toUpperCase()}, ` : '';
          setVisitorLocation(`${city}${country.toUpperCase()}`);
        }
      })
      .catch(() => {
        // Fallback using Intl timezone
        if (!isMounted) return;
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (tz) {
            const parts = tz.split('/');
            const region = parts[0] ? parts[0].toUpperCase() : '';
            const city = parts[1] ? parts[1].replace(/_/g, ' ').toUpperCase() : '';
            setVisitorLocation(city ? `${city} (${region})` : tz.toUpperCase());
          }
        } catch {
          // Keep default
        }
      })
      .finally(() => clearTimeout(timeoutId));

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Visitor real-time local clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString(navigator.language || 'fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newState = sound.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: 'PROJETS', href: '#projects' },
    { label: 'COMPÉTENCES', href: '#skills' },
    { label: 'EXPÉRIENCES', href: '#experience' },
    { label: 'FORMATIONS', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050505]/85 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="group flex items-center space-x-2 font-mono text-sm tracking-wider uppercase"
          >
            <div className="w-6 h-6 border border-white flex items-center justify-center font-bold text-xs bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
              RL
            </div>
            <span className="font-semibold text-white tracking-widest">
              RANDRIANASOLO
            </span>
          </a>

          {/* Visitor Location & Time Status Indicator */}
          <div className="hidden lg:flex items-center space-x-2.5 text-[11px] font-mono border-l border-white/15 pl-3.5 text-neutral-400">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">DISPONIBLE</span>
            <span className="text-white/20">•</span> */}

            {/* Visitor country / location */}
            {/* <span className="flex items-center space-x-1 text-neutral-300">
              <MapPin className="w-3 h-3 text-neutral-400" />
              <span className="font-semibold text-white">{visitorLocation}</span>
            </span> */}

            {/* <span className="text-white/20">•</span>
            <span className="text-neutral-400 font-mono">{localTime}</span> */}
          </div>
        </div>

        {/* Actions (Cmd+K, Sound, Mobile Menu) */}
        <div className="flex items-center space-x-2">
          {/* Terminal Button */}
          <button
            onClick={() => {
              sound.playClick();
              openTerminal();
            }}
            className="flex items-center space-x-2 px-2.5 py-1.5 border border-white/15 bg-neutral-900/60 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
            title="Ouvrir la console CLI interactive"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TERMINAL</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              openCommandPalette();
            }}
            className="flex items-center space-x-2 px-2.5 py-1.5 border border-white/15 bg-neutral-900/60 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
            title="Ouvrir la palette de commandes (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">MENU</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-white/15 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/15 bg-black/95 px-4 py-4 space-y-3 font-mono text-xs">
          {/* Visitor Location info on mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-neutral-400">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-white font-medium">{visitorLocation}</span>
            </span>
            <span className="text-white font-mono">{localTime}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 border border-white/15 bg-neutral-900/60 text-neutral-200 hover:text-white hover:border-white text-center transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
              openTerminal();
            }}
            className="w-full p-2.5 border border-white bg-white text-black font-bold flex items-center justify-center space-x-2"
          >
            <Terminal className="w-4 h-4" />
            <span>OUVRIR LE TERMINAL CLI</span>
          </button>
        </div>
      )}
    </header>
  );
}
