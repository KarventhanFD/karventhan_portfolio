import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`card card-hover overflow-hidden group ${
                project.featured ? 'md:col-span-2 border-cyan/20' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${
                  project.featured
                    ? 'md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-cyan/10 to-lime-500/5'
                    : 'h-40 bg-gradient-to-br from-cyan/10 to-lime-500/5'
                } flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-4xl opacity-30">
                    {project.featured ? '⚡' : '🚀'}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-gray-300 text-xs font-body leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className={`p-6 ${project.featured ? 'md:w-3/5' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {project.featured && (
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-body bg-gradient-to-r from-cyan/20 to-lime-500/20 text-cyan border border-cyan/20 mb-2">
                          ⭐ Featured
                        </span>
                      )}
                      <h3 className="text-lg font-display font-bold text-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-body bg-dark-50 border border-gray-700/50 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs font-body leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body text-gray-400 hover:text-cyan transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body text-gray-400 hover:text-cyan transition-colors"
                    >
                      <FiExternalLink /> Live Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
