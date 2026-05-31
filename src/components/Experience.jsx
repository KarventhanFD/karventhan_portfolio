import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-cyan/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 top-1.5 w-8 h-8 rounded-full bg-dark border-2 border-cyan flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
              </div>

              <div className="card card-hover p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-body mb-3">
                  {exp.period}
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-cyan/70 text-sm font-body mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm font-body leading-relaxed flex items-start gap-2">
                      <span className="text-cyan mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
