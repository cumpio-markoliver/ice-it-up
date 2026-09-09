# ICE IT UP

ICE IT UP is a real browser-based sales, ordering, inventory, payment, customer, expense and reporting application for MARK'S ICE IT UP.

## Stack
Next.js App Router + TypeScript, Supabase Auth/Storage/PostgreSQL, Prisma ORM, Zod, React Hook Form, Tailwind CSS, Lucide, TanStack Table and Recharts.

## Production setup
1. Create a Supabase project.
2. In Supabase Authentication, create the first user account. Public sign-up is not required.
3. In Supabase Connect, copy the PostgreSQL connection string into `DATABASE_URL` (prefer the pooler connection for serverless runtime).
4. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and `DATABASE_URL` to Vercel Environment Variables.
5. Run the Prisma schema against the database from a trusted development environment with `npx prisma db push` (or use a Prisma migration workflow).
6. Deploy. The first authenticated account automatically becomes the initial System Administrator if the application has no user profile yet.

## Important
The ZIP/archive is only a transport mechanism for the source. The intended deliverable is the deployed browser application.

## Roles
Exactly three roles are supported: System Administrator, Cashier / Order Taker, and Viewer. Authorization is checked server-side in addition to UI visibility.
