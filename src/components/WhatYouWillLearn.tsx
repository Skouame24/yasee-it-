"use client";

import React from "react";

export default function WhatYouWillLearn() {
  const competencies = [
    {
      num: "01",
      title: "Cadrer le SMSI",
      desc: "Définir le contexte, le périmètre, les parties intéressées et les enjeux de sécurité de l’information.",
    },
    {
      num: "02",
      title: "Piloter l’analyse des risques",
      desc: "Identifier, analyser, évaluer et traiter les risques liés à la sécurité de l’information.",
    },
    {
      num: "03",
      title: "Construire le système de management",
      desc: "Définir les processus, responsabilités, objectifs et mécanismes nécessaires au fonctionnement du SMSI.",
    },
    {
      num: "04",
      title: "Construire la Déclaration d’Applicabilité",
      desc: "Comprendre la logique de sélection, de justification et de suivi des contrôles applicables.",
    },
    {
      num: "05",
      title: "Préparer l’organisation à l’audit",
      desc: "Structurer les preuves, identifier les écarts et préparer les équipes aux différentes étapes de l’audit.",
    },
    {
      num: "06",
      title: "Piloter l’amélioration continue",
      desc: "Mettre en place le suivi des performances, les actions correctives et l’amélioration du SMSI.",
    },
  ];

  return (
    <section id="competences" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Compétences Clés
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            À l’issue de la formation, vous serez capable de :
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Grille des 6 compétences clés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {competencies.map((comp) => (
            <div
              key={comp.num}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-blue-500/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {comp.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {comp.num} — {comp.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
