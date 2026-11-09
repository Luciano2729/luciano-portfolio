import React, { useState } from 'react';
import { Github, Facebook, Copy, Check, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(portfolioData.profile.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-20 md:pt-28 pb-12 bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-neutral-400 mb-2 flex items-center space-x-2">
              <span className="text-white font-bold">// 05</span>
              <span>CANAUX DE CONTACT & RECRUTEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              INITIALISER LE CONTACT
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md font-mono">
            Disponible pour missions d'ingénierie, projets d'envergure ou opportunités techniques.
          </p>
        </div>

        {/* Content Layout - Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Quick Email Card */}
          <div className="p-6 sm:p-8 bg-black/80 border border-white/15 hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-3 pb-3 border-b border-white/10">
                <span>// CANAL PRINCIPAL</span>
                <Mail className="w-4 h-4 text-white" />
              </div>

              <div className="text-xs uppercase font-mono text-neutral-400 mb-1">
                Adresse électronique
              </div>
              <div className="text-base sm:text-lg font-mono text-white font-semibold truncate mb-6">
                {portfolioData.profile.social.email}
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-neutral-200 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>EMAIL COPIÉ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPIER L'EMAIL</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${portfolioData.profile.social.email}?subject=Prise%20de%20contact%20-%20Portfolio`}
                onClick={() => sound.playClick()}
                className="w-full py-2 px-4 border border-white/20 hover:border-white text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Écrire directement</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="p-6 sm:p-8 bg-black/80 border border-white/15 hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-3 pb-3 border-b border-white/10">
                <span>// RÉSEAUX & CODE</span>
                <span className="text-[10px] text-neutral-500">PROFILES</span>
              </div>

              <div className="text-xs uppercase font-mono text-neutral-400 mb-3">
                Plateformes
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={portfolioData.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 bg-neutral-900/60 border border-white/15 hover:border-white hover:bg-white/5 flex items-center justify-between transition-colors text-white group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                    <span className="font-semibold">GITHUB</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>

                <a
                  href={portfolioData.profile.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 bg-neutral-900/60 border border-white/15 hover:border-white hover:bg-white/5 flex items-center justify-between transition-colors text-white group"
                >
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                    <span className="font-semibold">FACEBOOK</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-neutral-400">
              Code source & activités publiques vérifiables en ligne.
            </div>
          </div>

          {/* Availability & Location Card */}
          <div className="p-6 sm:p-8 bg-black/80 border border-white/15 hover:border-white/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-3 pb-3 border-b border-white/10">
                <span>// STATUT SYSTÈME</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              <div className="text-xs uppercase font-mono text-neutral-400 mb-1">
                Disponibilité
              </div>
              <div className="text-base font-mono text-white font-bold mb-4">
                {portfolioData.profile.status}
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-300 pt-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Localisation:</span>
                  <span className="text-white">{portfolioData.profile.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Délai réponse:</span>
                  <span className="text-white">&lt; 24h ouvrées</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Mode:</span>
                  <span className="text-white">Présentiel & Remote</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400 flex items-center space-x-2">
              <span>● Ouvert aux propositions</span>
            </div>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} {portfolioData.profile.name} {portfolioData.profile.firstname}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 border border-white/15 text-neutral-400 hover:text-white hover:border-white transition-colors"
              title="Retourner en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
