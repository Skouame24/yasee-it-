"use client";

import React from "react";
import Image from "next/image";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E1E] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Training Description */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block">
                <Image
                  src="/logo.png"
                  alt="YASEE IT"
                  width={130}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Cabinet spécialisé en gouvernance, gestion des risques et cybersécurité opérationnelle. 
              Formation certifiante ISO/IEC 27001 Lead Implementer animée par des praticiens en activité.
            </p>
            <div className="text-xs text-[#01CE35] font-mono font-semibold">
              ● Cabinet &amp; Formateurs Certifiés PECB Trainer
            </div>
          </div>

          {/* Col 3: Navigation rapide */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white font-mono">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#pourquoi" className="hover:text-[#01CE35] transition-colors">
                  Pourquoi ISO 27001 ?
                </a>
              </li>
              <li>
                <a href="#profils" className="hover:text-[#01CE35] transition-colors">
                  Profils concernés
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-[#01CE35] transition-colors">
                  Ce que vous allez maîtriser
                </a>
              </li>
              <li>
                <a href="#programme" className="hover:text-[#01CE35] transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#formateurs" className="hover:text-[#01CE35] transition-colors">
                  Domaines d'expertise
                </a>
              </li>
              <li>
                <a href="#certification" className="hover:text-[#01CE35] transition-colors">
                  Certification PECB
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Session Dates & Tarifs */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white font-mono">
              SESSION OFFICIELLE
            </h4>
            <div className="space-y-2 text-slate-300">
              <p>
                <strong className="text-white">Dates :</strong> 14 – 18 Décembre 2026
              </p>
              <p>
                <strong className="text-white">Format :</strong> 100% En Ligne (Distanciel)
              </p>
              <p>
                <strong className="text-white">Langue :</strong> Français
              </p>
              <p>
                <strong className="text-white">Tarif :</strong> 800.000 FCFA
              </p>
              <p className="text-amber-300 font-semibold">
                ⚠️ Clôture : 30 Novembre 2026
              </p>
            </div>
          </div>

          {/* Col 5: Contact Direct */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-sm tracking-wider uppercase text-white font-mono">
              CONTACT &amp; SUPPORT
            </h4>
            <div className="space-y-3 text-slate-300">
              <a
                href="mailto:contact@yasee-it.com"
                className="flex items-center gap-2 hover:text-[#01CE35] transition-colors"
              >
                <MailIcon className="w-4 h-4 text-[#01CE35]" />
                <span>contact@yasee-it.com</span>
              </a>
              <a
                href="https://wa.me/2250711444588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#01CE35] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#01CE35]" />
                <span>Support WhatsApp Direct</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#01CE35]" />
                <span>Côte d'Ivoire &amp; International</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Mentions and PECB Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © 2026 YASEE IT. Tous droits réservés.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-300 max-w-xl">
            La certification PECB ISO/IEC 27001 Lead Implementer est une marque déposée et délivrée directement 
            par l'organisme certificateur international PECB selon ses règles d'examen et d'attribution.
          </p>
        </div>

      </div>
    </footer>
  );
}
