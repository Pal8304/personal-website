"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type AnimatedNameProps = {
  name: string;
};

export default function AnimatedName({ name }: AnimatedNameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.to(el, {
        duration: 2,
        ease: "power2.out",
        scrambleText: {
          text: name,
          chars:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          revealDelay: 0.4,
          speed: 0.4,
        },
      });
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className="text-8xl mt-4 text-shadow-lg/30 font-semibold">
      {name}
    </div>
  );
}
