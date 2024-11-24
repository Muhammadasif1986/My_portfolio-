'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic (e.g., sending an API request)
    setSuccessMessage('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-gray-100 py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Let`&apos;`s Connect</h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out via email or phone, or connect with me on social media.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <AiOutlineMail className="text-2xl mr-2 text-blue-600" /> asif.abdulqadir19@outlook.com
              </p>
              <p className="flex items-center text-gray-600">
                <AiOutlinePhone className="text-2xl mr-2 text-green-600" /> +923333765210
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/muhammad-asif-489220134/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin className="text-3xl" />
                </Link>
                <Link
                  href="https://github.com/Muhammadasif1986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-700"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
              >
                Send
              </button>
            </form>
            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
          </div>
        </div>

      </div>
    </main>
  );
}
