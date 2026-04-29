import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      key="contact" 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }}
      className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-24"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white uppercase tracking-widest">Contato</h2>
        <div className="flex flex-col gap-10 text-4xl md:text-6xl font-light">
          <a href="mailto:caiodealexandre@gmail.com" className="text-white hover:text-gray-500 hover:translate-x-6 transition-all duration-500 w-fit">
            Email &#8599;
          </a>
          <a href="https://github.com/C-Bucher" target="_blank" rel="noreferrer" className="text-white hover:text-gray-500 hover:translate-x-6 transition-all duration-500 w-fit">
            GitHub / C-Bucher &#8599;
          </a>
          <a href="https://www.linkedin.com/in/caio-alexandre-0b4970351/" className="text-white hover:text-gray-500 hover:translate-x-6 transition-all duration-500 w-fit">
            LinkedIn &#8599;
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
