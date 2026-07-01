import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const all = searchParams.get('all') === 'true'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = 10
    const offset = (page - 1) * limit

    const supabase = getSupabaseAdmin()
    let query = supabase
      .from('wall_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (!all) {
      query = query.eq('approved', true)
      query = query.range(offset, offset + limit - 1)
    }

    if (category && category !== 'All') {
      query = query.eq('category', category)
    }

    const { data, error } = await query
    if (error) throw error

    return Response.json({ posts: data || [] })
  } catch (error) {
    console.error('Posts GET error:', error)
    return Response.json({ posts: [] }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, category, text, type, anonymous } = body

    if (!text || !text.trim()) {
      return Response.json({ error: 'Text is required' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('wall_posts').insert({
      author_name: anonymous ? null : (name || null),
      category: category || 'Growth',
      content: text.trim(),
      post_type: type || 'text',
      anonymous: anonymous || false,
      approved: false,
      created_at: new Date().toISOString(),
    })

    if (error) throw error
    return Response.json({ success: true })
  } catch (error) {
    console.error('Posts POST error:', error)
    return Response.json({ error: 'Failed to submit post' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const { password, id, action } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!id) {
      return Response.json({ error: 'Post ID required' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    if (action === 'approve') {
      const { error } = await supabase
        .from('wall_posts')
        .update({ approved: true, approved_at: new Date().toISOString() })
        .eq('id', id)
      if (error) throw error
    }

    if (action === 'reject') {
      const { error } = await supabase
        .from('wall_posts')
        .delete()
        .eq('id', id)
      if (error) throw error
    }

    if (action === 'feature') {
      const { error } = await supabase
        .from('wall_posts')
        .update({ featured: true })
        .eq('id', id)
      if (error) throw error
    }

    if (action === 'unfeature') {
      const { error } = await supabase
        .from('wall_posts')
        .update({ featured: false })
        .eq('id', id)
      if (error) throw error
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Posts PUT error:', error)
    return Response.json({ error: 'Failed to update post' }, { status: 500 })
  }
}