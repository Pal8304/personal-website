"use client";
import Link from "next/link";
import Image from "next/image";
import { CodingProfileLinkProps } from "@/data/types";

export default function CodingProfileLink({
  handle,
  codingPlatform,
  codingProfileLink,
  iconPath,
  maxRating,
  highestTag,
  codingPlatformHovered,
  setCodingPlatformHovered,
}: CodingProfileLinkProps & {
  codingPlatformHovered: string | null;
  setCodingPlatformHovered: (platform: string | null) => void;
}) {
  return (
    <Link
      href={codingProfileLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full lg:w-[50%] max-w-2xl"
      onMouseEnter={() => setCodingPlatformHovered(codingPlatform)}
      onMouseLeave={() => setCodingPlatformHovered(null)}
      data-cursor="coding-profile-link"
    >
      <div
        className="flex items-center w-full min-h-28 lg:min-h-32 bg-transparent border border-white/10 rounded-xl p-3 lg:p-4 
                      hover:border-white/30 hover:bg-white/5 
                      transition-all duration-300 ease-out
                      hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
                      lg:hover:translate-x-4 hover:backdrop-blur-sm"
      >
        <div className="flex flex-col w-3/4 justify-center">
          <div className="text-xl lg:text-2xl font-semibold group-hover:text-white/95 transition-colors duration-200">
            {codingPlatform}
          </div>
          <div className="h-px bg-white/10 mb-2 group-hover:bg-white/20 transition-colors duration-200"></div>
          <div className="text-base lg:text-lg mb-1 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
            {handle}
          </div>
          <div className="text-xs lg:text-sm opacity-60 group-hover:opacity-80 transition-opacity duration-200">
            {highestTag} • {maxRating}
          </div>
        </div>
        <div className="flex w-1/4 justify-center">
          <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200 overflow-hidden">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
              <Image
                src={iconPath}
                alt={codingPlatform}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
