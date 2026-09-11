"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const comparisons = [
  {
    topic: "Cas d'Usage & Données",
    standard: "Exemples génériques et désincarnés de multinationales américaines.",
    yasee: "Cas réels d'entreprises ouest-africaines (banque, télécoms, énergie, santé)."
  },
  {
    topic: "Production de Livrables",
    standard: "Lecture passive de 350 diapositives sans produire aucun document.",
    yasee: "Construction active de la PSSI, de la DdA (SoA) et du Plan de Traitement (PTR)."
  },
  {
    topic: "Formateurs",
    standard: "Théoriciens ou enseignants généralistes sans expérience vécue de crise cyber.",
    yasee: "Équipe d'experts praticiens GRC & Cyber en activité ayant géré des ransomwares réels."
  },
  {
    topic: "Examen & Titre PECB",
    standard: "QCM théorique sans accompagnement méthodologique à la rédaction.",
    yasee: "Préparation intensive à livre ouvert (Open Book) avec examen officiel inclus."
  },
];

export default function FieldReality() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Badge and heading
    tl.fromTo(badgeRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(headingRef.current,
      { y: 55, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: "power4.out" },
      "-=0.3"
    )
    .fromTo(subtitleRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" },
      "-=0.5"
    )
    // Left column slides from left, right column from right — dramatic split reveal
    .fromTo(leftColRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(rightColRef.current,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
      "<" // simultaneous with left column
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 bg-white text-[#080A16] border-b border-[#E2E4F0] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6FAEB] border border-[#01CE35]/30 text-[11px] font-mono font-bold tracking-widest text-[#01CE35] uppercase">
            <span>CHAPITRE 05 : LA MÉTHODE DE TERRAIN</span>
          </div>

          <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-tight">
            « On ne vient pas réciter la norme. <br />
            <span className="text-[#1900CE]">On apprend à la faire tenir sur le terrain. »</span>
          </h2>

          <p ref={subtitleRef} className="text-sm sm:text-base text-[#525875] font-normal leading-relaxed">
            Pourquoi notre approche forme des praticiens opérationnels immédiatement respectés par les comités de direction et les auditeurs.
          </p>
        </div>

        {/* Visual Matrix Comparison — split left/right reveal */}
        <div className="rounded-3xl border border-[#E2E4F0] bg-white overflow-hidden shadow-xl shadow-black/[0.03]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2E4F0]">
            
            {/* Left: Classic Boring Course */}
            <div ref={leftColRef} className="p-6 sm:p-8 space-y-6 bg-rose-50/50">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-black flex items-center justify-center text-sm shadow-sm">
                  ✕
                </span>
                <span className="font-mono text-xs font-bold uppercase text-rose-800">
                  Formations ISO 27001 Classiques
                </span>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                      {c.topic}
                    </span>
                    <p className="text-xs text-rose-950/80 leading-relaxed">
                      {c.standard}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: YASEE IT Industrial Elite Method */}
            <div ref={rightColRef} className="p-6 sm:p-8 space-y-6 bg-white">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E6FAEB] text-[#01CE35] font-black flex items-center justify-center text-sm shadow-sm">
                  ✓
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#1900CE]">
                  Méthode YASEE IT — Élite Industrielle
                </span>
              </div>

              <div className="space-y-4">
                {comparisons.map((c, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#01CE35] font-bold">
                      {c.topic}
                    </span>
                    <p className="text-xs text-[#080A16] font-semibold leading-relaxed">
                      {c.yasee}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
