"use client";

import { PropsWithChildren, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type AnimatedEnterProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  from?: "top" | "bottom" | "left" | "right";
}>;

export default function AnimatedEnter({
  className,
  children,
  delay,
  from = "bottom",
}: AnimatedEnterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        const offset = 10;
        const fromVars: gsap.TweenVars = {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.out",
          delay: delay ?? 0,
        };
        if (from === "top") fromVars.y = -offset;
        if (from === "bottom") fromVars.y = offset;
        if (from === "left") fromVars.x = -offset;
        if (from === "right") fromVars.x = offset;

        gsap.from(el, fromVars);
      }
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
