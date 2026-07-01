import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })
      .limit(1)

    if (error) throw error
    return Response.json({ announcement: data?.[0] || null })
  } catch (error) {
    console.error('Announcement GET error:', error)
    return Response.json({ announcement: null }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { password, action, message, color, id } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()

    if (action === 'create') {
      // Deactivate all existing announcements first
      await supabase
        .from('announcements')
        .update({ active: false })
        .eq('active', true)

      // Create new one
      const { error } = await supabase.from('announcements').insert({
        message,
        color: color || '#FACC15',
        active: true,
      })
      if (error) throw error
    }

    if (action === 'dismiss') {
      const { error } = await supabase
        .from('announcements')
        .update({ active: false })
        .eq('id', id)
      if (error) throw error
    }

    if (action === 'clear') {
      const { error } = await supabase
        .from('announcements')
        .update({ active: false })
        .eq('active', true)
      if (error) throw error
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Announcement POST error:', error)
    return Response.json({ error: 'Failed to update announcement' }, { status: 500 })
  }
}