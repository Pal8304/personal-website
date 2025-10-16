"use client";
import Image from "next/image";
import RatingGraph from "./rating-graph";
import { RatingGraphClient } from "./rating-graph-client";

export default function ProfileGraph({
  codingPlatformHovered,
}: {
  codingPlatformHovered: string | null;
}) {
  if (!codingPlatformHovered) {
    return null;
  }

  const graphPath = `/${codingPlatformHovered.toLowerCase()}-graph.png`;

  return (
    <div className="pointer-events-none absolute left-[calc(50%+2rem)] top-[95%] -translate-y-1/2">
      <div
        className="min-w-96 bg-transparent border border-white/10 rounded-xl p-4 backdrop-blur-sm 
                    hover:border-white/20 hover:bg-white/5 
                    transition-all duration-300 ease-out
                    shadow-[0_4px_16px_rgba(255,255,255,0.05)]
                    animate-in fade-in"
      >
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-white/90">
              Rating Progress
            </div>
            <div className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/10 border border-white/20">
              {codingPlatformHovered}
            </div>
          </div>
          <div className="h-px bg-white/15 mt-2"></div>
        </div>
        {codingPlatformHovered === "Codeforces" ? (
          <div className="relative w-full h-48">
            Here, there will be cf graph
          </div>
        ) : (
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-white/5 border border-white/10 group">
            <Image
              src={graphPath}
              alt={`${codingPlatformHovered} rating graph`}
              fill
              objectFit="fill"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}
