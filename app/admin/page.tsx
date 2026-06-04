'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Types matching the database schema
interface BlogPost {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
}

interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface Event {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

type Tab = 'blog' | 'projects' | 'events' | 'submissions';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<Tab>('blog');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Form Modals
  const [blogModal, setBlogModal] = useState<{ open: boolean; editId: string | number | null }>({ open: false, editId: null });
  const [projectModal, setProjectModal] = useState<{ open: boolean; editId: string | number | null }>({ open: false, editId: null });
  const [eventModal, setEventModal] = useState<{ open: boolean; editId: string | number | null }>({ open: false, editId: null });
  const [submissionViewModal, setSubmissionViewModal] = useState<ContactSubmission | null>(null);

  // Form Fields
  const [blogFields, setBlogFields] = useState({ title: '', slug: '', excerpt: '', content: '', date: '', image: '' });
  const [projectFields, setProjectFields] = useState({ title: '', description: '', image: '', href: '' });
  const [eventFields, setEventFields] = useState({ title: '', description: '', date: '', image: '' });

  // Check auth on load
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/auth');
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    }
    checkSession();
  }, []);

  // Fetch data when authenticated or when activeTab changes
  useEffect(() => {
    if (isAuthenticated) {
      fetchTabData();
    }
  }, [isAuthenticated, activeTab]);

  async function fetchTabData() {
    setLoadingData(true);
    try {
      if (activeTab === 'blog') {
        const res = await fetch('/api/blog');
        if (res.ok) setBlogPosts(await res.json());
      } else if (activeTab === 'projects') {
        const res = await fetch('/api/projects');
        if (res.ok) setProjects(await res.json());
      } else if (activeTab === 'events') {
        const res = await fetch('/api/events');
        if (res.ok) setEvents(await res.json());
      } else if (activeTab === 'submissions') {
        const res = await fetch('/api/contact');
        if (res.ok) setSubmissions(await res.json());
      }
    } catch (error) {
      console.error('Error fetching tab data:', error);
    } finally {
      setLoadingData(false);
    }
  }

  // Handle Login
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setLoginError(data.error || 'Invalid password');
      }
    } catch (err) {
      setLoginError('An error occurred during authentication');
    } finally {
      setLoginLoading(false);
    }
  }

  // Handle Logout
  async function handleLogout() {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      setIsAuthenticated(false);
      setPassword('');
    } catch (err) {
      console.error('Logout error:', err);
    }
  }

  // Auto-generate slug from title
  useEffect(() => {
    if (blogModal.open && !blogModal.editId) {
      const generatedSlug = blogFields.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      setBlogFields((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [blogFields.title, blogModal.open, blogModal.editId]);

  // Open Add/Edit Modals
  function openBlogModal(post?: BlogPost) {
    if (post) {
      setBlogFields({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        content: post.content,
        date: post.date,
        image: post.image || '',
      });
      setBlogModal({ open: true, editId: post.id });
    } else {
      setBlogFields({ title: '', slug: '', excerpt: '', content: '', date: new Date().toISOString().split('T')[0], image: '' });
      setBlogModal({ open: true, editId: null });
    }
  }

  function openProjectModal(project?: Project) {
    if (project) {
      setProjectFields({
        title: project.title,
        description: project.description,
        image: project.image,
        href: project.href || '',
      });
      setProjectModal({ open: true, editId: project.id });
    } else {
      setProjectFields({ title: '', description: '', image: '', href: '' });
      setProjectModal({ open: true, editId: null });
    }
  }

  function openEventModal(event?: Event) {
    if (event) {
      setEventFields({
        title: event.title,
        description: event.description,
        date: event.date,
        image: event.image,
      });
      setEventModal({ open: true, editId: event.id });
    } else {
      setEventFields({ title: '', description: '', date: new Date().toISOString().split('T')[0], image: '' });
      setEventModal({ open: true, editId: null });
    }
  }

  // CRUD API submissions
  async function submitBlogPost(e: React.FormEvent) {
    e.preventDefault();
    const isEdit = blogModal.editId !== null;
    const url = isEdit ? '/api/admin/blog' : '/api/admin/blog';
    const method = isEdit ? 'PUT' : 'POST';
    const body = isEdit ? { id: blogModal.editId, ...blogFields } : blogFields;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setBlogModal({ open: false, editId: null });
        fetchTabData();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save blog post');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting post');
    }
  }

  async function submitProject(e: React.FormEvent) {
    e.preventDefault();
    const isEdit = projectModal.editId !== null;
    const url = isEdit ? '/api/admin/projects' : '/api/admin/projects';
    const method = isEdit ? 'PUT' : 'POST';
    const body = isEdit ? { id: projectModal.editId, ...projectFields } : projectFields;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setProjectModal({ open: false, editId: null });
        fetchTabData();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save project');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting project');
    }
  }

  async function submitEvent(e: React.FormEvent) {
    e.preventDefault();
    const isEdit = eventModal.editId !== null;
    const url = isEdit ? '/api/admin/events' : '/api/admin/events';
    const method = isEdit ? 'PUT' : 'POST';
    const body = isEdit ? { id: eventModal.editId, ...eventFields } : eventFields;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setEventModal({ open: false, editId: null });
        fetchTabData();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save event');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting event');
    }
  }

  async function handleDelete(type: Tab, id: string | number) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/admin/${type}?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchTabData();
      } else {
        const data = await res.json();
        alert(data.error || 'Delete failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting item');
    }
  }

  // Filter Submissions
  const filteredSubmissions = submissions.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg font-medium">Checking session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-gray-200">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              OI
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Orange Island Lagos</h1>
          <p className="text-gray-500 text-center mb-8">Admin Portal Login</p>

          {loginError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm mb-6">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="portal-password" className="block text-sm font-bold text-gray-700 mb-2">
                Access Password
              </label>
              <input
                type="password"
                id="portal-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-600 outline-none text-gray-900 transition"
              />
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 rounded-lg transition transform hover:scale-[1.02]"
            >
              {loginLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
              OI
            </div>
            <span className="font-bold text-lg tracking-wide">Orange Island Admin</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition text-sm font-semibold">
              ← View Website
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-800 hover:bg-gray-750 border border-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full grid md:grid-cols-[240px_1fr] gap-8">
        {/* Navigation Sidebar */}
        <aside className="space-y-2">
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('blog')}
              className={`w-full text-left px-5 py-3 rounded-xl font-bold transition flex items-center justify-between ${
                activeTab === 'blog'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              <span>📰 News & Blog</span>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full text-left px-5 py-3 rounded-xl font-bold transition flex items-center justify-between ${
                activeTab === 'projects'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              <span>🏗️ Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full text-left px-5 py-3 rounded-xl font-bold transition flex items-center justify-between ${
                activeTab === 'events'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              <span>📅 Events</span>
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`w-full text-left px-5 py-3 rounded-xl font-bold transition flex items-center justify-between ${
                activeTab === 'submissions'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              <span>📧 Submissions</span>
            </button>
          </nav>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 text-sm text-amber-800">
            <p className="font-bold mb-1">💡 Local Database</p>
            <p className="leading-relaxed">All changes are stored locally in the <code>data/db.json</code> file instantly.</p>
          </div>
        </aside>

        {/* Content Box */}
        <main className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          {/* TAB 1: News & Blog */}
          {activeTab === 'blog' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Manage Blog Posts</h2>
                  <p className="text-gray-500 text-sm mt-1">Add, update, or remove news and updates</p>
                </div>
                <button
                  onClick={() => openBlogModal()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm flex items-center gap-2"
                >
                  <span>＋</span> Add New Article
                </button>
              </div>

              {loadingData ? (
                <p className="text-gray-500 py-8 text-center">Loading articles...</p>
              ) : blogPosts.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
                  <p className="text-gray-500 text-lg mb-4">No articles found.</p>
                  <button onClick={() => openBlogModal()} className="text-orange-600 font-bold hover:underline">
                    Create the first post now
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-sm text-gray-500 font-bold uppercase">
                        <th className="pb-3 w-1/3">Title</th>
                        <th className="pb-3 w-1/4">Slug</th>
                        <th className="pb-3">Publish Date</th>
                        <th className="pb-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-gray-800">
                      {blogPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50 transition">
                          <td className="py-4 font-semibold text-gray-900">{post.title}</td>
                          <td className="py-4 font-mono text-sm text-gray-600">{post.slug}</td>
                          <td className="py-4">{post.date}</td>
                          <td className="py-4 text-right space-x-2">
                            <button
                              onClick={() => openBlogModal(post)}
                              className="text-amber-700 hover:text-amber-900 text-sm font-bold bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-md transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete('blog', post.id)}
                              className="text-red-700 hover:text-red-900 text-sm font-bold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Projects */}
          {activeTab === 'projects' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Manage Projects</h2>
                  <p className="text-gray-500 text-sm mt-1">Control active developments and project cards</p>
                </div>
                <button
                  onClick={() => openProjectModal()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm flex items-center gap-2"
                >
                  <span>＋</span> Add New Project
                </button>
              </div>

              {loadingData ? (
                <p className="text-gray-500 py-8 text-center">Loading projects...</p>
              ) : projects.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
                  <p className="text-gray-500 text-lg mb-4">No projects found.</p>
                  <button onClick={() => openProjectModal()} className="text-orange-600 font-bold hover:underline">
                    Create the first project now
                  </button>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <p className="text-gray-500 font-mono text-xs mb-6 overflow-hidden text-ellipsis whitespace-nowrap">
                        Link: {project.href}
                      </p>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="text-amber-700 hover:text-amber-900 text-sm font-bold bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-md transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete('projects', project.id)}
                          className="text-red-700 hover:text-red-900 text-sm font-bold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Events */}
          {activeTab === 'events' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Manage Events</h2>
                  <p className="text-gray-500 text-sm mt-1">Update neighborhood and community events</p>
                </div>
                <button
                  onClick={() => openEventModal()}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm flex items-center gap-2"
                >
                  <span>＋</span> Add New Event
                </button>
              </div>

              {loadingData ? (
                <p className="text-gray-500 py-8 text-center">Loading events...</p>
              ) : events.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-2xl">
                  <p className="text-gray-500 text-lg mb-4">No events found.</p>
                  <button onClick={() => openEventModal()} className="text-orange-600 font-bold hover:underline">
                    Create the first event now
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-sm text-gray-500 font-bold uppercase">
                        <th className="pb-3 w-1/3">Event Title</th>
                        <th className="pb-3 w-1/3">Description</th>
                        <th className="pb-3">Event Date</th>
                        <th className="pb-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-gray-800">
                      {events.map((event) => (
                        <tr key={event.id} className="hover:bg-gray-50 transition">
                          <td className="py-4 font-semibold text-gray-900">{event.title}</td>
                          <td className="py-4 text-sm text-gray-600 line-clamp-1">{event.description}</td>
                          <td className="py-4">{event.date}</td>
                          <td className="py-4 text-right space-x-2">
                            <button
                              onClick={() => openEventModal(event)}
                              className="text-amber-700 hover:text-amber-900 text-sm font-bold bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-md transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete('events', event.id)}
                              className="text-red-700 hover:text-red-900 text-sm font-bold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Contact Submissions */}
          {activeTab === 'submissions' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Contact Submissions</h2>
                  <p className="text-gray-500 text-sm mt-1">Review user inquiries and feedback</p>
                </div>
                <div className="w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-600 outline-none transition"
                  />
                </div>
              </div>

              {loadingData ? (
                <p className="text-gray-500 py-8 text-center">Loading submissions...</p>
              ) : filteredSubmissions.length === 0 ? (
                <p className="text-gray-500 py-8 text-center">No submissions match your search.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase">
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Email</th>
                        <th className="pb-3">Phone</th>
                        <th className="pb-3">Message Snippet</th>
                        <th className="pb-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-gray-800">
                      {filteredSubmissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-gray-50 transition">
                          <td className="py-4 text-xs text-gray-500">
                            {new Date(sub.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 font-bold text-gray-900">{sub.name}</td>
                          <td className="py-4 text-gray-600">{sub.email}</td>
                          <td className="py-4 text-gray-600">{sub.phone || '-'}</td>
                          <td className="py-4 text-gray-600 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                            {sub.message}
                          </td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => setSubmissionViewModal(sub)}
                              className="text-orange-700 hover:text-orange-900 font-bold bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-md transition"
                            >
                              View Full
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* BLOG POST ADD/EDIT MODAL */}
      {blogModal.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {blogModal.editId ? 'Edit Blog Post' : 'Add New Blog Post'}
            </h3>
            <form onSubmit={submitBlogPost} className="space-y-6 text-gray-900">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={blogFields.title}
                    onChange={(e) => setBlogFields((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter post title"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Slug (URL link) *</label>
                  <input
                    type="text"
                    required
                    value={blogFields.slug}
                    onChange={(e) => setBlogFields((prev) => ({ ...prev, slug: e.target.value }))}
                    placeholder="post-slug-url"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Featured Image URL / Path</label>
                <input
                  type="text"
                  value={blogFields.image}
                  onChange={(e) => setBlogFields((prev) => ({ ...prev, image: e.target.value }))}
                  placeholder="e.g. /images/WhatsApp Image 2026-06-01 at 07.46.59.jpeg or HTTPS URL"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Excerpt (Short summary) *</label>
                  <input
                    type="text"
                    required
                    value={blogFields.excerpt}
                    onChange={(e) => setBlogFields((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Enter short snippet description"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Publish Date *</label>
                  <input
                    type="date"
                    required
                    value={blogFields.date}
                    onChange={(e) => setBlogFields((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Full Content *</label>
                <textarea
                  required
                  rows={8}
                  value={blogFields.content}
                  onChange={(e) => setBlogFields((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="Type full article text here..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none resize-y focus:ring-2 focus:ring-orange-600 transition"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setBlogModal({ open: false, editId: null })}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-100 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm"
                >
                  Save Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT ADD/EDIT MODAL */}
      {projectModal.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {projectModal.editId ? 'Edit Project' : 'Add New Project'}
            </h3>
            <form onSubmit={submitProject} className="space-y-6 text-gray-900">
              <div>
                <label className="block text-sm font-bold mb-2">Project Title *</label>
                <input
                  type="text"
                  required
                  value={projectFields.title}
                  onChange={(e) => setProjectFields((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter project title"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description *</label>
                <textarea
                  required
                  rows={4}
                  value={projectFields.description}
                  onChange={(e) => setProjectFields((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Type brief description..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-orange-600 transition"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Image URL *</label>
                <input
                  type="text"
                  required
                  value={projectFields.image}
                  onChange={(e) => setProjectFields((prev) => ({ ...prev, image: e.target.value }))}
                  placeholder="Enter project card image URL or local path"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Action / Link URL</label>
                <input
                  type="text"
                  value={projectFields.href}
                  onChange={(e) => setProjectFields((prev) => ({ ...prev, href: e.target.value }))}
                  placeholder="e.g. /del or https://example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setProjectModal({ open: false, editId: null })}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-100 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EVENT ADD/EDIT MODAL */}
      {eventModal.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {eventModal.editId ? 'Edit Event' : 'Add New Event'}
            </h3>
            <form onSubmit={submitEvent} className="space-y-6 text-gray-900">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Event Title *</label>
                  <input
                    type="text"
                    required
                    value={eventFields.title}
                    onChange={(e) => setEventFields((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter event title"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={eventFields.date}
                    onChange={(e) => setEventFields((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description *</label>
                <textarea
                  required
                  rows={4}
                  value={eventFields.description}
                  onChange={(e) => setEventFields((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Type brief description..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-orange-600 transition"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Image URL *</label>
                <input
                  type="text"
                  required
                  value={eventFields.image}
                  onChange={(e) => setEventFields((prev) => ({ ...prev, image: e.target.value }))}
                  placeholder="Enter event image URL or local path"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-600 transition"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setEventModal({ open: false, editId: null })}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-100 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold transition text-sm"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW SUBMISSION FULL MODAL */}
      {submissionViewModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Submission Detail</h3>
            <div className="space-y-4 text-gray-900">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-150">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Submitted At</p>
                  <p className="font-semibold">{new Date(submissionViewModal.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Name</p>
                  <p className="font-semibold text-orange-700">{submissionViewModal.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-150">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Email</p>
                  <p className="font-semibold">
                    <a href={`mailto:${submissionViewModal.email}`} className="text-blue-600 hover:underline">
                      {submissionViewModal.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Phone</p>
                  <p className="font-semibold">{submissionViewModal.phone || 'Not provided'}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-2">Message</p>
                <div className="bg-gray-50 rounded-xl p-4 text-gray-700 border whitespace-pre-wrap leading-relaxed">
                  {submissionViewModal.message}
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-6">
              <button
                onClick={() => setSubmissionViewModal(null)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-bold transition text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
