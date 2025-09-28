# sanial.me

A clean, modern engineering blog built with Next.js 15 and Tailwind CSS.

## Features

- **Clean Design**: Modern, minimal UI with consistent patterns
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js App Router and static generation
- **Accessible**: Semantic HTML and proper contrast ratios
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Type Safe**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Typography**: Geist Sans & Geist Mono fonts
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any static host

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sanial-me
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Dynamic blog post pages
│   │   └── page.tsx       # Blog index
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header
│   └── PostCard.tsx       # Blog post card
└── lib/                   # Utilities and data
    ├── posts.ts           # Blog posts data
    └── site.ts            # Site configuration
```

## Customization

### Adding Blog Posts

Edit `/src/lib/posts.ts` to add new blog posts:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief description of your post...",
  date: "2025-01-01",
  tags: ["tag1", "tag2"],
  readingTime: "5 min",
  contentHtml: `<p>Your HTML content...</p>`,
}
```

### Updating Site Info

Edit `/src/lib/site.ts` to update site metadata and links:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Site Title",
  description: "Your site description",
  links: {
    linkedin: "your-linkedin-url",
    resume: "your-resume-url",
  },
};
```

### Styling

The design uses a custom color system defined in `globals.css`:

- Light mode: Clean whites and grays
- Dark mode: Deep blacks with subtle accents
- Consistent spacing and typography
- Smooth transitions and hover effects

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site generates static files and works on any static hosting:

```bash
npm run build
```

Then deploy the `out/` directory to your hosting provider.

## License

MIT License - feel free to use this as a template for your own site.