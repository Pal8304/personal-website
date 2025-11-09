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
  const [elementWidth, setElementWidth] = useState<number>(0);

  function getCompleteCursorCSS(shape: string): string {
    const baseCSS: string =
      "pointer-events-none fixed z-50 mix-blend-difference transition-all duration-300 ease-out ease-in";
    switch (shape) {
      case "account-link":
        return `${baseCSS} rounded-full bg-white h-2 w-2`;
      case "navbar-item":
        return `${baseCSS} rounded-full h-2 w-2 bg-white`;
      case "coding-profile-link":
        return `${baseCSS} rounded-full h-2 w-2 bg-white`;
      case "project-card":
        return `${baseCSS} rounded-full h-2 w-2 bg-white`;
      case "clickable":
        return `${baseCSS} rounded-full h-2 w-2 bg-white`;
      case "default":
        return `${baseCSS} rounded-full h-5 w-5 bg-white`;
      default:
        return `${baseCSS} rounded-full h-5 w-5 bg-white`;
    }
  }

  function getCompleteFollowerCSS(shape: string): string {
    const baseCSS: string =
      "pointer-events-none fixed z-50 mix-blend-difference transition-all duration-400 ease-out";
    switch (shape) {
      case "account-link":
        return `${baseCSS} rounded-full bg-transparent h-16 w-16 border-2 border-none shadow-[0_0_20px_rgba(255,255,255,1)]`;
      case "navbar-item":
        return `${baseCSS} rounded-full h-12 bg-transparent border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)]`;
      case "coding-profile-link":
        return `${baseCSS} rounded-full w-16 h-16 bg-transparent border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.25)]`;
      case "project-card":
        return `${baseCSS} rounded-full w-16 h-16 bg-transparent border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.25)]`;
      case "clickable":
        return `${baseCSS} rounded-full w-16 h-16 bg-transparent border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.25)]`;
      case "default":
        return `${baseCSS} rounded-full h-12 w-12 border border-white bg-transparent`;
      default:
        return `${baseCSS} rounded-full h-12 w-12 border border-white bg-transparent`;
    }
  }

  useGSAP(
    () => {
      gsap.set([cursorRef.current, followerRef.current], {
        xPercent: -50,
        yPercent: -50,
      });

      const cursorXSetter = gsap.quickTo(cursorRef.current, "left", {
        duration: 0.1,
        ease: "power3",
      });
      const cursorYSetter = gsap.quickTo(cursorRef.current, "top", {
        duration: 0.1,
        ease: "power3",
      });

      const followerXSetter = gsap.quickTo(followerRef.current, "left", {
        duration: 0.4,
        ease: "power3",
      });
      const followerYSetter = gsap.quickTo(followerRef.current, "top", {
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
        let element: HTMLElement | null = target;

        if (!cursorAttribute) {
          element = target.closest("[data-cursor]");
          cursorAttribute = element?.getAttribute("data-cursor") || "default";
        }

        if (cursorAttribute === "navbar-item" && element) {
          const rect = element.getBoundingClientRect();
          setElementWidth(rect.width + 64);
        } else {
          setElementWidth(0);
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
      <div
        id="follower"
        ref={followerRef}
        className={followerCSS}
        style={elementWidth > 0 ? { width: `${elementWidth}px` } : undefined}
      ></div>
    </>
  );
}
