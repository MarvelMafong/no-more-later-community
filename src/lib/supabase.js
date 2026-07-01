import { createClient } from '@supabase/supabase-js'

// Lazy singleton — never initialized at module level
let client = null

export function getSupabase() {
  if (client) return client
  client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  return client
}

// Server-side admin client (service role) — only for API routes
let adminClient = null

export function getSupabaseAdmin() {
  if (adminClient) return adminClient
  adminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  return adminClient
}