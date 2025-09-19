import Link from "next/link";
import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  //console.log(posts);
  
  return posts.map((post) => ({
    slug: post.slug
  }))
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
    <div>
      <div className="flex flex-col m-4">
        <Link href="/blog" className="hover:underline">
          Back to blog
        </Link>
        <div className="flex text-4xl items-center justify-center">
          {post.title}
        </div>
        <div className="flex items-center justify-center opacity-55">
          {post.date}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col m-4 w-2/3">
          <PostBody>{post.content}</PostBody>
        </div>
      </div>
    </div>
  );
}
