import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const DEFAULT_ADMIN_PASSWORD = 'admin123';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

    if (password === adminPassword) {
      const cookieStore = await cookies();
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true, message: 'Authenticated successfully' });
    }

    return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    console.error('Auth POST error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (session && session.value === 'authenticated') {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch (error) {
    console.error('Auth GET error:', error);
    return NextResponse.json({ authenticated: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
    return NextResponse.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Auth DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
