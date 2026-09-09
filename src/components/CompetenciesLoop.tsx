"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const stages = [
  {
    step: "01",
    verb: "COMPRENDRE",
    clause: "Clauses 4 & 5",
    title: "Cadrer le Périmètre & Gouvernance",
    summary: "Définition du périmètre (Scope), cartographie des parties prenantes et mandat officiel de la Direction.",
    deliverable: "Document de Périmètre (Scope) & Cartographie",
    kpi: "Zéro flou sur le périmètre",
    color: "#1900CE",
  },
  {
    step: "02",
    verb: "CONSTRUIRE",
    clause: "Clauses 5, 6 & 7",
    title: "Feuille de Route & PSSI",
    summary: "Gouvernance de projet, comité de sécurité, rédaction de la PSSI et allocation des ressources budgétaires.",
    deliverable: "Politique de Sécurité (PSSI) & Rôles RACI",
    kpi: "PSSI vivante & approuvée DG",
    color: "#1900CE",
  },
  {
    step: "03",
    verb: "ÉVALUER",
    clause: "Clause 6.1.2 & ISO 27005",
    title: "Appréciation des Risques Réels",
    summary: "Modélisation des menaces, méthode outillée ISO 27005 / EBIOS RM et quantification du risque résiduel.",
    deliverable: "Matrice d'Évaluation des Risques Cyber",
    kpi: "Méthode outillée EBIOS RM",
    color: "#1900CE",
  },
  {
    step: "04",
    verb: "TRAITER",
    clause: "Clause 6.1.3 & Annexe A",
    title: "Déclaration d'Applicabilité (DdA / SoA)",
    summary: "Sélection rigoureuse des 93 mesures de sécurité de l'Annexe A 2022 et plan de traitement des risques (PTR).",
    deliverable: "Déclaration d'Applicabilité (SoA) & PTR",
    kpi: "93 Contrôles justifiés",
    color: "#1900CE",
  },
  {
    step: "05",
    verb: "AUDITER",
    clause: "Clause 9.2 & ISO 17024",
    title: "Audit Interne & Préparation Examen",
    summary: "Conduite d'audit interne, simulation d'audit de certification et défense des preuves face aux auditeurs.",
    deliverable: "Grille d'Audit & Fiches de Constats",
    kpi: "Simulation d'audit réel",
    color: "#1900CE",
  },
  {
    step: "06",
    verb: "AMÉLIORER",
    clause: "Clauses 9.1 & 10",
    title: "Surveillance & KPIs Pérennes",
    summary: "Tableau de bord de pilotage du SMSI, traitement des non-conformités et revue de direction (Clause 9.3).",
    deliverable: "Tableau de Bord KPIs & Procédure d'Écarts",
    kpi: "SMSI pérenne et évolutif",
    color: "#01CE35",
  },
];

export default function CompetenciesLoop() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stepNumberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!outerRef.current || !stickyRef.current || !slidesRef.current) return;

    const slides = Array.from(slidesRef.current.children) as HTMLElement[];
    const total = slides.length;

    // Set all slides invisible initially except first
    slides.forEach((slide, i) => {
      gsap.set(slide, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 60 });
    });

    // Create pinned scroll: section stays fixed while we scroll through all stages
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top top",
        end: `+=${total * 100}%`,
        pin: stickyRef.current,
        scrub: 0.8,
        onUpdate: (self) => {
          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`;
          }
          // Update step number
          const currentIdx = Math.min(
            Math.floor(self.progress * total),
            total - 1
          );
          if (stepNumberRef.current) {
            stepNumberRef.current.textContent = `${String(currentIdx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
          }
        },
      },
    });

    // For each stage transition: out → in
    for (let i = 0; i < total - 1; i++) {
      const current = slides[i];
      const next = slides[i + 1];

      // Exit current slide
      tl.to(current, {
        opacity: 0,
        y: -50,
        duration: 0.3,
        ease: "power2.in",
      }, i); // position in timeline

      // Enter next slide
      tl.fromTo(next,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        i + 0.2
      );
    }

    // Hold last slide
    tl.to({}, { duration: 0.5 }, total - 0.5);

  }, { scope: outerRef });

  return (
    /* Outer scroll container — height = total scroll distance */
    <div
      ref={outerRef}
      id="competences"
      style={{ height: `${(stages.length + 1) * 100}vh` }}
      className="relative"
    >
      {/* Sticky panel — stays in viewport while user scrolls */}
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col bg-[#080A16] overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        {/* Top label bar */}
        <div className="flex items-center justify-between px-8 pt-8 pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold tracking-widest text-[#01CE35] uppercase">
            CHAPITRE 03 — CYCLE D'IMPLÉMENTATION SMSI
          </div>
          <span
            ref={stepNumberRef}
            className="font-mono text-sm font-bold text-white/40"
          >
            01 / 06
          </span>
        </div>

        {/* Large static heading */}
        <div className="px-8 pt-6 pb-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
            Les 6 étapes d'un SMSI.<br />
            <span className="text-[#1900CE]">Scrollez pour les vivre.</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mx-8 mt-6 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-[#01CE35] rounded-full transition-none"
            style={{ width: "0%" }}
          />
        </div>

        {/* Slides container — absolutely positioned, all stacked */}
        <div
          ref={slidesRef}
          className="relative flex-1 px-8 pb-16 pt-10"
        >
          {stages.map((st, i) => (
            <div
              key={st.step}
              className="absolute inset-x-8 top-10 bottom-16"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {/* Step tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] font-bold text-[#01CE35] bg-[#01CE35]/10 border border-[#01CE35]/20 px-3 py-1 rounded-full">
                  ÉTAPE {st.step} — {st.verb}
                </span>
                <span className="font-mono text-[11px] text-white/30">
                  {st.clause}
                </span>
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Big title + description */}
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.1] tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal max-w-lg">
                    {st.summary}
                  </p>
                </div>

                {/* Right: KPI + Deliverable */}
                <div className="space-y-4">
                  {/* KPI box */}
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    <span className="block text-[10px] font-mono font-bold uppercase text-white/30 mb-2">
                      RÉSULTAT ATTENDU
                    </span>
                    <div className="text-2xl font-extrabold text-[#01CE35]">
                      {st.kpi}
                    </div>
                  </div>

                  {/* Deliverable box */}
                  <div className="p-6 rounded-2xl border border-[#1900CE]/40 bg-[#1900CE]/10">
                    <span className="block text-[10px] font-mono font-bold uppercase text-[#1900CE]/70 mb-2">
                      LIVRABLE CONSTRUIT EN ATELIER
                    </span>
                    <div className="text-sm font-bold text-white flex items-start gap-2">
                      <span className="text-[#01CE35] mt-0.5">→</span>
                      <span>{st.deliverable}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom: step dots indicator */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2">
                {stages.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      dotIdx === i
                        ? "w-8 bg-[#01CE35]"
                        : dotIdx < i
                        ? "w-3 bg-white/30"
                        : "w-3 bg-white/10"
                    }`}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-white/20 animate-pulse" />
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Continuez à scroller</span>
        </div>

      </div>
    </div>
  );
}
