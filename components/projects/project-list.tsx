"use client";

import { PROJECTS } from "@/data/constants";
import ProjectCard from "./project-card";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProjectList() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        const tags = card.querySelectorAll<HTMLElement>(".tag-item");

        const tl = gsap.timeline({});

        tl.from(card, {
            opacity: 0,
            duration: 0.5,
        }).from(tags, {
          opacity: 0,
          y: 8,
          duration: 0.35,
          stagger: 0.06,
          ease: "power2.out",
        });
      });

      gsap.from(container, { opacity: 0, duration: 0.5, delay: 0.05 });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full flex flex-wrap overflow-auto">
      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
