import {
  getBlogPosts as getSeedBlogPosts,
  getBlogPostBySlug as getSeedBlogPostBySlug,
  getEvents as getSeedEvents,
  getProjects as getSeedProjects,
  type BlogPost,
  type Event,
  type Project,
} from './db';

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET || 'production';
const SANITY_API_VERSION = process.env.SANITY_API_VERSION || '2025-02-19';

function hasSanityConfig() {
  return Boolean(SANITY_PROJECT_ID && SANITY_DATASET);
}

async function sanityQuery<T>(query: string): Promise<T | null> {
  if (!hasSanityConfig()) return null;

  const url = new URL(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`
  );
  url.searchParams.set('query', query);

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed with ${response.status}`);
  }

  const payload = (await response.json()) as { result: T };
  return payload.result;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityQuery<BlogPost[]>(`
      *[_type == "blogPost"] | order(date desc) {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        content,
        date,
        "createdAt": _createdAt,
        "image": image.asset->url
      }
    `);

    return posts?.filter((post) => post.title && post.slug) ?? getSeedBlogPosts();
  } catch (error) {
    console.error('Falling back to seeded blog posts:', error);
    return getSeedBlogPosts();
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const post = await sanityQuery<BlogPost>(`
      *[_type == "blogPost" && slug.current == $slug][0] {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        content,
        date,
        "createdAt": _createdAt,
        "image": image.asset->url
      }
    `,); // Note: For standard URL query we format it, but since URL params are simple we can inject it safely as slug is an alpha-numeric slug string, or just query all and filter, or use raw string query
    // Let's do raw string injection for sanity query since this is a simple query and slug is safe:
    const posts = await sanityQuery<BlogPost[]>(`
      *[_type == "blogPost" && slug.current == "${slug}"] {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        content,
        date,
        "createdAt": _createdAt,
        "image": image.asset->url
      }
    `);
    
    if (posts && posts.length > 0) {
      return posts[0];
    }
    return getSeedBlogPostBySlug(slug);
  } catch (error) {
    console.error(`Falling back to seed blog post for slug: ${slug}`, error);
    return getSeedBlogPostBySlug(slug);
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await sanityQuery<Project[]>(`
      *[_type == "project"] | order(order asc, _createdAt asc) {
        "id": _id,
        title,
        description,
        "href": coalesce(href, "#"),
        "image": image.asset->url,
        "createdAt": _createdAt
      }
    `);

    return projects?.filter((project) => project.title && project.image) ?? getSeedProjects();
  } catch (error) {
    console.error('Falling back to seeded projects:', error);
    return getSeedProjects();
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    const events = await sanityQuery<Event[]>(`
      *[_type == "event"] | order(date asc) {
        "id": _id,
        title,
        description,
        date,
        "image": image.asset->url,
        "createdAt": _createdAt
      }
    `);

    return events?.filter((event) => event.title) ?? getSeedEvents();
  } catch (error) {
    console.error('Falling back to seeded events:', error);
    return getSeedEvents();
  }
}
