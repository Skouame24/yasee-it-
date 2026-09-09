"use client";

import React, { useRef } from "react";
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
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

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
        className="h-screen w-full flex flex-col bg-[#050710] overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        {/* Subtle background glow that shifts */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1900CE]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#01CE35]/8 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-60 pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-8 sm:px-16 pt-10 pb-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-white/40 uppercase">
              CHAPITRE 01 — MENACE & ENJEU RÉEL
            </span>
          </div>
          <span ref={counterRef} className="font-mono text-sm font-bold text-white/30">
            01 / 04
          </span>
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
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border"
                  style={{ color: t.accentLight, borderColor: `${t.accentLight}40`, backgroundColor: `${t.accentLight}10` }}>
                  {t.label}
                </span>
                <span className="font-mono text-[10px] text-white/30 border border-white/10 px-2 py-1 rounded-full">
                  SÉVÉRITÉ {t.severity} — {t.severityScore}/10
                </span>
              </div>

              {/* Main layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: Big title + big stat */}
                <div className="lg:col-span-6 space-y-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight">
                    {t.title}
                  </h2>

                  {/* Big stat */}
                  <div className="flex items-end gap-4">
                    <span
                      className="text-6xl sm:text-7xl font-black font-mono leading-none"
                      style={{ color: t.accentLight }}
                    >
                      {t.stat}
                    </span>
                    <span className="text-sm text-white/40 leading-tight max-w-[160px] pb-2">
                      {t.statLabel}
                    </span>
                  </div>
                </div>

                {/* Right: Before / After comparison */}
                <div className="lg:col-span-6 space-y-3">

                  <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-4 h-px bg-rose-500/50" />
                      <span className="text-[10px] font-mono font-bold text-rose-400/70 uppercase tracking-wider">
                        Sans SMSI conforme
                      </span>
                    </div>
                    <p className="text-sm text-rose-200/70 leading-relaxed">
                      {t.before}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border"
                    style={{ background: `${t.accentLight}08`, borderColor: `${t.accentLight}25` }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-4 h-px" style={{ backgroundColor: t.accentLight }} />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider"
                        style={{ color: t.accentLight }}>
                        Avec le SMSI YASEE IT
                      </span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {t.after}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/25 pt-1">
                    <span>Contrôle normatif :</span>
                    <span className="text-white/40 font-bold">{t.clause}</span>
                  </div>

                </div>
              </div>

              {/* Dots */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2">
                {threats.map((_, dotIdx) => (
                  <div key={dotIdx} className={`h-0.5 rounded-full transition-all duration-500 ${
                    dotIdx === i ? "w-8 bg-white/60" : "w-3 bg-white/15"
                  }`} />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
          <div
            ref={progressRef}
            className="h-full bg-[#01CE35]/60 transition-none"
            style={{ width: "0%" }}
          />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-px h-6 bg-white/15 animate-pulse" />
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Scroll</span>
        </div>

      </div>
    </div>
  );
}
