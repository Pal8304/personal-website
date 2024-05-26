"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const currentPath = usePathname();
  console.log(currentPath);
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
              <Link
                href="/"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                {" "}
                About{" "}
              </Link>
            ) : (
              <Link href="/" className="m-4">
                {" "}
                About{" "}
              </Link>
            )}
            {currentPath == "/projects" ? (
              <Link
                href="/projects"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                {" "}
                Projects{" "}
              </Link>
            ) : (
              <Link href="/projects" className="m-4">
                {" "}
                Projects{" "}
              </Link>
            )}
            {currentPath == "/coding-profile" ? (
              <Link
                href="/coding-profile"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                {" "}
                Coding Profiles{" "}
              </Link>
            ) : (
              <Link href="/coding-profile" className="m-4">
                {" "}
                Coding Profiles{" "}
              </Link>
            )}
            {currentPath == "/blogs" ? (
              <Link
                href="/blogs"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                {" "}
                Blog{" "}
              </Link>
            ) : (
              <Link href="/blogs" className="m-4">
                {" "}
                Blog{" "}
              </Link>
            )}
            {/* {currentPath == "/contact" ? (
              <Link
                href="/contact"
                className="m-4 border-2 rounded-md p-2 bg-slate-800"
              >
                {" "}
                Contact{" "}
              </Link>
            ) : (
              <Link href="/contact" className="m-4">
                {" "}
                Contact{" "}
              </Link>
            )} */}
          </div>
        </div>
      </nav>
    </div>
  );
}
