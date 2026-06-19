# Client State Stores

Use this folder only for client-only state that does not belong in React Query.

Recommended default:

- React Query for server state.
- URL search params for filters, tabs, pagination, and shareable state.
- React Context for small global UI concerns.
- A store library such as Zustand only when shared client-only state becomes complex.

Redux is intentionally not included by default.
