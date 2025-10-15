import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function BlogHeader() {
  return (
    <div className="flex justify-center items-center w-2/3 p-2">
      <Link href="/blog" className="text-2xl h-full flex items-center">
        <ArrowLeft />
      </Link>
      <div className="text-2xl ml-2 h-full flex items-center">
        Back to Blogs
      </div>
      <Link href="/" className="text-lg h-full ml-auto flex items-center">
        Back to Portfolio
      </Link>
    </div>
  );
}
