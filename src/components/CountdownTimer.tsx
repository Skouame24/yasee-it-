"use client";

import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";

interface CountdownTimerProps {
  targetDate?: string; // ISO string or date format
}

export default function CountdownTimer({
  targetDate = "2026-11-30T23:59:59",
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
        <div className="space-y-4 text-center lg:text-left">
          <div className="flex items-center gap-3 bg-rose-900/40 text-rose-200 px-4 py-2 rounded border border-rose-800/50">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Clôture impérative des inscriptions : 30 Novembre 2026 (30/11/2026)</span>
          </div>

          <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
            Session Officielle PECB Certified ISO/IEC 27001 Lead Implementer : <span className="text-amber-400">14 au 18 Décembre 2026</span>
          </h4>

          <div className="flex items-start gap-3 bg-blue-900/20 text-blue-100 px-4 py-3 rounded border border-blue-800/30">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            Places limitées pour garantir le suivi individuel lors des ateliers pratiques.
          </div>
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
