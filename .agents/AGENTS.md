# Project Rules

## Component and File Organization Rules
- **No Client Component code in `src/app`**: Every file in the `src/app` directory (pages, layouts, templates) MUST be a Server Component (no `"use client"`, no `useState`, no `useEffect`, no click handlers, no form state).
- **Client Components location**: All Client Components (interactive components, forms, things needing `"use client"`) must be written inside the `src/components/` folder under appropriate subfolders (e.g., `src/components/auth/`, `src/components/dashboard/`, `src/components/main/`, etc.) and then imported into the page files inside `src/app/`.
- **Common Components**: Global shared components (Navbar, Footer, Sidebar, etc.) must be placed in `src/components/common/`.
- **Avoid Monolithic Components (Use Subcomponents)**: Instead of writing large files containing extensive UI and logic, split them into smaller, modular subcomponents or separate files. This increases maintainability, reusability, and readability.
- **Styling constraints**: 
  - Containers must have a maximum width of `1440px` and responsive padding: `100px` on desktop, `48px` on tablet, and `16px` on mobile.
  - Primary color is `#2459c8` (`--primary`).
  - Only light mode is supported.
