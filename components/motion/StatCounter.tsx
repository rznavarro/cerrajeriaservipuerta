"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export default function StatCounter({ value, prefix = "", suffix = "", label }: Props) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numberEl = numberRef.current;
    const wrapEl = wrapRef.current;
    if (!numberEl || !wrapEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      numberEl.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapEl,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          numberEl.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
        },
      });
    }, wrapEl);

    return () => ctx.revert();
  }, [value, prefix, suffix]);

  return (
    <div ref={wrapRef} className="text-center sm:text-left">
      <span
        ref={numberRef}
        className="block font-display text-5xl font-extrabold tabular-nums tracking-tight text-accent sm:text-6xl"
      >
        {prefix}
        {0}
        {suffix}
      </span>
      <span className="mt-2 block text-sm font-semibold uppercase tracking-wide text-paper/60">
        {label}
      </span>
    </div>
  );
}
