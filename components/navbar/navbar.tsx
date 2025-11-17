"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS, PORTFOLIO_TITLE } from "../../data/constants";
import NavbarItem from "./navbar-item";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const validPaths = NAV_ITEMS.map((item) => item.href);

  if (!validPaths.includes(currentPath) && !currentPath.startsWith("/blog/"))
    return null;

  return (
    <div className="w-full fixed top-4 flex justify-center items-center z-50 px-4">
      <nav className="w-full lg:w-2/3 max-w-6xl">
        <div className="flex flex-row items-center justify-between m-4 text-2xl rounded-2xl bg-transparent backdrop-blur-md border border-white/10">
          <div>
            <Link href="/" className="m-4">
              {PORTFOLIO_TITLE}
            </Link>
          </div>

          <div className="hidden lg:flex p-4">
            {NAV_ITEMS.map((item) => (
              <NavbarItem key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          <button
            className="lg:hidden m-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col justify-between">
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-transparent backdrop-blur-md border border-white/10 overflow-hidden">
            <div className="flex flex-col p-2">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full"
                >
                  <NavbarItem href={item.href} label={item.label} />
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
