"use client";

import React from "react";
import { ArrowRightIcon } from "./Icons";

export default function WhyThisTraining() {
  return (
    <section id="pourquoi-cette-formation" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Démarche Opérationnelle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ISO 27001 ne consiste pas à remplir une checklist.
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Texte principal */}
        <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
          <p className="font-medium text-slate-900 text-lg sm:text-xl">
            Mettre en œuvre un SMSI demande bien plus que de connaître les exigences de la norme.
          </p>

          <p>
            Il faut savoir comprendre le contexte de l’organisation, identifier les parties prenantes, apprécier les risques, définir les objectifs, sélectionner les mesures appropriées, construire les preuves, piloter les actions et préparer l’organisation à l’audit.
          </p>
        </div>

        {/* Encadré de transition vers l'opérationnel */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm text-center">
          <p className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
            Cette formation vous donne une méthode structurée pour passer :
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-600 font-semibold text-base shadow-sm">
              des exigences de la norme
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 shrink-0">
              <span className="sm:hidden font-bold text-lg">↓</span>
              <span className="hidden sm:inline font-bold text-lg">→</span>
            </div>

            <div className="w-full sm:w-auto px-6 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-md">
              à une démarche réellement opérationnelle.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
