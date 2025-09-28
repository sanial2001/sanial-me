import type { Post } from "../site";

/**
 * Extracts the first image from blog content HTML
 * @param contentHtml - The HTML content of the blog post
 * @returns The first image src URL or null if no image found
 */
export function extractFirstImageFromContent(contentHtml: string): string | null {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
  const match = contentHtml.match(imgRegex);
  return match ? match[1] : null;
}

/**
 * Generates a reading time estimate based on word count
 * @param contentHtml - The HTML content of the blog post
 * @returns Reading time in minutes as a string
 */
export function estimateReadingTime(contentHtml: string): string {
  // Remove HTML tags to get plain text
  const plainText = contentHtml.replace(/<[^>]*>/g, '');
  const wordCount = plainText.split(/\s+/).length;
  const wordsPerMinute = 200; // Average reading speed
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

/**
 * Validates that a blog post has all required fields
 * @param post - The blog post object to validate
 * @returns True if valid, false otherwise
 */
export function validateBlogPost(post: Partial<Post>): post is Post {
  return !!(
    post.slug &&
    post.title &&
    post.excerpt &&
    post.date &&
    post.contentHtml &&
    post.tags &&
    Array.isArray(post.tags) &&
    post.tags.length > 0
  );
}

/**
 * Sanitizes and formats a blog post slug
 * @param title - The blog post title
 * @returns A URL-friendly slug
 */
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Formats a date string for display
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Gets all unique tags from an array of posts
 * @param posts - Array of blog posts
 * @returns Sorted array of unique tags
 */
export function getAllTagsFromPosts(posts: Post[]): string[] {
  return Array.from(new Set(posts.flatMap(post => post.tags))).sort();
}

/**
 * Counts posts by tag
 * @param posts - Array of blog posts
 * @returns Object with tag counts
 */
export function getPostCountsByTag(posts: Post[]): Record<string, number> {
  const counts: Record<string, number> = {};
  posts.forEach(post => {
    post.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}
