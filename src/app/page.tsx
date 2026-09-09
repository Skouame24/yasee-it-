"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CrisisNarrative from "@/components/CrisisNarrative";
import TargetAudience from "@/components/TargetAudience";
import CompetenciesLoop from "@/components/CompetenciesLoop";
import ProgramTimeline from "@/components/ProgramTimeline";
import FieldReality from "@/components/FieldReality";
import TrainersAndStats from "@/components/TrainersAndStats";
import CertificationPECB from "@/components/CertificationPECB";
import PricingAndEnrollment from "@/components/PricingAndEnrollment";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#080A16] selection:bg-[#EEECFC] selection:text-[#1900CE]">
      {/* 00. Navigation */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* 01. Hero & Interactive SMSI Operating Console */}
      <Hero onOpenModal={() => setModalOpen(true)} />

      {/* 02. Chapitre 1 : Le Constat de Crise (Mode Sombre Immersif) */}
      <CrisisNarrative />

      {/* 03. Chapitre 2 : Les 3 Profils Cibles */}
      <TargetAudience onOpenModal={() => setModalOpen(true)} />

      {/* 04. Chapitre 3 : Le Cycle des 6 Compétences (Stepper Épuré) */}
      <CompetenciesLoop />

      {/* 05. Chapitre 4 : Le Syllabus Officiel des 5 Jours */}
      <ProgramTimeline />

      {/* 06. Chapitre 5 : L'Épreuve du Réel (Méthode de Terrain) */}
      <FieldReality />

      {/* 07. Chapitre 6 : L'Autorité des Praticiens & KPIs */}
      <TrainersAndStats />

      {/* 08. Chapitre 7 : L'Accréditation Internationale PECB */}
      <CertificationPECB />

      {/* 09. Chapitre 8 : Offre, Tarifs & Pré-Inscription */}
      <PricingAndEnrollment onOpenModal={() => setModalOpen(true)} />

      {/* 10. Questions Fréquentes */}
      <FAQ />

      {/* 11. Pied de Page Institutionnel */}
      <Footer />

      {/* Modale de Réservation Instantanée */}
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
