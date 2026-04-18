# Website Template

A Next.js + Sanity CMS website template with a block-based page builder system.

## Features

- **Next.js 16** with App Router
- **Sanity CMS** with separate Studio workspace
- **Block-based page builder** — extensible system for composing pages from reusable blocks
- **Live preview** & visual editing from Sanity Studio
- **Tailwind CSS v4** for styling
- **TypeScript** with auto-generated Sanity types
- **Draft mode** support

## Getting Started

### 1. Clone and install

```bash
npm install
cd studio && npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your Sanity project details:

```bash
cp .env.example .env
cp studio/.env.example studio/.env
```

### 3. Run development servers

```bash
npm run dev
```

This starts both the Next.js dev server and Sanity Studio in parallel.

## Block System

The page builder system works as follows:

1. **Define a Sanity schema** in `studio/src/schemaTypes/objects/`
2. **Register the schema** in `studio/src/schemaTypes/index.ts` and `studio/src/schemaTypes/documents/page.ts`
3. **Create a React component** in `app/blocks/`
4. **Register the component** in `app/blocks/BlockRenderer.tsx`
5. **Add GROQ expansion** in `sanity/lib/queries.ts` (if the block has link references)

The template includes `hero` and `callToAction` as starter block schemas.

## Project Structure

```
app/
  blocks/          — Block components and renderer
  components/      — Shared UI components (PageBuilder, Header, Footer, etc.)
  [slug]/          — Dynamic page routes
  api/             — API routes (draft mode)
sanity/
  lib/             — Sanity client, queries, types, utilities
studio/
  src/
    schemaTypes/   — Sanity schema definitions
    structure/     — Studio navigation structure
```

## Scripts

- `npm run dev` — Start Next.js + Sanity Studio dev servers
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run sanity:typegen` — Generate Sanity TypeScript types
# website-template
