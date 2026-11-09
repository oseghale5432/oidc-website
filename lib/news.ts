import type { BlogPost } from './db';

const ENTITIES: Record<string, string> = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&#8211;': '–',
  '&#8212;': '—',
  '&#8217;': '’',
  '&#8216;': '‘',
  '&#8220;': '“',
  '&#8221;': '”',
  '&#038;': '&',
  '&quot;': '"',
  '&#39;': '’',
};

/** Plain text of a post's HTML body. */
export function postText(html: string): string {
  return html
    .replace(/<(br|\/p|\/h[1-6]|\/li|\/figure)[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&[#a-z0-9]+;/gi, (m) => ENTITIES[m] ?? ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** A clean one- or two-sentence summary for cards. */
export function postSummary(post: BlogPost, max = 170): string {
  // Skip a leading heading (usually a restated title) so the summary starts with the story itself.
  const body = (post.content || '').replace(/^\s*<(h[1-6])[^>]*>[\s\S]*?<\/\1>/i, '');
  let text = postText(body) || postText(post.content || '') || postText(post.excerpt || '');
  // Many imported posts repeat the title as the first line.
  if (text.toLowerCase().startsWith(post.title.toLowerCase())) {
    text = text.slice(post.title.length).replace(/^[\s!:.\-–—]+/, '');
  }
  if (!text) return '';
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\-–—]+$/, '') + '…';
}

export function readingMinutes(post: BlogPost): number {
  const words = postText(post.content || '').split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Newsletters are image-only posts; label them so readers know what to expect. */
export function postKind(post: BlogPost): 'Newsletter' | 'Notice' | 'Partnership' | 'News' {
  const t = `${post.title} ${post.slug}`.toLowerCase();
  if (t.includes('newsletter')) return 'Newsletter';
  if (/permit|notice|responds|clearance/.test(t)) return 'Notice';
  if (/partner|del\b|venco|contra/.test(t)) return 'Partnership';
  return 'News';
}
