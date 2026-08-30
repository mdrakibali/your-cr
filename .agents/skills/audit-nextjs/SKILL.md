---
name: audit-nextjs
description: Audits a component or file for Next.js App Router best practices. Triggered by "audit nextjs", "review for nextjs", or "/audit-nextjs".
---

# Next.js App Router Auditor Skill

When invoked to audit a Next.js file or directory, thoroughly check for the following:

1. **Client vs Server Components:**
   - Are standard UI wrappers needlessly marked as `"use client"`?
   - Are server components safely isolating data fetching?
   - Are hooks (`useState`, `useEffect`, etc.) or browser APIs (`window`, `localStorage`) used in files lacking `"use client"`?
2. **Data Fetching:**
   - Are `fetch` requests properly cached or deduped?
   - Is `next/navigation` used instead of `next/router`?
3. **Images and Links:**
   - Ensure `next/image` is used instead of `<img>` where applicable, with correct sizes/priority props.
   - Ensure `next/link` is used instead of standard `<a>` tags for internal navigation.
4. **Output:**
   - Provide a highly compressed list of bullet points detailing any violations.
   - If no violations exist, report: "All good! Next.js App Router standards are met."
   - If requested, automatically fix the violations in the file.
