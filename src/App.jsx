import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

function App() {
  // --- ESTADOS ---
  const [activeTab, setActiveTab] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitioningTo, setTransitioningTo] = useState('');
  
  // --- LÓGICA DO RELÓGIO DINÂMICO (BRASÍLIA) ---
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat('pt-BR', options).format(now);
      setTime(`${timeString} BRT`);
    };

    updateClock();
    const timer = setInterval(updateClock, 60000); 
    return () => clearInterval(timer);
  }, []);

  // --- LÓGICA DE NAVEGAÇÃO ---
  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setIsTransitioning(true);
    setTransitioningTo(newTab);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsTransitioning(false);
    }, 1800);
  };

  // --- VARIANTES DE ANIMAÇÃO ---
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const transitionVariants = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "-100%", transition: { duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] } }
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

        {/* === NAVEGAÇÃO FIXA === */}
        <nav className="fixed top-0 right-0 p-8 z-50 flex gap-6 md:gap-10 text-sm md:text-base font-medium mix-blend-difference">
          {['home', 'about', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`hover:text-white transition-colors capitalize font-medium ${activeTab === tab ? 'text-white' : 'text-gray-300'}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* === TELA DE TRANSIÇÃO (LOADER) === */}
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div
              key="transition"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-black z-[60] flex items-center justify-center border-t-2 border-gray-800"
            >
              <motion.h2 className="text-7xl md:text-9xl font-bold uppercase text-white tracking-tighter">
                {transitioningTo}
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* === CONTEÚDO PRINCIPAL === */}
        <AnimatePresence mode="wait">

          {/* ----- ABA: HOME ----- */}
          {activeTab === 'home' && !isTransitioning && (
            <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pb-24">

              <style>{`
                @keyframes marquee {
                  0% { transform: translate3d(0, 0, 0); }
                  100% { transform: translate3d(-50%, 0, 0); }
                }
                .marquee-container {
                  display: flex;
                  width: max-content;
                  animation: marquee 30s linear infinite;
                }
              `}</style>

              <div className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-32 pb-32">
                
                {/* 1. Barra de Status */}
                <div className="px-8 md:px-24 flex justify-between items-start w-full opacity-60">
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
                    Brasília, BR — {time}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Disponível para novos projetos
                  </div>
                </div>

                {/* 2. Frase Central */}
                <div className="px-8 flex justify-center items-center text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl text-white/90"
                  >
                    Engenharia de software com foco em <br className="hidden md:block" />
                    <span className="font-semibold italic">resiliência</span> e <span className="font-semibold italic">defesa digital</span>.
                  </motion.h1>
                </div>

                {/* 3. Letreiro Infinito */}
                <div className="marquee-container">
                  <div className="flex items-center whitespace-nowrap">
                    {[...Array(5)].map((_, i) => (
                      <span key={`b1-${i}`} className="text-[100px] md:text-[150px] lg:text-[200px] font-extrabold text-white tracking-normal px-8 leading-none">
                        Caio Alexandre <span className="text-gray-600 font-light mx-4">—</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    {[...Array(5)].map((_, i) => (
                      <span key={`b2-${i}`} className="text-[100px] md:text-[150px] lg:text-[200px] font-extrabold text-white tracking-normal px-8 leading-none">
                        Caio Alexandre <span className="text-gray-600 font-light mx-4">—</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seção: Projetos */}
              <div className="px-8 md:px-24 border-t border-gray-900 pt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-2xl md:text-4xl font-bold mb-20 text-white uppercase tracking-widest"
                >
                  Projetos
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group border-b border-gray-900 pb-12"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h3 className="text-4xl md:text-6xl font-semibold group-hover:translate-x-6 transition-transform duration-500 ease-out leading-tight text-white uppercase">
                      FluxoLog
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
                      {fluxoLogStack.map((tech) => (
                        <span 
                          key={tech.name} 
                          style={{ color: tech.color, borderColor: tech.color }}
                          className="px-4 py-1 border rounded-full text-xs font-mono uppercase tracking-wider bg-transparent"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 max-w-3xl">
                    <p className="text-lg md:text-xl text-gray-100 group-hover:text-white transition-colors duration-500 leading-relaxed font-light">
                      Sistema web full-stack para gestão financeira e controle de estoque com foco na arquitetura de microserviços. 
                      Desenvolvido com frontend em React e backend robusto com Node.js e Prisma. 
                      A conteinerização (Docker) isolou o ambiente de execução reduzindo a superfície de ataque, enquanto o PostgreSQL garante a integridade dos dados.
                    </p>
                    
                    <a 
                      href="https://github.com/C-Bucher/FluxoLog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-8 inline-block text-gray-100 hover:text-white transition-all duration-300 underline decoration-gray-700 hover:decoration-white underline-offset-8 font-medium tracking-wide uppercase text-sm"
                    >
                      Ver no GitHub &#8599;
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ----- ABA: ABOUT ----- */}
          {activeTab === 'about' && !isTransitioning && (
            <motion.div 
              key="about" 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit" 
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
          )}

          {/* ----- ABA: CONTACT ----- */}
          {activeTab === 'contact' && !isTransitioning && (
            <motion.div 
              key="contact" 
              variants={pageVariants} 
              initial="initial" 
              animate="animate" 
              exit="exit" 
              className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-24"
            >
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white uppercase tracking-widest">Contatos</h2>
                <div className="flex flex-col gap-10 text-4xl md:text-6xl font-light">
                  <a href="mailto:Caiodealexandre@gmail.com" className="text-white hover:text-gray-500 hover:translate-x-6 transition-all duration-500 w-fit">
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
          )}

        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;