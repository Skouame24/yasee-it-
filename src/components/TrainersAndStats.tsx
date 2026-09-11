"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const kpis = [
  { value: 50, suffix: "+", label: "Projets Cybersécurité", sub: "Pilotés en Afrique de l'Ouest" },
  { value: 5, suffix: "", label: "Crises Ransomware", sub: "Gérées avec reprise intégrale" },
  { value: 3000, suffix: "+", format: true, label: "Terminaux Sécurisés", sub: "Environnements bancaires & critiques" },
  { value: 56, suffix: "", label: "Pare-feux Déployés", sub: "Check Point & Fortinet" },
];



export default function TrainersAndStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const kpisGridRef = useRef<HTMLDivElement>(null);
  const kpiCounterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trainersGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    if (headerRef.current) {
      tl.fromTo(
        Array.from(headerRef.current.children),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }
      );
    }

    if (kpisGridRef.current) {
      tl.fromTo(
        Array.from(kpisGridRef.current.children),
        { y: 40, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.4)" },
        "-=0.3"
      );
    }

    if (trainersGridRef.current) {
      tl.fromTo(
        trainersGridRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.1"
      );
    }

    // Animated counters
    kpiCounterRefs.current.forEach((el, idx) => {
      if (!el) return;
      const k = kpis[idx];
      const obj = { val: 0 };
      gsap.to(obj, {
        val: k.value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          let v = Math.floor(obj.val).toString();
          if (k.format) v = Math.floor(obj.val).toLocaleString("fr-FR");
          el.textContent = v + k.suffix;
        },
      });
    });

  }, { scope: sectionRef });

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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEECFC] border border-[#1900CE]/20 text-[10px] font-mono font-bold tracking-widest text-[#1900CE] uppercase"
          >
            CHAPITRE 06 — PÔLE D'EXPERTISE &amp; PRATIQUE DU TERRAIN
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]"
          >
            Pas des théoriciens.<br />
            <span className="text-[#1900CE]">Des praticiens en activité.</span>
          </h2>

          <p
            className="text-base text-[#525875] leading-relaxed max-w-2xl font-normal"
          >
            Une équipe d'experts et praticiens de terrain cumulant plus de 15 ans d'expérience opérationnelle, gérant quotidiennement des incidents majeurs, des audits de certification et des déploiements d'infrastructures critiques.
          </p>
        </div>

        {/* ── KPI STRIP ── */}
        <div ref={kpisGridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E4F0] hover:border-[#1900CE]/40 transition-all space-y-2 shadow-sm"
            >
              <span
                ref={(el) => { kpiCounterRefs.current[idx] = el; }}
                className="block text-4xl sm:text-5xl font-black font-mono text-[#080A16] leading-none tracking-tight"
              >
                0{k.suffix}
              </span>
              <div className="text-sm font-bold text-[#080A16]/80">{k.label}</div>
              <div className="text-[11px] text-[#525875] font-mono">{k.sub}</div>
            </div>
          ))}
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6FAEB] border border-[#01CE35]/30 text-[#01CE35] font-mono text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                  Accrédités PECB Certified Trainer
                </span>
                <span className="text-xs font-mono font-bold text-[#525875]">
                  ● 15+ années d'expérience terrain cumulée
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#080A16] tracking-tight">
                Domaines d'Expertise &amp; Autorité Opérationnelle
              </h3>
              <p className="text-sm sm:text-base text-[#525875] max-w-3xl leading-relaxed">
                L'animation pédagogique est assurée par des praticiens et experts en activité (RSSI, directeurs cybersécurité et auditeurs) qui conçoivent, pilotent et défendent au quotidien des Systèmes de Management de la Sécurité de l'Information sur des infrastructures critiques en Afrique de l'Ouest et à l'international.
              </p>
            </div>

            <div className="shrink-0 flex lg:flex-col items-center lg:items-end gap-1.5 bg-[#F8F9FD] px-5 py-4 rounded-2xl border border-[#E2E4F0] shadow-sm">
              <span className="text-[10px] font-mono font-bold uppercase text-[#525875]">Accréditation Officielle</span>
              <span className="text-base font-extrabold text-[#1900CE]">PECB Certified Trainer</span>
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

          {/* Bilan Opérationnel de Terrain & Réalisations Vérifiables */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E4F0] space-y-4 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#E2E4F0]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1900CE]">
                Bilan d'Intervention &amp; Faits d'Armes Opérationnels
              </span>
              <span className="text-xs font-mono font-bold text-[#01CE35]">
                ✓ Expérience vécue sur le terrain
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                <p className="text-xs text-[#525875] leading-relaxed">
                  <strong className="text-[#080A16]">50+ projets cybersécurité</strong> et SMSI pilotés avec succès en Afrique de l'Ouest.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                <p className="text-xs text-[#525875] leading-relaxed">
                  <strong className="text-[#080A16]">5 crises ransomware majeures</strong> résolues avec reprise intégrale d'activité sans rançon.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                <p className="text-xs text-[#525875] leading-relaxed">
                  <strong className="text-[#080A16]">3 000+ terminaux &amp; serveurs</strong> sécurisés dans des environnements bancaires et critiques.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                <p className="text-xs text-[#525875] leading-relaxed">
                  <strong className="text-[#080A16]">56 pare-feux industriels</strong> Check Point &amp; Fortinet déployés en haute disponibilité.
                </p>
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
                    "ISO/IEC 27001 Lead Implementer",
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

          {/* Footer of Encart */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-[#525875]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
              <span>Session officielle dispensée 100% en direct avec interaction continue</span>
            </div>
            <span className="font-mono text-[11px] font-bold text-[#1900CE]">
              Examen officiel de certification PECB inclus
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
