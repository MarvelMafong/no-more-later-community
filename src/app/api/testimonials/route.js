import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true })

    if (error) throw error
    return Response.json({ testimonials: data || [] })
  } catch (error) {
    console.error('Testimonials GET error:', error)
    return Response.json({ testimonials: [] }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { password, action, testimonial, id } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()

    if (action === 'add') {
      const { error } = await supabase.from('testimonials').insert({
        name: testimonial.name,
        location: testimonial.location,
        avatar: testimonial.name?.[0]?.toUpperCase() || 'A',
        color: testimonial.color || 'linear-gradient(135deg,#FACC15,#d97706)',
        quote: testimonial.quote,
        impact: testimonial.impact,
        active: true,
        sort_order: testimonial.sort_order || 99,
      })
      if (error) throw error
    }

    if (action === 'remove') {
      const { error } = await supabase
        .from('testimonials')
        .update({ active: false })
        .eq('id', id)
      if (error) throw error
    }

    if (action === 'restore') {
      const { error } = await supabase
        .from('testimonials')
        .update({ active: true })
        .eq('id', id)
      if (error) throw error
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Testimonials POST error:', error)
    return Response.json({ error: 'Failed to update testimonials' }, { status: 500 })
  }
}