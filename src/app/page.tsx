"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyThisTraining from "@/components/WhyThisTraining";
import TargetAudience from "@/components/TargetAudience";
import WhyInvest from "@/components/WhyInvest";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import Deliverables from "@/components/Deliverables";
import Program from "@/components/Program";
import Pedagogy from "@/components/Pedagogy";
import TrainersAndStats from "@/components/TrainersAndStats";
import WhyYaseeIT from "@/components/WhyYaseeIT";
import CertificationPECB from "@/components/CertificationPECB";
import Pricing from "@/components/Pricing";
import Enterprise from "@/components/Enterprise";
import LimitedSeats from "@/components/LimitedSeats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import FinalCTA from "@/components/FinalCTA";
import EnrollmentSection from "@/components/EnrollmentSection";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#080A16] selection:bg-[#EEECFC] selection:text-[#1900CE]">
      {/* 00. Navigation */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* 01. Hero & Interactive SMSI Operating Console */}
      <Hero onOpenModal={() => setModalOpen(true)} />

      {/* 04. Section : Pourquoi cette formation ? */}
      <WhyThisTraining />

      {/* 05. Section : Ce que vous saurez faire */}
      <WhatYouWillLearn />

      {/* 06. Section : Les livrables */}
      <Deliverables />

      {/* 07. Section : À qui s'adresse la formation ? */}
      <TargetAudience />

      {/* 08. Section : Pourquoi investir dans ISO 27001 ? */}
      <WhyInvest />

      {/* 09. Section : Programme sur 5 jours */}
      <Program />

      {/* 10. Section : Approche pédagogique */}
      <Pedagogy />

      {/* 11. Section : Formateurs */}
      <TrainersAndStats />

      {/* 12. Section : Pourquoi YASEE IT ? */}
      <WhyYaseeIT />

      {/* 13. Section : Certification PECB */}
      <CertificationPECB />

      {/* 14. Section : Investissement */}
      <Pricing onOpenModal={() => setModalOpen(true)} />

      {/* 15. Section : Entreprises */}
      <Enterprise onOpenModal={() => setModalOpen(true)} />

      {/* 16. Section : Places limitées */}
      <LimitedSeats onOpenModal={() => setModalOpen(true)} />

      {/* 17. Section : FAQ */}
      <FAQ />

      {/* 18. Section : Dernier CTA */}
      <FinalCTA onOpenModal={() => setModalOpen(true)} />

      {/* 22. Section : Formulaire d’inscription directement sur la page */}
      <EnrollmentSection />

      {/* 19. Section : Footer Institutionnel */}
      <Footer />

      {/* Barre d'actions flottantes (WhatsApp, Contact) */}
      <FloatingActions onOpenModal={() => setModalOpen(true)} />

      {/* 22. Formulaire d’inscription (Modale) */}
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
