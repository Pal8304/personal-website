import Link from "next/link";
import { AccountLinkProps } from "@/data/types";
import AnimatedEnter from "./animated-enter";

export default function AccountLink({ externalLink, Icon }: AccountLinkProps) {
  return (
    <AnimatedEnter className="flex rounded-full">
      <Link
        href={externalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="p-2"
        data-cursor="account-link"
      >
        <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
      </Link>
    </AnimatedEnter>
  );
}
