import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('site_settings')
      .select('key, value')
      .in('key', [
        'current_book_title',
        'current_book_author',
        'current_book_month',
        'current_book_progress',
        'current_book_chapter',
        'current_book_total',
        'current_book_cover',
      ])

    if (error) throw error

    const book = {}
    data.forEach(row => {
      const k = row.key.replace('current_book_', '')
      book[k] = row.value
    })

    return Response.json({ book })
  } catch (error) {
    console.error('Book GET error:', error)
    return Response.json({ book: null }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { password, book } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()
    const updates = Object.entries(book).map(([k, v]) => ({
      key: `current_book_${k}`,
      value: String(v),
      updated_at: new Date().toISOString(),
    }))

    for (const update of updates) {
      await supabase
        .from('site_settings')
        .upsert(update, { onConflict: 'key' })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Book POST error:', error)
    return Response.json({ error: 'Failed to update book' }, { status: 500 })
  }
}