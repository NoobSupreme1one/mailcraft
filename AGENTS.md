# Repository Guidelines

## Project Structure & Modules
- `src/app/`: Next.js App Router routes and layouts (TypeScript, React 19).
- `src/components/`: Reusable UI and feature components (e.g., `builder/`, `ui/`).
- `src/lib/`: Client/server helpers (e.g., `db.ts` for Prisma client).
- `src/data/`: Static data like `premadeTemplates.ts`.
- `prisma/`: Prisma schema and local SQLite DB (`dev.db`).
- `public/`: Static assets served at the root.
- `.clerk/`: Clerk configuration; `.env` holds keys and `DATABASE_URL`.

## Build, Run, and Dev
- `npm run dev`: Start the app in dev mode (Turbopack) on `http://localhost:3000`.
- `npm run build`: Create a production build.
- `npm start`: Run the production server.
- `npm run lint`: Lint with ESLint (`next/core-web-vitals`, TypeScript rules).
- Prisma tips: `npx prisma generate` after schema changes; `npx prisma studio` to inspect data.

## Coding Style & Naming
- TypeScript, 2-space indent, semicolons optional (match existing files).
- Components: PascalCase (`Navbar.tsx`), hooks/utilities: camelCase (`useThing.ts`).
- Routes and folders in `src/app`: kebab-case (`email-templates/`).
- Prefer Server Components; add `"use client"` only when needed.
- Follow ESLint; fix violations before committing (`npm run lint`).

## Testing Guidelines
- No test runner is configured yet. If adding tests:
  - Place unit tests as `*.test.ts`/`*.test.tsx` beside the file or under `src/__tests__/`.
  - Use Vitest + React Testing Library; mock Prisma where appropriate.
  - Test naming: describe behavior, not implementation.

## Commit & Pull Requests
- Commits: short, imperative subject (≤72 chars). Example: `feat(builder): add image block drag handle`.
- PRs must include:
  - Summary, screenshots/GIFs for UI changes, and linked issue.
  - Notes on schema/env changes (include migration commands).
  - Local checks passed: `npm run lint` and app boots (`npm run dev`).

## Security & Config
- Do not commit secrets. Use `.env` for `DATABASE_URL` and Clerk keys.
- Local SQLite default: `DATABASE_URL="file:./prisma/dev.db"`.
- Regenerate Prisma client after schema edits and restart dev server.
