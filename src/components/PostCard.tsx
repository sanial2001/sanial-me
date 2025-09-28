import Link from "next/link";
import type { Post } from "@/lib/site";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-border p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-gradient-to-br from-background via-muted/20 to-background hover:border-primary/20">
      <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground mb-6">
        <time dateTime={post.date} className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(post.date).toLocaleDateString()}
        </time>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {post.readingTime}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
        <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{post.excerpt}</p>
      
      {post.tags?.length ? (
        <div className="flex flex-wrap gap-3 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group/link"
      >
        Read more
        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}


