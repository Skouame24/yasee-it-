"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: string; // ISO string or date format
}

export default function CountdownTimer({
  targetDate = "2026-12-10T23:59:59",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-[#0B0E1E] via-[#121630] to-[#0B0E1E] border border-amber-500/30 p-5 sm:p-6 shadow-xl text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Side Info */}
        <div className="space-y-1.5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span>Clôture impérative des inscriptions : 10 Décembre 2026</span>
          </div>

          <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
            Session Officielle ISO 27001 : <span className="text-amber-400">14 au 18 Décembre 2026</span>
          </h4>

          <p className="text-xs text-white/70">
            Nombre de places strictement limité pour garantir le suivi individuel lors des ateliers pratiques.
          </p>
        </div>

        {/* Right Side Live Countdown Digits */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 tracking-wider">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 mt-1.5">
              Jours
            </span>
          </div>

          <span className="text-amber-400 text-xl font-bold pb-4">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 mt-1.5">
              Heures
            </span>
          </div>

          <span className="text-amber-400 text-xl font-bold pb-4">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 mt-1.5">
              Minutes
            </span>
          </div>

          <span className="text-amber-400 text-xl font-bold pb-4">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 tracking-wider animate-pulse">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 mt-1.5">
              Secondes
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
