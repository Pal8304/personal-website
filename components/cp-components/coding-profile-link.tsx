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
}: CodingProfileLinkProps) {
  return (
    <Link
      href={codingProfileLink}
      rel="noopener noreferrer"
      target="_blank"
      className="p-2 border-2 border-slate-700 rounded-md bg-slate-800 hover:bg-slate-600 min-w-96 mb-4 mr-4 relative transition-all duration-100 transform hover:shadow-2xl"
    >
      <div className="flex flex-row min-w-96 justify-between">
        <div className="flex flex-col w-1/2">
          <div className="text-2xl mb-2">{codingPlatform}</div>
          <div className="text-xl opacity-75">{handle}</div>
          <div className="text-xl opacity-50">
            {highestTag} ({maxRating})
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center relative p-0 m-0">
          <Image
            src={iconPath}
            fill
            objectFit="contain"
            alt="Coding Profile Icon"
          />
        </div>
      </div>
    </Link>
  );
}
