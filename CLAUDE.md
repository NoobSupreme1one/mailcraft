# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (fastest)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Commands

- `npx prisma generate` - Generate Prisma client after schema changes
- `npx prisma db push` - Push schema changes to SQLite database
- `npx prisma db seed` - Seed database (check if seed script exists)
- `npx prisma studio` - Open database browser

## Architecture Overview

This is a Next.js 15 application for freelance email templates with drag-and-drop builder and AI generation capabilities.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: SQLite with Prisma ORM
- **Authentication**: Clerk
- **Email Builder**: GrapesJS with newsletter preset
 - **AI Integration**: Google Gemini (primary) with OpenRouter fallback
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives

### Core Architecture

#### Database Schema
Single `Template` model in `prisma/schema.prisma`:
- `id` (cuid), `title`, `html` (email content)
- `designJson` (GrapesJS component data)
- `thumbnailUrl`, `category`, `isPublished`
- `ownerId` (Clerk user ID), timestamps

#### Authentication & Authorization
- Clerk handles auth with middleware in `src/middleware.ts`
- Protected routes: `/dashboard/*`, `/builder/*`, `/api/templates/*`
- Public routes: gallery, homepage, AI generation

#### App Structure
- **Homepage** (`/`): Landing with gallery/AI generation CTAs
- **Gallery** (`/gallery`): Browse all published templates
- **Builder** (`/builder/[id]`): GrapesJS drag-and-drop editor
- **Dashboard** (`/dashboard`): User's saved templates
- **AI Generation** (`/new`): Create templates with AI
- **Preview** (`/preview/[id]`): View template without editing
- **Use Template** (`/use/[id]`): Copy/use existing template

#### API Routes
- `GET/POST /api/templates` - List/create templates
- `GET/PUT /api/templates/[id]` - Fetch/update specific template
- `POST /api/generate-template` - AI template generation
- `POST /api/seed` - Populate database with premade templates
- `GET /api/gallery` - Public template listing

### Key Components

#### EmailBuilder (`src/components/builder/EmailBuilder.tsx`)
- Wraps GrapesJS with newsletter preset
- Handles save/export functionality
- Loads existing template data
- Uses `grapesjs-preset-newsletter` for email-specific components

#### Template Data
- **Premade Templates**: 25+ categorized templates in `src/data/premadeTemplates.ts`
- Categories: Outreach, Sales, Billing, Onboarding, Status, Marketing, PM, Legal, Support, Relationship, Retention
- Basic HTML template structure with branded styling

#### Database Client
- Prisma client singleton in `src/lib/db.ts`
- Handles connection pooling and dev mode globals

### Development Patterns

#### File Organization
- `/src/app/*` - Next.js App Router pages and API routes
- `/src/components/*` - React components (organized by feature)
- `/src/lib/*` - Utilities and database client
- `/src/data/*` - Static data and templates
- `/prisma/*` - Database schema and SQLite file

#### Authentication Flow
1. Clerk middleware protects routes
2. User authentication state available via `useUser()`
3. `ownerId` field links templates to Clerk user IDs
4. Public templates have `isPublished: true`

#### Template Workflow
1. Create template (AI or manual)
2. Edit in GrapesJS builder (saves `html` + `designJson`)
3. Preview/test template
4. Publish to gallery or keep private
5. Export as HTML file

### Important Environment Variables
- `DATABASE_URL` - SQLite database path
- Clerk environment variables (auto-configured)
- AI/Anthropic API keys (if using generation features)

### Development Notes
- GrapesJS requires client-side rendering (`"use client"`)
- Template HTML includes full email document structure
- SQLite database file is in `prisma/dev.db`
- No custom authentication - fully relies on Clerk
- All templates stored as complete HTML documents
- AI generation uses structured prompts for email template creation