import type { Post } from "../../site";
import { extractFirstImageFromContent, estimateReadingTime } from "../utils";

const content = `
      <section class="space-y-6">
        <div class="my-8 flex justify-center">
          <img src="/blog-images/http-101-diagram-3.jpg" alt="HTTP Response Codes Cheat Sheet - Complete Overview" class="w-full max-w-2xl rounded-lg shadow-md object-contain" />
        </div>
        <p>HTTP (Hypertext Transfer Protocol) is the lifeline of web communication, powering everything from simple page loads to complex API interactions. For backend engineers, a solid grasp of HTTP's core ideas—headers, methods, CORS, status codes, caching, and transport security—is non‑negotiable.</p>
        <div class="rounded-3xl border border-border/70 bg-muted/30 p-6 space-y-2">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why it matters</p>
          <p class="text-base leading-relaxed text-foreground/90">Every REST API, webhook, or browser request you ship rides on HTTP. Knowing the protocol keeps debugging grounded and architecture decisions predictable.</p>
        </div>
      </section>

      <h2>1. What is HTTP?</h2>
      <p>HTTP lives at the application layer and defines how clients (browsers, mobile apps, CLIs) talk to servers. The protocol is stateless: each request carries everything the server needs, so scaling horizontally becomes easier. The tradeoff is that any notion of “session” or “user identity” must be carried with explicit tokens, cookies, or headers.</p>

      <h2>2. Headers: Metadata That Drives Everything</h2>
      <p>Headers are key/value pairs attached to requests and responses. They describe the payload, control caching, enable authentication, and let us ship new capabilities without changing the core protocol.</p>
      <div class="grid gap-4 md:grid-cols-2 my-8">
        <div class="rounded-3xl border border-border/80 bg-background p-5 space-y-2">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Key header families</p>
          <ul class="space-y-2 text-sm text-foreground/90">
            <li><strong>Request headers</strong>: <code>User-Agent</code>, <code>Authorization</code>, <code>Accept</code>.</li>
            <li><strong>General headers</strong>: <code>Cache-Control</code>, <code>Connection</code>.</li>
            <li><strong>Representation headers</strong>: <code>Content-Type</code>, <code>Content-Length</code>, <code>ETag</code>.</li>
            <li><strong>Security headers</strong>: <code>Strict-Transport-Security</code>, <code>Content-Security-Policy</code>.</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-border/80 bg-primary/5 p-5 space-y-2">
          <p class="text-sm font-semibold uppercase tracking-widest text-primary">Why headers matter</p>
          <p class="text-sm text-foreground/90 leading-relaxed">Headers let you layer authentication, compression, tracing, or feature flags without mutating the request body. They’re infinitely extensible, so teams can innovate without waiting for protocol changes.</p>
        </div>
      </div>

      <h2>3. HTTP Methods & Idempotency</h2>
      <p>Methods describe the intent of a request. Knowing which ones should be idempotent keeps APIs predictable and cache-friendly.</p>
      <div class="rounded-3xl border border-border/70 bg-muted/20 p-6 md:flex md:items-start md:justify-between gap-10">
        <ul class="space-y-2 text-sm text-foreground/90 md:w-2/3">
          <li><strong>GET</strong>: Retrieve data; must not mutate state (idempotent).</li>
          <li><strong>POST</strong>: Create new data; can produce different results each call (non-idempotent).</li>
          <li><strong>PUT</strong>: Replace an entire resource; safe to repeat (idempotent).</li>
          <li><strong>PATCH</strong>: Partially update a resource; typically treated as idempotent.</li>
          <li><strong>DELETE</strong>: Remove a resource; repeating it shouldn’t change the outcome.</li>
          <li><strong>OPTIONS</strong>: Ask the server which methods/headers are allowed—critical for CORS preflight.</li>
        </ul>
        <p class="text-sm text-muted-foreground md:w-1/3 md:mt-0 mt-6">Idempotency means repeating the same request won’t change state after the first success. GET/PUT/DELETE lean on this guarantee for retries and caching.</p>
      </div>

      <h2>4. CORS (Cross-Origin Resource Sharing)</h2>
      <p>CORS is the browser’s guardrail that prevents malicious pages from hitting your APIs. Browsers enforce the <strong>same-origin policy</strong> by default; CORS lets servers poke holes in that wall safely.</p>
      <div class="space-y-4">
        <div class="rounded-3xl border border-border/70 bg-background p-5">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">How it works</p>
          <p class="mt-2 text-sm text-foreground/90">The browser sends an <code>Origin</code> header. Your server must reply with <code>Access-Control-Allow-Origin</code> (a specific domain or <code>*</code>) before the browser will expose the response to client code.</p>
        </div>
        <div class="rounded-3xl border border-border/70 bg-background p-5">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Simple vs preflight</p>
          <ul class="mt-2 space-y-2 text-sm text-foreground/90">
            <li><em>Simple requests</em> (GET, POST, HEAD with basic headers) go straight through; the browser just inspects the response headers.</li>
            <li><em>Preflighted requests</em> (PUT, DELETE, or any request with custom headers like <code>Authorization</code>) trigger an automatic OPTIONS call. The server must respond with allowed methods/headers before the real request is sent.</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-border/70 bg-muted/10 p-5 text-sm text-foreground/90">
          <p><strong>Key headers:</strong> <code>Access-Control-Allow-Origin</code>, <code>Access-Control-Allow-Methods</code>, <code>Access-Control-Allow-Headers</code>, <code>Access-Control-Allow-Credentials</code>.</p>
          <p class="mt-2 text-muted-foreground">Get these right and you balance usability (mobile apps, partner portals) with safety.</p>
        </div>
      </div>
      <div class="my-8 flex justify-center">
        <img src="/blog-images/http-101-diagram-1.webp" alt="HTTP Headers and CORS Flow Diagram" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20 object-contain" />
      </div>

      <h2>5. Reading HTTP Response Codes</h2>
      <p>Status codes are the protocol’s native language for expressing success, redirects, client mistakes, or server failures.</p>
      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-3xl border border-border/70 bg-background p-5 space-y-3">
          <p class="text-sm font-semibold uppercase tracking-widest text-primary">Success & redirects</p>
          <ul class="space-y-2 text-sm text-foreground/90">
            <li><strong>200 OK:</strong> Everything worked.</li>
            <li><strong>201 Created:</strong> Resource created (often with a Location header).</li>
            <li><strong>204 No Content:</strong> Success with no body.</li>
            <li><strong>301/302:</strong> Permanently or temporarily moved.</li>
            <li><strong>304 Not Modified:</strong> Use your cached copy.</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-border/70 bg-background p-5 space-y-3">
          <p class="text-sm font-semibold uppercase tracking-widest text-secondary">Client & server issues</p>
          <ul class="space-y-2 text-sm text-foreground/90">
            <li><strong>400 Bad Request:</strong> Payload or syntax problem.</li>
            <li><strong>401/403:</strong> Authentication vs authorization failures.</li>
            <li><strong>404 Not Found:</strong> The resource doesn’t exist.</li>
            <li><strong>409 Conflict:</strong> State mismatch (versioning, duplicates).</li>
            <li><strong>429 Too Many Requests:</strong> Rate limiting kicked in.</li>
            <li><strong>500/502/503/504:</strong> Server blew up, bad gateway, temporarily down, or upstream timeout.</li>
          </ul>
        </div>
      </div>
      <p class="mt-4 text-sm text-muted-foreground">Use these codes consistently so clients can automate retries, fallbacks, or user messaging.</p>

      <h2>6. HTTP Caching Essentials</h2>
      <p>Caching trims latency and cost by serving responses from nearby storage when nothing has changed.</p>
      <div class="rounded-3xl border border-border/70 bg-muted/20 p-6 space-y-3 text-sm text-foreground/90">
        <ul class="space-y-2">
          <li><strong>Cache-Control</strong>: The rulebook—<code>max-age</code>, <code>no-store</code>, <code>public</code>, etc.</li>
          <li><strong>ETag</strong>: A version hash so clients can ask “has this changed?” via conditional requests.</li>
          <li><strong>Last-Modified</strong>: Timestamp alternative to ETag; handy for coarse invalidation.</li>
        </ul>
        <p class="text-muted-foreground">Browsers/CDNs compare these headers to decide whether to reuse a response or fetch it again, cutting bandwidth and speeding up UI.</p>
      </div>
      <div class="my-8 flex justify-center">
        <img src="/blog-images/http-101-diagram-2.webp" alt="HTTP Caching Flow Diagram" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20 object-contain" />
      </div>

      <h2>7. SSL, TLS, and HTTPS</h2>
      <div class="grid gap-4 md:grid-cols-3 my-8 text-sm text-foreground/90">
        <div class="rounded-3xl border border-border/70 bg-background p-5">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">SSL</p>
          <p class="mt-2">Secure Sockets Layer—The original encryption protocol for HTTP. Obsolete today but historically important.</p>
        </div>
        <div class="rounded-3xl border border-border/70 bg-background p-5">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">TLS</p>
          <p class="mt-2">Transport Layer Security—the modern successor. It encrypts and authenticates traffic so eavesdroppers can’t read or tamper with data.</p>
        </div>
        <div class="rounded-3xl border border-border/70 bg-background p-5">
          <p class="text-sm font-semibold uppercase tracking-widest text-muted-foreground">HTTPS</p>
          <p class="mt-2">HTTP over TLS (or legacy SSL). Any <code>https://</code> URL means the connection is encrypted, authenticated, and far safer for credentials or payments.</p>
        </div>
      </div>

      <h2>Conclusion</h2>
      <p>Mastering HTTP’s stateless model, headers, verbs, CORS, status codes, caching, and transport security gives you leverage everywhere—from debugging flaky requests to designing resilient APIs. Nail the fundamentals and every backend system you touch becomes easier to reason about.</p>
    `;

export const http101Post: Post = {
  slug: "http-101-guide-from-engineering-point-of-view",
  title: "HTTP 101: Guide from engineering point of view",
  excerpt: "HTTP (Hypertext Transfer Protocol) is the lifeline of web communication, powering everything from simple page loads to complex API interactions. For backend engineers, a solid grasp of HTTP's core concepts is non-negotiable.",
  date: "2025-09-19",
  tags: ["backend"],
  readingTime: estimateReadingTime(content),
  image: extractFirstImageFromContent(content) || "/blog-images/http-101-main.webp",
  contentHtml: content,
};
