import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from "next/navigation";

export async function getStaticPaths() {
  const posts = await getPosts();
  //console.log(posts);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
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
        <div className="flex text-4xl items-center justify-center">{post.title}</div>
        <div className="flex items-center justify-center opacity-55">{post.date}</div>
      </div>
      <div className="m-4">
        <PostBody>{post.content}</PostBody>
      </div>
    </div>
  );
}
