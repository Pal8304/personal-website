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
        <Link
          href={href}
          className="m-6 relative opacity-100 
                   before:absolute before:content-['<'] before:-left-4 before:top-0 
                   after:absolute after:content-['/>'] after:-right-7 after:top-0"
        >
          {label}
        </Link>
      ) : (
        <Link
          href={href}
          className="m-6 relative opacity-50 
                   before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all before:duration-300 before:content-['<'] 
                   after:absolute after:opacity-0 after:translate-x-[5px] after:transition-all after:duration-300 after:content-['/>']
                   hover:before:opacity-100 hover:before:translate-x-[-15px] 
                   hover:after:opacity-100 hover:after:translate-x-0 
                   hover:opacity-100"
        >
          {label}
        </Link>
      )}
    </>
  );
}
