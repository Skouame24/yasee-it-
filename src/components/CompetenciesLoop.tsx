import React from "react";

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
    clause: "Clause 9.2",
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
  return (
    <section id="methode" className="bg-[#080A16] border-b border-[#1A1C29] py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background styling */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1900CE]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#01CE35]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1C29] border border-[#2D3045] text-[10px] font-mono font-bold tracking-widest text-[#01CE35] uppercase mb-6 shadow-sm">
            CHAPITRE 03 — MÉTHODOLOGIE APPLIQUÉE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
            La mécanique exacte d'un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01CE35] to-[#1900CE]">SMSI conforme.</span>
          </h2>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((s, idx) => (
            <div key={s.step} className="bg-[#10121F] rounded-2xl border border-[#1A1C29] p-6 hover:border-[#1900CE]/50 hover:bg-[#151726] transition-all flex flex-col justify-between group">
              
              <div className="space-y-5 mb-8">
                {/* Step indicator */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-black font-mono text-[#2D3045] group-hover:text-[#1900CE]/30 transition-colors">
                    {s.step}
                  </div>
                  <div className="px-3 py-1 bg-[#1A1C29] rounded-lg border border-[#2D3045]">
                    <span className="font-mono text-[9px] font-bold text-[#A5ABCE] uppercase">
                      {s.verb}
                    </span>
                  </div>
                </div>

                {/* Title and summary */}
                <div>
                  <div className="inline-flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="font-mono text-[10px] font-bold text-[#A5ABCE]">
                      {s.clause}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#8F95B2] leading-relaxed">
                    {s.summary}
                  </p>
                </div>
              </div>

              {/* Deliverable info */}
              <div className="p-4 rounded-xl bg-[#1A1C29]/50 border border-[#2D3045]/50 space-y-2 mt-auto">
                <span className="text-[10px] font-mono font-bold uppercase text-[#A5ABCE]/70">
                  RÉSULTAT
                </span>
                <div className="text-xs font-bold text-[#E2E4F0] flex items-start gap-2">
                  <span style={{ color: s.color }}>→</span>
                  <span>{s.deliverable}</span>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-[#2D3045]/30 mt-2">
                  <svg className="w-3.5 h-3.5 text-[#01CE35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] font-mono text-[#8F95B2] uppercase">
                    KPI: {s.kpi}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
