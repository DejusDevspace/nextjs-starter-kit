# Architecture

This starter is frontend-only. It does not assume a backend framework.

## Boundaries

- `src/config`: Project constants, route maps, and metadata defaults.
- `src/env.ts`: Typed public environment variables.
- `src/lib/api`: Axios client, error normalization, and query keys.
- `src/lib/query`: TanStack Query client defaults.
- `src/lib/auth`: Replaceable auth adapter used by the API client.
- `src/components/ui`: Lightweight primitives that can be replaced by a UI library.
- `src/components/layout`: App shells and layout primitives.
- `src/features`: Project-specific feature modules.
- `src/hooks`: Reusable browser/client hooks.
- `src/schemas`: Zod validation schemas.
- `src/stores`: Optional client-only state stores.

## State

- Use TanStack Query for server state.
- Use URL search params for filters, pagination, search, and tabs.
- Use React Context for small global UI state.
- Add Zustand or Redux only when client-only shared state becomes complex.

## Auth

The starter ships with an auth adapter, not a hard dependency on one provider.
Wire your provider in `src/lib/auth/auth-adapter.ts` or call
`configureAuthAdapter` from a client provider.

## API

Use `apiClient` only inside service files. Components should consume feature hooks.
