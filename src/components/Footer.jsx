import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUp, FiTwitter } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm font-body">
              Karventhan K &copy; {new Date().getFullYear()}
            </p>
            <p className="text-gray-600 text-xs font-body mt-1">
              Built with React.js + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/KarventhanFD', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/karventhan07', label: 'LinkedIn' },
              { icon: <HiMail size={18} />, href: 'mailto:karventhankumar@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-50 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 backdrop-blur-xl flex items-center justify-center text-cyan hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
