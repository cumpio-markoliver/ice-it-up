# ICE IT UP

Browser-based sales, order, inventory, payment and business management app for MARK'S ICE IT UP.

## Current foundation
- Next.js App Router + TypeScript
- Tailwind CSS + glassmorphic Ice Blue UI
- Supabase Authentication + PostgreSQL
- Prisma ORM
- Server-side role checks
- Responsive sidebar: desktop collapse + mobile slide-out
- Login at `/login`; `/` routes unauthenticated users to login and authenticated users to dashboard
- Atomic order/inventory transaction foundation

## Required environment variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
DATABASE_URL=
```

## Build
```bash
npm install
npm run build
```
The build script explicitly runs `prisma generate` before `next build`.

## Important
This repository is an active implementation. The specification remains the source of truth; modules should not be considered complete merely because a route exists. Remaining production work includes the complete camera/upload payment-proof flow, secure Supabase Storage integration, full product/add-on component management, inventory adjustment/restock UI, void restoration, XLSX/PDF exports and receipts, full audit viewer, user administration, backup/restore, and complete search/filter/date-range tooling.
