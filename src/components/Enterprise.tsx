"use client";

import React from "react";
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon } from "./Icons";

interface EnterpriseProps {
  onOpenModal: () => void;
}

export default function Enterprise({ onOpenModal }: EnterpriseProps) {
  const accompanyPoints = [
    {
      title: "Inscriptions groupées",
      desc: "Tarifs dégressifs et conditions préférentielles dès 3 collaborateurs inscrits.",
      icon: "👥",
    },
    {
      title: "Prise en charge entreprise",
      desc: "Montage complet du dossier de formation pour votre direction générale ou DRH.",
      icon: "🏛️",
    },
    {
      title: "Devis et facture proforma",
      desc: "Émission instantanée sous 24h avec toutes les mentions fiscales réglementaires.",
      icon: "📑",
    },
    {
      title: "Accompagnement administratif",
      desc: "Convention officielle de formation, attestations d'assiduité et rapports de présence.",
      icon: "📋",
    },
    {
      title: "Organisation de sessions dédiées",
      desc: "Possibilité de session privée intra-entreprise adaptée à votre calendrier métier.",
      icon: "🗓️",
    },
  ];

  return (
    <section id="entreprises" className="py-24 bg-white text-[#080A16] border-b border-[#E2E4F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* En-tête Statutaire */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEECFC] border border-[#1900CE]/20 text-xs font-mono font-bold tracking-widest text-[#1900CE] uppercase">
              Solutions Équipes &amp; Organisations
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.1]">
              Vous souhaitez former plusieurs collaborateurs ?
            </h2>

            <p className="text-base sm:text-lg text-[#525875] leading-relaxed max-w-2xl font-normal">
              Développez les compétences de vos équipes IT, cybersécurité, risque, audit ou conformité autour d’une méthodologie internationale de management de la sécurité de l’information.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8F9FD] border border-[#E2E4F0]">
            <div className="w-3 h-3 rounded-full bg-[#01CE35] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#080A16]">
              Traitement Commercial Prioritaire B2B
            </span>
          </div>
        </div>

        {/* Grand Cadre Corporatif */}
        <div className="rounded-3xl border border-[#E2E4F0] bg-[#F8F9FD] p-8 sm:p-10 lg:p-12 shadow-xl shadow-black/[0.02] space-y-12 relative overflow-hidden">
          
          <div className="border-b border-[#E2E4F0] pb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#080A16] tracking-tight">
              Nous pouvons vous accompagner pour :
            </h3>
            <p className="text-sm text-[#525875] mt-1 font-medium">
              Un dispositif sur mesure adapté aux contraintes budgétaires et administratives de votre organisation.
            </p>
          </div>

          {/* 5 Blocs d'accompagnement B2B à haute autorité */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accompanyPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2E4F0] shadow-sm hover:border-[#1900CE]/40 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-mono text-xs font-bold text-[#525875] group-hover:text-[#1900CE] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#080A16]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#525875] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Carte CTA Intégrée dans la Grille */}
            <div className="bg-[#080A16] text-white p-6 rounded-2xl border border-[#080A16] shadow-md flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#01CE35] uppercase tracking-wider">
                  Proposition Sur Mesure
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Besoin d'une facture proforma ou d'une session privée ?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nos conseillers vous répondent avec un devis adapté à la taille de votre équipe.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenModal}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#1900CE] hover:bg-[#1400A6] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>DEMANDER UN DEVIS ENTREPRISE</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
                <div className="text-[11px] text-center text-slate-400 mt-2 font-mono">
                  Réponse commerciale sous 24h ouvrées.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
