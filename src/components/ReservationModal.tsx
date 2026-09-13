"use client";

import React, { useState } from "react";
import { XMarkIcon, CheckCircleIcon, WhatsAppIcon, ShieldCheckIcon } from "./Icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0B0E1E]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E3E4F0] z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5B6178] hover:text-[#0B0E1E] hover:bg-[#F4F5FA] transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E6FAEB] border border-[#01CE35] text-[#01CE35] flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B0E1E]">
              Demande enregistrée !
            </h3>
            <p className="text-sm text-[#5B6178]">
              Merci <strong>{formData.fullName}</strong>. Un conseiller YASEE IT vous recontacte 
              par WhatsApp ou email avec votre fiche d'inscription et la facture proforma.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#1900CE] text-white font-bold text-xs uppercase"
              >
                Fermer la fenêtre
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEECFC] text-[#1900CE] text-[11px] font-mono font-bold mb-2">
                <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
                <span>Session 14 – 18 Décembre 2026</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B0E1E]">
                S'inscrire
              </h3>
              <p className="text-xs text-[#5B6178]">
                ISO/IEC 27001 Lead Implementer • Formation 100% en ligne • 800.000 FCFA
              </p>
            </div>

            {/* Quick WhatsApp Shortcut */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-950 font-medium">
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Inscription rapide par WhatsApp ?</span>
              </div>
              <a
                href="https://wa.me/2250711444588?text=Bonjour%20YASEE%20IT%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20formation%20ISO%2027001%20Lead%20Implementer%20de%20d%C3%A9cembre%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shrink-0"
              >
                Écrire
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#0B0E1E] mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Jean Koffi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E3E4F0] bg-white text-sm focus:outline-none focus:border-[#1900CE]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0B0E1E] mb-1">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E3E4F0] bg-white text-sm focus:outline-none focus:border-[#1900CE]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B0E1E] mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+225 07 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E3E4F0] bg-white text-sm focus:outline-none focus:border-[#1900CE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0B0E1E] mb-1">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de l'organisation"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E3E4F0] bg-white text-sm focus:outline-none focus:border-[#1900CE]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0B0E1E] mb-1">
                    Poste / Fonction
                  </label>
                  <input
                    type="text"
                    placeholder="RSSI, DSI, Consultant..."
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E3E4F0] bg-white text-sm focus:outline-none focus:border-[#1900CE]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#1900CE] hover:bg-[#1400A6] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Confirmer ma réservation
                </button>
              </div>

              <p className="text-[#525875]">
                Date de cloture : <strong>30 Novembre 2026</strong>. Places limitées.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
