import Link from "next/link";

import { ProjectCardProps } from "@/data/types";

export default function ProjectCard({
  deployLink,
  githubLink,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={deployLink}
      rel="noopener noreferrer"
      target="_blank"
      className="gap-1 rounded-md flex flex-col p-4 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 min-w-72 h-auto"
    >
      <div className="text-2xl">{title}</div>
      <div className="text-xl opacity-50 mb-4">{description}</div>
      <div className="flex gap-2 text-base align-bottom">
        {tags.map((key, tag) => {
          return (
            <div key={tag} className="rounded-lg bg-slate-600 p-2">
              {key}
            </div>
          );
        })}
      </div>
    </Link>
  );
}
