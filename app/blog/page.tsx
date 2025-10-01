import BlogList from "@/components/blog-list/blog-list";
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
      <BlogList blogs={blogs} />
    </PageTemplate>
  );
}
