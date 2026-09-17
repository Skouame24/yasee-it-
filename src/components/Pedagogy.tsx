"use client";

import React, { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from "./Icons";

export default function Pedagogy() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      name: "CONCEPT",
      title: "Comprendre les exigences et leur logique",
      desc: "Décoder le sens profond des clauses normatives (4 à 10) et des contrôles de l'Annexe A. Vous comprenez pourquoi la norme exige chaque élément avant même de l'appliquer.",
      deliverable: "Compréhension des attendus auditeur & cartographie des exigences",
      tag: "Socle Théorique",
    },
    {
      step: "02",
      name: "MÉTHODE",
      title: "Apprendre comment les mettre en œuvre",
      desc: "Transformer une exigence abstraite en procédure opérationnelle. Vous apprenez les démarches méthodologiques d'appréciation des risques et de gouvernance.",
      deliverable: "Méthodologie d'analyse des risques & critères d'acceptation",
      tag: "Ingénierie SMSI",
    },
    {
      step: "03",
      name: "CAS PRATIQUE",
      title: "Analyser des situations proches de l’entreprise",
      desc: "Mise en situation sur des contextes d'entreprises réalistes (infrastructures critiques, banques, telcos). Vous confrontez la méthode aux contraintes réelles de budget et de maturité.",
      deliverable: "Résolution de scénarios d'incidents & arbitrages de sécurité",
      tag: "Mise en Situation",
    },
    {
      step: "04",
      name: "LIVRABLE",
      title: "Produire les éléments du SMSI",
      desc: "Chaque participant construit activement les artéfacts clés : Politique de Sécurité (PSSI), Déclaration d'Applicabilité (SoA) et Plan de Traitement des Risques (PTR).",
      deliverable: "Matrices SoA, Politiques types et plans d'action prêts à l'emploi",
      tag: "Production Concrète",
    },
    {
      step: "05",
      name: "AUDIT",
      title: "Démontrer la conformité et identifier les écarts",
      desc: "Simulation d'audit de certification. Vous apprenez à rassembler les éléments de preuve probants, à défendre vos arbitrages et à traiter les non-conformités.",
      deliverable: "Dossier de preuves auditable & grille de constats d'audit",
      tag: "Certification & Clôture",
    },
  ];

  return (
    <section id="pedagogie" className="py-24 bg-white text-[#080A16] border-b border-[#E2E4F0] relative overflow-hidden">
      {/* Halo discret */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#1900CE]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative">
        
        {/* En-tête Statutaire */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEECFC] border border-[#1900CE]/20 text-xs font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            Approche Pédagogique
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.1]">
            Une formation orientée pratique, pas uniquement théorie.
          </h2>

          <p className="text-base sm:text-lg text-[#525875] leading-relaxed font-normal">
            Notre méthode suit un cycle rigoureux en 5 étapes pour transformer chaque concept en capacité d'exécution vérifiable.
          </p>
        </div>

        {/* Le Grand Pipeline Opérationnel */}
        <div className="rounded-3xl border border-[#E2E4F0] bg-[#F8F9FD] p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/[0.02] space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E4F0]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1900CE]">
                Cycle d'apprentissage continu
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#080A16] mt-0.5">
                Notre approche : Du concept à la preuve d'audit
              </h3>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-[#525875]">
              <span>5 étapes séquentielles</span>
              <span className="text-[#01CE35] font-bold">● Méthode éprouvée</span>
            </div>
          </div>

          {/* Stepper interactif / Onglets visuels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {steps.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-white border-[#1900CE] shadow-lg shadow-[#1900CE]/10 ring-2 ring-[#1900CE]/20"
                      : "bg-white/60 border-[#E2E4F0] hover:bg-white hover:border-[#1900CE]/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isSelected ? "text-[#1900CE]" : "text-[#525875]"}`}>
                      ÉTAPE {item.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#1900CE]" : "bg-[#E2E4F0]"}`} />
                  </div>
                  <div className="font-extrabold text-sm sm:text-base text-[#080A16] tracking-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#525875] mt-1 line-clamp-1 font-medium">
                    {item.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fiche Déployée de l'Étape Active avec Haute Richesse Visuelle */}
          <div className="bg-white rounded-2xl border border-[#E2E4F0] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1900CE]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEECFC] text-[#1900CE] font-mono text-xs font-bold">
                  <span>Étape {steps[activeStep].step}</span>
                  <span>•</span>
                  <span>{steps[activeStep].tag}</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#080A16] tracking-tight">
                  {steps[activeStep].name} — {steps[activeStep].title}
                </h4>

                <p className="text-sm sm:text-base text-[#525875] leading-relaxed">
                  {steps[activeStep].desc}
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#080A16]">
                  <span className="w-5 h-5 rounded-full bg-[#E6FAEB] text-[#01CE35] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                  <span>Livrable associé : <strong className="text-[#1900CE]">{steps[activeStep].deliverable}</strong></span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F8F9FD] p-6 rounded-2xl border border-[#E2E4F0] space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase text-[#525875] tracking-wider block">
                  Enjeux opérationnels
                </span>
                <p className="text-xs text-[#525875] leading-relaxed">
                  Cette étape garantit que le participant ne reste jamais spectateur : chaque notion est éprouvée et convertie en outil opérationnel pour l'entreprise.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1900CE]">
                  <span>Progression 100% orientée terrain</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Phrase finale officielle du brief */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080A16] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#01CE35]">
                Finalité Pédagogique
              </span>
              <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                L’objectif n’est pas seulement de réussir l’examen. <br className="hidden sm:inline" />
                <span className="text-slate-300 font-normal">C’est de savoir quoi faire une fois revenu dans votre organisation.</span>
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#inscription"
                className="px-6 py-3 rounded-xl bg-[#1900CE] hover:bg-[#1400A6] text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Rejoindre la session</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
