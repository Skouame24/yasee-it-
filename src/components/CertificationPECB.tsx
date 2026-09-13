"use client";

import React from "react";
import { CheckCircleIcon, ShieldCheckIcon } from "./Icons";

export default function CertificationPECB() {
  const inclusions = [
    "Formation officielle",
    "Support de formation",
    "Examen officiel PECB",
    "Préparation à l’examen",
    "Études de cas et exercices",
    "Modèles et supports opérationnels",
    "Attestation de formation selon les conditions applicables",
  ];

  return (
    <section id="certification" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Accréditation Officielle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Une formation certifiante PECB
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Texte de présentation */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Cette formation prépare à la certification PECB ISO/IEC 27001 Lead Implementer, destinée aux professionnels souhaitant développer leurs compétences pour mettre en œuvre, maintenir et améliorer un Système de Management de la Sécurité de l’Information.
          </p>
        </div>

        {/* Bloc Ce qui est inclus */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm mb-10">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide flex items-center gap-2">
            <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
            <span>Ce qui est inclus</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3"
              >
                <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Encadré Important */}
        <div className="p-6 sm:p-7 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
            !
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
              Important
            </span>
            <p className="text-sm sm:text-base text-amber-950 font-medium leading-relaxed">
              La certification finale est délivrée par PECB selon ses propres critères, conditions et processus de certification.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
