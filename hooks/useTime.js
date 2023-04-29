import { useState, useEffect } from 'react';

const useTime = () => {
  const [time, setTime] = useState('00:00');
  const [amPM, setAmPM] = useState('AM');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const minutes = date.getHours();
      const seconds = date.getMinutes();
      setTime(`${minutes}${seconds}`);
      setAmPM(date.getHours() > 12 ? 'PM' : 'AM');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { time, amPM };
}

export { useTime };
