import { AccountLinkProps } from "./types";
import { ProjectCardProps } from "./types";
import { CPAchievementsCardProps } from "./types";
import { CodingProfileLinkProps } from "./types";
import { NavItemProps } from "./types";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const NAV_ITEMS: NavItemProps[] = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/coding-profile",
    label: "Coding",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const PORTFOLIO_TITLE = "Portfolio";

export const SOCIALS: AccountLinkProps[] = [
  {
    externalLink: "https://github.com/Pal8304",
    Icon: Github,
  },
  {
    externalLink: "https://www.linkedin.com/in/palash-jhaveri/",
    Icon: Linkedin,
  },
  {
    externalLink: "https://x.com/PalashJhaveri",
    Icon: Twitter,
  },
  {
    externalLink: "mailto: palashjhaveri04@gmail.com", 
    Icon: Mail,
  }
];

export const PROJECTS: ProjectCardProps[] = [
  {
    deployLink: "https://just-another-graph-visualizer.vercel.app/",
    githubLink: "https://github.com/Pal8304/just-another-graph-visualizer",
    title: "just-another-graph-visualizer",
    description: "A graph visualizer that simulates various graph algorithms",
    tags: ["NextJs", "Graph Visualization", "Tailwind"],
  },
  {
    deployLink: "https://scheduling-algorithms-rnud.vercel.app/",
    githubLink: "https://github.com/Pal8304/Scheduling_Algorithms",
    title: "Scheduling_Algorithms",
    description: "A simulator of scheduling algorithms for OS project",
    tags: ["NextJs", "Tailwind"],
  }, 
  {
    deployLink: "",
    githubLink: "https://github.com/Pal8304/Code_Climb",
    title: "Code_Climb",
    description: "CF Problem suggestor",
    tags: ["React", "FastAPI"],
  },
  {
    deployLink: "",
    githubLink: "",
    title: "Portfolio",
    description: "My portfolio website",
    tags: ["NextJs", "Tailwind"],
  },
  {
    deployLink: "https://pal8304.github.io/Tower_of_Hanoi/",
    githubLink: "https://github.com/Pal8304/Tower_of_Hanoi",
    title: "Tower_of_Hanoi",
    description: "A simple tower of hanoi game simulator",
    tags: ["HTML", "CSS", "Javascript"],
  }, 
];

export const CODINGPROFILES: CodingProfileLinkProps[] = [
  {
    handle: "Pal_J",
    codingPlatform: "Codeforces",
    codingProfileLink: "https://codeforces.com/profile/Pal_J",
    iconPath: "/codeforces.png",
    maxRating: 1601,
    highestTag: "Expert",
  },
  {
    handle: "palash_jhaveri",
    codingPlatform: "Codechef",
    codingProfileLink: "https://www.codechef.com/users/palash_jhaveri",
    iconPath: "/codechef.jpeg",
    maxRating: 1834,
    highestTag: "4 Star",
  },
  {
    handle: "Pal_J",
    codingPlatform: "Leetcode",
    codingProfileLink: "https://leetcode.com/Pal_J/",
    iconPath: "/leetcode.png",
    maxRating: 2150,
    highestTag: "Guardian",
  },
];

export const CPACHIEVEMENTS: CPAchievementsCardProps[] = [
  {
    event: "Meta HackerCup 2023",
    rank: "2000 out of 10000",
    certificateLink: "https://www.google.com",
    description: "A global coding competition",
  },
  {
    event: "Meta HackerCup 2023",
    rank: "2500 out of 10000",
    certificateLink: "https://www.google.com",
    description: "A global coding competition",
  },
  {
    event: "Meta HackerCup 2023",
    rank: "2000 out of 10000",
    certificateLink: "https://www.google.com",
    description: "A global coding competition",
  },
];
