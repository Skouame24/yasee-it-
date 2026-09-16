"use client";

import React from "react";
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon, AwardIcon } from "./Icons";

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const inclusions = [
    { title: "5 jours de formation", desc: "Session intensive animée en direct par des experts certifiés" },
    { title: "Formation officielle", desc: "Curriculum officiel PECB Certified ISO/IEC 27001 Lead Implementer" },
    { title: "Examen officiel inclus", desc: "Passage de l'examen officiel PECB Certified ISO/IEC 27001 Lead Implementer inclus avec droit de repassage" },
    { title: "Supports de formation", desc: "Documentation officielle PECB complète et supports de cours actualisés" },
    { title: "Études de cas", desc: "Scénarios réels d'entreprises et contextes organisationnels complexes" },
    { title: "Exercices pratiques", desc: "Mise en situation directe sur l'appréciation des risques et le SMSI" },
    { title: "Modèles opérationnels", desc: "Jeux de livrables réutilisables : PSSI, DdA / SoA, Registre des risques" },
    { title: "Préparation à l’examen", desc: "Conseils méthodologiques, révisions ciblées et examens blancs" },
    { title: "Attestation de formation", desc: "Délivrée selon les conditions applicables attestant de vos compétences" },
  ];

  return (
    <section id="tarif" className="py-24 bg-[#F8F9FD] text-[#080A16] border-b border-[#E2E4F0] relative overflow-hidden">
      {/* Ambiance de fond subtile */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1900CE]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative">
        
        {/* En-tête Statutaire */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEECFC] border border-[#1900CE]/20 text-xs font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            Investissement &amp; Certification
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.1]">
            Investissez dans une compétence que vous pourrez utiliser immédiatement.
          </h2>

          <p className="text-base sm:text-lg text-[#525875] leading-relaxed font-normal">
            Un investissement stratégique et transparent, calibré pour vous doter d'une maîtrise opérationnelle reconnue à l'international.
          </p>
        </div>

        {/* Grand Module d'Investissement Institutionnel */}
        <div className="rounded-3xl border border-[#E2E4F0] bg-white shadow-2xl shadow-black/[0.04] overflow-hidden relative">
          {/* Top Brand Line */}
          <div className="h-1.5 bg-gradient-to-r from-[#1900CE] via-[#01CE35] to-[#1900CE]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Colonne Gauche : Le Pass & L'Ancrage Tarifaire (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#080A16] text-white flex flex-col justify-between relative">
              <div className="space-y-8">
                
                {/* Badges d'accréditation */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1900CE] text-white font-mono text-xs font-black tracking-widest uppercase">
                    PASS CERTIFICATION
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold">
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-[#01CE35]" />
                    Session Décembre 2026
                  </span>
                </div>

                {/* Bloc Prix & Économie */}
                <div className="space-y-3 pt-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-slate-300 font-mono text-xs font-bold line-through tracking-wider">
                    Tarif standard : 1 150 000 FCFA
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white">
                      800 000
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-slate-300">
                      FCFA TTC
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#01CE35] font-semibold flex items-center gap-2">
                    <span>✓ Économie directe de 350 000 FCFA sur cette session</span>
                  </p>
                </div>

                {/* Garanties clés */}
                <div className="space-y-3 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#01CE35]" />
                    <span>Examen officiel de certification PECB inclus</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#01CE35]" />
                    <span>Attestation de formation délivrée</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#01CE35]" />
                    <span>Éligible prise en charge entreprise &amp; proforma sous 24h</span>
                  </div>
                </div>

              </div>

              {/* Bouton d'action & sous-texte */}
              <div className="space-y-4 pt-10">
                <button
                  onClick={onOpenModal}
                  className="w-full py-4 px-8 rounded-xl bg-[#1900CE] hover:bg-[#1400A6] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-[#1900CE]/40 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>RÉSERVER MA PLACE</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <p className="text-[11px] sm:text-xs text-center text-slate-400 font-medium">
                  Paiement individuel ou prise en charge par votre entreprise.
                </p>
              </div>

            </div>

            {/* Colonne Droite : Le Référentiel des Inclusions (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
              <div>
                
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E4F0]">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1900CE]">
                      Détail du package
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#080A16]">
                      Votre inscription comprend :
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-xs font-mono font-bold text-[#525875]">
                    9 garanties complètes
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F8F9FD] transition-colors">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-[#E6FAEB] border border-[#01CE35]/30 flex items-center justify-center text-[#01CE35] shrink-0 font-bold text-xs">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-[#080A16] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#525875] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Note de réassurance */}
              <div className="mt-10 p-4 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0] flex items-center justify-between text-xs text-[#525875]">
                <span className="font-semibold text-[#080A16]">
                  Format : 100 % en ligne • 14 au 18 décembre 2026
                </span>
                <span className="text-[#1900CE] font-bold">
                  Formation Certifiante Officielle
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
