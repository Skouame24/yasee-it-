"use client";

import React from "react";

export default function WhyThisTraining() {
  return (
    <section id="pourquoi-cette-formation" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Pourquoi cette formation ?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PECB Certified ISO/IEC 27001 Lead Implementer ne consiste pas à remplir une checklist.
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



      </div>
    </section>
  );
}
