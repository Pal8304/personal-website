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

      const wrappers = gsap.utils.toArray<HTMLElement>(".project-card-wrapper");
      const tl = gsap.timeline();
      tl.from(wrappers, {
        autoAlpha: 0,
        y: 25,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });

      wrappers.forEach((wrapper) => {
        const tags = wrapper.querySelectorAll<HTMLElement>(".project-tag");
        tl.from(
          tags,
          {
            autoAlpha: 0,
            y: 12,
            scale: 0.95,
            duration: 0.4,
            ease: "back.out(1.7)",
            stagger: 0.08,
          },
          ">-0.25",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full flex flex-wrap overflow-hidden">
      {PROJECTS.map((project, i) => (
        <div key={i} className="project-card-wrapper w-full flex">
          <ProjectCard
            key={i}
            title={project.title}
            deployLink={project.deployLink}
            githubLink={project.githubLink}
            description={project.description}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  );
}
