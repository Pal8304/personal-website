import { time } from "console";
import BlogLink from "../../components/blog-link";

import getPosts from "./get-posts";

export default async function Blog() {
  const blogs = await getPosts();
  blogs.map((blog) => {
    {
      title: blog.title;
      date: blog.date;
      slug: blog.slug;
    }
  });
  return (
    <div className="font-mono flex flex-col items-start justify-center w-screen h-screen gap-2 ml-12">
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-6xl flex items-start justify-start">
          Blogs
        </div>
        <div className="text-2xl opacity-50">
          My weird thoughts and ideas on the internet
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-8 mt-8">
        {blogs.map((blog, index) => {
          return (
            <BlogLink
              key={index}
              blogtitle={blog.title}
              blogurl={`/blog/${blog.slug}`}
              blogdate={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
}
