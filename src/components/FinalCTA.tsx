"use client";

import React from "react";
import { ArrowRightIcon, CalendarIcon, LaptopIcon, ShieldCheckIcon } from "./Icons";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="contact-final" className="py-20 md:py-28 bg-[#090D1A] text-white border-b border-white/10 relative overflow-hidden">
      {/* Halo discret d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/30 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* En-tête */}
        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-bold tracking-widest text-blue-300 uppercase">
            Session Décembre 2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Prêt à devenir PECB Certified ISO/IEC 27001 Lead Implementer ?
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Sous-titre */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
          Développez une compétence immédiatement applicable à vos missions de cybersécurité, GRC, risque, audit ou gouvernance.
        </p>

        {/* Informations récapitulatives */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 mb-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-blue-400" />
              <span>14 — 18 décembre 2026</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <LaptopIcon className="w-4 h-4 text-blue-400" />
              <span>100 % en ligne</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div>
              <span>Formation en français</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Examen PECB inclus</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="font-extrabold text-white text-sm sm:text-base">
              800 000 FCFA TTC
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>RÉSERVER MA PLACE</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center cursor-pointer"
          >
            DEMANDER UN DEVIS ENTREPRISE
          </button>
        </div>

      </div>
    </section>
  );
}
