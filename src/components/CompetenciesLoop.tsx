"use client";

import React, { useState, useRef } from "react";
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
  const [currentStage, setCurrentStage] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stepNumberRef = useRef<HTMLSpanElement>(null);

  const goToStage = (stageIndex: number) => {
    if (!outerRef.current) return;
    const total = stages.length;
    const rect = outerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = scrollTop + rect.top;
    const scrollDistance = total * window.innerHeight;
    const targetY = sectionTop + (stageIndex / (total - 1)) * scrollDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

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
          setCurrentStage(currentIdx);
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
        className="h-screen w-full flex flex-col bg-white text-[#080A16] overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        {/* Top label bar */}
        <div className="relative flex items-center justify-between px-8 pt-8 pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6FAEB] border border-[#01CE35]/30 text-[10px] font-mono font-bold tracking-widest text-[#01CE35] uppercase">
            CHAPITRE 03 — CYCLE D'IMPLÉMENTATION SMSI
          </div>
          <div className="flex items-center gap-3">
            {/* Clickable stage selector pills */}
            <div className="hidden lg:flex items-center gap-1.5 bg-[#F8F9FD] p-1 rounded-full border border-[#E2E4F0]">
              {stages.map((st, sIdx) => (
                <button
                  key={st.step}
                  onClick={() => goToStage(sIdx)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    currentStage === sIdx
                      ? "bg-[#1900CE] text-white shadow-sm font-black"
                      : "text-[#525875] hover:text-[#080A16] hover:bg-white"
                  }`}
                >
                  {st.step} {st.verb}
                </button>
              ))}
            </div>
            <span
              ref={stepNumberRef}
              className="font-mono text-sm font-bold text-[#1900CE]"
            >
              {String(currentStage + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Large static heading */}
        <div className="relative px-8 pt-6 pb-0">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]">
            Les 6 étapes d'un SMSI.<br />
            <span className="text-[#1900CE]">Scrollez pour les vivre.</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mx-8 mt-6 h-0.5 bg-[#E2E4F0] rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-[#1900CE] rounded-full transition-none"
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
                <span className="font-mono text-[11px] font-bold text-[#1900CE] bg-[#EEECFC] border border-[#1900CE]/25 px-3 py-1 rounded-full">
                  ÉTAPE {st.step} — {st.verb}
                </span>
                <span className="font-mono text-[11px] text-[#525875]">
                  {st.clause}
                </span>
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Big title + description */}
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#080A16] leading-[1.1] tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#525875] leading-relaxed font-normal max-w-lg">
                    {st.summary}
                  </p>
                </div>

                {/* Right: KPI + Deliverable */}
                <div className="space-y-4">
                  {/* KPI box */}
                  <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-[#F8F9FD] shadow-sm">
                    <span className="block text-[10px] font-mono font-bold uppercase text-[#525875] mb-2">
                      RÉSULTAT ATTENDU
                    </span>
                    <div className="text-2xl font-extrabold text-[#01CE35]">
                      {st.kpi}
                    </div>
                  </div>

                  {/* Deliverable box */}
                  <div className="p-6 rounded-2xl border border-[#1900CE]/25 bg-[#EEECFC]/60 shadow-sm">
                    <span className="block text-[10px] font-mono font-bold uppercase text-[#1900CE]/80 mb-2">
                      LIVRABLE CONSTRUIT EN ATELIER
                    </span>
                    <div className="text-sm font-bold text-[#080A16] flex items-start gap-2">
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
                        ? "w-8 bg-[#1900CE]"
                        : "w-3 bg-[#E2E4F0]"
                    }`}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Animated Slide Defilement Indicator with Bouncing Arrow and Controls */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 max-w-[90vw]">
          {/* Prev button */}
          <button
            onClick={() => goToStage(Math.max(0, currentStage - 1))}
            disabled={currentStage === 0}
            aria-label="Étape précédente"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E4F0] flex items-center justify-center text-[#1900CE] disabled:opacity-30 hover:bg-[#EEECFC] transition-all cursor-pointer shadow-md disabled:cursor-not-allowed shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Animated bouncing arrow pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#1900CE]/25 shadow-[0_4px_25px_rgba(25,0,206,0.12)]">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01CE35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#01CE35]"></span>
            </span>
            <span className="text-xs font-bold text-[#080A16] tracking-tight whitespace-nowrap">
              {currentStage < stages.length - 1
                ? `Faites défiler pour l'Étape 0${currentStage + 2} (${stages[currentStage + 1].verb})`
                : "Cycle complet des 6 étapes — Continuez"}
            </span>
            <span className="w-6 h-6 rounded-full bg-[#1900CE] text-white flex items-center justify-center animate-bounce shadow-sm shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={() => goToStage(Math.min(stages.length - 1, currentStage + 1))}
            disabled={currentStage === stages.length - 1}
            aria-label="Étape suivante"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E4F0] flex items-center justify-center text-[#1900CE] disabled:opacity-30 hover:bg-[#EEECFC] transition-all cursor-pointer shadow-md disabled:cursor-not-allowed shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
