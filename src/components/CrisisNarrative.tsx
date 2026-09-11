"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const threats = [
  {
    id: "menaces",
    number: "01",
    label: "RANSOMWARE & FRAUDE",
    title: "Les cyberattaques frappent au cœur de la trésorerie.",
    stat: "78%",
    statLabel: "des attaques ciblent la trésorerie",
    severity: "CRITIQUE",
    severityScore: "9.8",
    before: "Arrêt total d'activité pendant 14 jours, rançon exigée, perte irrémédiable de données.",
    after: "Procédure d'isolement en 15 min, sauvegardes immuables et reprise sous contrôle.",
    clause: "Annexe A.8.7",
    accentLight: "#1900CE",
  },
  {
    id: "reglementation",
    number: "02",
    label: "CONFORMITÉ RÉGLEMENTAIRE",
    title: "Régulateurs et Banques Centrales exigent des preuves auditables.",
    stat: "100%",
    statLabel: "des audits vérifient la traçabilité documentaire",
    severity: "ÉLEVÉ",
    severityScore: "8.9",
    before: "Procédures informelles sur papier, panique et non-conformités majeures lors des contrôles.",
    after: "PSSI formalisée, cartographie traçable et conformité indiscutable aux audits.",
    clause: "Clause 9.2 & A.5.36",
    accentLight: "#1900CE",
  },
  {
    id: "marches",
    number: "03",
    label: "APPELS D'OFFRES & MARCHÉS",
    title: "La certification est le critère éliminatoire des grands comptes.",
    stat: "#1",
    statLabel: "condition d'éligibilité des donneurs d'ordre",
    severity: "MAJEUR",
    severityScore: "9.2",
    before: "Élimination d'office des consultations multinationales et des partenariats bancaires.",
    after: "Passeport commercial d'autorité : statut de prestataire de confiance garanti.",
    clause: "Annexe A.5.19",
    accentLight: "#01CE35",
  },
  {
    id: "resilience",
    number: "04",
    label: "RÉSILIENCE OPÉRATIONNELLE",
    title: "Protéger la continuité d'activité, pas seulement les données.",
    stat: "24/7",
    statLabel: "continuité de service garantie par le plan ISO 22301",
    severity: "VITAL",
    severityScore: "9.5",
    before: "Confusion totale en cas de crise, serveurs inaccessibles et communication désordonnée.",
    after: "Plan de continuité aligné ISO 22301, rôles de crise définis et reprise chronométrée.",
    clause: "Annexe A.5.29",
    accentLight: "#01CE35",
  },
];

