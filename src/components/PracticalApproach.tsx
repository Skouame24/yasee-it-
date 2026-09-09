"use client";

import React from "react";
import { CheckCircleIcon, XMarkIcon } from "./Icons";

const practicalPoints = [
  {
    title: "Études de cas issues d'entreprises réelles",
    description: "Des scénarios contextualisés dans des organisations ouest-africaines (banques, assurances, santé, telcos) confrontées à des contraintes opérationnelles réelles.",
    icon: "🌍",
  },
  {
    title: "Construction active d'éléments de SMSI",
    description: "Vous ne lisez pas des diapositives passives : vous rédigez la Politique de Sécurité (PSSI), concevez la Déclaration d'Applicabilité (SoA) et cadrez le Plan de Traitement des Risques (PTR).",
    icon: "🛠️",
  },
  {
    title: "Échanges directs avec des praticiens en activité",
    description: "Pas de formateurs académiques déconnectés : vos instructeurs pilotent des SMSI, mènent des audits et négocient des budgets cyber au quotidien.",
    icon: "👥",
  },
  {
    title: "Retours d'expérience terrain (REX)",
    description: "Gestion d'incidents ransomware réels, déploiements d'infrastructures défensives à grande échelle et leçons apprises d'audits de certification passés.",
    icon: "🛡️",
  },
];

export default function PracticalApproach() {
  return (
    <section className="py-20 bg-[#F4F5FA] border-b border-[#E3E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E3E4F0] text-xs font-bold uppercase tracking-wider text-[#1900CE]">
            <span>La Différence Pédagogique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0E1E] tracking-tight">
            On ne vient pas apprendre la norme. <br />
            <span className="text-[#1900CE]">On apprend à l'utiliser.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B6178]">
            La plupart des formations ISO 27001 récitent les articles de la norme. 
            YASEE IT vous donne les clés pour faire fonctionner le système dans la vraie vie de votre entreprise.
          </p>
        </div>

        {/* 4 Practical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {practicalPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E4F0] shadow-sm hover:border-[#1900CE]/40 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4F5FA] border border-[#E3E4F0] flex items-center justify-center text-2xl shrink-0">
                {point.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0B0E1E]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#5B6178] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Battle Matrix */}
        <div className="rounded-3xl border-2 border-[#E3E4F0] bg-white overflow-hidden shadow-lg">
          <div className="p-6 bg-[#0B0E1E] text-white flex items-center justify-between">
            <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#01CE35]">
              ANALYSE COMPARATIVE
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Pourquoi cette cohorte est différente
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E3E4F0]">
            
            {/* Column 1: Classical Theoretical Training */}
            <div className="p-6 sm:p-8 space-y-4 bg-rose-50/20">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Formation théorique classique</span>
              </div>
              <ul className="space-y-3 text-sm text-[#5B6178]">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Lecture passive des exigences clause par clause</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Exemples génériques d'entreprises multinationales fictives</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Formateurs certifiés mais sans pratique opérationnelle récente</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Participants désemparés devant leur propre DdA le lendemain</span>
                </li>
              </ul>
            </div>

            {/* Column 2: YASEE IT Practical Approach */}
            <div className="p-6 sm:p-8 space-y-4 bg-[#EEECFC]/30">
              <div className="flex items-center gap-2 text-[#1900CE] font-bold text-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                <span>Méthode Pratique YASEE IT</span>
              </div>
              <ul className="space-y-3 text-sm text-[#0B0E1E] font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0 mt-0.5" />
                  <span>Cas pratiques tirés d'incidents réels et d'audits récents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0 mt-0.5" />
                  <span>Production de vrais livrables réutilisables (PSSI, SoA, PTR)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0 mt-0.5" />
                  <span>Formateurs en activité (50+ projets, 5 ransomwares résolus)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0 mt-0.5" />
                  <span>Capacité immédiate à initier et piloter le projet en interne</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
