"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const days = [
  {
    day: "J1",
    date: "Lundi 14 Décembre",
    title: "Introduction & Lancement du Projet SMSI",
    badge: "Clauses 4 & 5",
    morning: [
      "Comprendre la famille ISO/IEC 27000 et le rôle de la 27001.",
      "Analyse du contexte interne & externe de l'entreprise (Clause 4).",
      "Cartographie des exigences des régulateurs et parties prenantes.",
      "Définition précise du périmètre d'application (Scope) du SMSI.",
    ],
    workshop: "Cadrage du Périmètre & Mandat de Direction",
    workshopDesc: "Étude de cas d'une institution financière : arbitrage du périmètre et validation formelle de la Direction Générale.",
    deliverable: "Document officiel de Périmètre (Scope) & Cartographie",
  },
  {
    day: "J2",
    date: "Mardi 15 Décembre",
    title: "Leadership, Politique de Sécurité & Gestion des Risques",
    badge: "Clauses 5 & 6 — ISO 27005",
    morning: [
      "Engagement du leadership et gouvernance de la sécurité (Clause 5).",
      "Rédaction de la Politique de Sécurité de l'Information (PSSI).",
      "Méthode structurée d'appréciation des risques (Clause 6).",
      "Modélisation des cyberattaques et scénarios de menaces réelles.",
    ],
    workshop: "Évaluation des Risques — ISO 27005 / EBIOS RM",
    workshopDesc: "Application de la matrice de risques sur des systèmes critiques de paiement et bases de données clients.",
    deliverable: "PSSI synthétique & Matrice d'évaluation des risques résiduels",
  },
  {
    day: "J3",
    date: "Mercredi 16 Décembre",
    title: "Déploiement des 93 Mesures & Déclaration d'Applicabilité",
    badge: "Annexe A — 93 Contrôles",
    morning: [
      "Exploration outillée des 93 mesures de sécurité (ISO 27001:2022).",
      "Les 4 thèmes : Organisationnel, Personnes, Physique et Technologique.",
      "Gestion des informations documentées et traçabilité (Clause 7.5).",
      "Sensibilisation des collaborateurs et gestion des compétences.",
    ],
    workshop: "Construction de la Déclaration d'Applicabilité (DdA / SoA)",
    workshopDesc: "Sélection des 93 contrôles, formalisation des justifications d'exclusion et rédaction du Plan de Traitement (PTR).",
    deliverable: "Déclaration d'Applicabilité (SoA) complète & Plan de Traitement",
  },
  {
    day: "J4",
    date: "Jeudi 17 Décembre",
    title: "Surveillance, Audit Interne & Préparation Certification",
    badge: "Clauses 9 & 10",
    morning: [
      "KPIs de sécurité et surveillance des performances (Clause 9.1).",
      "Organisation et conduite formelle de l'audit interne (Clause 9.2).",
      "Animation de la Revue de Direction (Clause 9.3).",
      "Gestion des non-conformités et amélioration continue (Clause 10).",
    ],
    workshop: "Simulation Réelle d'Audit de Certification",
    workshopDesc: "Mise en situation de confrontation d'audit : défense des preuves face aux pièges et constats soulevés par les formateurs.",
    deliverable: "Grille d'audit interne, Fiches d'écarts & Rapport de revue",
  },
  {
    day: "J5",
    date: "Vendredi 18 Décembre",
    title: "Examen Officiel PECB Lead Implementer",
    badge: "Examen 3h — Livre Ouvert",
    isExamDay: true,
    morning: [
      "Matinée : Session de révision stratégique et conseils méthodologiques.",
      "Analyse des questions types et techniques de résolution de cas.",
      "Vérification des accès à la plateforme d'examen sécurisée PECB.",
      "Après-midi : Passage officiel de l'examen de certification (3 heures).",
    ],
    workshop: "Passage de l'Examen Officiel PECB en Ligne",
    workshopDesc: "Examen officiel surveillé à livre ouvert. Questions situationnelles basées sur des cas réels d'implémentation.",
    deliverable: "Titre PECB Lead Implementer — Accréditation ISO 17024",
  },
];

