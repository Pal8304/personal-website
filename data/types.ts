import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
export interface AccountLinkProps {
  externalLink: string;
  //   icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
  Icon: LucideIcon;
}

export interface BlogLinkProps {
  blogtitle: string;
  blogurl: string;
  blogdate: string;
}

export interface CodingProfileLinkProps {
  handle: string;
  codingPlatform: string;
  codingProfileLink: string;
  iconPath: string;
  maxRating: number;
  highestTag: string;
}

export interface CPAchievementsCardProps {
  event: string;
  rank: string;
  certificateLink: string;
  description: string;
}

export interface ProjectCardProps {
  githubLink: string;
  deployLink: string;
  title: string;
  description: string;
  tags: string[];
}
