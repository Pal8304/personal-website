"use client";

import { SOCIALS } from "@/data/constants";
import AccountLink from "./account-link";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function HeyThere() {
  const nameRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = nameRef.current;
    if (!el) return;

    gsap.to(el, {
      duration: 2,
      scrambleText: {
        text: "Palash Jhaveri",
        chars: "01!@#$%^&*()-_=+[]{};:',.<>/\\|`~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",  
        revealDelay: 0.5,
        speed: 0.4,
      },
      ease: "none",
    });
  }, { scope: nameRef });

  return (
    <div className="text-white text-2xl h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden">
      <div>Hey there, {`I'm`}</div>
      <div
        ref={nameRef}
        className="text-8xl mt-4"
      >
        {/* This initial text is what React shows before scramble runs */}
        Palash Jhaveri
      </div>
      <div className="mt-4 gap-8 flex flex-row">
        {SOCIALS.map((social, index) => (
          <AccountLink
            key={index}
            externalLink={social.externalLink}
            Icon={social.Icon}
          />
        ))}
      </div>
    </div>
  );
}
