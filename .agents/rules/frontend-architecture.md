---
name: frontend-architecture
description: Strict architecture, modularity, best practices, and PR lessons for the Writer Buddy frontend.
---

# Frontend Architecture & Coding Standards

This document represents the ultimate single source of truth for all frontend coding guidelines, combining project rules, strict code-review standards, and lessons learned from past Team Leader PR reviews.

## 1. Pure Frontend Scope & Mock Data

- **Strictly No Backend:** Do not generate or suggest any database connection, ORM, or API Route (`src/app/api/...`) code.
- **Clean Mock Data:** Never write demo/mock data inline inside component files. Always store clean, strongly-typed mock data inside `src/lib/constants.tsx` or `src/lib/mock-data/` and import it.
- **Simulate Latency:** Whenever fetching mock data, ALWAYS wrap the resolution in a timeout (e.g., `setTimeout(..., 800)`) to simulate network latency. This forces the development of proper loading states (skeletons/spinners).
- **One Component Per File:** Never define multiple React components in the same file (e.g., sub-components). Always extract sub-components into their own dedicated files to maintain modularity and single responsibility.
- **Shared Components:** If a component is reusable across different pages or features, it MUST be extracted into the `src/components/shared/` folder (or `src/components/ui/` for generic UI primitives) rather than being duplicated.

## 2. Component Anatomy & File Structure

Every component file MUST follow this strict top-to-bottom order:

1. **Imports:** React/Next.js imports → Third-party packages → Absolute path local imports (`@/...`).
2. **Types/Interfaces:** Import all local props and interfaces (Do NOT define types/interfaces within the component file).
3. **Component Declaration:** `export function ComponentName(props: Props) {`
4. **Hooks:** Third-party hooks (`useRouter`) followed by React hooks (`useState`, `useRef`) and custom hooks.
5. **Derived State & Handlers:** Computations and event handler functions.
6. **Effects:** `useEffect` and lifecycle listeners (always with cleanup).
7. **JSX Return:** The UI render block.

## 3. Component Atomicity, Modularity & Reusability

- **File Length Limit:** Never write more than 120–150 lines of code in a single file. Break down monolithic files by extracting UI sub-components.
- **Extract Reusable Components:** If you find the same code duplicated across multiple places, you MUST extract it into a shared, reusable component or hook. DRY (Don't Repeat Yourself) is strictly enforced.

## 4. Server vs. Client Components

- **Server by Default:** All layouts and page entry points (`page.tsx`) must remain Server Components. Do not use `"use client"` unless absolutely necessary.
- **Targeted Hydration:** Isolate forms, toggles, or click handlers that require React state into tiny separate sub-components. Place `"use client"` exclusively at the top of _those_ micro-files.
- **No Blanket 'use client':** Never convert an entire parent wrapper to `"use client"` just to accommodate a single interactive child element.

## 5. Directory Organization & File Naming

- **Lowercase & Kebab-case:** Folders and component files must be strictly lowercase and separated by hyphens (e.g., `sidebar.tsx`, `quick-actions.tsx`).
- **No Redundant Prefixes:** Files inside a feature folder MUST NOT repeat the feature folder name (e.g., inside `chat-pdf/`, use `delete-modal.tsx`, not `chat-pdf-delete-modal.tsx`).
- **PascalCase Functions:** React component function declarations must remain standard PascalCase.
- **Absolute Imports Only:** Strictly avoid relative paths (`../` or `./`). Always use `@/` path alias.

## 6. Tailwind CSS v4 & Theming

- **No Arbitrary Hex Colors:** Never use arbitrary hex colors (e.g., `bg-[#FAFAF9]`, `text-[#ff4b11]`). ALWAYS use predefined CSS variables mapped in Tailwind config (e.g., `bg-surface-warm`, `text-brand-flame`). If a required color is not yet defined in `globals.css` `@theme inline` block, you must add it there first, and then use its semantic token.
- **No Spaces in Arbitrary Values:** Arbitrary Tailwind classes cannot contain spaces.
- **Typography Standards:** Use the primary Inter font via `font-sans`.
- **Merge Classes safely:** Always use the `cn()` utility (clsx + tailwind-merge) from `@/lib/utils` when combining conditional classes.

## 7. Accessibility (A11y) & Semantic HTML

- **Semantic Elements:** Use `<aside>`, `<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` instead of generic `<div>`s.
- **Interactive Elements:** Use native `<button>` tags (with `type="button"`) for click actions instead of `<div onClick={...}>`.
- **ARIA Tags:** Any icon-only button MUST have an `aria-label` describing its action.
- **Dialogs & Overlays:** Avoid custom outside-click/escape listeners. Rely on robust primitives that natively support `role="dialog"` and `aria-modal="true"`.

## 8. TypeScript Safety & Exports

- **Beautiful & Strict Typing:** Types must be strictly and beautifully defined. Avoid generic `Record<string, any>`. Constants and mock data arrays MUST have explicit, strongly-typed interfaces.
- **Boolean Naming:** Boolean variables and props must start with an interrogative prefix like `is`, `has`, `should`, or `can` (e.g., `isLoading`, `hasError`).
- **No Implicit Any:** Always strongly type component props, state values, and event handlers.
- **Null Safety:** Always use optional chaining (`props.onClick?.()`).
- **Strict Types Folder Extraction:** ALL type and interface definitions (even local component props) MUST be stored inside the `src/types/` folder. Never define an interface or type inside a `.tsx` component file.
- **Proper Prop Inheritance:** Props extending native elements must properly inherit (e.g., `extends React.ButtonHTMLAttributes<HTMLButtonElement>`).
- **Explicit Returns:** All React functional components should have explicit return types (e.g., `React.JSX.Element`).
- **Named Exports Only:** Never use default exports outside of Next.js route boundaries (`page.tsx`, `layout.tsx`).

## 9. Custom Hooks & State Management

- **Avoid Single-Use Hooks:** Do not extract simple 1-2 state variables (`useState`) used by a single component into a separate hook file. Inline them to avoid file bloat. Custom hooks must be for real reuse (≥2 places) or complex lifecycles/domains.
- **Complex State (`useReducer`):** For components with complex, interdependent state transitions, always use `useReducer` to keep state logic pure.
- **Cleanup Effects:** Always clean up side-effects. Timers (`setTimeout`/`setInterval`) and Object URLs (`URL.createObjectURL`) MUST be cleared/revoked in the `useEffect` cleanup function using `useRef` to track timer IDs.
- **Explicit Hook Returns:** Every valid custom hook MUST have an explicit return type interface declared in `src/types/`.

## 10. Performance & Routing

- **Lazy Loading:** For heavy UI modules (e.g., TipTap editors, modals), use Next.js `next/dynamic`.
- **Optimized Assets:** Always use the Next.js `<Image />` component over standard `<img>` tags.
- **Error Boundaries:** Use `loading.tsx` and `error.tsx` at key boundaries. Ensure dynamic routes return `notFound()` if data is missing.

## 11. Developer Documentation

- **Single-Line Comments:** All exported components, custom hooks, type interfaces, and complex handler functions MUST include clear single-line developer comments (`// ...`) describing their functionality and purpose.

## 12. No Inline SVGs

- **Externalize Icons:** Do not use inline SVGs directly inside page or feature components. Always extract SVGs into a dedicated icon component (e.g., `src/components/shared/icons/<name>.tsx`) and import it. Ensure the SVG accepts standard `IconProps` (`size`, `className`, etc.).
