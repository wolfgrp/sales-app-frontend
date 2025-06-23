import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a submission
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen p-6 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">📞 Contact Us</h2>
      <p className="mb-6">
        We’d love to hear from you! Whether you have a question about our products, want to explore business opportunities, or need support, feel free to reach out. Our team is always ready to assist you.
      </p>

      <h3 className="text-2xl font-semibold mb-2">🏢 Head Office</h3>
      <p className="mb-6">
        Shree Chitragupta Enterprises<br />
        Near Mohan Nagar, Ghaziabad, Uttar Pradesh, India<br />
        Pin Code: [Your PIN Code]
      </p>

      <h3 className="text-2xl font-semibold mb-2">📱 Phone & WhatsApp</h3>
      <p className="mb-6">
        +91-XXXXXXXXXX<br />
        <em>(Available: Monday to Saturday, 10 AM – 6 PM)</em>
      </p>

      <h3 className="text-2xl font-semibold mb-2">📧 Email</h3>
      <p className="mb-6">
        <strong>General Inquiries:</strong> info@shreechitraguptaenterprises.in<br />
        <strong>Sales & Orders:</strong> sales@shreechitraguptaenterprises.in<br />
        <strong>Support:</strong> support@shreechitraguptaenterprises.in
      </p>

      <h3 className="text-2xl font-semibold mb-2">🌐 Social Media</h3>
      <p className="mb-6">
        Follow us for updates, product launches, and behind-the-scenes content:<br />
        [Facebook Icon] [Instagram Icon] [LinkedIn Icon]<br />
        @shreechitraguptaenterprises
      </p>

      <h3 className="text-2xl font-semibold mb-2">📝 Get in Touch</h3>
      <p className="mb-4">
        Have something specific to ask or share? Fill out the form below, and we’ll get back to you within 24–48 hours.
      </p>

      {submitted ? (
        <p className="text-green-600 font-semibold">✅ Thank you! Your message has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-4 border rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-4 border rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 mb-4 border rounded"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}

      <p className="mt-8">📌 Your feedback matters. Whether it’s appreciation or a suggestion, we value every message. Let’s grow together!</p>
    </div>
  );
};

export default ContactUs;
