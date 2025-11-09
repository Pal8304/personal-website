import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "@/data/types";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  deployLink,
  githubLink,
  title,
  description,
  tags,
}: ProjectCardProps) {
  const redirectLink = deployLink || githubLink || "#";
  return (
    <div
      className="project-card group flex flex-row items-start justify-between w-[90%] bg-transparent border border-white/10 rounded-2xl p-4 m-2
     hover:border-white/20 transition-all duration-200 
     hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
     hover:bg-white/2 hover:scale-[1.02] hover:-translate-y-1"
      data-cursor="project-card"
    >
      <Link href={redirectLink} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start">
          <div className="text-2xl font-semibold group-hover:text-white/90 transition-colors duration-200">
            {title}
          </div>
        </div>

        <div className="text-md opacity-55 mb-4">{description}</div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="project-tag text-sm px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 transition-colors duration-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </Link>
      <div className="flex flex-row gap-2">
        {deployLink && (
          <Link
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 self-end text-white/50 hover:text-white/80 transition-colors duration-200"
            data-cursor="clickable"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 self-end text-white/50 hover:text-white/80 transition-colors duration-200 flex items-center"
            data-cursor="clickable"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHub"
              width={20}
              height={20}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
