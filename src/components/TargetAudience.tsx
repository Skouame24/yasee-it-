"use client";

import React from "react";
import { UsersIcon } from "./Icons";

export default function TargetAudience() {
  const audiences = [
    {
      role: "RSSI / Responsable cybersécurité",
      mission: "Structurer ou renforcer la gouvernance de la sécurité de l’information.",
    },
    {
      role: "DSI / IT Manager",
      mission: "Intégrer les exigences de sécurité dans la gouvernance et les processus IT.",
    },
    {
      role: "GRC / Risk Manager",
      mission: "Piloter l’identification, l’évaluation et le traitement des risques.",
    },
    {
      role: "Auditeur / Contrôleur interne",
      mission: "Comprendre le fonctionnement d’un SMSI et préparer les audits.",
    },
    {
      role: "Consultant cybersécurité / GRC",
      mission: "Accompagner les organisations dans leurs démarches ISO/IEC 27001.",
    },
    {
      role: "Professionnel IT en évolution",
      mission: "Développer une compétence internationale en gouvernance et management de la sécurité de l’information.",
    },
  ];

  return (
    <section id="public-cible" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Public Concerné
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Une formation conçue pour les professionnels qui doivent faire avancer la sécurité.
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Grille des 6 profils */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.mission}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
