"use client";

import React from "react";
import { ShieldCheckIcon } from "./Icons";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section 
      className="relative overflow-hidden bg-[#0B0E1E] pt-8 pb-20 lg:pt-16 lg:pb-32 border-b border-black/20"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E1E]/90 via-[#0B0E1E]/80 to-[#0B0E1E]/95 backdrop-blur-[2px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Live Cyber Telemetry Ribbon */}
        <div className="w-full max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-md text-white rounded-xl py-2.5 px-5 flex flex-col sm:flex-row items-center justify-between shadow-xl border border-white/20 gap-4 sm:gap-0">
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01CE35]"></span>
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#01CE35]">
                SESSION OFFICIELLE ACTIVE
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 font-mono text-[11px] text-white/80">
              <span>📅 14 – 18 Décembre 2026</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span>📍 100% En Ligne</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="text-amber-400 font-bold">⚡ Places limitées</span>
            </div>
          </div>
        </div>

        {/* Narrative & Titles */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Overline Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[11px] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm">
            <ShieldCheckIcon className="w-4 h-4 text-[#01CE35]" />
            <span>Formation Certifiante • Programme Officiel • YASEE IT</span>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              ISO/IEC 27001 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A72FF] to-[#01CE35]">
                Lead Implementer
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-white/90 tracking-tight max-w-2xl mx-auto">
              Pilotez un SMSI qui tient face aux attaques et réussit l'audit certificateur.
            </p>

            <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
              Animée par deux experts Cybersécurité et GRC en activité. Une méthode 100% terrain pour concevoir,
              déployer et valider la sécurité de votre organisation avec la certification officielle <strong className="text-white">PECB</strong>.
            </p>
          </div>

          {/* Visual Value Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="text-xl font-extrabold text-[#4A72FF]">Programme</div>
                <div className="text-[12px] mt-1 font-semibold text-white/60">100% Pratique &amp; Certifiant</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="text-xl font-extrabold text-[#01CE35]">93 Contrôles</div>
                <div className="text-[12px] mt-1 font-semibold text-white/60">Annexe A 2022 outillée</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="text-xl font-extrabold text-white text-center leading-tight">PECB Certified Lead Implementer</div>
              </div>
            </div>
          </div>

          {/* CTAs with Price Anchor */}
          <div className="flex flex-col items-center gap-5 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#1900CE] hover:bg-[#1200A3] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(25,0,206,0.4)] flex items-center justify-center gap-3 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>S'inscrire</span>
              </button>

              <a
                href="#programme"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white font-bold text-sm flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span>Voir le programme</span>
              </a>
            </div>

            {/* Price Callout */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center justify-center gap-3 text-xs text-white/60">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                  <span className="text-xl font-extrabold text-white">800 000 FCFA</span>
                </div>
                <div className="px-2 py-1 rounded bg-white/10 text-[10px] uppercase font-bold tracking-wider">
                  Tarif promotionnel
                </div>
              </div>
              <div className="text-xs font-semibold text-rose-400">
                Clôture des inscriptions le 30 Novembre
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
