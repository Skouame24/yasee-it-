"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  CalendarIcon, 
  ClockIcon, 
  LaptopIcon, 
  AwardIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  ShieldCheckIcon 
} from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface HeroProps {
  onOpenModal: () => void;
}

const consoleViews = [
  {
    id: "gov",
    label: "01. Gouvernance",
    title: "Leadership & Périmètre SMSI",
    badge: "Clauses 4 à 10",
    score: "100%",
    progress: 100,
    desc: "Cadrage stratégique, cartographie des parties prenantes, engagement formel de la DG et rédaction de la PSSI.",
    deliverable: "Politique Générale & Définition du Périmètre",
    kpi: "Alignement Gouvernance Direct",
    checks: ["Contexte organisationnel (Cl. 4)", "Engagement DG & PSSI (Cl. 5)", "Rôles & Responsabilités (Cl. 5.3)"]
  },
  {
    id: "risk",
    label: "02. Risques & Mesures",
    title: "Évaluation & Déclaration d'Applicabilité (DdA)",
    badge: "Annexe A (93 Mesures)",
    score: "93 Contrôles",
    progress: 88,
    desc: "Application rigoureuse de la méthode d'évaluation (EBIOS RM / ISO 27005) et sélection outillée des 93 contrôles.",
    deliverable: "Matrice des Risques & Statement of Applicability (SoA)",
    kpi: "4 Thèmes de Défense",
    checks: ["Modélisation menaces (ISO 27005)", "Matrice EBIOS RM", "Déclaration d'Applicabilité (SoA)"]
  },
  {
    id: "audit",
    label: "03. Audit & PECB",
    title: "Surveillance, Revue & Examen Officiel",
    badge: "Norme ISO/IEC 17024",
    score: "Examen 3h",
    progress: 95,
    desc: "Mise en place des audits internes, simulation d'audit tierce-partie et passage de l'examen officiel PECB.",
    deliverable: "Grille d'Audit Interne & Titre PECB Lead Implementer",
    kpi: "Validation Accréditée IAS",
    checks: ["Audit interne (Cl. 9.2)", "Revue de direction (Cl. 9.3)", "Passage Examen PECB (J5)"]
  },
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentView = consoleViews[activeTab];

  const containerRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Auto-switch tabs subtly if user is idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % consoleViews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (leftColumnRef.current) {
      gsap.fromTo(
        leftColumnRef.current.children,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }

    if (rightColumnRef.current) {
      gsap.fromTo(
        rightColumnRef.current,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white border-b border-[#E2E4F0] pt-6 pb-16 lg:pt-10 lg:pb-24 blueprint-grid">
      
      {/* Live Cyber Telemetry Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-[#080A16] text-white rounded-xl py-2 px-4 flex items-center justify-between overflow-hidden shadow-md border border-white/10">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01CE35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01CE35]"></span>
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#01CE35]">
              SESSION OFFICIELLE ACTIVE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] text-slate-300">
            <span>📅 14 – 18 Décembre 2026</span>
            <span className="text-white/20">|</span>
            <span>📍 100% En Ligne (Français)</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 font-bold">⚡ 8 Places Restantes</span>
            <span className="text-white/20">|</span>
            <span className="text-[#01CE35] font-bold">🎓 Examen PECB Inclus</span>
          </div>
          <button 
            onClick={onOpenModal}
            className="text-[11px] font-mono font-bold text-white bg-[#1900CE] hover:bg-[#1200A3] px-3 py-1 rounded cursor-pointer transition-colors"
          >
            Postuler →
          </button>
        </div>
      </div>

      {/* Subtle radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1900CE]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, High-Impact Narrative */}
          <div ref={leftColumnRef} className="lg:col-span-7 space-y-6">
            
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-[11px] font-extrabold uppercase tracking-widest text-[#1900CE]">
              <ShieldCheckIcon className="w-4 h-4 text-[#01CE35]" />
              <span>Formation Certifiante d'Élite • 5 Jours • YASEE IT</span>
            </div>

            {/* Title & Core Punchline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#080A16] tracking-tight leading-[1.06]">
                ISO/IEC 27001 <br />
                <span className="text-[#1900CE]">Lead Implementer</span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[#080A16] tracking-tight">
                Pilotez un SMSI qui tient face aux attaques et réussit l'audit certificateur.
              </p>

              <p className="text-sm sm:text-base text-[#525875] max-w-xl leading-relaxed">
                Animée par deux experts GRC en activité. Une méthode 100% terrain pour concevoir, 
                déployer et valider la sécurité de votre organisation avec la certification officielle <strong className="text-[#080A16]">PECB</strong>.
              </p>
            </div>

            {/* Visual Value Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0]">
                <div className="text-xl font-extrabold text-[#1900CE]">5 Jours</div>
                <div className="text-[11px] font-semibold text-[#525875]">Matin méthode • Après-midi cas réels</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0]">
                <div className="text-xl font-extrabold text-[#01CE35]">93 Contrôles</div>
                <div className="text-[11px] font-semibold text-[#525875]">Annexe A 2022 outillée</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0]">
                <div className="text-xl font-extrabold text-[#080A16]">Titre PECB</div>
                <div className="text-[11px] font-semibold text-[#525875]">Accréditation ISO 17024</div>
              </div>
            </div>

            {/* CTAs with Price Anchor */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-4 rounded-xl bg-[#1900CE] hover:bg-[#1200A3] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#1900CE]/25 flex items-center justify-center gap-3 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Réserver ma place</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <a
                  href="#programme"
                  className="px-6 py-4 rounded-xl border border-[#E2E4F0] hover:border-[#1900CE] bg-white text-[#080A16] font-bold text-sm flex items-center justify-center hover:bg-[#F8F9FD] transition-all"
                >
                  <span>Voir le syllabus 5J</span>
                </a>
              </div>

              {/* Price Callout */}
              <div className="flex items-center gap-3 text-xs text-[#525875]">
                <div className="flex items-center gap-1.5 font-bold text-[#080A16]">
                  <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                  <span className="text-base font-extrabold text-[#1900CE]">800 000 FCFA</span>
                  <span className="bg-[#FFF8E7] text-[#8C6B1C] px-2 py-0.5 rounded text-[11px] font-bold border border-[#E8CA72]">
                    Tarif officiel tout compris
                  </span>
                </div>
                <span>•</span>
                <span className="font-semibold text-rose-700">Clôture le 10 Décembre</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive SMSI Terminal */}
          <div ref={rightColumnRef} className="lg:col-span-5">
            <div className="relative rounded-2xl border-2 border-[#1900CE]/30 bg-white shadow-2xl overflow-hidden tech-card">
              
              {/* Console Header Bar */}
              <div className="bg-[#080A16] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#01CE35] animate-soft-pulse"></span>
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-slate-200">
                    CONSOLE SMSI • ISO 27001:2022
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#01CE35] uppercase font-bold bg-[#01CE35]/15 px-2.5 py-0.5 rounded border border-[#01CE35]/30">
                  LIVE CONSOLE
                </span>
              </div>

              {/* Console Interactive Selector Tabs */}
              <div className="flex border-b border-[#E2E4F0] bg-[#F8F9FD]">
                {consoleViews.map((view, i) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-3 px-2 text-center text-xs font-bold transition-all cursor-pointer border-b-2 ${
                      activeTab === i
                        ? "border-[#1900CE] text-[#1900CE] bg-white shadow-sm"
                        : "border-transparent text-[#525875] hover:text-[#080A16]"
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>

              {/* Console Body Canvas */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#EEECFC] text-[#1900CE] font-mono text-xs font-bold border border-[#1900CE]/20">
                    {currentView.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#01CE35]">
                    <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                    <span>{currentView.score}</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-[#525875]">
                    <span>Maturité du livrable</span>
                    <span className="font-bold text-[#080A16]">{currentView.kpi}</span>
                  </div>
                  <div className="w-full bg-[#E2E4F0] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#1900CE] h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${currentView.progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-[#080A16]">
                    {currentView.title}
                  </h3>
                  <p className="text-xs text-[#525875] leading-relaxed">
                    {currentView.desc}
                  </p>
                </div>

                {/* Live checklist items */}
                <div className="space-y-1.5 pt-1">
                  {currentView.checks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#080A16] bg-[#F8F9FD] px-3 py-1.5 rounded-lg border border-[#E2E4F0]">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-[#01CE35] shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Deliverable Output */}
                <div className="rounded-xl border border-[#1900CE]/30 bg-[#EEECFC]/40 p-3.5 space-y-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#1900CE]">
                    LIVRABLE CONSTRUIT PAR LE CANDIDAT :
                  </span>
                  <div className="text-xs font-bold text-[#080A16]">
                    🎯 {currentView.deliverable}
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 rounded-xl bg-[#080A16] hover:bg-[#1900CE] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Rejoindre cet atelier pratique</span>
                  <span>→</span>
                </button>

              </div>

              {/* Console Footer */}
              <div className="bg-[#F8F9FD] border-t border-[#E2E4F0] px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-[#525875]">
                <span>Norme : ISO/IEC 27001:2022</span>
                <span className="text-[#1900CE] font-bold">Cohorte Décembre 2026</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
