"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#080A16] selection:bg-[#EEECFC] selection:text-[#1900CE]">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-32 space-y-12">
        
        <div className="space-y-4">
          <Link href="/" className="text-sm font-bold text-[#1900CE] hover:underline flex items-center gap-2">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#080A16] tracking-tight">
            Politique de Confidentialité
          </h1>
          <p className="text-slate-500 font-medium">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="prose prose-slate max-w-none text-[#525875] space-y-8">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#080A16]">1. Introduction</h2>
            <p>
              Bienvenue sur le site de <strong>YASEE IT</strong>. Nous accordons une grande importance à la protection et à la confidentialité de vos données personnelles. La présente politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons les informations que vous nous confiez lors de l'utilisation de nos services et de notre site web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#080A16]">2. Données collectées</h2>
            <p>
              Nous collectons les données personnelles que vous nous fournissez volontairement, notamment :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vos informations d'identité (nom, prénom)</li>
              <li>Vos coordonnées (adresse e-mail, numéro de téléphone)</li>
              <li>Vos informations professionnelles (entreprise, poste) dans le cadre des formations professionnelles B2B.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#080A16]">3. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Le traitement de vos demandes d'inscription ou de devis</li>
              <li>L'organisation et la gestion administrative des formations (ex. PECB Certified ISO/IEC 27001 Lead Implementer)</li>
              <li>La communication d'informations importantes relatives à nos services</li>
              <li>L'amélioration de l'expérience utilisateur sur notre site web</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#080A16]">4. Partage et protection de vos données</h2>
            <p>
              YASEE IT ne vend, ne loue, ni ne cède vos données personnelles à des tiers à des fins commerciales. Vos informations peuvent être transmises à des partenaires stricts (tels que PECB pour l'inscription à l'examen officiel) uniquement dans le cadre de la prestation demandée. 
              <br/><br/>
              Nous mettons en œuvre les mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre toute destruction, perte, altération ou accès non autorisé.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#080A16]">5. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable sur la protection des données personnelles, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Droit d'accès et de rectification de vos données</li>
              <li>Droit d'effacement et à l'oubli</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit de vous opposer au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits ou pour toute question relative à vos données personnelles, vous pouvez nous contacter par e-mail à l'adresse suivante :
            </p>
            <div className="p-4 bg-[#F8F9FD] rounded-lg border border-[#E2E4F0] inline-block mt-2">
              <a href="mailto:info@yasee-it.ci" className="text-[#1900CE] font-bold text-lg hover:underline">
                info@yasee-it.ci
              </a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
