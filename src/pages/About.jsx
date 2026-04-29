import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      key="about" 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }}
      className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-24"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white uppercase tracking-widest">Sobre Mim</h2>
        <div className="space-y-8 text-xl md:text-3xl text-gray-100 leading-relaxed font-light">
          <p>
            Sou um desenvolvedor e estudante de tecnologia no <span className="text-white font-medium">UniCEUB</span>, focado em construir sistemas resilientes e entender como eles funcionam por baixo dos panos.
          </p>
          <p>
            Aos 19 anos, construí uma base sólida em desenvolvimento full-stack utilizando tecnologias como <span className="text-white">Java, C# e o ecossistema JavaScript (Node.js e React)</span>. Hoje, direciono essa paixão técnica para a área de <span className="text-white font-semibold">Segurança Cibernética</span>.
          </p>
          <p>
            Acredito que a verdadeira segurança não nasce apenas de ferramentas, mas de um design de software ético e bem estruturado. Meu objetivo é ajudar organizações a protegerem suas informações através da análise crítica e de arquiteturas resilientes.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;