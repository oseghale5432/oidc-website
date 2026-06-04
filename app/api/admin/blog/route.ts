import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { addBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/db';

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
    const { title, slug, excerpt, content, date, image } = await request.json();
    if (!title || !slug || !content || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const post = addBlogPost(title, slug, excerpt || '', content, date, image || '');
    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    console.error('Admin Blog POST error:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, title, slug, excerpt, content, date, image } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'Missing blog post ID' }, { status: 400 });
    }

    const updated = updateBlogPost(id, { title, slug, excerpt, content, date, image });
    if (!updated) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: updated });
  } catch (error) {
    console.error('Admin Blog PUT error:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
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
      return NextResponse.json({ error: 'Missing blog post ID' }, { status: 400 });
    }

    const deleted = deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Blog post not found or could not be deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin Blog DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
