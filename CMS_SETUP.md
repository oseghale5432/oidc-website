# CMS Setup

This site is now prepared for a headless CMS using Sanity.

## How It Works

- The frontend stays in Next.js.
- Editors manage content in Sanity.
- The API routes at `/api/blog`, `/api/projects`, and `/api/events` read from Sanity when environment variables are configured.
- If Sanity is not configured yet, the site falls back to the seeded content in `lib/db.ts`.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```txt
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2025-02-19
```

Restart the dev server after changing environment variables.

## Content Types

Use the schema in `cms/sanity-schema.ts` when creating the Sanity Studio content model.

The website expects:

- `blogPost`: title, slug, excerpt, content, date, image
- `project`: title, description, href, image, order
- `event`: title, description, date, image

## Editing Workflow

After Sanity is connected, updating projects, news, event text, and images happens inside the CMS dashboard. The codebase is only needed when changing layouts, styling, components, or behavior.
