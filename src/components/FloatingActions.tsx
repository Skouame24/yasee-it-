"use client";

import React from "react";
import { WhatsAppIcon } from "./Icons";

interface FloatingActionsProps {
  onOpenModal: () => void;
}

export default function FloatingActions({ onOpenModal }: FloatingActionsProps) {
  return (
    <div className="fixed right-4 bottom-6 z-40 select-none">
      {/* Bouton WhatsApp sobre, discret et professionnel */}
      <a
        href="https://wa.me/2250711444588?text=Bonjour%20Groupe%20YASEE%20IT%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20ISO%2027001%20Lead%20Implementer."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
        aria-label="Échanger sur WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Échanger sur WhatsApp
        </span>
      </a>
    </div>
  );
}
