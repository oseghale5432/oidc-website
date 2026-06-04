# Orange Island Lagos Website

A modern, responsive website for Orange Island Lagos - a lakeside residential community development.

## Features

- **Homepage**: Hero section, vision statement, news carousel, projects showcase
- **Blog System**: News and updates about Orange Island development
- **About Page**: Company information and values
- **Contact Form**: Get in touch with our team
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **SQLite Database**: Local database for blog posts, projects, and contact submissions

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with better-sqlite3
- **Deployment**: Can be deployed to Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will automatically initialize the SQLite database with sample data on first run.

## Project Structure

```
oidc-website/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── blog/                 # Blog posts API
│   │   ├── projects/             # Projects API
│   │   ├── events/               # Events API
│   │   └── contact/              # Contact form API
│   ├── blog/                     # Blog pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── layout.tsx                # Root layout with Header/Footer
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── Header.tsx                # Navigation header
│   └── Footer.tsx                # Footer
├── lib/                          # Utilities
│   └── db.ts                     # Database functions and schema
├── data/                         # SQLite database storage
└── public/                       # Static files
```

## API Endpoints

### Blog Posts
- `GET /api/blog` - Get all blog posts

### Projects
- `GET /api/projects` - Get all projects

### Events
- `GET /api/events` - Get all events

### Contact
- `GET /api/contact` - Get all contact submissions (for admin)
- `POST /api/contact` - Submit a new contact form

## Database Schema

### blog_posts
- id (INTEGER, PRIMARY KEY)
- title (TEXT)
- slug (TEXT, UNIQUE)
- excerpt (TEXT)
- content (TEXT)
- date (TEXT)
- createdAt (DATETIME)

### projects
- id (INTEGER, PRIMARY KEY)
- title (TEXT)
- description (TEXT)
- image (TEXT)
- createdAt (DATETIME)

### events
- id (INTEGER, PRIMARY KEY)
- title (TEXT)
- description (TEXT)
- date (TEXT)
- image (TEXT)
- createdAt (DATETIME)

### contact_submissions
- id (INTEGER, PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- phone (TEXT)
- message (TEXT)
- createdAt (DATETIME)

## Production Build

```bash
npm run build
npm start
```

## Customization

### Adding New Blog Posts

Edit `lib/db.ts` and add entries to the seed data in `initializeDatabase()` function, or create an admin interface to add posts dynamically.

### Styling

The site uses Tailwind CSS with an orange color scheme. Customize colors in `globals.css`.

### Contact Information

Update footer and contact page with actual company information in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS, Google Cloud, Azure, etc.

## Support

For questions or issues, contact: info@orangeisland.ng

## License

© 2026 Orange Island Lagos. All rights reserved.
