import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('site_settings')
      .select('key, value')
      .in('key', ['member_count', 'books_read', 'weeks_active'])

    if (error) throw error

    const stats = {}
    data.forEach(row => { stats[row.key] = row.value })

    return Response.json({ stats })
  } catch (error) {
    console.error('Members GET error:', error)
    return Response.json({ stats: null }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { password, stats } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()

    for (const [key, value] of Object.entries(stats)) {
      await supabase
        .from('site_settings')
        .upsert({ key, value: String(value), updated_at: new Date().toISOString() }, { onConflict: 'key' })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Members POST error:', error)
    return Response.json({ error: 'Failed to update stats' }, { status: 500 })
  }
}