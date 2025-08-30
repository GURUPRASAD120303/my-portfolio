import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // ✅ Send to YOU (Contact Us template)
      await emailjs.send(
        'service_hxb8hxt',      // 🔹 replace with your Service ID
        'template_agfyi4i',    // 🔹 Contact Us template
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        'qPLMy3QZ7Fsz_nwnj'        // 🔹 replace with your Public Key
      );

      // ✅ Send Auto-Reply (to the user)
      await emailjs.send(
        'service_hxb8hxt',      // same Service ID
        'template_6pmomzr',    // 🔹 Auto-Reply template
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'qPLMy3QZ7Fsz_nwnj'
      );

      alert('✅ Message sent successfully! Auto-reply delivered.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Get In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Touch
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Connect!
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm always interested in discussing new opportunities,
                innovative projects, or potential collaborations in AI and Data
                Science. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:guruprasad12032003@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">
                    guruprasad12032003@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918248981237"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 82489 81237</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/guru-prasad-r-2a504731a/"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">
                    linkedin.com/in/guru-prasad-r-2a504731a
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg ${
                  isSending
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                }`}
              >
                <Send className="w-5 h-5" />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
