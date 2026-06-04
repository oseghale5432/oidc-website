import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { addEvent, updateEvent, deleteEvent } from '@/lib/db';

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return session && session.value === 'authenticated';
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { title, description, date, image } = await request.json();
    if (!title || !description || !date || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const event = addEvent(title, description, date, image);
    return NextResponse.json({ success: true, event }, { status: 201 });
  } catch (error) {
    console.error('Admin Event POST error:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, title, description, date, image } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'Missing event ID' }, { status: 400 });
    }

    const updated = updateEvent(id, { title, description, date, image });
    if (!updated) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, event: updated });
  } catch (error) {
    console.error('Admin Event PUT error:', error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing event ID' }, { status: 400 });
    }

    const deleted = deleteEvent(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Event not found or could not be deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin Event DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
