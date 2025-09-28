import type { Post } from "../../site";
import { extractFirstImageFromContent, estimateReadingTime } from "../utils";

const content = `
      <div class="my-8">
        <img src="/blog-images/http-101-diagram-3.jpg" alt="HTTP Response Codes Cheat Sheet - Complete Overview" class="w-full max-w-2xl rounded-lg shadow-md" />
      </div>
      
      <p>HTTP (Hypertext Transfer Protocol) is the lifeline of web communication, powering everything from simple page loads to complex API interactions. For backend engineers, a solid grasp of HTTP's core concepts is non-negotiable. In this article, we'll break down HTTP's fundamentals: what it is, how headers and methods work, CORS, response codes, caching strategies, and the role of SSL, TLS, and HTTPS.</p>
      
      <h2>What is HTTP?</h2>
      <p>HTTP is an application-layer protocol that defines how clients (like browsers or apps) and servers communicate over the web. It is stateless — each request is independent, carrying all the data the server needs to process it. This design makes scaling easier but means any ongoing context (like user authentication) must be managed explicitly, often via tokens or cookies.</p>
      
      <h2>HTTP Headers</h2>
      <p>Headers are key-value pairs included in both requests and responses. They provide vital metadata, control behaviour, and enable features like authentication, content negotiation, security, and caching.</p>
      
      <p><strong>Key header types:</strong></p>
      <ul>
        <li><strong>Request Headers</strong>: Sent by the client (e.g., <code>User-Agent</code>, <code>Authorization</code>, <code>Accept</code>).</li>
        <li><strong>General Headers</strong>: Used for both requests and responses (e.g., <code>Cache-Control</code>, <code>Connection</code>).</li>
        <li><strong>Representation Headers</strong>: Describe the body/content (e.g., <code>Content-Type</code>, <code>Content-Length</code>, <code>ETag</code>).</li>
        <li><strong>Security Headers</strong>: Enhance security (e.g., <code>Strict-Transport-Security</code>, <code>Content-Security-Policy</code>).</li>
      </ul>
      
      <p>Headers are highly extensible, allowing new capabilities to be added without changing the protocol itself.</p>
      
      <h2>HTTP Methods</h2>
      <p>HTTP methods define the intended action for a request. The most common are:</p>
      <ul>
        <li><strong>GET</strong>: Retrieve data (should not modify server state; idempotent).</li>
        <li><strong>POST</strong>: Create new data (can produce different results on each call; non-idempotent).</li>
        <li><strong>PUT</strong>: Replace existing data (idempotent).</li>
        <li><strong>PATCH</strong>: Update part of a resource (idempotent).</li>
        <li><strong>DELETE</strong>: Remove data (idempotent).</li>
        <li><strong>OPTIONS</strong>: Discover server capabilities (crucial for CORS preflight).</li>
      </ul>
      
      <p><strong>Idempotency</strong> is an important property: methods like GET, PUT, and DELETE can be safely repeated without changing the server's state after the first request.</p>
      
      <h2>CORS (Cross-Origin Resource Sharing)</h2>
      <p>CORS is a browser security feature that controls how web pages can make requests to a different domain than the one that served them. By default, browsers enforce the <strong>same-origin policy</strong>, which blocks cross-origin requests for security. CORS allows servers to specify which origins are permitted to access their resources by sending specific headers in the response.</p>
      
      <p><strong>How it works:</strong></p>
      <p>When a browser makes a cross-origin request, it includes an <code>Origin</code> header. The server must respond with <code>Access-Control-Allow-Origin</code> (either a specific origin or <code>*</code> for all) to grant access. Without this header, the browser blocks the response.</p>
      
      <p><strong>Simple vs. Preflighted Requests:</strong></p>
      <ul>
        <li><em>Simple requests</em> (GET, POST, HEAD with simple headers) are sent directly; the browser checks the response for CORS headers.</li>
        <li><em>Preflighted requests</em> (e.g., PUT, DELETE, or requests with custom headers like Authorization) trigger a preliminary OPTIONS request. The server must reply with allowed methods and headers before the actual request is sent.</li>
      </ul>
      
      <p><strong>Key headers:</strong> Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials</p>
      
      <p>CORS ensures that only trusted domains can access your APIs, balancing security and flexibility in modern web apps.</p>
      
      <div class="my-8">
        <img src="/blog-images/http-101-diagram-1.webp" alt="HTTP Headers and CORS Flow Diagram" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20" />
      </div>
      
      <h2>HTTP Response Codes</h2>
      <p>Status codes are three-digit numbers in every HTTP response, indicating the result of the request:</p>
      
      <p><strong>2xx (Success):</strong></p>
      <ul>
        <li><code>200 OK</code>: Successful request</li>
        <li><code>201 Created</code>: Resource created</li>
        <li><code>204 No Content</code>: Success, no body</li>
      </ul>
      
      <p><strong>3xx (Redirection):</strong></p>
      <ul>
        <li><code>301 Moved Permanently</code>, <code>302 Found</code>, <code>304 Not Modified</code></li>
      </ul>
      
      <p><strong>4xx (Client Errors):</strong></p>
      <ul>
        <li><code>400 Bad Request</code>, <code>401 Unauthorized</code>, <code>403 Forbidden</code>, <code>404 Not Found</code>, <code>409 Conflict</code>, <code>429 Too Many Requests</code></li>
      </ul>
      
      <p><strong>5xx (Server Errors):</strong></p>
      <ul>
        <li><code>500 Internal Server Error</code>, <code>502 Bad Gateway</code>, <code>503 Service Unavailable</code>, <code>504 Gateway Timeout</code></li>
      </ul>
      
      <p>These codes allow clients to programmatically handle responses and errors.</p>
      
      <h2>HTTP Caching</h2>
      <p>Caching reduces load times and bandwidth by storing reusable responses. Key mechanisms:</p>
      <ul>
        <li><strong>Cache-Control</strong>: Directs how and for how long content should be cached.</li>
        <li><strong>ETag</strong>: A unique identifier for a specific version of a resource.</li>
        <li><strong>Last-Modified</strong>: Timestamp indicating when the resource was last changed.</li>
      </ul>
      
      <p>Browsers and proxies use these headers to decide whether to serve cached content or fetch a fresh version, improving performance and reducing server load.</p>
      
      <div class="my-8">
        <img src="/blog-images/http-101-diagram-2.webp" alt="HTTP Caching Flow Diagram" class="w-full max-w-lg rounded-lg shadow-sm border border-border/20" />
      </div>
      
      <h2>SSL, TLS, and HTTPS</h2>
      <ul>
        <li><strong>SSL (Secure Sockets Layer)</strong>: The original protocol for encrypting web traffic (now obsolete).</li>
        <li><strong>TLS (Transport Layer Security)</strong>: The modern, secure replacement for SSL. It encrypts data exchanged between client and server, protecting against eavesdropping and tampering.</li>
        <li><strong>HTTPS</strong>: HTTP over TLS (or SSL). When you see <code>https://</code> in a URL, your connection is encrypted and authenticated, ensuring privacy and integrity for sensitive data.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Understanding HTTP's essentials — its stateless nature, headers, methods, CORS, response codes, caching, and secure transport — is foundational for every backend engineer. Mastery of these concepts leads to more robust, scalable, and secure backend systems.</p>
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
