---
name: generate-component
description: Automatically generates a React/Next.js component following project styling guidelines and rules. Triggered when user asks to "generate component", "create a component", or "/generate-component".
---

# Component Generator Skill

When triggered to generate a component, follow these strict rules:

1. **Location:** Always check if the component belongs in `src/components/shared`, `src/components/ui`, or a feature-specific dashboard folder. Ask the user if ambiguous.
2. **Framework:** Use Next.js 15+ / React 19 App Router conventions. Default to Server Components unless interactivity (`useState`, `onClick`, `useEffect`, etc.) is required. If interactivity is needed, add `"use client";` at the very top.
3. **Styling:** Use Tailwind CSS v4. Merge classes using `cn()` from `@/lib/utils` if the component accepts custom `className` props.
4. **Types:** Define an interface for the component props in the same file or in `src/types` if widely shared.
5. **Format:**
   ```tsx
   import { JSX } from "react";
   import { cn } from "@/lib/utils";

   export interface MyComponentProps {
     className?: string;
   }

   export function MyComponent({ className }: MyComponentProps): JSX.Element {
     return <div className={cn("base-styles", className)}>{/* Content */}</div>;
   }
   ```
6. After creating the file, briefly summarize where it was created and remind the user to import it where needed.
