import matter from "gray-matter";
import path from "path";
import { Post } from "@/data/types";
import fs from "fs/promises";
import { cache } from "react";

export const getPosts = cache(async () => {
  const posts = await fs.readdir("./data/blogs");
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join("./data/blogs", file);
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);
        return {
          title: (data.Title !== undefined ? data.Title : "Untitled"),
          date: (data.Date !== undefined ? data.Date.toISOString().split("T")[0] : "Unknown"),
          content: content,
          slug: file.replace(/\.mdx$/, ""),
        } as Post;
      })
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default getPosts;
