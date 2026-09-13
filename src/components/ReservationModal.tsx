"use client";

import React, { useState } from "react";
import { XMarkIcon, CheckCircleIcon } from "./Icons";

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
    role: "",
    company: "",
    cityCountry: "",
    registrationType: "Participant individuel",
    message: "",
    acceptTerms: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Merci pour votre demande.
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto font-medium">
              Notre équipe vous contactera rapidement afin de confirmer les modalités d’inscription et de paiement.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold tracking-widest text-blue-700 uppercase mb-2">
                Inscription Officielle
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Réserver ma place
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Session 14 — 18 décembre 2026 • 100 % en ligne • 800 000 FCFA TTC
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Nom et prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Jean Koffi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+225 07 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Fonction *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="RSSI, DSI, Consultant..."
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nom de l'entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Ville / Pays *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Abidjan, Côte d'Ivoire"
                  value={formData.cityCountry}
                  onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Je m’inscris en tant que :
                </label>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {[
                    "Participant individuel",
                    "Participant pris en charge par mon entreprise",
                    "Je souhaite inscrire plusieurs collaborateurs",
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="registrationType"
                        value={type}
                        checked={formData.registrationType === type}
                        onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Message / besoin particulier
                </label>
                <textarea
                  rows={2}
                  placeholder="Précisions éventuelles ou demandes spécifiques..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-600 font-medium leading-snug">
                    J’accepte d’être contacté(e) concernant cette formation. *
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer"
                >
                  ENVOYER MA DEMANDE D’INSCRIPTION
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
