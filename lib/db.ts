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

// Default seed data
const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Will You Be Our Next Resident',
    slug: 'will-you-be-our-next-resident',
    excerpt: 'Join our growing community at Orange Island Lagos',
    content:
      'We are excited to welcome new residents to Orange Island. Our community offers secure lakeside living with world-class planning and effortless access to vibrant amenities.',
    date: '2025-12-22',
    createdAt: '2025-12-22T00:00:00Z',
    image: '/images/WhatsApp Image 2026-06-01 at 07.46.59.jpeg',
  },
  {
    id: 2,
    title: 'Orange Island Development Company',
    slug: 'orange-island-development-company',
    excerpt: 'Learn about our development vision',
    content:
      'Orange Island Development Company is committed to creating sustainable, vibrant communities that blend luxury with accessibility.',
    date: '2025-07-15',
    createdAt: '2025-07-15T00:00:00Z',
    image: '/images/WhatsApp Image 2026-06-01 at 07.47.00.jpeg',
  },
  {
    id: 3,
    title: 'Welcoming Residents',
    slug: 'welcoming-residents',
    excerpt: 'Our community welcomes new families',
    content: 'We are thrilled to welcome residents to our development. Each cluster offers unique identity and secure access to the lake.',
    date: '2024-12-19',
    createdAt: '2024-12-19T00:00:00Z',
    image: '/images/WhatsApp Image 2026-06-01 at 07.47.00 (1).jpeg',
  },
  {
    id: 4,
    title: 'Lagos State Building Permit',
    slug: 'lagos-state-building-permit',
    excerpt: 'Official approval from Lagos State',
    content: 'Orange Island has received approval from Lagos State for development. This marks a significant milestone in our vision.',
    date: '2024-05-20',
    createdAt: '2024-05-20T00:00:00Z',
    image: '/images/orange-island-2048x1157.jpg',
  },
];

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Decentralized Energy Limited (DEL)',
    description: 'DEL a company committed to transforming how energy is delivered',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/04/solutions-section-image-1024x683.webp',
    href: 'https://orange.bizev.net/del/',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Venco Estate App',
    description: 'Venco is a technology company that provides security access control solutions',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/04/venco-1024x538.png',
    href: '/venco-app',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Intercontra',
    description: 'Intercontra, a leading telecommunications infrastructure and solutions provider',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/04/Cell-towers_small-1024x683.jpg',
    href: 'https://orange.bizev.net/inter-contra/',
    createdAt: new Date().toISOString(),
  },
];

const initialEvents: Event[] = [
  {
    id: 1,
    title: 'Lakeside Cultural Festival',
    description: 'Join us for our annual lakeside festival celebrating local culture, arts, food, and music under the stars.',
    date: '2026-07-18',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/01/orange_mcc-1.jpg',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Community Clean Energy Seminar',
    description: "Learn about Orange Island's green energy initiatives and smart infrastructure with our expert panel.",
    date: '2026-08-05',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/01/image-6.png',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Youth Yachting & Watersports',
    description: 'An exciting weekend of watersports, sailing training, and lakeside races for the younger community members.',
    date: '2026-09-12',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/01/image-7.png',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Art Exhibition & Reception',
    description: 'Explore contemporary art displays by national artists in our main pavilion, accompanied by a networking reception.',
    date: '2026-10-22',
    image: 'https://orange.bizev.net/wp-content/uploads/2026/01/orange_abc.jpg',
    createdAt: new Date().toISOString(),
  },
];

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
