import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found - Orange Island Lagos',
    };
  }

  return {
    title: `${post.title} - Orange Island Lagos`,
    description: post.excerpt || 'Read the latest news update from Orange Island Lagos.',
  };
}

// Next.js static generation of pages
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 via-amber-600 to-amber-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            id="blog-detail-back-btn"
            className="inline-flex items-center gap-2 text-amber-100 hover:text-white mb-6 transition"
          >
            ← Back to News
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-amber-100">
            <span className="text-lg">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="w-1.5 h-1.5 bg-amber-200 rounded-full" aria-hidden="true"></span>
            <span className="text-lg">5 min read</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 rounded-xl overflow-hidden h-96 relative border border-gray-150 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            )}

            {/* Excerpt */}
            <div className="mb-8 pb-8 border-b border-gray-250">
              <p className="text-2xl text-gray-700 leading-relaxed italic font-light">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg font-light">
                {post.content}
              </div>
            </div>

            {/* Post Meta Box */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-150">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About This Post</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-2 uppercase">Published</p>
                    <p className="text-lg text-gray-900 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-2 uppercase">Category</p>
                    <p className="text-lg text-gray-900 font-medium">Community Update</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-2 uppercase">Reading Time</p>
                    <p className="text-lg text-gray-900 font-medium">5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Orange Island?</h2>
          <p className="text-xl text-amber-50 mb-8 font-light">
            Get in touch with our team to learn more about available properties
          </p>
          <Link
            href="/contact"
            id="blog-detail-cta-contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Related Posts Link */}
      <section className="py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More News</h2>
          <Link
            href="/blog"
            id="blog-detail-more-articles"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg"
          >
            View All Articles →
          </Link>
        </div>
      </section>
    </div>
  );
}
