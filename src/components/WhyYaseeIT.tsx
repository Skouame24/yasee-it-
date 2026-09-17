"use client";

import React from "react";
import { ShieldCheckIcon, CheckCircleIcon } from "./Icons";

export default function WhyYaseeIT() {
  const pillars = [
    {
      title: "Expérience terrain",
      desc: "Une formation nourrie par des expériences concrètes en cybersécurité, systèmes d’information, gouvernance et gestion des risques.",
    },
    {
      title: "Approche métier",
      desc: "Nous ne réduisons pas ISO 27001 à une succession d’exigences documentaires.",
    },
    {
      title: "Orientation mise en œuvre",
      desc: "Les concepts sont systématiquement reliés à leur application dans l’entreprise.",
    },
    {
      title: "Réalité africaine",
      desc: "Les cas et échanges tiennent compte des contraintes auxquelles sont confrontées les organisations en Afrique de l’Ouest : ressources, maturité, réglementation, gouvernance et priorisation des risques.",
    },
  ];

  return (
    <section id="pourquoi-yasee-it" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Une approche fondée sur l’expérience opérationnelle.
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
