"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface NavbarProps {
  onOpenModal: () => void;
}

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#pourquoi-cette-formation", label: "Formation" },
  { href: "#programme", label: "Programme" },
  { href: "#formateurs", label: "Formateurs" },
  // { href: "#tarif", label: "Tarif" },
  { href: "#temoignages", label: "Témoignages" },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#accueil");
  const navRef = useRef<HTMLElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Scroll detection & Active link tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 80) {
        setActiveLink("#accueil");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Intersection Observer for active sections
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible intersecting section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or just take the first one
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          setActiveLink(`#${mostVisible.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    // Observe all sections that correspond to nav links
    navLinks.forEach(link => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Entrance animation on mount
  

  // Mobile drawer animation
  useEffect(() => {
    if (!mobileDrawerRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(
        mobileDrawerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full"
    >
      {/* ── TOP UTILITY BAR (Learni Style) ── */}
      <div className="bg-[#0B0E1E] text-white text-[11px] font-medium py-1.5 px-5 sm:px-8 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#01CE35]"></span>
              <span>YASEE IT — Abidjan, Côte d'Ivoire · Expert ISO/IEC 27001</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://pecb.com/pdf/brochures/iso-iec-27001-lead-implementer-fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-white/90"
            >
              <span>📄 Télécharger la brochure</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/2250711444588"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors flex items-center gap-1.5 text-white/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              <span>WhatsApp : 07 11 44 45 88</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div
        className={`w-full transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_25px_rgba(0,0,0,0.06)] border-b border-black/5"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-[64px] flex items-center justify-between gap-6">

            {/* ── LOGO ── */}
            <a
              href="#accueil"
              className="flex items-center gap-3 shrink-0 group"
              onClick={() => setActiveLink("#accueil")}
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="YASEE IT"
                  width={110}
                  height={36}
                  className="object-contain h-8 w-auto"
                  priority
                />
              </div>
              {/* Divider + formation label */}
              <div className="hidden md:flex flex-col border-l border-black/8 pl-3 leading-tight">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#080A16]/50">
                  YASEE IT
                </span>
                <span className="text-[11px] font-bold text-[#1900CE] tracking-tight">
                  PECB Certified ISO/IEC 27001 Lead Implementer
                </span>
              </div>
            </a>

            {/* ── NAV DESKTOP ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3.5 py-2 rounded-lg text-[13px] font-semibold tracking-tight transition-all duration-200 ${isActive
                        ? "text-[#1900CE] bg-[#EEECFC]"
                        : "text-[#525875] hover:text-[#080A16] hover:bg-black/4"
                      }`}
                  >
                    {link.label}
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1900CE]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-3">
              {/* Live session badge — only on wide screens */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E4F0] bg-[#F8F9FD] text-[11px] font-semibold text-[#525875]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01CE35] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01CE35]" />
                </span>
                <span className="text-[#080A16] font-bold">14–18 Déc. 2026</span>
              </div>

              {/* CTA button */}
              <button
                onClick={onOpenModal}
                className="group relative overflow-hidden px-5 py-2.5 rounded-xl bg-[#1900CE] text-white font-bold text-[12px] uppercase tracking-wider cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#1900CE]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative flex items-center gap-2">
                  Réserver ma place
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-[#F8F9FD] transition-colors gap-[5px]"
              >
                <span className={`block w-5 h-0.5 bg-[#080A16] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block w-5 h-0.5 bg-[#080A16] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-[#080A16] rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div
          ref={mobileDrawerRef}
          className="lg:hidden bg-white border-t border-black/5 shadow-2xl"
          style={{ opacity: 0 }}
        >
          <div className="px-5 pt-4 pb-6 space-y-1">
            {/* Session info */}
            <div className="flex items-center gap-2 px-4 py-3 mb-3 rounded-xl bg-[#F8F9FD] border border-[#E2E4F0]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01CE35] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#01CE35]" />
              </span>
              <span className="text-xs font-bold text-[#080A16]">
                Session 14–18 Décembre 2026
              </span>
              <span className="ml-auto text-xs font-bold text-amber-600">Places limitées</span>
            </div>

            {/* Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#080A16] hover:bg-[#F8F9FD] hover:text-[#1900CE] transition-colors"
              >
                <span>{link.label}</span>
                <svg className="w-4 h-4 text-[#E2E4F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenModal();
                }}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider cursor-pointer transition-all"
              >
                Réserver ma place
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
