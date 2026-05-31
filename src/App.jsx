import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleHoverStart = () => cursor.classList.add('hovering');
    const handleHoverEnd = () => cursor.classList.remove('hovering');

    document.addEventListener('mousemove', handleMouseMove);

    document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <Skills />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <Experience />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <Freelance />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
