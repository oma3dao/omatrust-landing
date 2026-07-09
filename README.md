# omatrust-landing

Landing page for [OMATrust](https://app.omatrust.org) — built with Next.js 16, React 19, and Tailwind CSS.

## Prerequisites

- **Node.js** — v20 or later recommended (required by Next.js 16)
- **pnpm** — this project uses pnpm as its package manager

### Installing Node.js

If you don't have Node.js yet, the easiest way on macOS:

```bash
brew install node
```

Or use a version manager like [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm).

### Installing pnpm

```bash
# via Corepack (ships with Node.js 16+)
corepack enable
corepack prepare pnpm@latest --activate

# or via npm
npm install -g pnpm

# or via Homebrew
brew install pnpm
```

## Getting Started

1. **Clone the repo**

   ```bash
   git clone <repo-url>
   cd omatrust-landing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` if you need to override the portal URL (defaults to production).

4. **Run the dev server**

   ```bash
   pnpm dev
   ```

   Opens at [http://localhost:3000](http://localhost:3000) with Turbopack for fast refresh.

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start dev server (Turbopack)   |
| `pnpm build`     | Production build               |
| `pnpm start`     | Serve production build         |
| `pnpm typecheck` | Run TypeScript type checking   |

## Environment Variables

| Variable                 | Description                                      | Default                      |
| ------------------------ | ------------------------------------------------ | ---------------------------- |
| `NEXT_PUBLIC_PORTAL_URL` | URL of the OMATrust reputation portal            | `https://app.omatrust.org`   |

## Tech Stack

- [Next.js 16](https://nextjs.org/) with Turbopack
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives
- [shadcn/ui](https://ui.shadcn.com/) components
- [Recharts](https://recharts.org/) for data visualization
