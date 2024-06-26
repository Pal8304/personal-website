"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const currentPath = usePathname();
  return (
    <div className="w-screen flex justify-center items-center mt-16">
      <nav className="fixed w-2/3 justify-center">
        <div className="flex flex-row items-center justify-between m-4 text-2xl rounded-2xl bg-slate-700">
          <div>
            <Link href="/" className="m-4">
              Palash Jhaveri
            </Link>
          </div>
          <div className="p-4">
            {currentPath == "/" ? (
              <Link href="/" className="m-4 opacity-100">
                About
              </Link>
            ) : (
              <Link
                href="/"
                className="m-4 opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all duration-300 after:opacity-0 after:absolute after:translate-x-[5px] after:transition-all before:content-['<'] after:content-['/>'] hover:before:opacity-100 hover:after:opacity-100 hover:opacity-100 hover:before:translate-x-[-15px] hover:after:translate-x-0"
              >
                About
              </Link>
            )}
            {currentPath == "/projects" ? (
              <Link href="/projects" className="m-4 opacity-100">
                Projects
              </Link>
            ) : (
              <Link
                href="/projects"
                className="m-4 opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all duration-300 after:opacity-0 after:absolute after:translate-x-[5px] after:transition-all before:content-['<'] after:content-['/>'] hover:before:opacity-100 hover:after:opacity-100 hover:opacity-100 hover:before:translate-x-[-15px] hover:after:translate-x-0"
              >
                Projects
              </Link>
            )}
            {currentPath == "/coding-profile" ? (
              <Link href="/coding-profile" className="m-4 opacity-100">
                Coding Profiles
              </Link>
            ) : (
              <Link
                href="/coding-profile"
                className="m-4 opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all duration-300 after:opacity-0 after:absolute after:translate-x-[5px] after:transition-all before:content-['<'] after:content-['/>'] hover:before:opacity-100 hover:after:opacity-100 hover:opacity-100 hover:before:translate-x-[-15px] hover:after:translate-x-0"
              >
                Coding Profiles
              </Link>
            )}
            {currentPath == "/blog" ? (
              <Link href="/blogs" className="m-4 opacity-100">
                Blog
              </Link>
            ) : (
              <Link
                href="/blog"
                className="m-4 opacity-50 before:absolute before:opacity-0 before:translate-x-[-20px] before:transition-all duration-300 after:opacity-0 after:absolute after:translate-x-[5px] after:transition-all before:content-['<'] after:content-['/>'] hover:before:opacity-100 hover:after:opacity-100 hover:opacity-100 hover:before:translate-x-[-15px] hover:after:translate-x-0"
              >
                Blog
              </Link>
            )}
            {/* {currentPath == "/contact" ? (
              <Link
                href="/contact"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                
                Contact
              </Link>
            ) : (
              <Link href="/contact" className="m-4">
                
                Contact
              </Link>
            )} */}
          </div>
        </div>
      </nav>
    </div>
  );
}
