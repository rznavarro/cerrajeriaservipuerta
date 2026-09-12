"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  as?: "h1" | "h2" | "h3" | "p";
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export default function RevealText({
  as = "h2",
  lines,
  className,
  lineClassName,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const items = el.querySelectorAll("[data-reveal-line]");

    if (prefersReduced) {
      gsap.set(items, { y: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className="line-reveal">
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <span data-reveal-line className={clsx("block", lineClassName)}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
