"use client";

/**
 * SectionReveal — Cinematic scroll-triggered entrance for every page section.
 * Each section fades + slides in from a direction as it enters the viewport.
 * Uses GSAP ScrollTrigger for buttery-smooth reveals.
 */

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Direction = "up" | "left" | "right" | "fade";

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getFrom = (): gsap.TweenVars => {
    switch (direction) {
      case "left":  return { x: -60, opacity: 0 };
      case "right": return { x: 60,  opacity: 0 };
      case "fade":  return { opacity: 0 };
      default:      return { y: 70,  opacity: 0 };
    }
  };

  useGSAP(() => {
    if (!wrapperRef.current) return;

    gsap.fromTo(
      wrapperRef.current,
      { ...getFrom(), willChange: "transform, opacity" },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay,
        ease: "power3.out",
        clearProps: "willChange",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: wrapperRef });

  // Set initial invisible state via inline style so it's set BEFORE paint
  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}
