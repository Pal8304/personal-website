import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog-page/blog-header";
import BlogFooter from "@/components/blog-page/blog-footer";

export async function generateStaticParams() {
  const posts = await getPosts();
  //console.log(posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage(
  props: {
    params: Promise<{
      slug: string;
    }>;
  }
) {
  const params = await props.params;
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <BlogHeader />
      <div className="w-full border-b-2 opacity-50"> </div>
      <div className="w-2/3 flex flex-col gap-2 mt-4 p-2">
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
                className="min-w-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        {post.content && <PostBody>{post.content}</PostBody>}
      </div>
      <div className="w-full border-b-2 opacity-40"></div>
      <BlogFooter />
    </div>
  );
}
