"use client";

import React, { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon, ShieldCheckIcon, CalendarIcon, LaptopIcon } from "./Icons";

export default function EnrollmentSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) return;
    setSubmitted(true);
  };

  return (
    <section id="inscription" className="py-24 bg-[#080A16] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1900CE]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative">
        
        {/* En-tête Statutaire */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1900CE]/20 border border-[#1900CE]/40 text-xs font-mono font-bold tracking-widest text-blue-300 uppercase">
            Formulaire Officiel d'Inscription
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Réserver ma place
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Complétez ce formulaire pour sécuriser votre place ou initier la prise en charge par votre organisation.
          </p>
        </div>

        {/* Grand Conteneur d'Inscription à Double Colonne */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Colonne Gauche : Récapitulatif Statutaire (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between space-y-10">
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#01CE35]">
                    Session Décembre 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    PECB Certified ISO/IEC 27001 Lead Implementer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Formation certifiante PECB officielle animée par des experts du terrain.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30">
                    <CalendarIcon className="w-5 h-5 text-rose-400 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-rose-300 font-bold">Date limite d’inscription</div>
                      <div className="text-sm font-bold text-white">30 novembre 2026 (30/11/2026)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <CalendarIcon className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Dates de la session</div>
                      <div className="text-sm font-bold text-white">14 — 18 décembre 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <LaptopIcon className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Format</div>
                      <div className="text-sm font-bold text-white">100 % en ligne avec interactions directes</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheckIcon className="w-5 h-5 text-[#01CE35] shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Tarif Préférentiel</div>
                      <div className="text-sm font-bold text-white">800 000 FCFA TTC <span className="text-xs font-normal text-slate-400 line-through">(1 150 000 FCFA)</span></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#01CE35]">
                    <span className="w-2 h-2 rounded-full bg-[#01CE35]" />
                    <span>Processus d'inscription YASEE IT</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Après validation de ce formulaire, notre équipe émet sous 24h ouvrées votre convention et la facture proforma, ou confirme les modalités de règlement.
                  </p>
                </div>
              </div>

            </div>

            {/* Colonne Droite : Formulaire Exécutif (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white text-[#080A16]">
              {submitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#E6FAEB] border border-[#01CE35]/30 text-[#01CE35] flex items-center justify-center mx-auto">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#080A16]">
                    Merci pour votre demande.
                  </h3>
                  <p className="text-base text-[#525875] leading-relaxed max-w-md mx-auto font-medium">
                    Notre équipe vous contactera rapidement afin de confirmer les modalités d’inscription et de paiement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Nom & Prénom */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Jean Koffi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Email & Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nom@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                        Téléphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+225 07 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Fonction & Entreprise */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                        Fonction *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="RSSI, DSI, Consultant, Auditeur..."
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nom de l’entreprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Ville / Pays */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                      Ville / Pays *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Abidjan, Côte d’Ivoire"
                      value={formData.cityCountry}
                      onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Je m'inscris en tant que */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-2">
                      Je m’inscris en tant que :
                    </label>
                    <div className="space-y-2">
                      {[
                        "Participant individuel",
                        "Participant pris en charge par mon entreprise",
                        "Je souhaite inscrire plusieurs collaborateurs",
                      ].map((type) => {
                        const isSelected = formData.registrationType === type;
                        return (
                          <label
                            key={type}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? "bg-[#EEECFC] border-[#1900CE] text-[#1900CE] font-bold"
                                : "bg-[#F8F9FD] border-[#E2E4F0] text-[#525875] hover:border-[#1900CE]/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="registrationTypeDedicated"
                              value={type}
                              checked={isSelected}
                              onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                              className="text-[#1900CE] focus:ring-[#1900CE]"
                            />
                            <span className="text-xs sm:text-sm font-semibold leading-none">
                              {type}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#080A16] mb-1.5">
                      Message / besoin particulier
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Précisions sur votre démarche ou demande spécifique..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E4F0] bg-[#F8F9FD] text-sm text-[#080A16] focus:outline-none focus:border-[#1900CE] focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Checkbox obligatoire */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        className="mt-0.5 rounded text-[#1900CE] focus:ring-[#1900CE]"
                      />
                      <span className="text-xs text-[#525875] font-medium leading-relaxed">
                        J’accepte d’être contacté(e) concernant cette formation. *
                      </span>
                    </label>
                  </div>

                  {/* Bouton de validation */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#1900CE] hover:bg-[#1400A6] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-[#1900CE]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <span>ENVOYER MA DEMANDE D’INSCRIPTION</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
