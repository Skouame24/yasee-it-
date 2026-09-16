"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "La formation est-elle certifiante ?",
      a: "La formation prépare à la certification officielle PECB Certified ISO/IEC 27001 Lead Implementer. L’examen officiel est inclus dans le tarif de la formation. La certification finale est délivrée par PECB selon ses critères et conditions.",
    },
    {
      q: "L’examen est-il inclus ?",
      a: "Oui. L’examen officiel PECB est inclus dans le package de formation, selon les conditions applicables.",
    },
    {
      q: "La formation est-elle adaptée aux débutants ?",
      a: "La formation s’adresse principalement aux professionnels disposant déjà d’une expérience en systèmes d’information, cybersécurité, gouvernance, risque, audit ou conformité. Une connaissance préalable générale des principes de sécurité de l’information est recommandée.",
    },
    {
      q: "Faut-il être technicien pour suivre la formation ?",
      a: "Non.\n\nISO 27001 est avant tout une démarche de management de la sécurité de l’information. La formation est particulièrement pertinente pour les profils cybersécurité, GRC, risque, audit, IT management et gouvernance.",
    },
    {
      q: "La formation est-elle en français ?",
      a: "Oui.",
    },
    {
      q: "La formation est-elle entièrement en ligne ?",
      a: "Oui. La session est organisée à distance.",
    },
    {
      q: "Que vais-je réellement savoir faire après la formation ?",
      a: "Vous serez capable de comprendre et structurer une démarche de mise en œuvre d’un SMSI, d’aborder l’appréciation et le traitement des risques, de travailler sur la Déclaration d’Applicabilité, de préparer les éléments nécessaires à l’audit et de piloter l’amélioration du système.",
    },
    {
      q: "Puis-je faire financer la formation par mon entreprise ?",
      a: "Oui. YASEE IT peut fournir les éléments administratifs nécessaires à une prise en charge entreprise, notamment devis et facture proforma.",
    },
    {
      q: "Et si je souhaite inscrire plusieurs collaborateurs ?",
      a: "Contactez-nous pour bénéficier d’une proposition entreprise adaptée au nombre de participants.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase">
            Questions Fréquentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Questions fréquentes
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Liste Accordéon des 9 questions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-slate-100">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
