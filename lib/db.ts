import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  createdAt: string;
  image?: string;
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  href: string;
  createdAt: string;
}

export interface Event {
  id: number | string;
  title: string;
  description: string;
  date: string;
  image: string;
  createdAt: string;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

interface DatabaseSchema {
  blogPosts: BlogPost[];
  projects: Project[];
  events: Event[];
  contactSubmissions: ContactSubmission[];
}

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

import dbJson from '../data/db.json';

// Default seed data
const initialBlogPosts: BlogPost[] = dbJson.blogPosts as BlogPost[];
const initialProjects: Project[] = dbJson.projects as Project[];
const initialEvents: Event[] = dbJson.events as Event[];

// Helper: Ensure the data directory and db file exist
export function initializeDatabase() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(DB_PATH)) {
    const defaultData: DatabaseSchema = {
      blogPosts: initialBlogPosts,
      projects: initialProjects,
      events: initialEvents,
      contactSubmissions: [],
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultData, null, 2), 'utf-8');
    console.log('Database initialized with local seed file');
  } else {
    // Check if database exists but events are missing/empty
    try {
      const content = fs.readFileSync(DB_PATH, 'utf-8');
      const data = JSON.parse(content) as DatabaseSchema;
      if (!data.events || data.events.length === 0) {
        data.events = initialEvents;
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Events seeded into existing database');
      }
    } catch (e) {
      console.error('Error post-seeding database events:', e);
    }
  }
}

// Helper: Load database state from disk
function loadDb(): DatabaseSchema {
  initializeDatabase();
  try {
    const content = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(content) as DatabaseSchema;
  } catch (error) {
    console.error('Error reading database file, returning empty schema:', error);
    return { blogPosts: [], projects: [], events: [], contactSubmissions: [] };
  }
}

// Helper: Save database state back to disk atomically
function saveDb(data: DatabaseSchema) {
  try {
    const tempPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, DB_PATH);
  } catch (error) {
    console.error('Failed to write database file:', error);
  }
}

// === BLOG POSTS API ===
export function getBlogPosts(): BlogPost[] {
  const db = loadDb();
  return [...db.blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const db = loadDb();
  return db.blogPosts.find((post) => post.slug === slug);
}

export function addBlogPost(
  title: string,
  slug: string,
  excerpt: string,
  content: string,
  date: string,
  image?: string
): BlogPost {
  const db = loadDb();
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  const post: BlogPost = {
    id,
    title,
    slug,
    excerpt,
    content,
    date,
    createdAt: new Date().toISOString(),
    image,
  };
  db.blogPosts.push(post);
  saveDb(db);
  return post;
}

export function updateBlogPost(
  id: string | number,
  updatedData: Partial<Omit<BlogPost, 'id' | 'createdAt'>>
): BlogPost | null {
  const db = loadDb();
  const index = db.blogPosts.findIndex((p) => p.id === id || String(p.id) === String(id));
  if (index === -1) return null;

  const original = db.blogPosts[index];
  const updated: BlogPost = {
    ...original,
    ...updatedData,
    id: original.id,
    createdAt: original.createdAt,
  };
  db.blogPosts[index] = updated;
  saveDb(db);
  return updated;
}

export function deleteBlogPost(id: string | number): boolean {
  const db = loadDb();
  const initialLength = db.blogPosts.length;
  db.blogPosts = db.blogPosts.filter((p) => p.id !== id && String(p.id) !== String(id));
  if (db.blogPosts.length === initialLength) return false;
  saveDb(db);
  return true;
}

// === PROJECTS API ===
export function getProjects(): Project[] {
  const db = loadDb();
  return [...db.projects];
}

export function addProject(
  title: string,
  description: string,
  image: string,
  href: string
): Project {
  const db = loadDb();
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  const project: Project = {
    id,
    title,
    description,
    image,
    href: href || '#',
    createdAt: new Date().toISOString(),
  };
  db.projects.push(project);
  saveDb(db);
  return project;
}

export function updateProject(
  id: string | number,
  updatedData: Partial<Omit<Project, 'id' | 'createdAt'>>
): Project | null {
  const db = loadDb();
  const index = db.projects.findIndex((p) => p.id === id || String(p.id) === String(id));
  if (index === -1) return null;

  const original = db.projects[index];
  const updated: Project = {
    ...original,
    ...updatedData,
    id: original.id,
    createdAt: original.createdAt,
  };
  db.projects[index] = updated;
  saveDb(db);
  return updated;
}

export function deleteProject(id: string | number): boolean {
  const db = loadDb();
  const initialLength = db.projects.length;
  db.projects = db.projects.filter((p) => p.id !== id && String(p.id) !== String(id));
  if (db.projects.length === initialLength) return false;
  saveDb(db);
  return true;
}

// === EVENTS API ===
export function getEvents(): Event[] {
  const db = loadDb();
  return [...db.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function addEvent(
  title: string,
  description: string,
  date: string,
  image: string
): Event {
  const db = loadDb();
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  const event: Event = {
    id,
    title,
    description,
    date,
    image,
    createdAt: new Date().toISOString(),
  };
  db.events.push(event);
  saveDb(db);
  return event;
}

export function updateEvent(
  id: string | number,
  updatedData: Partial<Omit<Event, 'id' | 'createdAt'>>
): Event | null {
  const db = loadDb();
  const index = db.events.findIndex((e) => e.id === id || String(e.id) === String(id));
  if (index === -1) return null;

  const original = db.events[index];
  const updated: Event = {
    ...original,
    ...updatedData,
    id: original.id,
    createdAt: original.createdAt,
  };
  db.events[index] = updated;
  saveDb(db);
  return updated;
}

export function deleteEvent(id: string | number): boolean {
  const db = loadDb();
  const initialLength = db.events.length;
  db.events = db.events.filter((e) => e.id !== id && String(e.id) !== String(id));
  if (db.events.length === initialLength) return false;
  saveDb(db);
  return true;
}

// === CONTACT SUBMISSIONS API ===
export function addContactSubmission(
  name: string,
  email: string,
  phone: string,
  message: string
): ContactSubmission {
  const db = loadDb();
  const submission: ContactSubmission = {
    id: db.contactSubmissions.length + 1,
    name,
    email,
    phone,
    message,
    createdAt: new Date().toISOString(),
  };
  db.contactSubmissions.push(submission);
  saveDb(db);
  console.log('Contact submission saved locally:', submission);
  return submission;
}

export function getContactSubmissions(): ContactSubmission[] {
  const db = loadDb();
  return [...db.contactSubmissions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

const db = {
  initializeDatabase,
  getBlogPosts,
  getBlogPostBySlug,
  addBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  addContactSubmission,
  getContactSubmissions,
};

export default db;
