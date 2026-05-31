import { motion } from 'framer-motion';
import { freelanceProjects } from '../data/freelance';

export default function Freelance() {
  return (
    <section id="freelance" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Freelance <span className="text-amber-500">Work</span>
          </h2>
          <p className="section-subtitle">Real clients. Real results.</p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full rounded-xl border border-amber-500/10 bg-[#111118] p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(255,179,71,0.08)] hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-0.5 bg-amber-500/50" />
                  <span className="text-amber-500 text-xs font-body uppercase tracking-wider">Freelance</span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-amber-500/70 text-xs font-body mb-3">
                  Client: {project.client}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-body bg-amber-500/5 border border-amber-500/10 text-amber-400/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-xs font-body leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-amber-500/10">
                  <p className="text-amber-400/60 text-xs font-body italic">
                    Result: {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
