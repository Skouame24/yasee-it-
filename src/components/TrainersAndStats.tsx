"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TrainersAndStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const kpisGridRef = useRef<HTMLDivElement>(null);
  const kpiCounterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trainersGridRef = useRef<HTMLDivElement>(null);

  

  return (
    <section
      ref={sectionRef}
      id="formateurs"
      className="relative bg-white text-[#080A16] border-b border-[#E2E4F0] overflow-hidden"
    >
      {/* Background — ambiance douce */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1900CE]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#01CE35]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 space-y-16">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase"
          >
            Pôle Formateurs &amp; Experts Terrain
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Des experts qui connaissent les réalités du terrain.
          </h2>

          <p
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-medium"
          >
            La formation est animée par des professionnels disposant d’une expérience opérationnelle en cybersécurité, gouvernance, gestion des risques et systèmes d’information.
          </p>
        </div>


        {/* ── UN SEUL ENCART UNIQUE : PÔLE D'EXPERTISE ET FORMATEURS (ANONYMAT TOTAL) ── */}
        <div
          ref={trainersGridRef}
          className="rounded-3xl border border-[#E2E4F0] bg-white p-7 sm:p-10 lg:p-12 shadow-xl shadow-black/[0.03] space-y-10 relative overflow-hidden"
        >
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1900CE] via-[#01CE35] to-[#1900CE]" />

          {/* Encart Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E2E4F0]">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#1900CE] text-white font-mono text-xs font-extrabold tracking-wider uppercase">
                  Pôle d'Expertise &amp; Formateurs Certifiés
                </span>
                <span className="text-xs font-mono font-bold text-[#525875]">
                  ● 20+ années d'expérience terrain cumulée
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#080A16] tracking-tight">
                Domaines d'Expertise &amp; Autorité Opérationnelle
              </h3>
              <p className="text-sm sm:text-base text-[#525875] max-w-3xl leading-relaxed">
                L'animation pédagogique est assurée par des experts de haut niveau en activité (RSSI, directeurs cybersécurité et auditeurs) qui conçoivent, pilotent et défendent au quotidien des Systèmes de Management de la Sécurité de l'Information sur des infrastructures critiques en Afrique de l'Ouest et à l'international.
              </p>
            </div>

            <div className="shrink-0 flex lg:flex-col items-center lg:items-end gap-1.5 bg-[#F8F9FD] px-5 py-4 rounded-2xl border border-[#E2E4F0] shadow-sm">
              <span className="text-[10px] font-mono font-bold uppercase text-[#525875]">Standard International</span>
              <span className="text-base font-extrabold text-[#1900CE]">Formation Certifiante</span>
              <span className="text-[11px] font-mono text-[#01CE35] font-bold">Conforme ISO/IEC 17024</span>
            </div>
          </div>

          {/* 4 Piliers d'Expertise Métier Unifiés */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pilier 1 */}
            <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-white hover:border-[#1900CE]/40 transition-all space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EEECFC] text-[#1900CE] flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h4 className="font-extrabold text-base text-[#080A16] leading-snug">
                Gouvernance SMSI &amp; Pilotage DG
              </h4>
              <p className="text-xs text-[#525875] leading-relaxed">
                Clauses 4 à 10 de l'ISO 27001, rédaction de PSSI, alignement stratégique avec la Direction Générale et préparation aux audits de certification.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["PSSI", "Clauses 4-10", "DdA / SoA", "Audit Tierce-Partie"].map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F8F9FD] border border-[#E2E4F0] text-[#080A16]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-white hover:border-[#1900CE]/40 transition-all space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h4 className="font-extrabold text-base text-[#080A16] leading-snug">
                Risques &amp; Continuité (PCA)
              </h4>
              <p className="text-xs text-[#525875] leading-relaxed">
                Appréciation outillée des risques via EBIOS RM et ISO 27005, plans de continuité d'activité (ISO 22301) et gestion de crises cyber réelles.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["EBIOS RM", "ISO 27005", "ISO 22301", "Plan Continuité"].map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F8F9FD] border border-[#E2E4F0] text-[#080A16]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-white hover:border-[#1900CE]/40 transition-all space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EEECFC] text-[#1900CE] flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h4 className="font-extrabold text-base text-[#080A16] leading-snug">
                Sécurité Opérationnelle &amp; Réseaux
              </h4>
              <p className="text-xs text-[#525875] leading-relaxed">
                Déploiement concret des 93 contrôles de l'Annexe A 2022, durcissement des systèmes (CIS Controls) et architecture pare-feux industriels.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["Annexe A 2022", "NGFW Pare-feux", "CIS Controls", "Cloisonnement"].map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F8F9FD] border border-[#E2E4F0] text-[#080A16]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pilier 4 */}
            <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-white hover:border-[#1900CE]/40 transition-all space-y-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h4 className="font-extrabold text-base text-[#080A16] leading-snug">
                Conformité &amp; Résilience
              </h4>
              <p className="text-xs text-[#525875] leading-relaxed">
                Alignement réglementaire Banques Centrales, conformité protection des données (RGPD / APDP) et préparation intensive à l'examen officiel PECB.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["Banques Centrales", "RGPD / APDP", "Audit Interne", "Examen PECB"].map((tag, ti) => (
                  <span key={ti} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F8F9FD] border border-[#E2E4F0] text-[#080A16]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>



          {/* Accréditations & Secteurs d'Intervention */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4F0] space-y-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#525875] tracking-widest block">
                  Accréditations &amp; Titres Détenus par le Pôle Formateurs :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "PECB Certified Trainer",
                    "CISM (ISACA)",
                    "PMP (PMI)",
                    "PECB Sr. Lead Cybersecurity Mgr",
                    "PECB Certified ISO/IEC 27001 Lead Implementer",
                    "ISO/IEC 27001 Lead Auditor",
                    "ISO/IEC 27005 Lead Risk Manager",
                    "ISO 22301 Lead Implementer",
                    "EBIOS RM Certified",
                    "CIS Controls Specialist",
                    "(ISC)² CC",
                    "Conformité RGPD / APDP",
                  ].map((cert, ci) => (
                    <span key={ci} className="px-2.5 py-1 rounded-lg bg-[#EEECFC] text-[#1900CE] border border-[#1900CE]/20 font-mono text-[11px] font-bold">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 space-y-2.5 md:border-l md:border-[#E2E4F0] md:pl-6">
                <span className="text-[10px] font-mono font-bold uppercase text-[#525875] tracking-widest block">
                  Secteurs d'Intervention &amp; Références :
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Secteur Bancaire & Établissements Financiers",
                    "Opérateurs de Télécommunications",
                    "Ministères & Institutions d'État",
                    "Compagnies d'Assurances",
                    "Infrastructures de Santé Critiques",
                    "Multinationales Industrielles",
                  ].map((sec, si) => (
                    <span key={si} className="px-3 py-1 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-xs font-semibold text-[#525875]">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Signature officielle du brief */}
          <div className="pt-6 border-t border-slate-200 text-center">
            <p className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
              Deux experts de référence. Une approche orientée terrain. Une même ambition : <span className="text-blue-700">vous rendre capable de mettre en œuvre.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
