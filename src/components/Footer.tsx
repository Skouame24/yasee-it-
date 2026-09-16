"use client";

import React from "react";
import Image from "next/image";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#060913] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Col 1 : Identité & Positionnement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block">
                <Image
                  src="/logo.png"
                  alt="YASEE IT"
                  width={120}
                  height={38}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-medium">
              Cabinet de conseil &amp; formation en cybersécurité, GRC et management des risques.
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-blue-300">
              PECB Certified ISO/IEC 27001 Lead Implementer — Décembre 2026
            </div>
          </div>

          {/* Col 2 : Navigation rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#accueil" className="hover:text-blue-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#pourquoi-cette-formation" className="hover:text-blue-400 transition-colors">
                  Formation
                </a>
              </li>
              <li>
                <a href="#programme" className="hover:text-blue-400 transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#formateurs" className="hover:text-blue-400 transition-colors">
                  Formateurs
                </a>
              </li>
              {/* <li>
                <a href="#tarif" className="hover:text-blue-400 transition-colors">
                  Tarif
                </a>
              </li> */}
              <li>
                <a href="#temoignages" className="hover:text-blue-400 transition-colors">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 : Contact officiel */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contact &amp; Échanges
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@yasee-it.ci" className="hover:text-white transition-colors">
                  info@yasee-it.ci
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/2250700000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp / Téléphone
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne de séparation & Tagline finale (Section 25) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 text-center sm:text-left">
            ISO 27001 ne s’apprend pas seulement. Elle se met en œuvre.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500">
            <a href="/politique-de-confidentialite" className="hover:text-slate-300 transition-colors">
              Politique de confidentialité
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Conditions générales
            </a>
            <span>•</span>
            <span>© 2026 YASEE IT. Tous droits réservés.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
