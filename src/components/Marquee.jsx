import React from 'react';

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container">
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
      
      <div className="flex items-center whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[100px] md:text-[150px] lg:text-[200px] font-extrabold text-white tracking-normal px-8 leading-none">
            {text} <span className="text-gray-600 font-light mx-4">—</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;