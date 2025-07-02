import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    // Optionally, reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-12 mt-16 text-slate-700">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">Contact Us</h1>
          <p className="text-xl text-sage-600">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-600 p-3 rounded-xl text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-sage-600">
                  123 Tech Valley, Oxford City, State 12345
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary-600 p-3 rounded-xl text-white">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-sage-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary-600 p-3 rounded-xl text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-sage-600">info@oxfordcollege.edu</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur p-8 rounded-2xl shadow-md border border-primary-100">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 mt-12 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Oxford College. All rights reserved.
      </footer>
    </>
  );
};

export default Contact;
