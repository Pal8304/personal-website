import Link from "next/link";

interface CodingProfileLinkProps {
  handle: string;
  codingPlatform: string;
  codingProfileLink: string;
  icon: React.ReactNode;
  maxRating: number;
  highestTag: string;
}

export default function CodingProfileLink({
  handle,
  codingPlatform,
  codingProfileLink,
  icon,
  maxRating,
  highestTag,
}: CodingProfileLinkProps) {
  return (
    <Link
      href={codingProfileLink}
      rel="noopener noreferrer"
      target="_blank"
      className="p-2"
    >
      <div className="flex flex-col w-96 h-auto border-2 border-white rounded-md bg-slate-700 hover:bg-slate-600">
        <div className="flex flex-row items-start justify-between ml-4 mt-4">
          <div className="text-2xl font-semibold">{codingPlatform}</div>
          <div className="mr-4">{icon}</div>
        </div>
        <div className="flex flex-col text-2xl ml-4 mb-4">
          <div>{handle}</div>
          <div className="text-lg opacity-75">
            {highestTag} ({maxRating})
          </div>
        </div>
      </div>
    </Link>
  );
}
