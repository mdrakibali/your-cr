<p align="center">
  <a href="https://yourcr.pages.dev" target="_blank" rel="noopener noreferrer">
    <img src="./public/logo.png" alt="YourCR Logo" width="180" />
  </a>
</p>

<h1 align="center">YourCR - Class Representative Management Portal</h1>

<p align="center">
  <strong>A modern, unified academic operations portal empowering Class Representatives (CR) and students to coordinate schedules, notices, assessments, and classroom issues seamlessly.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js" alt="Next.js 16" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS v4" /></a>
  <a href="https://developers.cloudflare.com/workers/"><img src="https://img.shields.io/badge/Cloudflare-OpenNext-f38020?style=flat-square&logo=cloudflare" alt="Cloudflare OpenNext" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License MIT" /></a>
</p>

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Getting Started](#-getting-started)
- [Cloudflare Edge Deployment](#-cloudflare-edge-deployment)
- [Available Scripts](#-available-scripts)
- [Architecture & Design Guidelines](#-architecture--design-guidelines)
- [Contributing](#-contributing)
- [License](#-license)

---

## 💡 About The Project

Managing academic communication across messaging groups often leads to missed class reschedules, lost assignment deadlines, and general chaos. 

**YourCR** is designed specifically for academic batches in colleges and universities. It bridges the communication gap between faculty, Class Representatives, and students by consolidating all batch activities into a single, high-performance web application.

---

## ✨ Key Features

### 🎓 Role-Based Access Control (CR & Student)
- **CR Dashboard**: Manage batch settings, reschedule slots, post urgent announcements, add assignments, and resolve peer-reported issues.
- **Student Dashboard**: Real-time access to daily class schedules, assessment deadlines with personal progress checklist, and issue reporting.

### 📅 Smart Class Routine & Instant Rescheduling
- Day-wise routine breakdown (Monday – Friday) with offline/online room allocations.
- Real-time **Reschedule Dialog** to announce room/time adjustments instantly.
- Upload & attach batch PDF routine documents for offline downloads.

### 📢 Priority Notice Board
- Color-coded notices categorized by priority (`URGENT`, `IMPORTANT`, `NORMAL`).
- External file and drive attachment support for administrative circulars.
- Instant search and category filtering.

### 📝 Assessments & Task Tracker
- Unified tracking for Assignments, Quizzes, Midterms, Final Exams, and Lab projects.
- Due date & countdown badges.
- Individual checklist support for students to track personal submission status.

### 🚨 Classroom Issue Tracker
- Student-reported classroom and routine conflict logging.
- Status workflow: `PENDING` $\rightarrow$ `IN_PROGRESS` $\rightarrow$ `RESOLVED`.

### 👥 Faculty & Student Directories
- Searchable directory of instructors with course allocations, designation, email, and phone shortcuts.
- Complete student roll/ID index with active enrollment tracking.

### 🔐 4-Step Verified CR Onboarding
- **Step 1**: Personal Credentials (Name, verified Email, Phone, Password).
- **Step 2**: Institutional Profile (University/College, Program, Department).
- **Step 3**: Academic Session (Batch, Section/Shift, Term/Semester System).
- **Step 4**: Identity Verification (Student ID Card & CR Authorization document upload).

---

## 🛠️ Tech Stack

| Layer | Technology / Library |
| :--- | :--- |
| **Core Framework** | [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Animation** | [Tailwind CSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/designbycode/tw-animate-css) |
| **UI Components & Icons** | [Radix UI](https://www.radix-ui.com/) / [Shadcn UI](https://ui.shadcn.com/) + [Lucide React](https://lucide.dev/) |
| **Form Handling & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Feedback & Alerts** | [Sonner](https://sonner.emilkowal.ski/) |
| **Edge Deployment** | [OpenNext Cloudflare](https://opennext.js.org/cloudflare) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/) |

---

## 📂 Project Architecture & Directory Structure

```text
your-cr/
├── .agents/                 # AI Assistant Rules and architectural policies
├── public/                  # Static assets & web badges (logo, favicons)
├── src/
│   ├── app/                 # Next.js App Router (100% Server Components)
│   │   ├── (auth)/          # Authentication & multi-step registration routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   ├── (dashboard)/     # Authenticated portal routes
│   │   │   └── dashboard/
│   │   │       ├── academic/
│   │   │       ├── assessments/
│   │   │       ├── classes/
│   │   │       ├── issues/
│   │   │       ├── notice/
│   │   │       ├── notifications/
│   │   │       ├── profile/
│   │   │       ├── routine/
│   │   │       ├── students/
│   │   │       ├── subjects/
│   │   │       └── teachers/
│   │   ├── (main)/          # Public landing page
│   │   ├── globals.css      # Design tokens, variables & typography
│   │   ├── layout.tsx       # Root HTML shell
│   │   ├── error.tsx        # Global error boundary
│   │   └── not-found.tsx    # 404 page
│   ├── assets/              # Internal graphics and illustrations
│   ├── components/          # Modular Client Components ("use client")
│   │   ├── auth/            # Auth forms & multi-step onboarding
│   │   ├── common/          # Global UI (Sidebar, Navbar, Footer, Logo, Header)
│   │   ├── dashboard/       # Dashboard widgets, cards & subcomponents
│   │   ├── main/            # Landing page sections (Hero, FAQ, Stats, etc.)
│   │   └── ui/              # Base design components (Button, Dialog, Card, Form)
│   ├── lib/                 # Helpers (Auth cookie parser, Tailwind clsx/merge)
│   └── validation/          # Type-safe Zod validation schemas
├── open-next.config.ts      # Cloudflare OpenNext runtime configurations
├── wrangler.jsonc           # Cloudflare Worker configuration & service bindings
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdrakibali/your-cr.git
   cd your-cr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## ☁️ Cloudflare Edge Deployment

This project is configured with **OpenNext for Cloudflare** to run directly on the Cloudflare Workers / Edge Runtime.

### Local Edge Preview
To build and simulate the Cloudflare Worker runtime locally:
```bash
npm run preview
```

### Production Deployment
To build and deploy directly to your Cloudflare account:
```bash
npm run deploy
```

> [!NOTE]
> Make sure you have logged into Wrangler using `npx wrangler login` before running deployment commands.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `localhost:3000` |
| `npm run build` | Builds the project for standard production |
| `npm run start` | Runs the built application |
| `npm run preview` | Builds and starts a local Cloudflare worker simulation |
| `npm run deploy` | Deploys the application directly to Cloudflare Pages/Workers |
| `npm run cf-typegen` | Generates TypeScript definitions for Cloudflare environment bindings |

---

## 📐 Architecture & Design Guidelines

- **Server-First Execution**: All files in `src/app` are strict Server Components to keep the initial bundle light and SEO-friendly.
- **Subcomponent Modularity**: UI widgets and dialogs are broken down into granular subcomponents (`/assessments`, `/routine`, `/notice`, etc.).
- **Consistent Layout Container**:
  - Max Width: `1440px`
  - Responsive Padding: `100px` (Desktop), `48px` (Tablet), `16px` (Mobile).
  - Primary Brand Color: `#2459c8` (`--primary`).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<p align="center">
  Made with ❤️ for Class Representatives and Students everywhere.
</p>
