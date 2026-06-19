# Next.js Starter Kit

A reusable frontend-only Next.js starter with modular architecture, TypeScript,
Tailwind CSS v4, TanStack Query, Axios, typed environment config, theme handling,
toast feedback, layout primitives, and a feature-first folder pattern.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- TanStack Query
- Axios
- next-themes
- Zod
- React Hook Form
- Vitest + Testing Library
- Prettier + ESLint

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run test:run
npm run format
```

## Folder Guide

- `src/app`: Routes, route boundaries, metadata files.
- `src/config`: App constants and route definitions.
- `src/env.ts`: Typed public environment variables.
- `src/lib/api`: Axios client and query keys.
- `src/lib/query`: TanStack Query client setup.
- `src/lib/auth`: Replaceable auth adapter.
- `src/components/ui`: Small UI primitives.
- `src/components/layout`: Shells and layout primitives.
- `src/features`: Project-specific feature modules.
- `src/hooks`: Reusable client hooks.
- `src/schemas`: Zod validation schemas.
- `src/stores`: Optional client-only state stores.

Read [docs/architecture.md](docs/architecture.md) for the architecture pattern.

## Replacement Points

- Replace API behavior in `src/lib/api/client.ts`.
- Replace auth by wiring `src/lib/auth/auth-adapter.ts`.
- Replace UI primitives in `src/components/ui`.
- Replace design tokens in `src/app/globals.css`.
- Add project features under `src/features`.

## State Management

Use TanStack Query for server state, URL params for shareable UI state, React
Context for small global UI state, and add a store library only when needed.
