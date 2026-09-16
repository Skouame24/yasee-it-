"use client";

import React, { useState, useEffect, useRef } from "react";
import { StarIcon, ShieldCheckIcon, AwardIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  city: string;
  avatarBg: string;
  initials: string;
  certBadge: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Koffi K.",
    role: "Responsable Sécurité des Systèmes d'Information (RSSI)",
    company: "Groupe Bancaire Régional",
    city: "Abidjan, Côte d'Ivoire",
    avatarBg: "bg-gradient-to-br from-blue-600 to-indigo-700",
    initials: "KK",
    certBadge: "PECB Certified ISO/IEC 27001 Lead Implementer",
    quote:
      "La formation avec YASEE IT va bien au-delà de la théorie académique. Nous avons manipulé des modèles concrets de PSSI, de SoA (DdA) et de registres des risques immédiatement transposables dans notre infrastructure bancaire. L'examen a été réussi du premier coup avec une réelle confiance.",
    highlight: "Modèles directement exploitables en environnement bancaire",
  },
  {
    name: "Aminata D.",
    role: "Responsable Conformité & Risques GRC",
    company: "Opérateur Télécom & FinTech",
    city: "Dakar / Abidjan",
    avatarBg: "bg-gradient-to-br from-emerald-600 to-teal-700",
    initials: "AD",
    certBadge: "PECB Certified ISO/IEC 27001 Lead Implementer",
    quote:
      "Une session intensive, particulièrement structurée et sans langue de bois. Les formateurs sont des experts chevronnés en activité qui partagent un retour d'expérience précieux face aux régulateurs et aux incidents réels. La préparation à l'examen officiel PECB était chirurgicale.",
    highlight: "Excellente maîtrise des exigences réglementaires",
  },
  {
    name: "Marc-Antoine T.",
    role: "Consultant Senior Cybersécurité & Audit",
    company: "Cabinet Conseil International",
    city: "Abidjan, Côte d'Ivoire",
    avatarBg: "bg-gradient-to-br from-indigo-600 to-violet-700",
    initials: "MT",
    certBadge: "PECB Certified ISO/IEC 27001 Lead Implementer",
    quote:
      "Ce qui distingue nettement YASEE IT, c'est l'approche opérationnelle. Ce ne sont pas des diapositives lues passivement, mais des ateliers vivants où chaque exigence de la norme est confrontée aux contraintes budgétaires, techniques et humaines réelles d'une entreprise.",
    highlight: "Ateliers pragmatiques et cas d'usage réels",
  },
  {
    name: "Dr. Sékou O.",
    role: "Directeur des Systèmes d'Information (DSI)",
    company: "Secteur Public & Services Numériques",
    city: "Yamoussoukro, Côte d'Ivoire",
    avatarBg: "bg-gradient-to-br from-slate-700 to-slate-900",
    initials: "SO",
    certBadge: "PECB Certified ISO/IEC 27001 Lead Implementer",
    quote:
      "J'avais besoin d'aligner notre gouvernance sur les meilleurs standards internationaux. Grâce à cette formation certifiante, j'ai acquis le cadre méthodologique exact pour piloter notre SMSI et mobiliser la Direction Générale autour des investissements prioritaires de sécurité.",
    highlight: "Alignement stratégique avec la Direction Générale",
  },
  {
    name: "Fatoumata B.",
    role: "Lead Auditrice Interne & Contrôle Permanent",
    company: "Compagnie d'Énergie & Industrie",
    city: "Abidjan, Côte d'Ivoire",
    avatarBg: "bg-gradient-to-br from-amber-600 to-orange-700",
    initials: "FB",
    certBadge: "PECB Certified ISO/IEC 27001 Lead Implementer",
    quote:
      "La revue approfondie des 93 mesures de sécurité de l'Annexe A 2022 et la méthode de traitement des risques m'ont permis de clarifier immédiatement notre plan d'audit interne. Une formation d'un très grand professionnalisme.",
    highlight: "Maîtrise complète des contrôles de l'Annexe A",
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
        
        {/* En-tête de section soft & institutionnel */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold tracking-widest text-blue-700 uppercase">
            <AwardIcon className="w-4 h-4 text-blue-600" />
            <span>Retours d'Expérience Institutionnels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ils ont validé la démarche sur le terrain.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Découvrez comment des responsables sécurité, conformité et directeurs IT ont renforcé la gouvernance de leur organisation grâce à la formation{" "}
            <strong className="text-slate-800 font-semibold">PECB Certified ISO/IEC 27001 Lead Implementer</strong> dispensée par YASEE IT.
          </p>

          {/* Indicateurs clés de confiance */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </span>
              <span className="font-bold text-slate-900 ml-1">4.9 / 5</span>
              <span>note moyenne</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
              <span>Examen officiel inclus</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100 % experts en activité</span>
            </div>
          </div>
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
                  {/* Étoiles et Badge Officiel */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-800">
                      <ShieldCheckIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{t.certBadge}</span>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Citation Grand Format */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif select-none pointer-events-none">
                      “
                    </span>
                    <p className="relative text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal italic pl-4">
                      {t.quote}
                    </p>
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
                        <p className="text-xs text-slate-400 font-medium">
                          {t.company} • {t.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-blue-900 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
                        ✓ {t.highlight}
                      </span>
                      <span className="text-xs font-mono text-emerald-600 font-bold hidden sm:inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Certifié
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
