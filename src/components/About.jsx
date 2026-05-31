import { motion } from 'framer-motion';

const stats = [
  { label: 'Internships', value: '3+' },
  { label: 'Projects', value: '4+' },
  { label: 'Freelance Clients', value: '2+' },
  { label: 'SaaS Startup', value: '1' },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-cyan/20 to-lime-500/10 border border-cyan/20 flex items-center justify-center overflow-hidden">
                <span className="text-6xl md:text-7xl font-display font-bold gradient-text opacity-80">
                  KK
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan/30 to-lime-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed mb-6">
              I'm an ECE graduate from{' '}
              <span className="text-cyan">Nehru Institute of Engineering and Technology, Coimbatore (2022–2026)</span>,
              who found a passion for building things on the web. I specialize in React.js and modern frontend
              development, and I've built real-world SaaS products, freelance client websites, and event platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="card card-hover p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-body uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
