import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog-page/blog-header"; // ToDo: Use this later on
import BlogFooter from "@/components/blog-page/blog-footer";

export async function generateStaticParams() {
  const posts = await getPosts();
  //console.log(posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4 lg:px-12 py-24 overflow-scroll">
      <div className="w-full lg:w-2/3 h-full flex flex-col gap-2 mt-4 p-2">
        <div className="text-5xl h-full">{post.title}</div>
        {/* <div className="text-2xl h-full opacity-75">{post.subtitle}</div> */}
        <div className="text-lg h-full opacity-50">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1 mt-2 mb-4">
            {post.tags.map((tag, index) => (
              <div
                key={tag}
                className="min-w-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        {post.content && <PostBody>{post.content}</PostBody>} 
        <BlogFooter />
      </div>
    </div>
  );
}
