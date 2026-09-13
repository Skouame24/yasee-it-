import React from "react";

const days = [
  {
    day: "J1",
    date: "Lundi 14 Décembre",
    title: "Introduction & Lancement du Projet SMSI",
    badge: "Clauses 4 & 5",
    morning: [
      "Comprendre la famille ISO/IEC 27000 et le rôle de la 27001.",
      "Analyse du contexte interne & externe de l'entreprise (Clause 4).",
      "Cartographie des exigences des régulateurs et parties prenantes.",
      "Définition précise du périmètre d'application (Scope) du SMSI.",
    ],
    workshop: "Cadrage du Périmètre & Mandat de Direction",
    workshopDesc: "Étude de cas d'une institution financière : arbitrage du périmètre et validation formelle de la Direction Générale.",
    deliverable: "Document officiel de Périmètre (Scope) & Cartographie",
  },
  {
    day: "J2",
    date: "Mardi 15 Décembre",
    title: "Leadership, Politique de Sécurité & Gestion des Risques",
    badge: "Clauses 5 & 6 — ISO 27005",
    morning: [
      "Engagement du leadership et gouvernance de la sécurité (Clause 5).",
      "Rédaction de la Politique de Sécurité de l'Information (PSSI).",
      "Méthode structurée d'appréciation des risques (Clause 6).",
      "Modélisation des cyberattaques et scénarios de menaces réelles.",
    ],
    workshop: "Évaluation des Risques — ISO 27005 / EBIOS RM",
    workshopDesc: "Application de la matrice de risques sur des systèmes critiques de paiement et bases de données clients.",
    deliverable: "PSSI synthétique & Matrice d'évaluation des risques résiduels",
  },
  {
    day: "J3",
    date: "Mercredi 16 Décembre",
    title: "Déploiement des 93 Mesures & Déclaration d'Applicabilité",
    badge: "Annexe A — 93 Contrôles",
    morning: [
      "Exploration outillée des 93 mesures de sécurité (ISO 27001:2022).",
      "Les 4 thèmes : Organisationnel, Personnes, Physique et Technologique.",
      "Gestion des informations documentées et traçabilité (Clause 7.5).",
      "Sensibilisation des collaborateurs et gestion des compétences.",
    ],
    workshop: "Construction de la Déclaration d'Applicabilité (DdA / SoA)",
    workshopDesc: "Sélection des 93 contrôles, formalisation des justifications d'exclusion et rédaction du Plan de Traitement (PTR).",
    deliverable: "Déclaration d'Applicabilité (SoA) complète & Plan de Traitement",
  },
  {
    day: "J4",
    date: "Jeudi 17 Décembre",
    title: "Surveillance, Audit Interne & Préparation Certification",
    badge: "Clauses 9 & 10",
    morning: [
      "KPIs de sécurité et surveillance des performances (Clause 9.1).",
      "Organisation et conduite formelle de l'audit interne (Clause 9.2).",
      "Animation de la Revue de Direction (Clause 9.3).",
      "Gestion des non-conformités et amélioration continue (Clause 10).",
    ],
    workshop: "Simulation Réelle d'Audit de Certification",
    workshopDesc: "Mise en situation de confrontation d'audit : défense des preuves face aux pièges et constats soulevés par les formateurs.",
    deliverable: "Grille d'audit interne, Fiches d'écarts & Rapport de revue",
  },
  {
    day: "J5",
    date: "Vendredi 18 Décembre",
    title: "Examen Officiel PECB Lead Implementer",
    badge: "Examen 3h — Livre Ouvert",
    isExamDay: true,
    morning: [
      "Session de révision stratégique et conseils méthodologiques.",
      "Analyse des questions types et techniques de résolution de cas.",
      "Vérification des accès à la plateforme d'examen sécurisée PECB.",
      "Passage officiel de l'examen de certification (3 heures).",
    ],
    workshop: "Passage de l'Examen Officiel PECB en Ligne",
    workshopDesc: "Examen officiel surveillé à livre ouvert. Questions situationnelles basées sur des cas réels d'implémentation.",
    deliverable: "PECB Certified ISO/IEC 27001 Lead Implementer",
  },
];

export default function ProgramTimeline() {
  return (
    <section id="programme" className="bg-[#F8F9FD] border-b border-[#E2E4F0] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E4F0] text-[10px] font-mono font-bold tracking-widest text-[#1900CE] uppercase mb-6">
            CHAPITRE 04 — PROGRAMME DE LA FORMATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#080A16] tracking-tight leading-[1.05]">
            <span className="text-[#1900CE]">Formation intensive 100% pratique.</span>
          </h2>
        </div>

        {/* Days List */}
        <div className="space-y-12">
          {days.map((d) => (
            <div key={d.day} className="bg-white rounded-2xl border border-[#E2E4F0] p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: day identity */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-[10px] font-bold text-[#525875] border border-[#E2E4F0] bg-[#F8F9FD] px-3 py-1 rounded-full">
                      {d.date}
                    </span>
                    {d.isExamDay && (
                      <span className="font-mono text-[10px] font-bold text-[#01CE35] border border-[#01CE35]/30 bg-[#01CE35]/10 px-3 py-1 rounded-full">
                        EXAMEN OFFICIEL
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-6xl font-black font-mono text-[#1900CE]/10 leading-none mb-1">
                      {d.day}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080A16] leading-[1.15] tracking-tight">
                      {d.title}
                    </h3>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0] space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#1900CE]/60">
                      LIVRABLE / RÉSULTAT
                    </span>
                    <div className="text-sm font-bold text-[#080A16] flex items-start gap-2">
                      <span className="text-[#01CE35]">→</span>
                      <span>{d.deliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Right: matin + atelier */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Matin (Théorie & Cadrage) */}
                  <div className="p-6 rounded-2xl border border-[#E2E4F0] bg-white hover:border-[#1900CE]/20 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-md bg-[#1900CE]/10 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[#1900CE]">AM</span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#525875] tracking-widest uppercase">
                        Cadrage & Norme
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {d.morning.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#080A16] font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E2E4F0] shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Après-midi (Atelier Pratique) */}
                  <div className="relative p-6 rounded-2xl border-2 border-[#1900CE] bg-[#F8F9FD] shadow-sm hover:shadow-lg hover:shadow-[#1900CE]/10 transition-all overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1900CE]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-md bg-[#1900CE] flex items-center justify-center shadow-inner">
                        <span className="text-[10px] font-bold text-white">PM</span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#1900CE] tracking-widest uppercase">
                        {d.workshop}
                      </span>
                    </div>
                    <p className="text-sm text-[#080A16] font-medium leading-relaxed">
                      {d.workshopDesc}
                    </p>
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
