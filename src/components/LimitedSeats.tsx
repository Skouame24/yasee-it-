"use client";

import React from "react";
import { CalendarIcon, LaptopIcon, ClockIcon, ArrowRightIcon } from "./Icons";

interface LimitedSeatsProps {
  onOpenModal: () => void;
}

export default function LimitedSeats({ onOpenModal }: LimitedSeatsProps) {
  return (
    <section id="places-limitees" className="py-20 md:py-28 bg-[#090D1A] text-white border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* En-tête */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-bold tracking-widest text-blue-300 uppercase">
            Places Limitées
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Session de décembre 2026
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Détails session */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <CalendarIcon className="w-5 h-5 text-blue-400" />
            <span className="text-base sm:text-lg font-bold text-white">
              14 → 18 décembre 2026
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <LaptopIcon className="w-5 h-5 text-blue-400" />
            <span className="text-base sm:text-lg font-bold text-white">
              5 jours — 100 % en ligne
            </span>
          </div>
        </div>

        {/* Texte d'explication de la limitation */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Les places sont volontairement limitées afin de préserver la qualité des échanges, des exercices et de l’accompagnement pendant la formation.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>RÉSERVER MA PLACE</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
