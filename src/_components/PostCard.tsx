import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/site";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="group rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-gradient-to-br from-background via-muted/20 to-background hover:border-primary/20 cursor-pointer hover:-translate-y-1">
        {/* Image */}
        {post.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground mb-4">
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
          
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm line-clamp-3">{post.excerpt}</p>
          
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border/60 hover:bg-muted/80 hover:text-foreground hover:border-border transition-all duration-200 capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors group/link">
            Read more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}


