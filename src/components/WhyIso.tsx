"use client";

import React, { useState } from "react";
import { AlertTriangleIcon, ShieldCheckIcon, AwardIcon, ServerIcon } from "./Icons";

const argumentsList = [
  {
    id: "menaces",
    title: "Menaces en hausse",
    subtitle: "Ransomware & cyberattaques multiformes",
    description:
      "Les cyberattaques touchent désormais tous les secteurs sans exception : banques, santé, énergie, administration. Face à des menaces industrielles, une sécurité ad-hoc ne suffit plus.",
    metric: "Tous secteurs ciblés",
    icon: AlertTriangleIcon,
    accent: "text-rose-600 bg-rose-50 border-rose-200",
  },
  {
    id: "reglementation",
    title: "Exigences réglementaires",
    subtitle: "Des preuves tangibles, pas des promesses",
    description:
      "Banques centrales, régulateurs de données (APDP) et partenaires financiers exigent des garanties formelles et auditables de gouvernance de la sécurité, pas de simples intentions.",
    metric: "Conformité auditable",
    icon: ShieldCheckIcon,
    accent: "text-[#1900CE] bg-[#EEECFC] border-[#1900CE]/20",
  },
  {
    id: "confiance",
    title: "Confiance client & partenaire",
    subtitle: "Le prérequis incontournable des marchés",
    description:
      "Une certification ISO/IEC 27001 est devenue un critère éliminatoire dans les appels d'offres majeurs et les partenariats stratégiques régionaux et internationaux.",
    metric: "Clé d'appels d'offres",
    icon: AwardIcon,
    accent: "text-[#01CE35] bg-[#E6FAEB] border-[#01CE35]/30",
  },
  {
    id: "resilience",
    title: "Résilience opérationnelle",
    subtitle: "Pérennité de l'activité et reprise d'activité",
    description:
      "Un SMSI bien construit protège la continuité de l'activité globale de l'entreprise, maintient les processus vitaux et ne se cantonne pas à la seule technique informatique.",
    metric: "Continuité garantie",
    icon: ServerIcon,
    accent: "text-[#1900CE] bg-[#F4F5FA] border-[#E3E4F0]",
  },
];

export default function WhyIso() {
  const [selectedId, setSelectedId] = useState<string>("menaces");

  return (
    <section id="pourquoi" className="py-20 bg-[#F4F5FA] border-b border-[#E3E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E3E4F0] text-xs font-bold uppercase tracking-wider text-[#1900CE]">
            <span>L'Enjeu Stratégique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0E1E] tracking-tight">
            ISO/IEC 27001 n'est plus une option. <br />
            <span className="text-[#1900CE]">C'est un langage commun.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B6178]">
            Pourquoi les directions générales, institutions financières et organisations ouest-africaines 
            font-elles de l'ISO 27001 le pilier central de leur crédibilité ?
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {argumentsList.map((arg, index) => {
            const Icon = arg.icon;
            const isSelected = selectedId === arg.id;

            return (
              <div
                key={arg.id}
                onClick={() => setSelectedId(arg.id)}
                className={`rounded-2xl p-6 transition-all duration-200 cursor-pointer border ${
                  isSelected 
                    ? "bg-white border-[#1900CE] shadow-lg shadow-[#1900CE]/10 -translate-y-1" 
                    : "bg-white/80 border-[#E3E4F0] hover:border-[#1900CE]/50 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${arg.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#5B6178]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B0E1E] mb-1">
                  {arg.title}
                </h3>
                <p className="text-xs font-semibold text-[#1900CE] mb-3">
                  {arg.subtitle}
                </p>

                <p className="text-sm text-[#5B6178] leading-relaxed mb-4">
                  {arg.description}
                </p>

                <div className="pt-3 border-t border-[#E3E4F0] flex items-center justify-between text-xs">
                  <span className="text-[#5B6178]">Bénéfice :</span>
                  <span className="font-mono font-bold text-[#0B0E1E]">{arg.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactical quote box */}
        <div className="mt-12 rounded-2xl border border-[#E3E4F0] bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#01CE35]">
              VISION GOUVERNANCE YASEE IT
            </span>
            <p className="text-base sm:text-lg font-bold text-[#0B0E1E]">
              « La conformité sans le terrain n'est qu'une illusion documentaire. Le SMSI doit vivre avec les équipes. »
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#profils"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1900CE] hover:text-[#1400A6]"
            >
              <span>Découvrir les profils concernés</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
