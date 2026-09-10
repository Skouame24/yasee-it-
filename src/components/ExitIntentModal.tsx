"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon, CheckCircleIcon, CalendarIcon } from "./Icons";

interface ExitIntentModalProps {
  onOpenReservation: () => void;
}

export default function ExitIntentModal({ onOpenReservation }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed in session
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem("yasee_exit_modal_dismissed");
      if (dismissed) {
        setHasDismissed(true);
        return;
      }
    }

    let triggered = false;

    // Trigger UNIQUE : déclenchement UNIQUEMENT à l'atteinte effective du Footer (tout en bas de page)
    const handleScroll = () => {
      if (triggered || hasDismissed) return;
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const distanceToBottom = totalHeight - scrollPosition;

      // Déclenche uniquement quand l'utilisateur est véritablement tout en bas au niveau du footer (< 250px du bas)
      if (totalHeight > 0 && distanceToBottom < 250 && scrollPosition / totalHeight >= 0.93) {
        triggered = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("yasee_exit_modal_dismissed", "true");
    }
  };

  const handleAccept = () => {
    handleClose();
    onOpenReservation();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#0B0E1E]/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-[#E3E4F0] z-10 text-center animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#0B0E1E] text-white flex items-center justify-center hover:bg-[#1900CE] transition-colors cursor-pointer shadow-md"
          aria-label="Fermer"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>

        {/* Top Tagline */}
        <div className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#1900CE] mb-3">
          Avant de partir
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0E1E] leading-tight tracking-tight mb-3">
          Un échange de 30 min avec un expert ?
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5B6178] leading-relaxed max-w-md mx-auto mb-6">
          On cadre votre besoin et on vous dit concrètement par où commencer pour votre certification ISO 27001. Gratuit et sans engagement.
        </p>

        {/* Key Points / Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F5FA] border border-[#E3E4F0] text-xs font-semibold text-[#0B0E1E]">
            <CheckCircleIcon className="w-4 h-4 text-[#01CE35]" />
            <span>Gratuit</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F5FA] border border-[#E3E4F0] text-xs font-semibold text-[#0B0E1E]">
            <CheckCircleIcon className="w-4 h-4 text-[#01CE35]" />
            <span>30 min en visio</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F5FA] border border-[#E3E4F0] text-xs font-semibold text-[#0B0E1E]">
            <CheckCircleIcon className="w-4 h-4 text-[#01CE35]" />
            <span>Sans engagement</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleAccept}
            className="w-full py-4 px-6 rounded-2xl bg-[#0B0E1E] hover:bg-[#1900CE] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <CalendarIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            <span>Prendre RDV gratuitement</span>
          </button>

          <button
            onClick={handleClose}
            className="text-xs text-[#5B6178] hover:text-[#0B0E1E] font-medium transition-colors underline-offset-4 hover:underline py-1 cursor-pointer"
          >
            Non merci, plus tard
          </button>
        </div>

      </div>
    </div>
  );
}
