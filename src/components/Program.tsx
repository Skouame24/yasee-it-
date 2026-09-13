"use client";

import React from "react";
import { CheckCircleIcon } from "./Icons";

export default function Program() {
  const days = [
    {
      day: "JOUR 1",
      title: "PRINCIPES ET CADRAGE DU SMSI",
      subtitle: "Comprendre la logique du système de management",
      items: [
        "Introduction à ISO/IEC 27001",
        "Principes du SMSI",
        "Contexte de l’organisation",
        "Parties intéressées",
        "Périmètre du SMSI",
        "Leadership et engagement de la Direction",
        "Politique de sécurité de l’information",
        "Rôles et responsabilités",
      ],
      objective: "Comprendre comment cadrer une démarche ISO 27001 et obtenir l’engagement nécessaire au niveau management.",
    },
    {
      day: "JOUR 2",
      title: "APPRÉCIATION ET TRAITEMENT DES RISQUES",
      subtitle: "Passer d’une logique de contrôles à une logique de risques",
      items: [
        "Identification des actifs et enjeux",
        "Identification des menaces et vulnérabilités",
        "Méthodes d’appréciation des risques",
        "Critères d’acceptation",
        "Évaluation des risques",
        "Traitement des risques",
        "Choix des mesures",
        "Plan de traitement",
      ],
      objective: "Savoir construire une démarche cohérente d’appréciation et de traitement des risques.",
    },
    {
      day: "JOUR 3",
      title: "MISE EN ŒUVRE DU SMSI",
      subtitle: "Transformer les exigences en dispositifs opérationnels",
      items: [
        "Objectifs de sécurité",
        "Processus et responsabilités",
        "Ressources",
        "Compétences et sensibilisation",
        "Documentation et maîtrise de l’information documentée",
        "Gestion opérationnelle",
        "Mesure et surveillance",
        "Déclaration d’Applicabilité",
        "Contrôles de référence de l’Annexe A",
      ],
      objective: "Comprendre comment transformer les exigences ISO 27001 en processus, mesures et preuves.",
    },
    {
      day: "JOUR 4",
      title: "PERFORMANCE, AUDIT ET AMÉLIORATION",
      subtitle: "Préparer le SMSI à l’évaluation",
      items: [
        "Surveillance et mesure",
        "Indicateurs",
        "Audit interne",
        "Gestion des non-conformités",
        "Actions correctives",
        "Amélioration continue",
        "Revue de direction",
        "Préparation à l’audit de certification",
      ],
      objective: "Savoir évaluer le fonctionnement du SMSI et identifier les écarts avant l’audit externe.",
    },
    {
      day: "JOUR 5",
      title: "CONSOLIDATION ET EXAMEN",
      subtitle: "Mettre en perspective l’ensemble de la démarche",
      items: [
        "Étude de cas",
        "Exercices de synthèse",
        "Révision des concepts clés",
        "Préparation à l’examen",
        "Conseils méthodologiques",
        "Examen officiel PECB",
      ],
      objective: "Consolider les acquis et se préparer à l’examen officiel de certification.",
    },
  ];

  return (
    <section id="programme" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Syllabus Officiel
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            5 jours pour maîtriser la démarche de mise en œuvre d’un SMSI
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Liste des 5 jours */}
        <div className="space-y-6 sm:space-y-8">
          {days.map((day, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all hover:border-blue-500/30"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                
                {/* Colonne gauche : Jour & Titre */}
                <div className="lg:w-1/3 space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    {day.day}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {day.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 italic">
                    {day.subtitle}
                  </p>
                </div>

                {/* Colonne droite : Puces & Objectif */}
                <div className="lg:w-2/3 space-y-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-sm text-slate-700">
                    {day.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Objectif du jour */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                        Objectif
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">
                        {day.objective}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
