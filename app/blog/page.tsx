import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'News & Updates - Orange Island Lagos',
  description: 'Stay updated with the latest news, announcements, and development progress at Orange Island Lagos.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-amber-50 max-w-2xl font-light">
            Stay informed about Orange Island Lagos developments and community news
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news articles found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} id={`blog-post-card-${post.slug}`}>
                  <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-amber-600 hover:border-amber-750 flex flex-col md:flex-row border border-gray-100 mb-6">
                    {post.image && (
                      <div className="relative w-full md:w-80 h-48 md:h-auto min-h-[192px] overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-8 flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold">
                          Article {posts.length - index}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-4 line-clamp-2 font-light">{post.excerpt}</p>
                      <p className="text-amber-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition">
                        Read Full Article <span className="text-xl">→</span>
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto font-light">
            Get in touch with us to receive updates about Orange Island developments
          </p>
          <Link
            href="/contact"
            id="blog-cta-contact-us"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
