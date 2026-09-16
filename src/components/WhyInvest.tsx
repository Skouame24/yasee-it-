"use client";

import React from "react";
import { ShieldCheckIcon, AwardIcon } from "./Icons";

export default function WhyInvest() {
  const orgBenefits = [
    {
      title: "Structurer la gouvernance SSI",
      desc: "Passer d’initiatives de sécurité dispersées à un système de management structuré.",
    },
    {
      title: "Améliorer la maîtrise des risques",
      desc: "Aligner les décisions de sécurité avec les risques réels de l’organisation.",
    },
    {
      title: "Préparer une certification",
      desc: "Comprendre les étapes, les exigences et les éléments de preuve nécessaires.",
    },
    {
      title: "Répondre aux exigences des parties prenantes",
      desc: "Renforcer la confiance des clients, partenaires, régulateurs et autres parties intéressées.",
    },
  ];

  const careerBenefits = [
    {
      title: "Renforcer votre crédibilité",
      desc: "Ajouter une compétence reconnue internationalement à votre profil.",
    },
    {
      title: "Évoluer vers la GRC",
      desc: "Développer votre capacité à piloter la sécurité au-delà de la dimension technique.",
    },
    {
      title: "Intervenir en tant que PECB Certified ISO/IEC 27001 Lead Implementer",
      desc: "Acquérir une méthodologie applicable aux missions de mise en œuvre et d’accompagnement.",
    },
    {
      title: "Dialoguer avec le management et les auditeurs",
      desc: "Apprendre à traduire les enjeux cyber en risques, décisions, objectifs et preuves.",
    },
  ];

  return (
    <section id="pourquoi-investir" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Impact &amp; Valeur Stratégique
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Une compétence utile à votre organisation. Une certification utile à votre carrière.
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Grille 2 colonnes : Organisation vs Carrière */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Colonne 1 : Pour votre organisation */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                  POUR VOTRE ORGANISATION
                </h3>
              </div>

              <div className="space-y-6">
                {orgBenefits.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne 2 : Pour votre carrière */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <AwardIcon className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                  POUR VOTRE CARRIÈRE
                </h3>
              </div>

              <div className="space-y-6">
                {careerBenefits.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
