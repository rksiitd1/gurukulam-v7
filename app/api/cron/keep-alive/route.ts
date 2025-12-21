// app/api/cron/keep-alive/route.ts
// This endpoint is called by Vercel Cron to keep the Supabase project alive.
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic'; // Ensures this is not cached

export async function GET(request: Request) {
  // Optional: Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // If CRON_SECRET is not set, skip the check (for easier local testing)
    if (process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    // Perform a simple, lightweight query to keep Supabase active
    const { data, error } = await supabaseAdmin
      .from('donations')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Supabase keep-alive error:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    console.log('Supabase keep-alive ping successful');
    return NextResponse.json({ ok: true, message: 'Supabase is awake!', timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('Keep-alive cron error:', error);
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });
  }
}
