import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiPhone, HiCheck } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
  { icon: <HiMail size={20} />, label: 'Email', value: 'karventhankumar@gmail.com', href: 'mailto:karventhankumar@gmail.com' },
  { icon: <HiPhone size={20} />, label: 'Phone', value: '+91 8438126561', href: 'tel:+918438126561' },
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'karventhan07', href: 'https://www.linkedin.com/in/karventhan07' },
  { icon: <FiGithub size={20} />, label: 'GitHub', value: 'KarventhanFD', href: 'https://github.com/KarventhanFD' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const text = `*New Portfolio Message*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/918438126561?text=${text}`, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Open to frontend roles, freelance projects, and collaborations.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan group-hover:bg-cyan/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-body uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm text-gray-200 font-body group-hover:text-cyan transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 space-y-5">
              <div>
                <label className="block text-xs text-gray-500 font-body uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-50 border border-gray-800 text-gray-200 text-sm font-body placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-body uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-50 border border-gray-800 text-gray-200 text-sm font-body placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-body uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-50 border border-gray-800 text-gray-200 text-sm font-body placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="cyber-button-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm font-body mt-12"
        >
          Available for freelance & full-time roles in Coimbatore and remote.
        </motion.p>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 bg-cyan/10 border border-cyan/30 backdrop-blur-xl rounded-lg px-6 py-4 flex items-center gap-3 shadow-[0_0_30px_rgba(0,245,255,0.1)]"
          >
            <HiCheck className="text-cyan" size={20} />
            <span className="text-cyan text-sm font-body">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
