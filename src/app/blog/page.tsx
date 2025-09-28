import { posts, getAllTags } from "@/lib/posts";
import BlogClient from "./BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and notes on engineering by Sanial Das.",
};

// Get all unique tags from posts
const allTags = getAllTags();

export default function BlogIndexPage() {
  return <BlogClient allTags={allTags} posts={posts} />;
}


