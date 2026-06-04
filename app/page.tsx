import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getProjects, getEvents } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Orange Island Lagos - Secure Lakeside Living',
  description: 'A planned island community in Lagos, Nigeria. Experience calm waterfront living, secure access, and world-class infrastructure.',
};

export default async function Home() {
  const posts = await getBlogPosts();
  const projects = await getProjects();
  const events = await getEvents();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="relative min-h-[560px] overflow-hidden">
          <Image
            src="/images/Header2.png"
            alt="Orange Island Lagos Aerial View"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex min-h-[560px] items-end">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-200">
                Orange Island Lagos
              </p>
              <h1 className="max-w-4xl text-5xl md:text-7xl font-bold leading-tight">
                Secure lakeside living shaped for a thriving community
              </h1>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto grid gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8 lg:py-12">
            <p className="max-w-3xl text-xl leading-relaxed text-gray-800">
              A planned island community combining calm waterfront living, secure access, and well-managed amenities close to Lagos&apos; urban energy.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="/about"
                id="home-cta-explore"
                className="flex items-center justify-between border border-gray-300 px-5 py-4 text-base font-bold text-gray-900 transition hover:border-amber-700 hover:bg-amber-50"
              >
                Explore the development
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                id="home-cta-contact"
                className="flex items-center justify-between border border-gray-300 px-5 py-4 text-base font-bold text-gray-900 transition hover:border-amber-700 hover:bg-amber-50"
              >
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-amber-900">100%</p>
              <p className="text-gray-600 mt-2">Secure Community</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-900">500+</p>
              <p className="text-gray-600 mt-2">Potential Residents</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-900">25+</p>
              <p className="text-gray-600 mt-2">Amenities & Facilities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-900">24/7</p>
              <p className="text-gray-600 mt-2">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/orange_island_complete.png"
                  alt="Orange Island Complete Masterplan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-light">
                We&apos;re creating unique residential clusters along the island perimeter, each with its own distinct identity and secure access to the pristine lake.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                Residents enjoy a lifestyle of tranquility and serenity, yet remain just minutes from leisure activities and vibrant amenities—the best of both worlds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-amber-900" aria-hidden="true">✓</span>
                  <span className="text-gray-700">Secure, gated communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-amber-900" aria-hidden="true">✓</span>
                  <span className="text-gray-700">Direct lakeside access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-amber-900" aria-hidden="true">✓</span>
                  <span className="text-gray-700">World-class infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-amber-900" aria-hidden="true">✓</span>
                  <span className="text-gray-700">Vibrant community events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 font-light">Stay informed about Orange Island&apos;s exciting developments</p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No news articles found.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.slice(0, 4).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} id={`home-news-link-${post.slug}`}>
                  <article className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-900 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 font-light">{post.excerpt}</p>
                    <p className="text-amber-900 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition">
                      Read More <span>→</span>
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              id="home-cta-view-all-news"
              className="inline-block bg-amber-900 hover:bg-amber-950 text-white px-8 py-4 rounded-lg font-bold transition transform hover:scale-105 shadow-md"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#f7efe7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Projects</h2>
            <p className="max-w-5xl text-xl leading-9 text-gray-800 font-light">
              Experience the visionary projects and thoughtful developments bringing Orange Island to life, from smart infrastructure to vibrant, sustainable communities.
            </p>
          </div>

          {projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.href}
                  id={`home-project-link-${project.id}`}
                  className="group overflow-hidden rounded-lg bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-900 group-hover:text-amber-800 transition">
                      {project.title}
                    </h3>
                    <p className="text-base leading-6 text-gray-600 font-light">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Events</h2>
            <p className="max-w-5xl text-xl leading-9 text-gray-600 font-light">
              Orange Island hosts unforgettable events, blending leisure, culture, and community for everyone to enjoy fully.
            </p>
          </div>

          {events.length === 0 ? (
            <p className="text-center text-gray-500">No upcoming events scheduled.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {events.slice(0, 4).map((event) => (
                <div
                  key={event.id}
                  className="group overflow-hidden rounded-xl bg-white border border-gray-150 transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-amber-800 transition">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto font-light">
            Contact us today to learn more about available properties and become part of the Orange Island family.
          </p>
          <Link
            href="/contact"
            id="home-cta-get-started"
            className="inline-block bg-white text-amber-900 px-10 py-4 rounded-lg font-bold hover:bg-amber-50 transition transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
