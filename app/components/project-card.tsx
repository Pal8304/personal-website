import Link from "next/link";

interface ProjectCardProps{
    externalLink: string;
    title: string;
    description: string;
    tags: string[];
}

export default function ProjectCard({externalLink, title, description, tags}: ProjectCardProps) {
    return (
        <Link href={externalLink} rel="noopener noreferrer" target="_blank"
        className="text-md rounded-md flex flex-col p-4 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 w-48 h-auto">
            <div className="text-4xl">
                {title}
            </div>
            <div className="text-md">
                {description}
            </div>
            <div className="flex flex-row gap-2">
                {tags.map((key, tag)=>{
                    return <div key={tag} className="rounded-md bg-slate-600 p-1">{key}</div>
                })}
            </div>
        </Link>
    )
}