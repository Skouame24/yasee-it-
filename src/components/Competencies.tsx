"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "./Icons";

const competencies = [
  {
    step: "01",
    action: "COMPRENDRE",
    title: "Fondamentaux & Exigences Normatives",
    description: "Les fondamentaux et exigences d'un SMSI ISO/IEC 27001.",
    details: "Maîtriser les clauses 4 à 10, le vocabulaire normalisé, l'articulation avec la norme ISO/IEC 27002 et les cadres réglementaires ouest-africains et internationaux.",
    deliverable: "Périmètre (Scope) & Cartographie des parties prenantes",
    color: "from-[#1900CE] to-[#1200BE]",
    badgeBg: "bg-[#EEECFC] text-[#1900CE] border-[#1900CE]/20",
  },
  {
    step: "02",
    action: "CONSTRUIRE",
    title: "Plan d'Implémentation Réaliste",
    description: "Un plan d'implémentation réaliste, avec gouvernance et parties prenantes.",
    details: "Structurer la feuille de route projet, engager la Direction Générale (Leadership), définir les rôles, les ressources financières et humaines, et la politique de sécurité.",
    deliverable: "Charte de projet SMSI & Politique Générale PSSI",
    color: "from-[#01CE35] to-[#00B32E]",
    badgeBg: "bg-[#E6FAEB] text-[#01CE35] border-[#01CE35]/30",
  },
  {
    step: "03",
    action: "ÉVALUER",
    title: "Appréciation Structurée des Risques",
    description: "Les risques de sécurité de l'information selon une méthode structurée.",
    details: "Identifier les actifs sensibles, modéliser les menaces et vulnérabilités selon une méthodologie reconnue (ISO 27005 / EBIOS RM) pour quantifier les impacts réels.",
    deliverable: "Matrice d'évaluation des risques & Critères d'acceptation",
    color: "from-[#1900CE] to-[#1200BE]",
    badgeBg: "bg-[#EEECFC] text-[#1900CE] border-[#1900CE]/20",
  },
  {
    step: "04",
    action: "TRAITER",
    title: "Déclaration d'Applicabilité (DdA)",
    description: "Les risques via une Déclaration d'Applicabilité et des mesures concrètes.",
    details: "Concevoir le plan de traitement des risques (PTR), sélectionner et justifier les mesures de l'Annexe A (Organisationnelles, Personnes, Physiques, Technologiques).",
    deliverable: "Déclaration d'Applicabilité (SoA) & Fiches de mesures",
    color: "from-[#01CE35] to-[#00B32E]",
    badgeBg: "bg-[#E6FAEB] text-[#01CE35] border-[#01CE35]/30",
  },
  {
    step: "05",
    action: "AUDITER",
    title: "Préparation à l'Audit & Certification",
    description: "Et se préparer à l'audit interne et à la certification.",
    details: "Organiser le programme d'audit interne, rassembler les preuves objectives, éviter les pièges classiques de non-conformité et réussir l'audit de certification par un tiers.",
    deliverable: "Guide de préparation d'audit & Grille de conformité",
    color: "from-[#1900CE] to-[#1200BE]",
    badgeBg: "bg-[#EEECFC] text-[#1900CE] border-[#1900CE]/20",
  },
  {
    step: "06",
    action: "AMÉLIORER",
    title: "Surveillance & Amélioration Continue",
    description: "En pilotant la surveillance, la mesure et l'amélioration continue du système.",
    details: "Définir les métriques et KPIs sécurité, conduire des revues de direction efficaces, gérer les incidents de sécurité et piloter les actions correctives pérennes.",
    deliverable: "Tableau de bord SMSI & Procédure d'amélioration continue",
    color: "from-[#01CE35] to-[#00B32E]",
    badgeBg: "bg-[#E6FAEB] text-[#01CE35] border-[#01CE35]/30",
  },
];

export default function Competencies() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section id="competences" className="py-20 bg-[#F4F5FA] border-b border-[#E3E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E3E4F0] text-xs font-bold uppercase tracking-wider text-[#1900CE]">
            <span>Programme Pédagogique Opérationnel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0E1E] tracking-tight">
            Ce que vous allez maîtriser
          </h2>
          <p className="text-base sm:text-lg text-[#5B6178]">
            6 blocs de compétences structurés en boucle d'amélioration continue pour piloter 
            un projet SMSI de bout en bout avec assurance.
          </p>
        </div>

        {/* 6 Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp) => {
            const isSelected = activeStep === comp.step;
            return (
              <div
                key={comp.step}
                onClick={() => setActiveStep(comp.step)}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#1900CE] shadow-xl shadow-[#1900CE]/10 -translate-y-1"
                    : "bg-white/90 border-[#E3E4F0] hover:border-[#1900CE]/40 hover:bg-white"
                }`}
              >
                <div>
                  {/* Top Badge with Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-[#1900CE]">
                      {comp.step}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${comp.badgeBg}`}>
                      {comp.action}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-[#0B0E1E] mb-2 leading-snug">
                    {comp.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#1900CE] mb-3">
                    {comp.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5B6178] leading-relaxed mb-6">
                    {comp.details}
                  </p>
                </div>

                {/* Concrete Deliverable */}
                <div className="pt-4 border-t border-[#E3E4F0] bg-[#F4F5FA]/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="block text-[11px] font-mono text-[#5B6178] uppercase font-bold mb-1">
                    Livrable concret produit :
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B0E1E]">
                    <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0" />
                    <span className="truncate">{comp.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continuous Loop Visual Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E3E4F0] text-xs sm:text-sm font-medium text-[#0B0E1E]">
            <span className="text-[#01CE35] font-bold">✔ Cycle PDCA complet</span>
            <span className="text-[#E3E4F0]">|</span>
            <span>Plan (01-02) ➔ Do (03-04) ➔ Check (05) ➔ Act (06)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
