# ICE IT UP
Integrated Next.js + TypeScript + Supabase + PostgreSQL architecture foundation.

## Start locally
1. Copy `.env.example` to `.env.local` and add Supabase + database credentials.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run dev`

This project is intentionally structured around the uploaded ICE IT UP specification and is the foundation for continuing module-by-module implementation.
