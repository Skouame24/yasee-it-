"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldCheckIcon, AwardIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  city?: string;
  avatarBg: string;
  initials: string;
  certBadge: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Franck Patrick OUEDRAOGO",
    role: "Expert Cybersécurité RSSI / GRC",
    avatarBg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    initials: "FO",
    certBadge: "ISO 27001 Lead Auditor",
    quote:
      "Je tenais à vous remercier pour la qualité de la formation ISO 27001 Lead Auditor dont j'ai bénéficié en mars 2025. Votre approche pédagogique et votre expertise m'ont permis de consolider mes fondamentaux en cybersécurité, notamment sur les méthodologies d'audit et la maîtrise du SMSI.\n\nCette certification constitue une étape importante dans mon parcours professionnel, et je suis reconnaissant de l'accompagnement reçu.\n\nEncore merci pour votre engagement et la qualité des échanges.",
    highlight: "Méthodologies d'audit & maîtrise du SMSI",
  },
  {
    name: "Sophonie HOUENOU",
    role: "Chargé Infrastructures Réseaux et Télécommunications",
    avatarBg: "bg-gradient-to-br from-emerald-600 to-teal-700",
    initials: "SH",
    certBadge: "Formation & Conformité ISO",
    quote:
      "Je recommande vivement cette formation ISO pour la qualité de son contenu et l'expertise du formateur. Elle m'a permis de mieux comprendre les exigences de la norme et d'acquérir des compétences pratiques immédiatement applicables dans mon activité professionnelle. Une formation enrichissante, claire et très pertinente pour toute personne souhaitant renforcer ses connaissances en management de la qualité et conformité ISO.",
    highlight: "Compétences pratiques immédiatement applicables",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-play soft (change toutes les 7 secondes si non survolé)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Gestion du swipe tactile sur mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="temoignages"
      className="py-24 bg-slate-50/70 text-slate-900 border-b border-slate-200/80 relative overflow-hidden select-none"
    >
      {/* Halos subtils d'arrière-plan */}
      <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold tracking-widest text-blue-700 uppercase">
            <AwardIcon className="w-4 h-4 text-blue-600" />
            <span>Retours d'expérience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Retours d'expérience
          </h2>
        </div>

        {/* ── CAROUSEL SOFT SLIDER AVEC FLÈCHES LATÉRALES ── */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Flèche gauche */}
          <button
            onClick={handlePrev}
            aria-label="Témoignage précédent"
            className="absolute -left-4 sm:-left-6 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-blue-400 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            aria-label="Témoignage suivant"
            className="absolute -right-4 sm:-right-6 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-blue-400 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Fenêtre de glissement (Slide Window) */}
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lg shadow-slate-200/50">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8"
                >
                  {/* Badge Officiel */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-800">
                      <ShieldCheckIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{t.certBadge}</span>
                    </div>
                  </div>

                  {/* Citation Grand Format */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif select-none pointer-events-none">
                      “
                    </span>
                    <div className="relative text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal italic pl-4 space-y-3">
                      {t.quote.split("\n\n").map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Pied de carte : Profil auteur + Point fort */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${t.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {t.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-600">
                          {t.role}
                        </p>
                        {(t.company || t.city) && (
                          <p className="text-xs text-slate-400 font-medium">
                            {[t.company, t.city].filter(Boolean).join(" • ")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-blue-900 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
                        ✓ {t.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── INDICATEURS DE SLIDE (Pills souples) ── */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
