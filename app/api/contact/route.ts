import { NextResponse } from 'next/server';
import { initializeDatabase, addContactSubmission, getContactSubmissions } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    initializeDatabase();
    const submission = addContactSubmission(name, email, phone || '', message);
    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}

export async function GET() {
  try {
    initializeDatabase();
    const submissions = getContactSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}
