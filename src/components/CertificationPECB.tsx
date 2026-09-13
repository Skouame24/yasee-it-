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

  

  return (
    <section ref={sectionRef} id="certification" className="py-20 bg-white border-b border-[#E2E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E4F0] text-[11px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            <span>CHAPITRE 07 : TITRE ET ACCRÉDITATION INTERNATIONALE</span>
          </div>

          <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-tight">
            Certification internationale PECB. <br />
            <span className="text-[#1900CE]">Votre passeport mondial en cybersécurité.</span>
          </h2>

          <p ref={subtitleRef} className="text-sm sm:text-base text-[#525875] font-normal leading-relaxed">
            Délivrée par <strong className="text-[#080A16]">PECB</strong>, organisme international.
          </p>
        </div>

        {/* 2 Structural Cards: Examen + Certificat */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1900CE]/20 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#EEECFC] flex items-center justify-center text-[#1900CE]">
                <ShieldCheckIcon className="w-5 h-5 text-[#1900CE]" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1900CE] uppercase tracking-wider block">Épreuve Officielle</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#080A16]">Examen PECB Lead Implementer</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#525875] leading-relaxed">
              Examen officiel de 3 heures en ligne, à livre ouvert (Open Book). Évalue la capacité pratique à concevoir, structurer et déployer un SMSI complet selon les exigences normatives.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#525875] pt-1">
              <span className="bg-white px-3 py-1 rounded-full border border-[#E2E4F0]">Format : En ligne (PECB Exams)</span>
              <span className="bg-white px-3 py-1 rounded-full border border-[#E2E4F0]">Durée : 3 Heures</span>
              <span className="bg-[#E6FAEB] text-[#01CE35] font-bold px-3 py-1 rounded-full border border-[#01CE35]/30">Passage inclus</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#01CE35]/30 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#E6FAEB] flex items-center justify-center text-[#01CE35]">
                <AwardIcon className="w-5 h-5 text-[#01CE35]" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#01CE35] uppercase tracking-wider block">Reconnaissance Mondiale</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#080A16]">Accréditation ISO/IEC 17024</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#525875] leading-relaxed">
              Certification délivrée par un organisme accrédité IAS. Reconnue par les directions générales, institutions financières et multinationales dans plus de 150 pays.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#525875] pt-1">
              <span className="bg-white px-3 py-1 rounded-full border border-[#E2E4F0]">Validité internationale</span>
              <span className="bg-white px-3 py-1 rounded-full border border-[#E2E4F0]">Accréditation IAS</span>
              <span className="bg-[#EEECFC] text-[#1900CE] font-bold px-3 py-1 rounded-full border border-[#1900CE]/20">Droit de repassage inclus</span>
            </div>
          </div>

        </div>

        {/* Credentials Hierarchy Table */}
        <div ref={tableRef} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E4F0] space-y-4">
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
                    : "bg-white text-[#080A16] border-[#E2E4F0] hover:border-[#1900CE]/40 transition-colors shadow-sm"
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
