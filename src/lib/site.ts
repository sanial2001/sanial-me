export const siteConfig = {
  name: "sanial.me",
  title: "Sanial Das — Engineering Blog",
  description:
    "Engineering notes, deep dives, and practical guides on web, systems, and tooling.",
  links: {
    linkedin: "https://www.linkedin.com/in/sanialdas/",
    resume: "/resume.pdf", // Update this path when you add your PDF
    x: "https://x.com/sane_neul",
    instagram: "https://www.instagram.com/sane.neul/",
    github: "https://github.com/sanial2001",
  },
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  tags: string[];
  readingTime: string;
  contentHtml: string;
  image?: string;
};


