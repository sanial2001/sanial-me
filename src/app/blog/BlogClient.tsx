"use client";

import { useState, useMemo } from "react";
import PostCard from "@/_components/PostCard";
import TagFilter from "@/_components/TagFilter";
import type { Post } from "@/lib/site";

interface BlogClientProps {
  allTags: string[];
  posts: Post[];
}

export default function BlogClient({ allTags, posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag =
        selectedTag === "all" || post.tags.includes(selectedTag);
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesTag && matchesQuery;
    });
  }, [posts, selectedTag, searchQuery]);

  // Calculate post counts for each tag
  const postCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allTags.forEach(tag => {
      counts[tag] = posts.filter(post => post.tags.includes(tag)).length;
    });
    return counts;
  }, [allTags, posts]);

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Engineering Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Deep dives into web platforms, performance optimization, and practical development techniques. 
          Written with clarity and backed by real-world experience.
        </p>
      </section>

      {/* Tag Filter & Search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:flex-1">
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            postCounts={postCounts}
            totalPosts={posts.length}
          />
        </div>

        <div className="relative w-full md:w-80">
          <label htmlFor="blog-search" className="sr-only">
            Search posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search posts..."
            className="w-full rounded-2xl border border-border bg-background/80 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>

      {/* Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            {selectedTag === "all" ? "All Posts" : `${selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)} Posts`}
          </h2>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No posts found for the selected topic.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
