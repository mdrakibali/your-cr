---
name: make-responsive
description: Makes a component fully responsive across mobile, sm, md, lg, xl, and 2xl screens using Selective Scaling, keeping existing design classes as the absolute maximum bounds.
---

# Progressive Responsive Architecture & Multi-Property Scaling Skill

This skill enforces a strict **6-Tier Progressive Mobile-First Chain** (`mobile -> sm -> md -> lg -> xl -> 2xl`) across **ALL CSS PROPERTIES** (Typography, Weights, Dimensions, Spacing, Gaps, Borders, Rings, Shadows) and **Dynamic Viewport Sizing** (`h-dvh`, `calc()`, `min-h-0`).

---

## 1. Breakpoint Mapping & Ceilings

| Prefix     | Min Width | Target Device Category                 | Role in Dashboard                                |
| :--------- | :-------- | :------------------------------------- | :----------------------------------------------- |
| **Base**   | `< 640px` | Standard Mobile (iPhone, Galaxy)       | Ultra-compact single column                      |
| **`sm:`**  | `640px`   | Large Mobile / Phablet                 | Compact touch layout                             |
| **`md:`**  | `768px`   | Tablet Portrait (iPad)                 | Intermediate grid/column                         |
| **`lg:`**  | `1024px`  | Small Laptop / Tablet Landscape        | Expanded sidebar & panels                        |
| **`xl:`**  | `1280px`  | **1366px Standard Laptop Monitor**     | Balanced laptop layout (No off-screen overflows) |
| **`2xl:`** | `1440px`  | **Exact Figma 1440px Desktop Ceiling** | 100% Original Figma Design Maxima                |

**CRITICAL RULE:** All existing 1440px Figma classes MUST remain the `2xl:` ceiling bounds and NEVER be enlarged.

---

## 2. Complete CSS Property Scaling Matrix

### A. Typography: Font Size & Line Height

- **Hero / Page Titles (Figma 48px/36px):**
  `text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-tight`
- **Modal / Section Headings (Figma 24px):**
  `text-lg sm:text-xl lg:text-2xl 2xl:text-[24px] font-bold leading-snug 2xl:leading-8.25`
- **Card / Sub-headings (Figma 18px / 16px):**
  `text-sm sm:text-base 2xl:text-[18px] font-semibold 2xl:font-bold`
- **Body / Subtitles (Figma 16px / 14px):**
  `text-xs sm:text-sm 2xl:text-base text-muted-foreground leading-normal 2xl:leading-7`
- **Badges / Tiny Labels (Figma 12px / 11px):**
  `text-[11px] 2xl:text-xs`

### B. Font Weight (Hierarchy Balance)

- **Primary CTA Buttons:** `font-semibold 2xl:font-bold`
- **Table Headers:** `font-semibold 2xl:font-bold text-xs 2xl:text-sm`
- **Card Titles:** `font-semibold 2xl:font-bold`

### C. Paddings & Margins (p, px, py, m, mx, my)

- **Main Page Containers:** `px-4 sm:px-6 md:px-8 xl:px-9.5 2xl:px-12 py-4 sm:py-6 2xl:py-8`
- **Modal & Dialog Padding:** `px-4 sm:px-6 lg:px-7 2xl:px-9.5 pt-3 sm:pt-4 2xl:pt-6 pb-4 sm:pb-5 2xl:pb-8`
- **Cards & Boxes:** `p-3 sm:p-4 md:p-5 2xl:p-6`
- **Header Top Spacing:** `pt-3 sm:pt-4 2xl:pt-6 pb-2 2xl:pb-4`
- **Element Bottom Margins:** `mb-2 sm:mb-3 md:mb-4 lg:mb-6 2xl:mb-10`

### D. Gaps & Spacing (gap, gap-x, gap-y, space-x, space-y)

- **Component / Form Grid Gaps:** `gap-2 sm:gap-3 md:gap-4 lg:gap-5 2xl:gap-8`
- **Header Action Bar Gaps:** `gap-1.5 sm:gap-2 md:gap-3 2xl:gap-4`
- **Button Group Gaps:** `gap-2 sm:gap-3 2xl:gap-4`
- **Stack Spacing (space-y):** `space-y-2 sm:space-y-3 2xl:space-y-4`

### E. Dimensions (Width, Height, Max-Width, Max-Height)

- **App Shell / Layouts:** `h-dvh max-h-dvh overflow-hidden`
- **Modals:** `w-[92vw] sm:max-w-112.5 md:max-w-130 lg:max-w-145 xl:max-w-155 2xl:max-w-170 max-h-[calc(100dvh-2rem)] 2xl:max-h-181.25 flex flex-col overflow-hidden`
- **Drawers / Sheets:** `h-dvh max-h-dvh w-[85vw] sm:max-w-sm md:max-w-md 2xl:max-w-lg`
- **Textareas / Inputs:** `h-20 sm:h-24 md:h-28 2xl:h-32`
- **Scroll Areas:** MUST always pair `flex-1 min-h-0 overflow-y-auto`

### F. Borders, Border-Radius & Rings

- **Border Radius:** `rounded-md sm:rounded-lg 2xl:rounded-xl`
- **Focus Rings:** `focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-ring`
- **Dividers & Separators:** `border-border` (preserve semantic tokens, never hardcode hex colors)

### G. Icon Sizes

- **Action Icons:** `size-4 sm:size-4.5 2xl:size-5`
- **Feature / Header Icons:** `size-5 sm:size-6 2xl:size-8`

---

## 3. Strict Verification Protocol

1. Verify `npx tsc --noEmit` exits with 0.
2. Check on 1366x768 (`xl:`) effective viewport (~580-620px height) for zero clipping.
3. Check on 1440px+ (`2xl:`) to confirm exact original Figma fidelity.
