"use client";

import React from "react";
import { CheckCircleIcon } from "./Icons";

export default function Deliverables() {
  const deliverables = [
    {
      title: "Périmètre du SMSI",
      desc: "Définition du contexte, des frontières et des parties intéressées.",
    },
    {
      title: "Analyse et traitement des risques",
      desc: "Méthodologie, critères, évaluation et plan de traitement.",
    },
    {
      title: "Politique de sécurité de l’information",
      desc: "Structure et principes de gouvernance du SMSI.",
    },
    {
      title: "Déclaration d’Applicabilité — SoA",
      desc: "Sélection, justification et suivi des contrôles applicables.",
    },
    {
      title: "Plan de traitement des risques",
      desc: "Priorisation, responsabilités, échéances et suivi.",
    },
    {
      title: "Audit interne",
      desc: "Préparation, grille d’audit, constats et traitement des écarts.",
    },
    {
      title: "Indicateurs et pilotage",
      desc: "Suivi des performances et préparation de la revue de direction.",
    },
  ];

  return (
    <section id="livrables" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Production Opérationnelle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Vous ne repartez pas seulement avec des connaissances.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Vous développez une méthode et travaillez sur des livrables directement transposables dans votre environnement professionnel.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Bloc central des livrables */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm">
          <p className="text-sm sm:text-base font-bold text-slate-900 mb-8 uppercase tracking-wide text-center">
            Pendant la formation, vous travaillerez notamment sur :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex gap-4 items-start hover:border-blue-400/40 transition-all"
              >
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phrase de conclusion */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              L’objectif : <span className="text-blue-700 font-bold">être capable de réutiliser la méthode dès votre retour en entreprise.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
