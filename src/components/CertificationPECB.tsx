"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AwardIcon, CheckCircleIcon, ShieldCheckIcon } from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const credentials = [
  {
    title: "PECB Certified Provisional Implementer",
    exp: "Aucune expérience professionnelle requise",
    target: "Débutants, jeunes diplômés & reconversions",
    badge: "Entrée Directe"
  },
  {
    title: "PECB Certified Implementer",
    exp: "2 ans d'expérience (dont 1 an en sécurité de l'info)",
    target: "Praticiens sécurité et consultants juniors",
    badge: "2 Ans Exp"
  },
  {
    title: "PECB Certified Lead Implementer",
    exp: "5 ans d'expérience (dont 2 ans en pilotage sécurité)",
    target: "RSSI, DSI, chefs de projet SMSI & consultants seniors",
    badge: "TITRE PHARE",
    highlight: true,
  },
  {
    title: "PECB Certified Senior Lead Implementer",
    exp: "10 ans d'expérience (dont 7 ans en sécurité de l'info)",
    target: "Directeurs Cybersécurité & experts reconnus",
    badge: "Expert Sénior"
  },
];

export default function CertificationPECB() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(badgeRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
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
    // Two cards split open left/right
    .fromTo(
      cardsRef.current ? Array.from(cardsRef.current.children) : [],
      (i: number) => ({ x: i === 0 ? -60 : 60, opacity: 0 }),
      {
        x: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0,
        ease: "power3.out",
      },
      "-=0.3"
    )
    // Credential table slides up
    .fromTo(tableRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" },
      "-=0.3"
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="certification" className="py-20 bg-[#F8F9FD] border-b border-[#E2E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div ref={badgeRef} style={{ opacity: 0 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E4F0] text-[11px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            <span>CHAPITRE 07 : TITRE ET ACCRÉDITATION INTERNATIONALE</span>
          </div>

          <h2 ref={headingRef} style={{ opacity: 0 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-tight">
            Certification internationale PECB. <br />
            <span className="text-[#1900CE]">Votre passeport mondial en cybersécurité.</span>
          </h2>

          <p ref={subtitleRef} style={{ opacity: 0 }} className="text-sm sm:text-base text-[#525875] font-normal leading-relaxed">
            Délivrée par <strong className="text-[#080A16]">PECB</strong>, organisme international accrédité selon la norme ISO/IEC 17024 (IAS).
          </p>
        </div>

        {/* 2 Structural Cards: Examen + Certificat */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div style={{ opacity: 0 }} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1900CE]/20 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#EEECFC] flex items-center justify-center text-[#1900CE]">
                <AwardIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#1900CE]">
                  MODALITÉ D'EXAMEN
                </span>
                <h3 className="text-xl font-extrabold text-[#080A16]">
                  Examen 3h à Livre Ouvert (Open Book)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#525875] leading-relaxed">
              Pas de mémorisation bête : vous avez accès aux normes et aux supports de cours. L'examen évalue votre capacité à résoudre des cas réels d'implémentation et d'audit.
            </p>

            <div className="p-3 rounded-xl bg-[#E6FAEB] border border-[#01CE35]/30 text-xs font-bold text-[#01CE35] flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 shrink-0" />
              <span>Droit de repassage gratuit inclus (Garantie PECB 12 mois)</span>
            </div>
          </div>

          <div style={{ opacity: 0 }} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1900CE]/20 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#080A16] flex items-center justify-center text-[#01CE35]">
                <ShieldCheckIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#01CE35]">
                  VALEUR DU TITRE
                </span>
                <h3 className="text-xl font-extrabold text-[#080A16]">
                  Standard Mondial ISO/IEC 17024
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#525875] leading-relaxed">
              Votre certificat est vérifiable publiquement sur le registre mondial PECB. Reconnu par les banques, multinationales, régulateurs et cabinets d'audit internationaux.
            </p>

            <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0] text-xs font-mono font-bold text-[#1900CE] flex items-center justify-between">
              <span>Organisme accrédité :</span>
              <span className="bg-white px-2 py-0.5 rounded border border-[#E2E4F0]">IAS Accredited</span>
            </div>
          </div>

        </div>

        {/* Credentials Hierarchy Table */}
        <div ref={tableRef} style={{ opacity: 0 }} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E4F0] space-y-4">
          <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#080A16]">
            Évolution des titres selon vos années d'expérience :
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {credentials.map((cr, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 space-y-2 ${
                  cr.highlight
                    ? "bg-[#1900CE] text-white border-[#1900CE] shadow-lg shadow-[#1900CE]/20"
                    : "bg-[#F8F9FD] text-[#080A16] border-[#E2E4F0]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    cr.highlight ? "bg-white/20 text-white" : "bg-white text-[#1900CE] border border-[#E2E4F0]"
                  }`}>
                    {cr.badge}
                  </span>
                </div>
                <h4 className={`text-xs font-extrabold ${cr.highlight ? "text-white" : "text-[#080A16]"}`}>
                  {cr.title}
                </h4>
                <p className={`text-[11px] ${cr.highlight ? "text-white/80" : "text-[#525875]"}`}>
                  {cr.exp}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
