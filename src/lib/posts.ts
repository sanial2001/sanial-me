import type { Post } from "./site";

export const posts: Post[] = [
  {
    slug: "setting-up-clean-nextjs",
    title: "Setting up a clean, consistent Next.js project",
    excerpt:
      "How I scaffold production-ready Next.js apps with a neat, consistent UI and sensible defaults.",
    date: "2025-09-01",
    tags: ["nextjs", "tailwind", "architecture"],
    readingTime: "6 min",
    contentHtml: `
      <p>Starting a new project is an opportunity to bake in consistency from day one.</p>
      <p>In this post I cover folder layout, styling primitives, and small conventions that compound over time.</p>
      <h2>Key ideas</h2>
      <ul>
        <li>Keep a small set of UI primitives and reuse them.</li>
        <li>Prefer composition over configuration.</li>
        <li>Automate formatting and linting early.</li>
      </ul>
    `,
  },
  {
    slug: "effective-typescript-patterns",
    title: "Effective TypeScript patterns for React apps",
    excerpt:
      "Type-safe APIs, discriminated unions, and smart component props for maintainable React code.",
    date: "2025-08-12",
    tags: ["typescript", "react"],
    readingTime: "8 min",
    contentHtml: `
      <p>TypeScript shines when your types mirror your domain.</p>
      <p>We'll look at discriminated unions, exhaustive checks, and prop modeling patterns.</p>
    `,
  },
  {
    slug: "shipping-small-bets",
    title: "Shipping small bets consistently",
    excerpt:
      "A lightweight framework for shipping small, frequent improvements without ceremony.",
    date: "2025-07-20",
    tags: ["process", "productivity"],
    readingTime: "5 min",
    contentHtml: `
      <p>Momentum beats intensity. Small bets compound.</p>
      <p>Here are practices that keep me shipping weekly without burnout.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}


