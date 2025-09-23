import { time } from "console";
import BlogLink from "../../components/blog-link";
import PageTemplate from "../../components/page-template";

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
    <PageTemplate 
      title="Blogs" 
      subtitle="My weird thoughts and ideas on the internet"
    >
      {/* <div className="flex flex-col items-start justify-start gap-8 mt-8 overflow-scroll">
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
      </div> */}
      <div className="flex flex-col text-7xl items-start justify-start gap-8 mt-8">
        Coming soon!
      </div>
    </PageTemplate>
  );
}
