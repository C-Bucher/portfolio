import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

// Importações dos Componentes e Hooks
import { useClock } from './hooks/useClock';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import TransitionLoader from './components/TransitionLoader';

// Importações das Páginas
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitioningTo, setTransitioningTo] = useState('');
  const time = useClock();

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setIsTransitioning(true);
    setTransitioningTo(newTab);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsTransitioning(false);
    }, 1800);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const fluxoLogStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Prisma', color: '#ffffff' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Docker', color: '#2496ED' }
  ];

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="bg-black text-white font-sans min-h-screen relative overflow-x-hidden no-scrollbar selection:bg-white selection:text-black">
        
        {/* NAVEGAÇÃO FIXA */}
        <nav className="fixed top-0 right-0 p-8 z-50 flex gap-6 md:gap-10 text-sm md:text-base font-medium mix-blend-difference">
          {['home', 'about', 'contact'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => handleTabChange(tab)} 
              className={`hover:text-white capitalize font-medium transition-colors ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* LOADER DE TRANSIÇÃO */}
        <AnimatePresence mode="wait">
          {isTransitioning && <TransitionLoader transitioningTo={transitioningTo} />}
        </AnimatePresence>

        {/* ÁREA DE CONTEÚDO (AS ABAS) */}
        <AnimatePresence mode="wait">
          
          {/* ----- ABA: HOME ----- */}
          {activeTab === 'home' && !isTransitioning && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pb-24">
              
              <div className="min-h-screen flex flex-col justify-between relative pt-32 pb-32">
                
                {/* BARRA DE STATUS */}
                <div className="px-8 md:px-24 flex justify-between items-start w-full opacity-70">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
                    Brasília, BR — {time}
                  </div>
                  
                  {/* Status na Direita + Freelancer */}
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      Disponível
                    </div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white-400 font-light">
                      Freelancer
                    </div>
                  </div>
                </div>

                <div className="px-8 flex justify-center items-center text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl text-white/90"
                  >
                    Segurança da Informação com foco em <br className="hidden md:block" />
                    <span className="font-semibold italic">arquiteturas resilientes</span> e <span className="font-semibold italic">defesa digital</span>.
                  </motion.h1>
                </div>

                <Marquee text="Caio Alexandre" />
              </div>

              <div className="px-8 md:px-24 border-t border-gray-900 pt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-2xl md:text-4xl font-bold mb-20 text-white uppercase tracking-widest"
                >
                  Projetos
                </motion.h2>

                <ProjectCard 
                  title="FluxoLog"
                  stack={fluxoLogStack}
                  description="Sistema web full-stack para gestão financeira e controle de estoque com foco na arquitetura de microserviços. Desenvolvido com frontend em React e backend robusto com Node.js e Prisma. A conteinerização (Docker) isolou o ambiente de execução reduzindo a superfície de ataque, enquanto o PostgreSQL garante a integridade dos dados."
                  githubLink="https://github.com/C-Bucher/FluxoLog"
                />
              </div>
            </motion.div>
          )}

          {/* ----- ABA: ABOUT ----- */}
          {activeTab === 'about' && !isTransitioning && <About />}

          {/* ----- ABA: CONTACT ----- */}
          {activeTab === 'contact' && !isTransitioning && <Contact />}

        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;