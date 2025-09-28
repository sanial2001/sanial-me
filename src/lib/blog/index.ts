import type { Post } from "../site";
import { blogPosts } from "./data";
import {
  getAllTagsFromPosts,
  getPostCountsByTag,
  validateBlogPost,
  formatDate
} from "./utils";

// Export all posts
export const posts: Post[] = blogPosts;

// Export utility functions
export {
  getAllTagsFromPosts,
  getPostCountsByTag,
  extractFirstImageFromContent,
  estimateReadingTime,
  generateSlugFromTitle,
  validateBlogPost,
  formatDate
} from "./utils";

/**
 * Get a post by its slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  return getAllTagsFromPosts(posts);
}

/**
 * Get posts filtered by a specific tag
 */
export function getPostsByTag(tag: string): Post[] {
  if (tag === "all") {
    return posts;
  }
  return posts.filter(post => post.tags.includes(tag));
}

/**
 * Get posts filtered by multiple tags (posts that have ANY of the specified tags)
 */
export function getPostsByTags(tags: string[]): Post[] {
  if (tags.length === 0 || tags.includes("all")) {
    return posts;
  }
  return posts.filter(post => tags.some(tag => post.tags.includes(tag)));
}

/**
 * Get recent posts sorted by date
 */
export function getRecentPosts(limit: number = 5): Post[] {
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Get post counts by tag for filtering UI
 */
export function getPostCounts(): Record<string, number> {
  return getPostCountsByTag(posts);
}

/**
 * Search posts by title or excerpt
 */
export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const relatedPosts = posts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
    .sort((a, b) => {
      // Sort by number of shared tags, then by date
      const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      
      if (aSharedTags !== bSharedTags) {
        return bSharedTags - aSharedTags;
      }
      
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
    
  return relatedPosts;
}
