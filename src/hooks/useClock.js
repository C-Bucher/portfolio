import { useState, useEffect } from 'react';

export const useClock = () => {
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

  return time;
};