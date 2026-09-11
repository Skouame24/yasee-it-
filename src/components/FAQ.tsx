"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDownIcon } from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    q: "Quels sont les prérequis réels pour suivre cette formation ?",
    a: "Des connaissances de base en sécurité de l'information, en informatique ou en gestion de projet sont recommandées. Aucune certification préalable n'est exigée. Le Jour 1 assure une mise à niveau complète sur le vocabulaire et les principes fondamentaux de la famille ISO 27000.",
  },
  {
    q: "Comment se déroule concrètement l'examen officiel de certification PECB ?",
    a: "L'examen a lieu le 5e jour en ligne (ou ultérieurement à la date de votre choix sur la plateforme officielle PECB Exams). D'une durée de 3 heures, il se déroule à livre ouvert (Open Book) : vous avez accès à l'intégralité du matériel de cours pour traiter des questions situationnelles et scénarisées.",
  },
  {
    q: "Mon entreprise peut-elle financer cette formation ?",
    a: "Oui, un grand nombre de nos participants sont financés par leur employeur. YASEE IT vous émet un devis proforma sous 24h, une convention de formation professionnelle conforme et une facture avec toutes les mentions fiscales réglementaires.",
  },
  {
    q: "Que se passe-t-il si je n'ai pas encore 5 ans d'expérience dans la sécurité ?",
    a: "Tous les participants passent le même examen. Si vous le réussissez sans avoir encore 5 ans d'expérience, PECB vous délivre immédiatement le titre officiel « PECB Certified Provisional Implementer ». Dès que vous atteignez le seuil d'expérience requis, votre titre est revalorisé en « Lead Implementer » sans repasser d'examen.",
  },
  {
    q: "Que se passe-t-il en cas d'échec à l'examen de certification ?",
    a: "La politique officielle de PECB inclut un droit de repassage gratuit de l'examen (second attempt) valable pendant 12 mois. Nos formateurs effectuent également un débriefing individuel pour cibler vos axes de progression.",
  },
  {
    q: "Quels sont les horaires et le format exact ?",
    a: "La formation se déroule 100% en ligne en français, du 14 au 18 Décembre 2026. Les matinées sont consacrées aux cadres normatifs et méthodes ; les après-midis sont dédiés à la manipulation directe de modèles et cas réels d'entreprises.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Header center rises
    if (headerRef.current) {
      tl.fromTo(
        Array.from(headerRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }

    // FAQ items stagger up
    if (faqContainerRef.current) {
      tl.fromTo(
        Array.from(faqContainerRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="faq" className="py-24 sm:py-32 bg-white border-b border-[#E2E4F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E4F0] text-[11px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            <span>QUESTIONS FRÉQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight">
            Foire Aux Questions
          </h2>

          <p className="text-base text-[#525875] max-w-xl mx-auto">
            Toutes les réponses pour préparer sereinement votre inscription et le passage de la certification.
          </p>
        </div>

        {/* Accordion */}
        <div ref={faqContainerRef} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E2E4F0] bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F9FD]/60 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-[#080A16]">
                    {faq.q}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-[#1900CE] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#E2E4F0]/60 text-sm text-[#525875] leading-relaxed">
                    {faq.a}
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
