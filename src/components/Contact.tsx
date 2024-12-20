import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#2E8B57]">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#FF6347]" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@artatthebeach.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="text-[#FF6347]" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+265 1 580 444</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-[#FF6347]" />
                <div>
                  <h4 className="font-semibold">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-600 hover:text-[#1E90FF]">Instagram</a>
                    <a href="#" className="text-gray-600 hover:text-[#1E90FF]">Facebook</a>
                    <a href="#" className="text-gray-600 hover:text-[#1E90FF]">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E90FF] focus:ring focus:ring-[#1E90FF] focus:ring-opacity-50"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6347] text-white py-3 px-6 rounded-full hover:bg-[#FF6347]/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;