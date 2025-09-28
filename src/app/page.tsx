"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Hi, I&apos;m Sanial Das
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Senior Software Engineer with 2+ years of experience building scalable systems and handling large codebases. 
              Backend developer by heart, passionate about micro SaaS applications and writing about software engineering. 
              When I&apos;m not coding, you&apos;ll find me exploring new places, playing football, or seeking adventure in the great outdoors.
            </p>
          </div>
          
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
        <Image
              src="/profile.jpg"
              alt="Sanial Das"
              width={320}
              height={320}
              className="w-full h-full object-cover"
          priority
        />
          </div>
        </div>
      </section>

      {/* Professional Journey Cards */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A backend developer at heart, I specialize in building scalable systems and driving technical innovation, with a keen interest in fintech and adtech domains.
          </p>
        </div>
        
        {/* Cards Container */}
        <div 
          id="journey-cards"
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Current Role */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">OneLot • Remote • Philippines</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Leading technical innovation at a remote fintech startup, building scalable systems and mentoring junior developers.</p>
            </div>
          </div>

          {/* Media.net Experience */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-secondary/5 to-secondary/10 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">Media.net • 1 Year</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Part of dashboard service team for ad space and programmatic buying, working with large-scale advertising systems.</p>
            </div>
          </div>

          {/* Key Achievement */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Platform Impact</h3>
                  <p className="text-sm text-muted-foreground">500+ Dealerships</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Built dealership onboarding platform serving 500+ dealerships nationwide with improved ML accuracy by 40%.</p>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-secondary/5 to-primary/5 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tech Stack</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack & ML</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Next.js, TypeScript, Java, Python, TensorFlow, Docker, Kubernetes, and microservices architecture.</p>
            </div>
          </div>

          {/* Performance Achievement */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Performance Gains</h3>
                  <p className="text-sm text-muted-foreground">50% Improvement</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Reduced system processing time by 50% through architectural improvements and optimization techniques.</p>
            </div>
          </div>

          {/* Education & Problem Solving */}
          <div className="flex-shrink-0 w-80 p-6 rounded-2xl border border-border bg-gradient-to-br from-secondary/5 to-secondary/10 snap-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education & Skills</h3>
                  <p className="text-sm text-muted-foreground">B.Tech CSE • IIIT Guwahati</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">1000+ problems solved across LeetCode and Codeforces, demonstrating strong algorithmic thinking and data structures expertise.</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons - Completely Separate */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => {
              const container = document.getElementById('journey-cards');
              if (container) {
                container.scrollBy({ left: -320, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-accent hover:border-primary/20 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => {
              const container = document.getElementById('journey-cards');
              if (container) {
                container.scrollBy({ left: 320, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-accent hover:border-primary/20 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Connect with me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s connect and share ideas about engineering, technology, and innovation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:border-primary/20 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:border-secondary/20 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X (Twitter)
          </a>
        <a
            href={siteConfig.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:border-primary/20 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
        </a>
        <a
            href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:border-secondary/20 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Ready to dive in?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest thoughts on engineering, tools, and building better software.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-lg"
        >
          Browse all posts
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
