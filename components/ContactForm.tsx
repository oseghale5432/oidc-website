'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to submit form');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 border border-gray-150">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-2 border-green-400 text-green-700 rounded-lg flex items-start gap-3">
          <span className="text-2xl">✓</span>
          <div>
            <p className="font-bold">Message Sent Successfully!</p>
            <p className="text-sm">Thank you for reaching out. We&apos;ll get back to you soon.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg flex items-start gap-3">
          <span className="text-2xl">!</span>
          <div>
            <p className="font-bold">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 text-gray-900">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-bold text-gray-900 mb-3">
              Full Name *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-amber-600 outline-none transition"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-bold text-gray-900 mb-3">
              Email Address *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-amber-600 outline-none transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="text-gray-900">
          <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-900 mb-3">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-amber-600 outline-none transition"
            placeholder="+234 (0) 123 456 7890"
          />
        </div>

        {/* Message Field */}
        <div className="text-gray-900">
          <label htmlFor="contact-message" className="block text-sm font-bold text-gray-900 mb-3">
            Your Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-amber-600 outline-none resize-none transition"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="contact-submit-btn"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 rounded-lg transition transform hover:scale-[1.01] text-lg cursor-pointer"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-center text-gray-500 text-sm">
          * Required fields. We respect your privacy and won&apos;t share your information.
        </p>
      </form>
    </div>
  );
}
