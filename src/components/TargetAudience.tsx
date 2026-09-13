import React from "react";

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
    deliverable: "Programme d'audit interne, Fiches de constats & PECB Certified ISO/IEC 27001 Lead Implementer",
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
  return (
    <section id="profils" className="bg-white border-b border-[#E2E4F0] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-[10px] font-mono font-bold tracking-widest text-[#1900CE] uppercase mb-6">
            CHAPITRE 02 — PROFILS CIBLES
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]">
            Trois trajectoires d'expertise.<br />
            <span className="text-[#1900CE]">Laquelle est la vôtre ?</span>
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="space-y-16">
          {profiles.map((p) => (
            <div key={p.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-[#E2E4F0] last:border-0 last:pb-0">
              
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
                    LIVRABLE / RÉSULTAT DIRECT :
                  </span>
                  <div className="text-sm font-bold text-[#080A16]">
                    <span style={{ color: p.accent }}>→</span> {p.deliverable}
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#525875]/60 pl-2">
                    CETTE VOIE EST FAITE POUR :
                  </span>
                  <ul className="space-y-2">
                    {p.roles.map((role, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#525875] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
