import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, stack, description, githubLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group border-b border-gray-900 pb-12 mb-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="text-4xl md:text-6xl font-semibold group-hover:translate-x-6 transition-transform duration-500 ease-out text-white uppercase">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
          {stack.map((tech) => (
            <span key={tech.name} style={{ color: tech.color, borderColor: tech.color }} className="px-4 py-1 border rounded-full text-xs font-mono uppercase tracking-wider bg-transparent">
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <p className="text-lg md:text-xl text-gray-100 group-hover:text-white transition-colors duration-500 leading-relaxed font-light">
          {description}
        </p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-gray-100 hover:text-white transition-all duration-300 underline decoration-gray-700 hover:decoration-white underline-offset-8 font-medium tracking-wide uppercase text-sm">
          Ver no GitHub &#8599;
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;