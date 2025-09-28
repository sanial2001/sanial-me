import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, posts } from "@/lib/posts";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const description = post.excerpt || "Post";
  return {
    title: post.title,
    description,
    openGraph: { title: post.title, description, type: "article" },
    twitter: { card: "summary_large_image", title: post.title, description },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-foreground">{post.title}</span>
      </nav>

      <article className="space-y-6">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">Sanial Das</span>
                    </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime}
            </div>
          </div>

          {post.tags?.length ? (
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-muted text-muted-foreground border border-border/60 hover:bg-muted/80 hover:text-foreground hover:border-border transition-colors capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-neutral max-w-none
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-foreground [&>h2]:leading-tight
              [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-foreground [&>h3]:leading-tight
              [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-foreground
              [&>ul]:mb-6 [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed [&>ul>li]:text-foreground
              [&>ol]:mb-6 [&>ol]:pl-6 [&>ol>li]:mb-3 [&>ol>li]:text-lg [&>ol>li]:leading-relaxed [&>ol>li]:text-foreground
              [&>code]:bg-muted [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>code]:text-foreground
              [&>strong]:font-semibold [&>strong]:text-foreground
              [&>em]:italic [&>em]:text-foreground
              [&>div]:my-8 [&>div]:flex [&>div]:justify-center [&>div>img]:w-full [&>div>img]:max-w-lg [&>div>img]:rounded-lg [&>div>img]:shadow-sm [&>div>img]:border [&>div>img]:border-border/20 [&>div>img]:object-contain
              [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:bg-muted/30 [&>blockquote]:rounded-r-lg [&>blockquote]:my-8
              [&>blockquote>p]:text-lg [&>blockquote>p]:italic [&>blockquote>p]:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>
        </div>
      </article>
    </div>
  );
}