export default function ProgramTimeline() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dayLabelRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!outerRef.current || !stickyRef.current || !slidesRef.current) return;

    const slides = Array.from(slidesRef.current.children) as HTMLElement[];
    const total = slides.length;

    slides.forEach((slide, i) => {
      gsap.set(slide, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top top",
        end: `+=${total * 120}%`,
        pin: stickyRef.current,
        scrub: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
          const idx = Math.min(Math.floor(self.progress * total), total - 1);
          if (dayLabelRef.current) {
            dayLabelRef.current.textContent = `JOUR ${idx + 1} / 5`;
          }
        },
      },
    });

    for (let i = 0; i < total - 1; i++) {
      tl.to(slides[i], { opacity: 0, y: -70, duration: 0.3, ease: "power2.in" }, i);
      tl.fromTo(slides[i + 1],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        i + 0.25
      );
    }

    tl.to({}, { duration: 0.5 }, total - 0.5);

  }, { scope: outerRef });

  return (
    <div
      ref={outerRef}
      id="programme"
      style={{ height: `${(days.length + 1) * 120}vh` }}
      className="relative"
    >
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col bg-[#F8F9FD] overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-8 sm:px-16 pt-10 pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E4F0] text-[10px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            CHAPITRE 04 — SYLLABUS 5 JOURS
          </div>
          <span ref={dayLabelRef} className="font-mono text-sm font-bold text-[#1900CE]/40">
            JOUR 1 / 5
          </span>
        </div>

        {/* Static heading */}
        <div className="relative px-8 sm:px-16 pt-6 pb-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]">
            Programme intensif 5 jours.<br />
            <span className="text-[#1900CE]">Matin méthode, après-midi terrain.</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mx-8 sm:mx-16 mt-5 h-0.5 bg-[#E2E4F0] rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-[#1900CE] transition-none" style={{ width: "0%" }} />
        </div>

        {/* Slides */}
        <div ref={slidesRef} className="relative flex-1 px-8 sm:px-16 pt-8 pb-16">
          {days.map((d, i) => (
            <div
              key={d.day}
              className="absolute inset-x-8 sm:inset-x-16 top-8 bottom-16 flex flex-col justify-center"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left: day identity */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-[10px] font-bold text-[#525875] border border-[#E2E4F0] bg-white px-3 py-1 rounded-full">
                      {d.date}
                    </span>
                    {d.isExamDay && (
                      <span className="font-mono text-[10px] font-bold text-[#01CE35] border border-[#01CE35]/30 bg-[#01CE35]/10 px-3 py-1 rounded-full">
                        EXAMEN OFFICIEL
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-7xl font-black font-mono text-[#1900CE]/8 leading-none -mb-2">
                      {d.day}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080A16] leading-[1.15] tracking-tight">
                      {d.title}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E2E4F0] space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#1900CE]/60">
                      LIVRABLE CONÇU EN DIRECT
                    </span>
                    <div className="text-xs font-bold text-[#080A16] flex items-start gap-2">
                      <span className="text-[#01CE35]">→</span>
                      <span>{d.deliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Right: matin + atelier */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Morning */}
                  <div className="bg-white rounded-2xl p-5 border border-[#E2E4F0]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#1900CE]/20 border border-[#1900CE]/40 flex-shrink-0" />
                      <span className="text-[10px] font-mono font-bold uppercase text-[#1900CE]">
                        Matin 9h–13h — Cadres & Méthode
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {d.morning.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#525875]">
                          <span className="w-1 h-1 rounded-full bg-[#1900CE]/40 shrink-0 mt-1.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Workshop */}
                  <div className="bg-[#EEECFC]/50 rounded-2xl p-5 border border-[#1900CE]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#01CE35]/20 border border-[#01CE35]/40 flex-shrink-0" />
                      <span className="text-[10px] font-mono font-bold uppercase text-[#01CE35]">
                        Après-midi 14h–17h — {d.workshop}
                      </span>
                    </div>
                    <p className="text-xs text-[#080A16] leading-relaxed">
                      {d.workshopDesc}
                    </p>
                  </div>
                </div>

              </div>

              {/* Day dots */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2">
                {days.map((_, dotIdx) => (
                  <div key={dotIdx} className={`h-0.5 rounded-full transition-all duration-500 ${
                    dotIdx === i ? "w-8 bg-[#1900CE]" : "w-3 bg-[#E2E4F0]"
                  }`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-px h-6 bg-[#E2E4F0] animate-pulse" />
          <span className="text-[9px] font-mono text-[#525875]/40 uppercase tracking-widest">Scroll</span>
        </div>

      </div>
    </div>
  );
}
