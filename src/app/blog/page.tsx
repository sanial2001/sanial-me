import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and notes on engineering by Sanial Das.",
};

export default function BlogIndexPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Engineering Blog
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Deep dives into web platforms, performance optimization, and practical development techniques. 
          Written with clarity and backed by real-world experience.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground">
            Recent Posts
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          <span className="text-sm font-medium text-muted-foreground bg-accent px-3 py-1 rounded-full">
            {posts.length} article{posts.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}


