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
        // Auto-dismiss success notification after 7 seconds
        setTimeout(() => setSuccess(false), 7000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100/80 relative overflow-hidden transition-all duration-300 hover:shadow-orange-500/[0.03]">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-amber-500"></div>
      
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Send us a Message</h2>
        <p className="text-gray-500 text-sm font-light">
          Have an inquiry about property, site visits, or utilities? Reach out, and our team will get back to you shortly.
        </p>
      </div>

      {success && (
        <div className="mb-8 p-5 bg-emerald-50/90 border border-emerald-200 text-emerald-900 rounded-2xl flex items-start gap-4 shadow-sm animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 font-bold text-lg">
            ✓
          </div>
          <div>
            <p className="font-bold text-base text-emerald-950">Message Sent Successfully!</p>
            <p className="text-sm text-emerald-800 mt-1 font-light">Thank you for reaching out. A representative from the Orange Island team will contact you shortly.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-8 p-5 bg-rose-50/90 border border-rose-200 text-rose-900 rounded-2xl flex items-start gap-4 shadow-sm animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 font-bold text-lg">
            !
          </div>
          <div>
            <p className="font-bold text-base text-rose-950">Submission Failed</p>
            <p className="text-sm text-rose-800 mt-1 font-light">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Full Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-300 text-gray-900"
              placeholder="e.g. John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-300 text-gray-900"
              placeholder="e.g. john@example.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-300 text-gray-900"
            placeholder="e.g. +234 800 000 0000"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Your Message <span className="text-orange-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none resize-none transition-all duration-300 text-gray-900"
            placeholder="Describe your inquiry in detail..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="contact-submit-btn"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-orange-500/20 transform hover:-translate-y-[1px] disabled:transform-none text-base cursor-pointer flex items-center justify-center gap-2.5"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-xs font-light">
          * Required fields. Your information is protected and will only be used to process your request.
        </p>
      </form>
    </div>
  );
}

