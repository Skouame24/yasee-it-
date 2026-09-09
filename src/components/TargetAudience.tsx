"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TargetAudienceProps {
  onOpenModal: () => void;
}

const profiles = [
  {
    id: "decideurs",
    number: "01",
    track: "GOUVERNANCE & ARBITRAGE",
    roleGroup: "Décideurs, DSI & RSSI",
    headline: "Aligner la sécurité avec la stratégie business et répondre aux régulateurs.",
    gain: "Vous repartez avec une vision limpide pour piloter la PSSI, arbitrer les budgets et dialoguer en autorité avec la DG et les auditeurs.",
    deliverable: "Politique de Sécurité (PSSI) & Tableau de bord de gouvernance",
    roles: [
      "RSSI & Directeurs Sécurité SI",
      "DSI & Responsables Informatiques",
      "Directeurs des Risques & Conformité",
      "Responsables Juridiques & DPO",
    ],
    accent: "#1900CE",
  },
  {
    id: "experts",
    number: "02",
    track: "INGÉNIERIE & MÉTHODE",
    roleGroup: "Experts Cyber & GRC",
    headline: "Concevoir et déployer le SMSI sans improviser les méthodes.",
    gain: "Vous maîtrisez la méthodologie outillée complète (ISO 27005 / EBIOS RM, SoA, Annexe A) et menez l'implémentation de bout en bout.",
    deliverable: "Déclaration d'Applicabilité (DdA / SoA) & Plan de Traitement (PTR)",
    roles: [
      "Responsables GRC (Gouvernance & Risques)",
      "Risk Managers IT & Cybersécurité",
      "Consultants Sécurité SI",
      "Architectes & Ingénieurs Cyber",
    ],
    accent: "#1900CE",
  },
  {
    id: "acteurs",
    number: "03",
    track: "CONTRÔLE & EXAMEN",
    roleGroup: "Auditeurs & Chefs de Projet",
    headline: "Structurer la démarche d'audit et décrocher la certification.",
    gain: "Vous apprenez à conduire un audit interne rigoureux, préparer la revue de direction et réussir votre examen officiel PECB.",
    deliverable: "Programme d'audit interne, Fiches de constats & Titre PECB",
    roles: [
      "Auditeurs Internes & Externes",
      "Responsables Qualité / QHSE",
      "Chefs de Projet SMSI / Digitaux",
      "Cadres IT en reconversion",
    ],
    accent: "#01CE35",
  },
];

export default function TargetAudience({ onOpenModal }: TargetAudienceProps) {
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
      gsap.set(slide, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 120 });
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
            counterRef.current.textContent = `VOIE ${String(idx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
          }
        },
      },
    });

    for (let i = 0; i < total - 1; i++) {
      // Exit: slide out to left
      tl.to(slides[i], { opacity: 0, x: -120, duration: 0.35, ease: "power2.in" }, i);
      // Enter: slide in from right
      tl.fromTo(slides[i + 1],
        { opacity: 0, x: 120 },
        { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" },
        i + 0.2
      );
    }

    tl.to({}, { duration: 0.5 }, total - 0.5);

  }, { scope: outerRef });

  return (
    <div
      ref={outerRef}
      id="profils"
      style={{ height: `${(profiles.length + 1) * 120}vh` }}
      className="relative"
    >
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col bg-white overflow-hidden"
        style={{ position: "sticky", top: 0 }}
      >
        {/* Subtle background */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-8 sm:px-16 pt-10 pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-[10px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            CHAPITRE 02 — PROFILS CIBLES
          </div>
          <span ref={counterRef} className="font-mono text-sm font-bold text-[#1900CE]/40">
            VOIE 01 / 03
          </span>
        </div>

        {/* Static heading */}
        <div className="relative px-8 sm:px-16 pt-6 pb-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]">
            Trois trajectoires d'expertise.<br />
            <span className="text-[#1900CE]">Laquelle est la vôtre ?</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mx-8 sm:mx-16 mt-6 h-0.5 bg-[#E2E4F0] rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#1900CE] transition-none"
            style={{ width: "0%" }}
          />
        </div>

        {/* Slides */}
        <div ref={slidesRef} className="relative flex-1 px-8 sm:px-16 pt-8 pb-16">
          {profiles.map((p, i) => (
            <div
              key={p.id}
              className="absolute inset-x-8 sm:inset-x-16 top-8 bottom-16 flex flex-col justify-center"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: role identity */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border"
                      style={{ color: p.accent, borderColor: `${p.accent}40`, backgroundColor: `${p.accent}08` }}
                    >
                      {p.track}
                    </span>
                  </div>

                  <div>
                    <div className="text-5xl sm:text-6xl font-black font-mono text-[#E2E4F0] leading-none mb-2">
                      {p.number}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#080A16] leading-[1.1] tracking-tight">
                      {p.roleGroup}
                    </h3>
                  </div>

                  <p className="text-base text-[#525875] leading-relaxed max-w-md">
                    {p.headline}
                  </p>

                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all cursor-pointer hover:opacity-90 hover:-translate-y-0.5"
                    style={{ backgroundColor: p.accent }}
                  >
                    Je m'inscris sur ce parcours
                    <span>→</span>
                  </button>
                </div>

                {/* Right: gain + deliverable + roles */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-[#F8F9FD] border border-[#E2E4F0] space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#525875]/60">
                      CE QUE VOUS GAGNEZ
                    </span>
                    <p className="text-sm text-[#080A16] leading-relaxed font-medium">
                      {p.gain}
                    </p>
                  </div>

                  <div
                    className="p-5 rounded-2xl border space-y-2"
                    style={{ borderColor: `${p.accent}30`, backgroundColor: `${p.accent}06` }}
                  >
                    <span className="text-[10px] font-mono font-bold uppercase" style={{ color: `${p.accent}90` }}>
                      LIVRABLE CONSTRUIT EN FORMATION
                    </span>
                    <div className="text-sm font-bold text-[#080A16] flex items-start gap-2">
                      <span style={{ color: p.accent }}>→</span>
                      <span>{p.deliverable}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {p.roles.map((r, ri) => (
                      <div key={ri} className="flex items-center gap-2 text-xs text-[#525875] bg-white border border-[#E2E4F0] px-3 py-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                        <span className="font-medium">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Dots */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2">
                {profiles.map((_, dotIdx) => (
                  <div key={dotIdx} className={`h-0.5 rounded-full transition-all duration-500 ${
                    dotIdx === i ? "w-8 bg-[#1900CE]" : "w-3 bg-[#E2E4F0]"
                  }`} />
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <div className="w-px h-6 bg-[#E2E4F0] animate-pulse" />
          <span className="text-[9px] font-mono text-[#525875]/40 uppercase tracking-widest">Scroll</span>
        </div>

      </div>
    </div>
  );
}
