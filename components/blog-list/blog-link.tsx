import Link from "next/link";

import { BlogLinkProps } from "@/data/types";
import { ArrowRight } from "lucide-react";

export default function BlogLink({
  blogtitle,
  blogurl,
  blogdate,
  blogtags,
  blogsubtitle,
}: BlogLinkProps) {
  return (
    <Link
      className="blog-link w-[90%] group flex items-center justify-between py-4 group-hover:rounded-lg group-hover:ml-4 group-hover:ease-out duration-200"
      href={blogurl}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center font-bold text-3xl">
          <ArrowRight className="w-0 opacity-0 transition-all duration-200 group-hover:w-8 group-hover:mr-2 group-hover:opacity-100" />
          {blogtitle}
        </div>
        <div className="text-l opacity-75 mb-1">{blogsubtitle}</div>
        <div className="flex gap-2">
          {blogtags.map((tag) => (
            <div
              className="blog-tag border px-2 py-0.5 rounded-lg font-light opacity-50"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="opacity-50">
        {new Date(blogdate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </Link>
  );
}
