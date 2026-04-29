import React from 'react';
import { motion } from 'framer-motion';

const TransitionLoader = ({ transitioningTo }) => {
  const variants = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "-100%", transition: { duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-black z-[60] flex items-center justify-center border-t-2 border-gray-800"
    >
      <h2 className="text-7xl md:text-9xl font-bold uppercase text-white tracking-tighter">
        {transitioningTo}
      </h2>
    </motion.div>
  );
};

export default TransitionLoader;