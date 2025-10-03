"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorCSS, setCursorCSS] = useState<string>(
    getCompleteCursorCSS("default")
  );
  const [followerCSS, setFollowerCSS] = useState<string>(
    getCompleteFollowerCSS("default")
  );

  function getCompleteCursorCSS(shape: string): string {
    const baseCSS: string =
      "pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference";
    switch (shape) {
      case "account-link":
        return `${baseCSS} bg-white border-2 border-white h-8 w-8`;
      case "navbar-item":
        return `${baseCSS} h-7 w-7 border-2 border-white bg-white`;
      case "default":
        return `${baseCSS} h-5 w-5 bg-white`;
      default:
        return `${baseCSS} h-5 w-5 bg-white`;
    }
  }

  function getCompleteFollowerCSS(shape: string): string {
    const baseCSS: string =
      "pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference";
    switch (shape) {
      case "account-link":
        return `${baseCSS} bg-white h-14 w-14 rounded-full border-2 border-white`;
      case "navbar-item":
        return `${baseCSS} h-12 w-12 rounded-full border-2 border-white bg-transparent`;
      case "default":
      default:
        return `${baseCSS} h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-1 bg-transparent border-white mix-blend-difference`;
    }
  }

  useGSAP(
    () => {
      const cursorXSetter = gsap.quickTo(cursorRef.current, "x", {
        duration: 0.1,
        ease: "power3",
      });
      const cursorYSetter = gsap.quickTo(cursorRef.current, "y", {
        duration: 0.1,
        ease: "power3",
      });

      const followerXSetter = gsap.quickTo(followerRef.current, "x", {
        duration: 0.4,
        ease: "power3",
      });
      const followerYSetter = gsap.quickTo(followerRef.current, "y", {
        duration: 0.4,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursorXSetter(x);
        cursorYSetter(y);
        followerXSetter(x);
        followerYSetter(y);

        const target = e.target as HTMLElement;
        let cursorAttribute = target.getAttribute("data-cursor");
        if (!cursorAttribute) {
          cursorAttribute =
            target.closest("[data-cursor]")?.getAttribute("data-cursor") ||
            "default";
        }
        setCursorCSS(getCompleteCursorCSS(cursorAttribute));
        setFollowerCSS(getCompleteFollowerCSS(cursorAttribute));
      });
    },
    { scope: cursorRef }
  );
  return (
    <>
      <div id="cursor" ref={cursorRef} className={cursorCSS}></div>
      <div id="follower" ref={followerRef} className={followerCSS}></div>
    </>
  );
}
