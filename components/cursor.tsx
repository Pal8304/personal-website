"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursorXSetter = gsap.quickTo("#cursor", "x", {
      duration: 0.2,
      ease: "power3",
    });
    const cursorYSetter = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const followerXSetter = gsap.quickTo(followerRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const followerYSetter = gsap.quickTo("#follower", "y", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorXSetter(x);
      cursorYSetter(y);
      followerXSetter(x);
      followerYSetter(y);
    });
  }, []);
  return (
    <>
      <div
        id="cursor"
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      ></div>
      <div
        id="follower"
        ref={followerRef}
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-transparent border-white/10"
      ></div>
    </>
  );
}
