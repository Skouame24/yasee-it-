"use client";

import React from "react";
import { ShieldCheckIcon, ClockIcon, LaptopIcon, CheckCircleIcon, ArrowRightIcon, AwardIcon } from "./Icons";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <div id="accueil" className="relative bg-[#090D1A] text-white">
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10">
        {/* Halo subtil d'arrière-plan */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-blue-600/30 blur-[130px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Badge officiel */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-950/90 border border-blue-400/30 text-xs sm:text-sm font-semibold tracking-wider text-blue-200 uppercase mb-8 shadow-sm">
            <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span>Session de formation — Décembre 2026</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            PECB Certified ISO/IEC 27001 Lead Implementer
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl font-semibold text-blue-200 tracking-tight max-w-3xl mx-auto mb-6">
            De la gestion des risques à un SMSI auditable.
          </p>

          {/* Texte explicatif */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Maîtrisez la démarche de mise en œuvre d’un SMSI selon ISO/IEC 27001 et développez les compétences nécessaires pour piloter une démarche de sécurité de l’information auprès de la Direction, des métiers, des équipes IT et des auditeurs.
          </p>

          {/* Informations rapides — Grille 5 colonnes directive */}
          <div className="w-full max-w-5xl bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 mb-10 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              
              {/* 1. Durée */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/50 border border-white/5 text-left">
                <ClockIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Durée</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">5 jours</div>
                </div>
              </div>

              {/* 2. Format */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/50 border border-white/5 text-left">
                <LaptopIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Format</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">100 % en ligne</div>
                </div>
              </div>

              {/* 3. Langue */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/50 border border-white/5 text-left">
                <div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-[10px] font-black text-blue-400 shrink-0">
                  FR
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Langue</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">En français</div>
                </div>
              </div>

              {/* 4. Voucher examen */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/50 border border-white/5 text-left">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Examen</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate" title="Voucher examen">Voucher inclus</div>
                </div>
              </div>

              {/* 5. Attestation de formation */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-800/50 border border-white/5 text-left">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Livrable</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate" title="Attestation de formation">Attestation de formation</div>
                </div>
              </div>

            </div>
          </div>

          {/* Prix */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              <span className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400 mr-2">Tarif promotionnel :</span>
              800 000 FCFA <span className="text-sm sm:text-base font-normal text-slate-400">TTC</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-800/90 text-xs sm:text-sm font-semibold text-slate-400 line-through border border-white/10">
              Tarif standard : 1 150 000 FCFA
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>RÉSERVER MA PLACE</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <a
              href="#programme"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/70 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center"
            >
              RECEVOIR LE PROGRAMME
            </a>
          </div>

          {/* Micro-copy sous CTA */}
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Places limitées — Date limite d’inscription : <span className="text-amber-400 font-semibold">30/11/2026</span> • Inscription individuelle ou prise en charge par l’entreprise.
          </p>

        </div>
      </section>
    </div>
  );
}
