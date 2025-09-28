"use client";

import { useState, useMemo } from "react";
import { getPostsByTag } from "@/lib/posts";
import PostCard from "@/_components/PostCard";
import TagFilter from "@/_components/TagFilter";
import type { Post } from "@/lib/site";

interface BlogClientProps {
  allTags: string[];
  posts: Post[];
}

export default function BlogClient({ allTags, posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    return getPostsByTag(selectedTag);
  }, [selectedTag]);

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

      {/* Tag Filter Section */}
      <TagFilter
        tags={allTags}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        postCounts={postCounts}
        totalPosts={posts.length}
      />

      {/* Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            {selectedTag === "all" ? "All Posts" : `${selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)} Posts`}
          </h2>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
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
