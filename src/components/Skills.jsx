import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-display font-semibold text-cyan mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-cyan/50" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="card card-hover px-4 py-3 flex items-center gap-2 cursor-default">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm text-gray-300 font-body">{skill.name}</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
