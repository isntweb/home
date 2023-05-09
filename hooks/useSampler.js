import { useRef, useEffect, useState } from 'react';

import { Sampler } from 'tone';

const loadSampler = () => new Promise((resolve, reject) => {
  try {
    const sampler = new Sampler(
      {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      {
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
        onLoad: () => {
          setLoading(false);
          resolve(sampler);
        }
      }
    ).toDestination();
  } catch (error) {
    reject(error);
  }
});

const playNote = (sampler) => sampler.triggerAttackRelease(note, 4);

const useSampler = () => {
  const sampler = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSampler = async () => {
    if (!sampler.current) {
      setLoading(true);
      setError(null);

      return loadSampler().then(sampler => {
        sampler.current = sampler;
        setLoading(false);
      }).catch(error => {
        setError(error);
        setLoading(false);
      }).finally(() => {
        setLoading(false);
        return sampler.current;
      });
    }
  }

  useEffect(() => {
    getSampler();
  }, []);

  const play = (note) => {
    console.log('playing note');
    getSampler().then(playNote);
  }

  return {
    play,
    loading,
    error,
  };
}

export default useSampler;
