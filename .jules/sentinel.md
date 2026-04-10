## 2024-05-19 - Missing Security Headers in Next.js
**Vulnerability:** The Next.js application was deployed without standard HTTP security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
**Learning:** This is a common architectural gap in modern full-stack frameworks where security headers are not enabled by default, increasing susceptibility to clickjacking, MIME-sniffing, and data leakage.
**Prevention:** Include a configured `headers()` function in `next.config.ts` or an equivalent middleware file by default in future web projects to provide defense in depth.

## 2026-03-30 - Empty Link Action (href="#")
**Vulnerability:** Use of `href="#"` in anchor tags creates dead links that can cause unexpected page scrolls, interfere with routing, and provide a poor experience for assistive technologies.
**Learning:** Anchor tags should only be used for navigation to valid URLs or fragments. For triggered actions or state changes, `button` elements are the semantically correct and accessible choice.
**Prevention:** Always use `button` elements for interactive elements that do not perform navigation. Ensure all `a` tags have a valid, meaningful `href` attribute.
## 2024-10-18 - Missing Input Validation on Terminal/Network Forms
**Vulnerability:** Forms in the terminal and network pages lacked native HTML5 validation (required, pattern) and proper form semantics, allowing malformed or empty submissions.
**Learning:** Client-side validation is a first line of defense that improves UX and prevents common data integrity issues before they reach the backend. Using proper <form> elements ensures accessibility and consistent behavior across browsers.
**Prevention:** Always use <form> elements for user input, and implement native HTML5 validation attributes (required, type, pattern) as a baseline for all input fields.
