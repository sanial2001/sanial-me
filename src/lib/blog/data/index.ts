// Import all blog posts
import { http101Post } from "./http-101-guide";
import { concurrencyPost } from "./concurrency-guide";

// Export all posts in an array
export const blogPosts = [
  concurrencyPost,
  http101Post,
  // Add more blog posts here as you create them
];

// Export individual posts for easy access
export { http101Post, concurrencyPost };
