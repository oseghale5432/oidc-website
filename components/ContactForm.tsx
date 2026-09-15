'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
      const payloadMessage = formData.company
        ? `[Company/Organization: ${formData.company}]\n\n${formData.message}`
        : formData.message;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: payloadMessage,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
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
    <div className="card-body shadow-xl border border-gray-200/90 rounded-2xl p-6 sm:p-10 bg-white relative overflow-hidden transition-all duration-300">
      {/* Decorative SVG accent matching EACML flight doodle */}
      <svg
        className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 text-orange-500/10 rotate-12"
        viewBox="0 0 225 168"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M147,129.9c1.9-1,9.2-2.2,4.2,2.3c-1,0.9-3.4,0.9-4.7,1.2c-3,0.8-5.8,2-8.6,3.3c0.9,0.3,1.8,0.7,2.7,1 c-1.2-3.3-3.5-6.4-3.7-9.9c-0.1-1.3,0-5,1.2-5.8c3.2-2.1,5.9,3.8,4.8,4.6c0.9-0.3,1.9-0.5,2.8-0.8c-2.4-0.9-4.6-3.7-5-6.1 c-1.2,0.9-2.4,1.8-3.7,2.8c1,0.4,1.7,1,2.1,1.9c0.2,0.8,0.4,1.7,0.5,2.5c0.8-0.1,1.5-0.2,2.3-0.4c-1.3-0.4-2.5-1.7-3.3-2.7 c-1.3-1.5-4.3-0.3-4.4,1.7c-0.4,4.4,3.1,8.4,5.1,12c1.1,1.9,5-0.2,4.4-2.2c-0.6-2.2-1.8-4.7-1.9-7c-0.5,0.8-0.9,1.6-1.4,2.4 c-0.8,0.5,3,1.7,3.3,1.7c1.2,0.2,1.9,0.2,2.9-0.3c0.7-0.3,2.9-1.8,2.4-1.9c-0.8-0.3-5.4,1.1-6.6,1.1c-2.3,0-4.7,4-1.7,4 c3.5,0,7.5-0.4,10.6-2.2c2.1-1.2,4.4-4.4,2.5-6.7c-2-2.4-4.9,0-6.8,1c-2.1,1.1-3.1,0.1-5.4-0.3c-1.3-0.2-2-0.1-3.1,0.6 c-0.9,0.5-1.4,1.4-1.4,2.4c0.1,2.3,1.3,4.8,1.9,7c1.5-0.7,3-1.4,4.4-2.2c-1.5-2.6-5.1-6.9-4.8-10c-1.5,0.6-3,1.1-4.4,1.7 c2.2,2.6,6.1,6.1,8.8,2.1c2.5-3.6,0.2-8.3-3.4-9.9c-1.6-0.7-3.9,1.1-3.7,2.8c0.5,3.4,5.1,10.1,9.2,7.9c3.9-2.1,1.8-8.6-0.6-11 c-3.5-3.6-8.5-1.7-10.5,2.4c-1.3,2.6-2.2,5.7-2,8.6c0.2,3.7,2.5,6.7,3.8,10.2c0.4,1.1,1.6,1.5,2.7,1c4-1.9,8-2.9,12.1-4.2 c2.5-0.8,6-2.3,6.9-5.1c0.7-2.4-1.2-6.1-3.5-7c-3-1.1-6.5,1.3-9,2.6C142.3,128.2,144.3,131.3,147,129.9L147,129.9z" />
        <path d="M3,0.9C3,1,3,1.2,3.1,1.4c0.1,0.1,0.2,0.2,0.4,0.3c2.8,4.7,5.4,9.5,7.9,14.4c9.2,18,16.3,36.9,21.4,56.4 c0.1,0.3,0.4,0.4,0.7,0.3c0,0.3,0.4,0.6,0.7,0.4c2.7-1.8,5.1-4.2,7.7-6.2c2.5-1.9,5-3.7,7.6-5.5c0.8-0.5,1.6-1.1,2.3-1.6 c0,0.1,0,0.2,0.1,0.3c1.5,2.3,4,4.3,6.1,6.1c1.1,0.9,2.2,1.9,3.3,2.7c1,0.8,2,1.7,3.2,2.2c0.3,0.1,0.5-0.2,0.4-0.5c0,0,0,0,0,0 c2.4-8.3,4.5-16.8,6-25.4c0.2,0,0.3-0.2,0.3-0.4c7.6-3.5,14.4-9,20.4-14.8c0.2-0.2,0.2-0.4,0.1-0.6c0.1-0.2,0.1-0.6-0.2-0.7 c-6.4-2.4-13-4.3-19.5-6.5C49.3,15,26.6,7.5,3.8,0.2c0,0,0,0-0.1,0c0,0-0.1,0-0.1-0.1C3.2-0.3,2.7,0.5,3,0.9z" />
      </svg>

      {success && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 font-bold text-xs mt-0.5">
            ✓
          </div>
          <div>
            <p className="font-semibold text-sm text-emerald-950">Message Sent Successfully!</p>
            <p className="text-xs text-emerald-800 mt-0.5 font-light">
              Thank you for reaching out. A representative from the Orange Island team will attend to your request shortly.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center text-white shrink-0 font-bold text-xs mt-0.5">
            !
          </div>
          <div>
            <p className="font-semibold text-sm text-rose-950">Submission Failed</p>
            <p className="text-xs text-rose-800 mt-0.5 font-light">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Name Field */}
          <div>
            <label htmlFor="id_full_name" className="block text-sm font-medium text-gray-800 mb-1.5">
              Your name <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              id="id_full_name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition text-sm"
              placeholder="Full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="id_email" className="block text-sm font-medium text-gray-800 mb-1.5">
              Email address <span className="text-orange-600">*</span>
            </label>
            <input
              type="email"
              id="id_email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition text-sm"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Field */}
          <div>
            <label htmlFor="id_phone" className="block text-sm font-medium text-gray-800 mb-1.5">
              Phone number <span className="text-orange-600">*</span>
            </label>
            <input
              type="tel"
              id="id_phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition text-sm"
              placeholder="+234 ..."
            />
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="id_company" className="block text-sm font-medium text-gray-800 mb-1.5">
              Company
            </label>
            <input
              type="text"
              id="id_company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition text-sm"
              placeholder="Company or Organization"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="id_message" className="block text-sm font-medium text-gray-800 mb-1.5">
            Message <span className="text-orange-600">*</span>
          </label>
          <textarea
            id="id_message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition text-sm resize-y"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            id="contact-submit-btn"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d9531e] hover:bg-[#c24614] disabled:bg-gray-400 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-200 text-sm shadow-sm cursor-pointer"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending message...</span>
              </>
            ) : (
              <span>Send a message</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
