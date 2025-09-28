# Blog Management System

This directory contains the scalable blog management system designed to handle a large number of blog posts efficiently.

## Structure

```
src/lib/blog/
├── README.md              # This documentation
├── index.ts              # Main blog API and utilities
├── utils.ts              # Blog utility functions
└── data/                 # Individual blog post files
    ├── index.ts          # Exports all blog posts
    ├── TEMPLATE.ts       # Template for new blog posts
    └── http-101-guide.ts # Example blog post
```

## Adding New Blog Posts

### Method 1: Using the Template (Recommended)

1. Copy `data/TEMPLATE.ts` to `data/your-blog-slug.ts`
2. Update the content with your blog post
3. Add the new post to `data/index.ts`

Example:
```typescript
// data/my-awesome-post.ts
import type { Post } from "../../site";
import { extractFirstImageFromContent, estimateReadingTime } from "../utils";

const content = `
  <p>Your blog content here...</p>
  <div class="my-8">
    <img src="/blog-images/your-image.jpg" alt="Description" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20" />
  </div>
`;

export const myAwesomePost: Post = {
  slug: "my-awesome-post",
  title: "My Awesome Post",
  excerpt: "A compelling description...",
  date: "2025-01-01",
  tags: ["frontend", "react"],
  readingTime: estimateReadingTime(content),
  image: extractFirstImageFromContent(content) || "/blog-images/fallback.jpg",
  contentHtml: content,
};
```

Then add to `data/index.ts`:
```typescript
import { myAwesomePost } from "./my-awesome-post";

export const blogPosts = [
  http101Post,
  myAwesomePost, // Add here
];
```

## Features

### Automatic Features
- **Image Extraction**: First image in content becomes preview image
- **Reading Time**: Automatically calculated based on word count
- **Tag Management**: Automatic tag extraction and filtering
- **Date Formatting**: Consistent date display

### Available Functions

```typescript
// Get posts
getPostBySlug(slug: string): Post | undefined
getPostsByTag(tag: string): Post[]
getRecentPosts(limit?: number): Post[]
searchPosts(query: string): Post[]
getRelatedPosts(currentPost: Post, limit?: number): Post[]

// Get metadata
getAllTags(): string[]
getPostCounts(): Record<string, number>

// Utilities
extractFirstImageFromContent(content: string): string | null
estimateReadingTime(content: string): string
generateSlugFromTitle(title: string): string
validateBlogPost(post: Partial<Post>): boolean
```

## Best Practices

1. **File Naming**: Use kebab-case for file names (e.g., `my-awesome-post.ts`)
2. **Slug Consistency**: File name should match the post slug
3. **Image Organization**: Store images in `/public/blog-images/`
4. **Content Structure**: Use semantic HTML with proper heading hierarchy
5. **Tags**: Use consistent, lowercase tags for better filtering

## Image Guidelines

- Store images in `/public/blog-images/`
- Use descriptive alt text for accessibility
- Optimize images for web (WebP format recommended)
- Use consistent styling classes:
  ```html
  <div class="my-8">
    <img src="/blog-images/image.jpg" alt="Description" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20" />
  </div>
  ```

## Content Guidelines

- Use semantic HTML structure
- Include proper heading hierarchy (h2, h3, etc.)
- Add code blocks with proper syntax highlighting
- Include relevant images to break up text
- Write compelling excerpts for better previews

## Migration from Old Structure

The old `posts.ts` file has been updated to re-export everything from the new blog structure, so existing imports will continue to work without changes.
