import { useState, useEffect } from 'react';

const useAnimate = ({ max, frequency } = {max: 360, frequency: 1000}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(rotation => (rotation + 1) % max);
    }, frequency);
    return () => clearInterval(interval);
  }, [max]);

  return val;
}

export { useAnimate };
