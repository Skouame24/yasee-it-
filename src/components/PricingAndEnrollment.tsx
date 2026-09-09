"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  CheckCircleIcon, 
  AlertTriangleIcon, 
  WhatsAppIcon, 
  MailIcon, 
  PhoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon 
} from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface PricingProps {
  onOpenModal: () => void;
}

export default function PricingAndEnrollment({ onOpenModal }: PricingProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(badgeRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    .fromTo(headingRef.current,
      { y: 55, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: "power4.out" },
      "-=0.3"
    )
    .fromTo(subtitleRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(contentRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
      "-=0.3"
    );
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="tarifs" className="py-20 bg-white border-b border-[#E2E4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div ref={badgeRef} style={{ opacity: 0 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FD] border border-[#E2E4F0] text-[11px] font-mono font-bold tracking-widest text-[#1900CE] uppercase">
            <span>CHAPITRE 08 : OFFRE OFFICIELLE &amp; INSCRIPTION</span>
          </div>

          <h2 ref={headingRef} style={{ opacity: 0 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080A16] tracking-tight leading-tight">
            Prêt à faire certifier votre SMSI ? <br />
            <span className="text-[#1900CE]">Réservez votre place pour Décembre 2026.</span>
          </h2>

          <p ref={subtitleRef} style={{ opacity: 0 }} className="text-sm sm:text-base text-[#525875] font-normal leading-relaxed">
            Rejoignez une cohorte d'élite conçue pour transformer la norme ISO 27001 en réflexe opérationnel de défense.
          </p>
        </div>

        {/* Urgency Alert Bar */}
        <div className="rounded-2xl bg-[#FFF8E7] border-2 border-[#E8CA72] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-sm shrink-0">
              ⚡
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#080A16]">
                Clôture impérative des inscriptions : 10 Décembre 2026
              </h4>
              <p className="text-[11px] text-[#525875]">
                Nombre de places strictement limité pour garantir le suivi individuel lors des ateliers pratiques.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs font-bold bg-white px-3 py-1.5 rounded-lg border border-[#E8CA72] text-amber-900 shadow-sm">
            SESSION : 14 AU 18 DÉC. 2026
          </div>
        </div>

        {/* Pricing & Form Split Layout */}
        <div ref={contentRef} style={{ opacity: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Value Proposition & Pricing Breakdown */}
          <div className="lg:col-span-6 rounded-3xl border-2 border-[#1900CE] bg-white p-6 sm:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-[#E2E4F0] pb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1900CE]">
                  TARIF OFFICIEL UNIQUE TOUT COMPRIS
                </span>
                <span className="bg-[#E6FAEB] text-[#01CE35] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#01CE35]/30">
                  SESSION DÉCEMBRE
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-[#080A16] font-mono tracking-tight">
                  800.000
                </span>
                <span className="text-lg font-bold text-[#1900CE]">
                  FCFA TTC
                </span>
              </div>
              <p className="text-xs text-[#525875] mt-1">
                Possibilité de prise en charge entreprise • Convention &amp; Facture sous 24h
              </p>
            </div>

            {/* Checklist of What's Included */}
            <div className="space-y-3">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#080A16]">
                Ce qui est intégralement inclus :
              </span>
              <div className="space-y-2">
                {[
                  "5 Jours de formation intensive 100% en direct (40 heures)",
                  "Voucher d'examen officiel PECB ISO/IEC 27001 Lead Implementer",
                  "Garantie PECB de repassage gratuit de l'examen (12 mois)",
                  "Support de cours officiel officiel PECB + Normes annotées",
                  "Modèles de livrables réutilisables (PSSI, SoA 93 contrôles, Matrice Risques)",
                  "Certificat officiel accrédité IAS ISO/IEC 17024 délivré après validation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#080A16]">
                    <CheckCircleIcon className="w-4 h-4 text-[#01CE35] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instant Button */}
            <button
              onClick={onOpenModal}
              className="w-full py-4 rounded-xl bg-[#1900CE] hover:bg-[#1200A3] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#1900CE]/25 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <span>Réserver ma place instantanément</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

          </div>

          {/* Right: Instant Registration / Quote Form */}
          <div className="lg:col-span-6 rounded-3xl border border-[#E2E4F0] bg-[#F8F9FD] p-6 sm:p-10 shadow-sm space-y-6">
            
            <div>
              <h3 className="text-xl font-extrabold text-[#080A16]">
                Demande de Réservation &amp; Devis Proforma
              </h3>
              <p className="text-xs text-[#525875] mt-1">
                Remplissez ce formulaire pour bloquer votre place ou recevoir un devis entreprise sous 24h.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#E6FAEB] border border-[#01CE35]/30 text-center space-y-3">
                <CheckCircleIcon className="w-10 h-10 text-[#01CE35] mx-auto" />
                <h4 className="text-base font-bold text-[#080A16]">
                  Demande enregistrée avec succès !
                </h4>
                <p className="text-xs text-[#525875]">
                  Notre équipe vous contacte sous 2 heures ouvrées avec votre convention de formation et les modalités d'accès.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-[#525875] mb-1">
                    Nom &amp; Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Kouassi Jean-Marc"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-white text-xs font-semibold text-[#080A16] focus:outline-none focus:border-[#1900CE]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-[#525875] mb-1">
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean.kouassi@entreprise.ci"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-white text-xs font-semibold text-[#080A16] focus:outline-none focus:border-[#1900CE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-[#525875] mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+225 07 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-white text-xs font-semibold text-[#080A16] focus:outline-none focus:border-[#1900CE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-[#525875] mb-1">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Banque / Télécoms"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-white text-xs font-semibold text-[#080A16] focus:outline-none focus:border-[#1900CE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-[#525875] mb-1">
                      Fonction actuelle
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: RSSI, DSI, Consultant"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-white text-xs font-semibold text-[#080A16] focus:outline-none focus:border-[#1900CE]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-xl bg-[#080A16] hover:bg-[#1900CE] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Envoyer ma demande de pré-inscription →
                </button>
              </form>
            )}

            {/* Direct Contact Options */}
            <div className="pt-3 border-t border-[#E2E4F0] flex flex-wrap items-center justify-between text-xs text-[#525875] gap-2">
              <span>Besoin d'un devis immédiat ?</span>
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01CE35] font-bold flex items-center gap-1.5 hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
