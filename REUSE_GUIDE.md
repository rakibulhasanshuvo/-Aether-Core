# Antigravity REUSE_GUIDE

This guide provides instructions on how to reuse the `Antigravity-Core` framework for your own projects.

## Framework Portability
The core of this project is built to be a reusable, modular AI-first development engine.

### Core Components
- **`src/app`**: Default Next.js 15+ navigation and layouts.
- **`src/components`**: Modern UI components (Sidebar, Navbar, etc.).
- **`src/lib`**: Shared logic and utilities.

## How to Reuse

### 1. Copy the Source
Copy the `src` folder and the root-level configuration files (`package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`, `.gitignore`, `.env.local`) to your new project directory.

### 2. Configure Dependencies
Run `npm install` to set up the environment.

### 3. Customize Aesthetics
Modify `src/app/globals.css` to update the CSS theme tokens in the `@theme` block.

### 4. Update Pages
Replace the file content in `src/app/page.tsx` with your new project's main content.

### 5. Define New Routes
Add new directories to `src/app` to create new pages.

## Principles
- **Vibe-Coding**: Prioritize immersive, high-quality terminal-style aesthetics.
- **AI-First**: Structure code to be easily interpreted and modified by LLMs.
- **Modular**: Keep components focused and reusable.

## Recommended Tooling
- **Stitch AI**: Use for generating new screen designs.
- **Next.js 15+**: Leverage Server Components and Actions for high-performance builds.
- **Tailwind v4**: Use for modern CSS-first styling.
