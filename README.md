# KERNOVA — Corporate Website & Developer Workspace Portal

> **Build Beyond Limits.**  
> Official corporate website for **KERNOVA**, an early-stage AI developer tools and Linux development infrastructure startup.

- **Domain:** [kernova.click](https://kernova.click)
- **Business Email:** [contact@kernova.click](mailto:contact@kernova.click)
- **Industry:** AI Developer Tools, Developer Productivity, Linux Development Infrastructure
- **Current Stage:** Early-Stage Startup (developing initial MVP)

---

## 1. Project Overview

Kernova is developing the **Kernova Developer Workspace** — a Linux-first developer environment focused on C/C++ build workflows, compiler diagnostics, debugging assistance, and future AI-powered developer tools.

This repository contains the complete corporate website built with **React, TypeScript, Vite, and Tailwind CSS v4**.

### Key Architectural Tenets
- **Radical Transparency:** Clear distinction between current capabilities, active MVP development, and planned long-term roadmap phases. Zero fabricated revenue, funding, testimonials, or legal registrations.
- **Sophisticated Design System:** Dark-mode default with deep charcoal backgrounds, electric violet/indigo and cyan accents, paired with full light-mode support, zero-pill metadata discipline, and reduced-motion compliance.
- **Static Hosting Compatible:** Pure client-side routing via React Router without required backend database dependencies for the initial version.
- **Search Engine Optimization:** OpenGraph tags, Twitter cards, Schema.org `SoftwareApplication` JSON-LD, sitemap, and robots.txt configured for `kernova.click`.

---

## 2. Directory Structure

```text
├── public/
│   ├── robots.txt            # Crawl directives
│   └── sitemap.xml           # Search engine sitemap with canonical URLs
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # 3-Zone Top Bar with theme toggle & mobile drawer
│   │   │   └── Footer.tsx    # Footer with email, domain, legal, and roadmap links
│   │   └── ui/
│   │       ├── CodeWindow.tsx       # Interactive C/C++ diagnostic workspace prototype
│   │       ├── SEOHead.tsx          # Dynamic document title & OpenGraph synchronizer
│   │       └── WorkflowDiagram.tsx  # 4-stage Linux build-to-remediation visualizer
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/Light theme manager with localStorage persistence
│   ├── pages/
│   │   ├── HomePage.tsx      # Hero, product preview, problem/solution, workflow, tech bento
│   │   ├── ProductPage.tsx   # 5 workspace pillars (error explanation, build, Linux, debug, AI)
│   │   ├── TechnologyPage.tsx # Linux architecture, GCC/Clang parsers, AST matching, privacy
│   │   ├── AboutPage.tsx     # Mission, product philosophy, early-stage journey
│   │   ├── RoadmapPage.tsx   # 5-phase verified engineering roadmap
│   │   ├── ContactPage.tsx   # contact@kernova.click interface with mailto & copy actions
│   │   ├── PrivacyPage.tsx   # Draft privacy policy with local code isolation guarantee
│   │   └── TermsPage.tsx     # Draft terms of service for pre-release software
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces and milestone schemas
│   ├── App.tsx               # Root application router and layout wrapper
│   ├── index.css             # Tailwind CSS v4 imports and typography variables
│   └── main.tsx              # React 19 entry point
├── index.html                # SEO metadata, OpenGraph, JSON-LD, and typography fonts
├── metadata.json             # AI Studio applet configuration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation
```bash
npm install
```

### Starting the Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

---

## 4. Verification & Testing

### TypeScript Verification
```bash
npm run build
```
This runs the TypeScript compiler (`tsc`) and Vite bundler to verify all types, imports, and assets.

### Linting
```bash
npm run lint # if configured
```

---

## 5. Deployment Instructions (When Authorized)

> ⚠️ **Deployment Restriction Notice:**  
> In accordance with project instructions, do **not** publish or deploy this website to Cloudflare, Vercel, Netlify, or any production hosting platform without explicit user confirmation.

When explicit approval is given:

1. **Verify Canonical Domain Configuration:**
   Ensure domain DNS for `kernova.click` points to your target static hosting or CDN provider (e.g., Cloudflare Pages, Vercel, or AWS S3/CloudFront).
2. **Execute Static Build:**
   ```bash
   npm run build
   ```
   The production-ready static assets will be compiled into the `dist/` directory.
3. **Configure Single-Page Application (SPA) Fallbacks:**
   Ensure your web server (Nginx, Caddy, Cloudflare `_redirects`, or Netlify `_redirects`) routes all non-file paths to `index.html` (`/* -> /index.html 200`).
4. **Enforce HTTPS:**
   Ensure TLS certificates are enabled on `kernova.click`.
5. **Verify Business Email Routing:**
   Ensure MX records for `kernova.click` are configured to route incoming messages sent to `contact@kernova.click`.
