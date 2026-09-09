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

const trainers = [
  {
    initials: "YAE",
    firstName: "Yapo Aboua",
    lastName: "Eric",
    role: "Expert Principal GRC & Cybersécurité",
    tagline: "50+ projets pilotés. 5 crises ransomware résolues. Des références qui se passent d'introduction.",
    pecbBadge: "PECB Certified Trainer",
    clients: ["Orange CI", "Min. Économie Djibouti", "Comptes stratégiques Dubaï"],
    certifications: [
      "PECB Certified Trainer",
      "CISM — ISACA",
      "PMP — PMI",
      "PECB Sr. Lead Cybersecurity Mgr",
      "ISO/IEC 27001 LI & LA",
      "ISO/IEC 27005 LRM",
      "ISO 22301 LI",
      "EBIOS RM",
    ],
    highlights: [
      { icon: "→", text: "50+ projets cybersécurité pilotés en Afrique de l'Ouest" },
      { icon: "→", text: "5 crises ransomware majeures gérées avec reprise complète d'activité" },
      { icon: "→", text: "Formateur officiel PECB — comptes stratégiques Orange CI, Ministère de l'Économie de Djibouti" },
    ],
  },
  {
    initials: "SWO",
    firstName: "Sylvain W.",
    lastName: "Ouedraogo",
    role: "Spécialiste GRC & Sécurité Opérationnelle",
    tagline: "RSSI virtuel pour 2 institutions financières. 56 pare-feux. 3 000 terminaux sécurisés.",
    pecbBadge: "PECB Certified Trainer",
    clients: ["Secteur bancaire", "Assurance", "Santé critique"],
    certifications: [
      "PECB Certified Trainer",
      "ISO/IEC 27001 LI",
      "ISO/IEC 27005 RM",
      "CIS Controls",
      "(ISC)² CC",
      "GDPR / APDP",
    ],
    highlights: [
      { icon: "→", text: "RSSI virtuel — déploiement SMSI ISO 27001 dans 2 institutions financières" },
      { icon: "→", text: "56 pare-feux industriels déployés sur des réseaux bancaires & santé critiques" },
      { icon: "→", text: "3 000 terminaux sécurisés — environnements à haute disponibilité" },
    ],
  },
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
        Array.from(trainersGridRef.current.children),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
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
      className="relative bg-[#080A16] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Background — palette officielle uniquement */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1900CE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#01CE35]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 space-y-20">

        {/* ── HEADER ── */}
        <div ref={headerRef} className="max-w-3xl space-y-4">
          <div
            style={{ opacity: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold tracking-widest text-[#01CE35] uppercase"
          >
            CHAPITRE 06 — L'AUTORITÉ DES PRATICIENS
          </div>

          <h2
            style={{ opacity: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            Pas des théoriciens.<br />
            <span className="text-[#1900CE]">Des praticiens en activité.</span>
          </h2>

          <p
            style={{ opacity: 0 }}
            className="text-base text-white/50 leading-relaxed max-w-xl"
          >
            Vos deux formateurs gèrent quotidiennement des incidents de sécurité, des audits de certification et des déploiements d'infrastructure critiques.
          </p>
        </div>

        {/* ── KPI STRIP ── */}
        <div ref={kpisGridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k, idx) => (
            <div
              key={idx}
              style={{ opacity: 0 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1900CE]/40 transition-colors space-y-2"
            >
              <span
                ref={(el) => { kpiCounterRefs.current[idx] = el; }}
                className="block text-4xl sm:text-5xl font-black font-mono text-white leading-none tracking-tight"
              >
                0{k.suffix}
              </span>
              <div className="text-sm font-bold text-white/70">{k.label}</div>
              <div className="text-[11px] text-white/35 font-mono">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* ── TRAINER PROFILES ── */}
        <div ref={trainersGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trainers.map((tr, i) => (
            <div
              key={i}
              style={{ opacity: 0 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-400 overflow-hidden"
            >
              {/* Top accent — couleur primaire unique */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1900CE] via-[#1900CE]/50 to-transparent" />

              <div className="p-7 sm:p-8 space-y-6">

                {/* Identity */}
                <div className="flex items-start gap-5">
                  {/* Monogram */}
                  <div className="w-16 h-16 rounded-2xl bg-[#1900CE]/15 border border-[#1900CE]/30 flex items-center justify-center font-mono text-sm font-extrabold text-[#1900CE] shrink-0 tracking-tight">
                    {tr.initials}
                  </div>

                  <div className="space-y-1 pt-0.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">
                      {tr.firstName} <span className="text-[#1900CE]">{tr.lastName}</span>
                    </h3>
                    <p className="text-[12px] font-semibold text-[#525875]">{tr.role}</p>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#01CE35]" />
                      <span className="text-[10px] font-mono font-bold text-[#01CE35]">
                        {tr.pecbBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-[15px] font-semibold text-white/65 leading-snug border-l-2 border-[#1900CE]/50 pl-4">
                  {tr.tagline}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {tr.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-3 text-sm text-white/55 leading-snug">
                      <span className="text-[#01CE35] font-bold shrink-0 mt-0.5">{h.icon}</span>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold uppercase text-white/20 tracking-widest">
                    Accréditations & Titres
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tr.certifications.map((c, ci) => (
                      <span
                        key={ci}
                        className="px-2.5 py-1 rounded-lg bg-[#0F1226] border border-white/10 text-[10px] font-mono font-bold text-white/45"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clients */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/8">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    Références :
                  </span>
                  {tr.clients.map((c, ci) => (
                    <span
                      key={ci}
                      className="text-[11px] font-semibold text-white/35 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/8"
                    >
                      {c}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer */}
              <div className="border-t border-white/8 px-7 py-3.5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/20">
                  Session officielle — Décembre 2026
                </span>
                <span className="text-[10px] font-mono font-bold text-[#01CE35] bg-[#01CE35]/10 border border-[#01CE35]/20 px-2.5 py-1 rounded-full">
                  PECB Accredited
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
