import Link from "next/link";
import { AccountLinkProps } from "@/data/types";

export default function AccountLink({ externalLink, Icon }: AccountLinkProps) {
  return (
    <div className="flex rounded-full hover:bg-slate-700">
      <Link
        href={externalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="p-2"
      >
        <Icon size={32} />
      </Link>
    </div>
  );
}