export default function CrisisNarrative() {
  const [currentThreat, setCurrentThreat] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const goToThreat = (threatIndex: number) => {
    if (!outerRef.current) return;
    const total = threats.length;
    const rect = outerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = scrollTop + rect.top;
    const scrollDistance = total * window.innerHeight * 1.2;
    const targetY = sectionTop + (threatIndex / (total - 1)) * scrollDistance;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

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
          setCurrentThreat(idx);
          if (counterRef.current) {
            counterRef.current.textContent = `${String(idx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
          }
        },
      },
    });

    for (let i = 0; i < total - 1; i++) {
      tl.to(slides[i], { opacity: 0, y: -60, duration: 0.3, ease: "power2.in" }, i);
      tl.fromTo(slides[i + 1],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        i + 0.2
      );
    }

    tl.to({}, { duration: 0.5 }, total - 0.5);

  }, { scope: outerRef });

  return (
    <div
      ref={outerRef}
      id="contexte"
      style={{ height: `${(threats.length + 1) * 120}vh` }}
      className="relative"
    >
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col bg-white text-[#080A16] overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        {/* Subtle background glow that shifts softly */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1900CE]/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/[0.03] rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-8 sm:px-16 pt-8 pb-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#525875] uppercase">
              CHAPITRE 01 — MENACE &amp; ENJEU RÉEL
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Interactive threat selector pills */}
            <div className="hidden md:flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#E2E4F0] shadow-sm">
              {threats.map((t, tIdx) => (
                <button
                  key={t.id}
                  onClick={() => goToThreat(tIdx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    currentThreat === tIdx
                      ? "bg-rose-600 text-white shadow-sm"
                      : "text-[#525875] hover:text-[#080A16] hover:bg-[#F8F9FD]"
                  }`}
                >
                  {t.number} {t.label}
                </button>
              ))}
            </div>
            <span ref={counterRef} className="font-mono text-sm font-bold text-rose-600">
              0{currentThreat + 1} / 0{threats.length}
            </span>
          </div>
        </div>

        {/* Slide content */}
        <div ref={slidesRef} className="relative flex-1 px-8 sm:px-16 pt-8 pb-16">

          {threats.map((t, i) => (
            <div
              key={t.id}
              className="absolute inset-x-8 sm:inset-x-16 top-8 bottom-16 flex flex-col justify-center"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {/* Threat label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700">
                  {t.label}
                </span>
                <span className="font-mono text-[10px] text-[#525875] border border-[#E2E4F0] bg-white px-2.5 py-1 rounded-full">
                  SÉVÉRITÉ {t.severity} — {t.severityScore}/10
                </span>
              </div>

              {/* Main layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: Big title + big stat */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] leading-[1.08] tracking-tight">
                    {t.title}
                  </h2>

                  {/* Big stat */}
                  <div className="flex items-end gap-4 pt-2">
                    <span className="text-6xl sm:text-7xl font-black font-mono leading-none text-rose-600">
                      {t.stat}
                    </span>
                    <span className="text-sm text-[#525875] font-semibold leading-tight max-w-[170px] pb-1">
                      {t.statLabel}
                    </span>
                  </div>
                </div>

                {/* Right: Before / After comparison */}
                <div className="lg:col-span-6 space-y-3">

                  <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/80 border border-rose-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-4 h-px bg-rose-500" />
                      <span className="text-[10px] font-mono font-bold text-rose-700 uppercase tracking-wider">
                        Sans SMSI conforme
                      </span>
                    </div>
                    <p className="text-sm text-rose-950 font-medium leading-relaxed">
                      {t.before}
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-4 h-px bg-[#01CE35]" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                        Avec le SMSI YASEE IT
                      </span>
                    </div>
                    <p className="text-sm text-emerald-950 font-medium leading-relaxed">
                      {t.after}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#525875] pt-1">
                    <span>Contrôle normatif :</span>
                    <span className="text-[#080A16] font-bold">{t.clause}</span>
                  </div>

                </div>
              </div>

              {/* Dots */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2">
                {threats.map((_, dotIdx) => (
                  <div key={dotIdx} className={`h-0.5 rounded-full transition-all duration-500 ${
                    dotIdx === i ? "w-8 bg-rose-600" : "w-3 bg-[#E2E4F0]"
                  }`} />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E2E4F0]">
          <div
            ref={progressRef}
            className="h-full bg-rose-600 transition-none"
            style={{ width: "0%" }}
          />
        </div>

        {/* Animated Slide Defilement Indicator with Bouncing Arrow and Controls */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 max-w-[90vw]">
          {/* Prev button */}
          <button
            onClick={() => goToThreat(Math.max(0, currentThreat - 1))}
            disabled={currentThreat === 0}
            aria-label="Menace précédente"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E4F0] flex items-center justify-center text-rose-600 disabled:opacity-30 hover:bg-rose-50 transition-all cursor-pointer shadow-md disabled:cursor-not-allowed shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Animated bouncing arrow pill */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-[0_4px_25px_rgba(244,63,94,0.14)] border border-rose-200">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span className="text-xs font-bold text-[#080A16] tracking-tight whitespace-nowrap">
              {currentThreat < threats.length - 1
                ? `Faites défiler pour la Menace 0${currentThreat + 2} (${threats[currentThreat + 1].label})`
                : "Les 4 menaces analysées — Continuez"}
            </span>
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center animate-bounce shadow-sm shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={() => goToThreat(Math.min(threats.length - 1, currentThreat + 1))}
            disabled={currentThreat === threats.length - 1}
            aria-label="Menace suivante"
            className="w-9 h-9 rounded-full bg-white border border-[#E2E4F0] flex items-center justify-center text-rose-600 disabled:opacity-30 hover:bg-rose-50 transition-all cursor-pointer shadow-md disabled:cursor-not-allowed shrink-0"
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
