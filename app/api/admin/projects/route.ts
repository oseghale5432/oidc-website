import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { addProject, updateProject, deleteProject } from '@/lib/db';

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
    const { title, description, image, href } = await request.json();
    if (!title || !description || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const project = addProject(title, description, image, href || '#');
    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error('Admin Project POST error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, title, description, image, href } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
    }

    const updated = updateProject(id, { title, description, image, href });
    if (!updated) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, project: updated });
  } catch (error) {
    console.error('Admin Project PUT error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
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
      return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
    }

    const deleted = deleteProject(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Project not found or could not be deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin Project DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
