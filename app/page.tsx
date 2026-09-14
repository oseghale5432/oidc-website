import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getProjects, getEvents } from '@/lib/content';
import HeroNav from '@/components/HeroNav';

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
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[760px] lg:min-h-[85vh] w-full overflow-hidden bg-slate-950 text-white flex flex-col justify-center">
        <Image
          src="/images/orange-island-2048x1157.jpg"
          alt="Orange Island Lagos aerial perspective"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft dark gradient on left to maintain text legibility while revealing aerial labels on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />

        {/* ── NAVIGATION ── */}
        <div className="absolute top-0 left-0 w-full z-30">
          <HeroNav />
        </div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:pt-44 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-white/80">

            </p>

            <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Welcome<br />
              to Orange Island.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Orange Island brings together secure waterfront living, resilient infrastructure and responsible urban planning in the heart of Lagos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shadow-sm"
              >
                Discover Orange Island
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>

        {/* ── BOTTOM FADE (soft grounding) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>
      {/* Projects Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Our development</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-950 mb-6 tracking-tight">Projects</h2>
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
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {events.slice(0, 4).map((event) => (
                  <div key={event.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                    <div className="relative h-[430px] overflow-hidden bg-slate-900">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4 bg-white border-t border-gray-100">
                      <h3 className="font-bold text-gray-900 text-base truncate">{event.title}</h3>
                      <p className="text-xs text-orange-600 font-semibold mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg text-gray-800 font-medium">
                  Contact us to book your event.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
                >
                  Contact Us
                </Link>
              </div>
            </>
          )}
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

      {/* CTA Section */}
      <section className="bg-[#17202a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
            Contact us today to learn more about available properties and become part of the Orange Island family.
          </p>
          <Link
            href="/contact"
            id="home-cta-get-started"
            className="inline-block bg-white text-slate-950 px-10 py-4 rounded-md font-semibold hover:bg-slate-100 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
