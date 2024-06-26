import BlogLink from "../../components/blog-link";

import getPosts from "./getPosts";

export default function Blog() {
  const posts = getPosts();
  console.log(posts);
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
        <BlogLink
          blogtitle="Blog-1"
          blogurl="/blogs/my-first-blog"
          blogdate="2023-10-10"
        />
        <BlogLink
          blogtitle="Blog-2"
          blogurl="/blogs/my-second-blog"
          blogdate="2023-10-10"
        />
      </div>
    </div>
  );
}