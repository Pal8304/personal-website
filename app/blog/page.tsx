import BlogLink from "../../components/blog-link";
import PageTemplate from "../../components/page-template";

import getPosts from "./get-posts";

export default async function Blog() {
  const blogs = await getPosts();
  blogs.map((blog) => {
    {
      title: blog.title;
      subtitle: blog.subtitle;
      date: blog.date;
      tags: blog.tags;
      slug: blog.slug;
    }
  });
  // console.log(blogs);
  return (
    <PageTemplate 
      title="Blogs" 
      subtitle="My weird thoughts and ideas on the internet"
    >
      <div className="flex flex-col items-start justify-start gap-2 overflow-scroll">
        {blogs.map((blog, index) => {
          return (
            <BlogLink
              key={index}
              blogtitle={blog.title}
              blogsubtitle={blog.subtitle}
              blogurl={`/blog/${blog.slug}`}
              blogdate={blog.date}
              blogtags={blog.tags}
            />
          );
        })}
      </div> 
    </PageTemplate>
  );
}
