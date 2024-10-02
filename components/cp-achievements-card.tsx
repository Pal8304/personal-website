import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { CPAchievementsCardProps } from "@/data/types";

export default function CPAchievementsCard({
  event,
  rank,
  certificateLink,
  description,
}: CPAchievementsCardProps) {
  return (
    <div className="text-2xl p-4 w-full m-4 flex flex-col rounded-lg bg-slate-800 hover:bg-slate-600 transition-all duration-100 transform">
      <div className="flex flex-row justify-between">
        <div>{event}</div>
        <div className="p-2 rounded-full hover:bg-slate-500">
          <Link
            href={certificateLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLink size={24} />
          </Link>
        </div>
      </div>
      <div className="text-lg opacity-25">{rank}</div>
    </div>
  );
}
