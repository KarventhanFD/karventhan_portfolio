import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const roles = [
  'Frontend Developer',
  'React.js Engineer',
  'UI/UX Builder',
  'Freelance Web Developer',
];

const techIcons = [
  { icon: '⚛️', label: 'React', x: '10%', y: '20%', delay: 0 },
  { icon: '🟨', label: 'JS', x: '85%', y: '15%', delay: 0.5 },
  { icon: '🌊', label: 'Tailwind', x: '90%', y: '70%', delay: 1 },
  { icon: '🟢', label: 'Node', x: '5%', y: '75%', delay: 0.8 },
  { icon: '🔥', label: 'Supabase', x: '15%', y: '55%', delay: 1.2 },
  { icon: '⚡', label: 'Vite', x: '80%', y: '45%', delay: 0.3 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {techIcons.map((item) => (
        <motion.div
          key={item.label}
          className="absolute hidden md:block text-3xl opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container text-center relative z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-cyan font-body text-sm md:text-base mb-4 tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 leading-tight"
        >
          Karventhan{' '}
          <span className="gradient-text">K</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8 h-10">
          <span className="text-xl md:text-2xl text-gray-300 font-body">
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-7 bg-cyan ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 font-body"
        >
          I build fast, beautiful, scalable web apps.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="cyber-button-primary text-base px-8 py-4">
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-outline text-base px-8 py-4"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan transition-colors">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <HiArrowDown className="animate-scroll-indicator" size={20} />
        </a>
      </motion.div>
    </section>
  );
}
