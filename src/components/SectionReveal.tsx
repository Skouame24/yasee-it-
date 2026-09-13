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
  className = "",
}: SectionRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
