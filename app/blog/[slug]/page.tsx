import getPosts, { getPost } from "../get-posts";
import { PostBody } from "./post-body";
import { notFound } from 'next/navigation'

export async function getStaticPaths() {
  const posts = await getPosts()
  console.log(posts)
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export default async function PostPage({
    params,
  }: {
    params: {
      slug: string
    }
  }) {
    const post = await getPost(params.slug)
    // notFound is a Next.js utility
    if (!post) return notFound()
    // Pass the post contents to MDX
    return <PostBody>{post?.content}</PostBody>
  }

