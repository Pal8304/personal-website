import React from "react";
import Link from "next/link";
interface AccountLinkProps {
  externalLink: string;
  icon: React.ReactNode;
}

export default function AccountLink({ externalLink, icon }: AccountLinkProps) {
  return (
    <div className="flex rounded-full hover:bg-slate-700">
      <Link
        href={externalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="p-2"
      >
        {icon}
      </Link>
    </div>
  );
}
