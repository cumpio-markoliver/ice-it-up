import { createClient } from './supabase/server'
import { prisma } from './prisma'
import { redirect } from 'next/navigation'
export async function getSessionUser() {
  const supabase = await createClient(); const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  return prisma.user.findUnique({ where: { authUserId: user.id } })
}
export async function requireUser() { const u = await getSessionUser(); if (!u || !u.isActive) redirect('/login'); return u }
export async function requireRole(roles: string[]) { const u = await requireUser(); if (!roles.includes(u.role)) redirect('/dashboard'); return u }
