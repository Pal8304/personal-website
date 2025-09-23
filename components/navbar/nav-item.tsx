"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  const currentPath = usePathname();
  return (
    <>
      {currentPath === href ? (
        <Link href={href} className="m-5 opacity-100">
          {label}
        </Link>
      ) : (
        <Link
          href={href}
          className="m-5 opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all duration-300 after:opacity-0 after:absolute after:translate-x-[5px] after:transition-all before:content-['<'] after:content-['/>'] hover:before:opacity-100 hover:after:opacity-100 hover:opacity-100 hover:before:translate-x-[-15px] hover:after:translate-x-0"
        >
          {label}
        </Link>
      )}
    </>
  );
}
