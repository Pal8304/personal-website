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
      className="p-2 font-roboto border-2 border-slate-700 rounded-md bg-slate-800 hover:bg-slate-700 min-w-96 h-auto m-4 relative transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:border-2 hover:border-gray-50"
    >
      <div className="flex flex-row w-96 justify-between">
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
