---
name: seo-inspector
description: Audits a component or page for SEO and Accessibility standards. Triggered by "check seo", "audit accessibility", or "/seo-inspector".
---

# SEO & Accessibility Inspector Skill

When invoked to inspect a Next.js page or a shared component:

1. **SEO (Search Engine Optimization):**
   - Check if Next.js Metadata API (`export const metadata`) is utilized for pages.
   - Verify proper semantic HTML structure: Is there only one `<h1>`? Are `<article>`, `<section>`, and `<nav>` used appropriately instead of generic `<div>` tags where context implies meaning?
   - Ensure titles are descriptive and unique.
2. **Accessibility (a11y):**
   - Verify all `<img>` and `next/image` components have meaningful `alt` text.
   - Check interactive elements (`<button>`, `<a>`, `<input>`): Do they have `aria-label` or `aria-labelledby` if they lack text content (like icon-only buttons)?
   - Verify form inputs have associated `<label>` elements or proper `id`/`htmlFor` relationships.
3. **Output:**
   - List the issues found clearly and concisely.
   - Propose the code fixes directly to the user. If requested, automatically apply the fixes.
