import React from "react";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTypescript, SiPython } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BsFiletypeTxt } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";

export const ICON_MAP: Record<string, React.ReactNode> = {
  js: <BiLogoJavascript size={16} />,
  ts: <SiTypescript size={16} />,
  py: <SiPython size={16} />,
  json: <VscJson size={16} />,
  cpp: <TbBrandCpp size={16} />,
  default: <BsFiletypeTxt size={16} />,
};

export function getIconFromTitle(
  title?: string,
  lang?: string
): React.ReactNode {
  if (!title && !lang) return ICON_MAP.default;
  if (lang) {
    const maybe = ICON_MAP[lang.toLowerCase()];
    if (maybe) return maybe;
  }
  if (!title) return ICON_MAP.default;
  const parts = title.split(".");
  if (parts.length < 2) return ICON_MAP.default;
  const ext = parts[parts.length - 1].toLowerCase();
  return ICON_MAP[ext] || ICON_MAP.default;
}
