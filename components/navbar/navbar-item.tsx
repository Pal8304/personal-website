"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string;
  label: string;
}

export default function NavbarItem({ href, label }: NavbarItemProps) {
  const currentPath = usePathname();
  return (
    <>
      {currentPath === href ? (
        <Link
          href={href}
          className="m-7 relative opacity-100 rounded-3xl 
                   before:absolute before:content-['<'] before:-left-4 before:top-0 
                   after:absolute after:content-['/>'] after:-right-7 after:top-0"
          data-cursor="navbar-item"
        >
          {label}
        </Link>
      ) : (
        <Link
          href={href}
          className="m-7 relative opacity-50 rounded-3xl
                   before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all before:duration-300 before:content-['<'] 
                   after:absolute after:opacity-0 after:translate-x-[5px] after:transition-all after:duration-300 after:content-['/>']
                   hover:before:opacity-100 hover:before:translate-x-[-15px] 
                   hover:after:opacity-100 hover:after:translate-x-0 
                   hover:opacity-100"
          data-cursor="navbar-item"
        >
          {label}
        </Link>
      )}
    </>
  );
}
