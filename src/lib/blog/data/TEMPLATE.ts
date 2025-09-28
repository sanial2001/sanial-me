/**
 * Template for creating new blog posts
 * 
 * Instructions:
 * 1. Copy this file and rename it to your blog post slug (e.g., "my-awesome-post.ts")
 * 2. Update the post object with your content
 * 3. Add the new post to src/lib/blog/data/index.ts
 * 4. The image will be automatically extracted from your content
 * 5. Reading time will be automatically calculated
 */

import type { Post } from "../../site";
import { extractFirstImageFromContent, estimateReadingTime } from "../utils";

const content = `
      <p>Your blog content goes here...</p>
      
      <h2>Your First Section</h2>
      <p>Write your content here...</p>
      
      <div class="my-8">
        <img src="/blog-images/your-image.jpg" alt="Your image description" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20" />
      </div>
      
      <h2>Another Section</h2>
      <p>More content...</p>
      
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Wrap up your thoughts...</p>
    `;

export const yourPostSlug: Post = {
  slug: "your-blog-post-slug",
  title: "Your Blog Post Title",
  excerpt: "A compelling excerpt that describes what your blog post is about. This will be shown in the blog card preview.",
  date: "2025-01-01", // Use YYYY-MM-DD format
  tags: ["tag1", "tag2"], // Add relevant tags
  readingTime: estimateReadingTime(content), // This will be calculated automatically
  image: extractFirstImageFromContent(content) || "/blog-images/your-fallback-image.jpg", // First image from content or fallback
  contentHtml: content,
};
