type SanityRule = {
  required: () => SanityRule;
};

export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: SanityRule) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'content', title: 'Content', type: 'text', rows: 8 },
    { name: 'date', title: 'Publish Date', type: 'date', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } },
  ],
};

export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'href', title: 'Link', type: 'url' },
    { name: 'image', title: 'Card Image', type: 'image', options: { hotspot: true }, validation: (Rule: SanityRule) => Rule.required() },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
};

export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'date', title: 'Event Date', type: 'date' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
};

export const schemaTypes = [blogPost, project, event];
