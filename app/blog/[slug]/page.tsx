import Link from "next/link";
import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  //console.log(posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex w-2/3 p-2">
        <Link href="/blog" className="text-2xl ">
          Blog List
        </Link>
        <Link href="/" className="text-lg ml-auto">
          Back to Portfolio
        </Link>
      </div>
      <div className="w-full border-b-2"> </div>
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
        {post.content && <PostBody>{post.content}</PostBody>}
      </div>
    </div>
  );
}
