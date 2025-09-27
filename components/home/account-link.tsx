import Link from "next/link";
import { AccountLinkProps } from "@/data/types";
import AnimatedEnter from "./animated-enter";

export default function AccountLink({ externalLink, Icon }: AccountLinkProps) {
  return (
    <AnimatedEnter className="flex rounded-full hover:bg-slate-700">
      <Link
        href={externalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="p-2"
      >
        <Icon size={32} />
      </Link>
    </AnimatedEnter>
  );
}
