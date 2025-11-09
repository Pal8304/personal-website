"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarItemProps {
  href: string;
  label: string;
}

export default function NavbarItem({ href, label }: NavbarItemProps) {
  const currentPath = usePathname();

  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`m-7 relative rounded-3xl ${
        isActive
          ? "opacity-100 before:absolute before:content-['<'] before:-left-4 before:top-[-4px] after:absolute after:content-['/>'] after:-right-7 after:top-[-4px]"
          : "opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all before:duration-300 before:content-['<'] after:absolute after:opacity-0 after:translate-x-[5px] after:transition-all after:duration-300 after:content-['/>'] hover:before:opacity-100 hover:before:translate-x-[-15px] hover:after:opacity-100 hover:after:translate-x-0 hover:opacity-100"
      }`}
      data-cursor="navbar-item"
    >
      {label}
    </Link>
  );
}
