# Lumina Finance - Sanity Studio

This is the Sanity Studio for managing content on the Lumina Finance website.

## Getting Started

1. **Create a Sanity project** at [sanity.io/manage](https://sanity.io/manage)

2. **Copy environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Fill in your credentials** in `.env`:
   ```
   SANITY_STUDIO_PROJECT_ID="your-project-id"
   SANITY_STUDIO_DATASET="production"
   ```

4. **Install dependencies:**
   ```bash
   pnpm install
   ```

5. **Start the studio:**
   ```bash
   pnpm dev
   ```

6. **Open** [http://localhost:3333](http://localhost:3333)

## Generate Types

After modifying schemas, regenerate TypeScript types:

```bash
pnpm sanity:typegen
```

This will:
1. Extract schema to `../sanity.schema.json`
2. Generate types to `./sanity.types.ts`

## Deploy Studio

To deploy your studio to Sanity's hosted service:

```bash
pnpm deploy
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm deploy` - Deploy to Sanity
- `pnpm sanity:typegen` - Generate TypeScript types

## Adding New Block Types

1. Create a new schema file in `src/schemaTypes/objects/`
2. Import and add it to `src/schemaTypes/index.ts`
3. Add the type to the `pageBuilder` array in `src/schemaTypes/documents/page.ts`
4. Run `pnpm sanity:typegen` to update types
5. Create the corresponding component in the frontend

## Folder Structure

```
studio/
├── src/
│   ├── schemaTypes/
│   │   ├── documents/     # Document types (page, post, person)
│   │   ├── objects/       # Object types (hero, callToAction, etc.)
│   │   ├── singletons/    # Singleton types (settings)
│   │   └── index.ts       # Schema exports
│   ├── structure/         # Studio structure configuration
│   └── lib/               # Utility functions and initial values
├── static/                # Static assets (thumbnails, etc.)
├── sanity.config.ts       # Main Sanity configuration
├── sanity.cli.ts          # CLI configuration
└── package.json
```
