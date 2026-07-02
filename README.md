# RJA Tech LLC

One-page website for `rjatechllc.com`, built for RJA Tech LLC with Next.js.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Included Shape

- Edit site code under `app/`.
- Public images and icons live under `public/`.
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings.
- `vite.config.ts` simulates declared bindings for local development.
- `db/schema.ts` starts intentionally empty.
- `examples/d1/` contains an optional D1 example surface.
- `drizzle.config.ts` supports local migration generation when needed.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the Next.js build output
- `npm run db:generate`: generate Drizzle migrations after schema changes
