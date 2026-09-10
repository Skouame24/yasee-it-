"use client";

import React from "react";
import { WhatsAppIcon, CalendarIcon, FileCheckIcon } from "./Icons";

function SparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M7.757 16.243l-2.121 2.121m12.728 0l-2.121-2.121M7.757 7.757L5.636 5.636" />
    </svg>
  );
}

function ShoppingBagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993z" />
    </svg>
  );
}

interface FloatingActionsProps {
  onOpenModal: () => void;
}

export default function FloatingActions({ onOpenModal }: FloatingActionsProps) {
  return (
    <div className="fixed right-3 bottom-6 sm:right-6 sm:bottom-8 z-40 flex flex-col items-end gap-3 select-none">

      {/* 1. WhatsApp : Cercle vert au repos, se déplie en pilule au survol */}
      <a
        href="https://wa.me/2250700000000?text=Bonjour%20Groupe%20YASEE%20IT%2C%20je%20souhaite%20des%20informations%20sur%20vos%20formations%20ISO%2027001."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end h-12 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer p-1.5 overflow-hidden"
        aria-label="WhatsApp"
      >
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:px-3 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300 ease-out">
          WhatsApp
        </span>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </div>
      </a>

      {/* 2. Prendre RDV (Bleu Nuit) : Cercle au repos, se déplie en pilule au survol */}
      <button
        onClick={onOpenModal}
        className="group relative flex items-center justify-end h-12 rounded-full bg-[#0B0E1E] hover:bg-[#1900CE] text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer p-1.5 overflow-hidden"
        aria-label="Prendre RDV"
      >
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:px-3 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300 ease-out">
          Prendre RDV
        </span>
        <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
          <CalendarIcon className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* 3. Programme PDF (Bleu Vif) : Cercle au repos, se déplie en pilule au survol */}
      <button
        onClick={onOpenModal}
        className="group relative flex items-center justify-end h-12 rounded-full bg-[#1900CE] hover:bg-[#1400A6] text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer p-1.5 overflow-hidden"
        aria-label="Programme PDF"
      >
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:px-3 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300 ease-out">
          Programme PDF
        </span>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <SparklesIcon className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* 4. Devis & Réservation (Blanc) : Cercle blanc au repos, se déplie en pilule au survol */}
      <button
        onClick={onOpenModal}
        className="group relative flex items-center justify-end h-12 rounded-full bg-white border border-[#E3E4F0] hover:border-[#1900CE] text-[#0B0E1E] shadow-xl hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer p-1.5 overflow-hidden"
        aria-label="Devis & Réservation"
      >
        <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:px-3 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300 ease-out">
          Demander un Devis
        </span>
        <div className="w-9 h-9 rounded-full bg-[#F4F5FA] group-hover:bg-[#EEECFC] flex items-center justify-center shrink-0 transition-colors">
          <ShoppingBagIcon className="w-5 h-5 text-[#0B0E1E] group-hover:text-[#1900CE]" />
        </div>
      </button>

    </div>
  );
}
