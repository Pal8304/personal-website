"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS, PORTFOLIO_TITLE } from "../../data/constants";
import NavItem from "./nav-item";

export default function Navbar() {
  const currentPath = usePathname();
  const validPaths = NAV_ITEMS.map(item => item.href);
  
  if (!validPaths.includes(currentPath)) return null;

  return (
    <div className="w-full fixed top-4 flex justify-center items-center z-50">
      <nav className="w-2/3 justify-center overflow-scroll">
        <div className="flex flex-row items-center justify-between m-4 text-2xl rounded-2xl bg-transparent backdrop-blur-md border border-white/10">
          <div>
            <Link href="/" className="m-4">
              {PORTFOLIO_TITLE}
            </Link>
          </div>
          <div className="p-4">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
