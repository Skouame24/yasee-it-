import React from "react";

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
  return (
    <section id="contexte" className="bg-white text-[#080A16] border-b border-[#E2E4F0] py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1900CE]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-rose-200 bg-rose-50 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#525875] uppercase">
              CHAPITRE 01 — MENACE & ENJEU RÉEL
            </span>
          </div>
        </div>

        {/* Threats List */}
        <div className="space-y-12">
          {threats.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-[#E2E4F0] p-8 sm:p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform" />
              
              {/* Threat label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700">
                  {t.number} {t.label}
                </span>
                <span className="font-mono text-[10px] text-[#525875] border border-[#E2E4F0] bg-[#F8F9FD] px-2.5 py-1 rounded-full">
                  SÉVÉRITÉ {t.severity} — {t.severityScore}/10
                </span>
              </div>

              {/* Main layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: Big title + big stat */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#080A16] leading-[1.08] tracking-tight">
                    {t.title}
                  </h2>

                  {/* Big stat */}
                  <div className="flex items-end gap-4 pt-2">
                    <span className="text-5xl sm:text-6xl font-black font-mono leading-none text-rose-600">
                      {t.stat}
                    </span>
                    <span className="text-sm text-[#525875] font-semibold leading-tight max-w-[170px] pb-1">
                      {t.statLabel}
                    </span>
                  </div>
                </div>

                {/* Right: Before / After comparison */}
                <div className="lg:col-span-6 space-y-4">

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

                  {/* Alignment badge */}
                  <div className="flex justify-end pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E4F0] rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1900CE]" />
                      <span className="font-mono text-[9px] font-bold text-[#1900CE]">
                        RÉSOLUTION : {t.clause}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
