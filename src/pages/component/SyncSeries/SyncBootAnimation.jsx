import React, { useMemo } from 'react';
import './SyncBootAnimation.css';

const CUBE_COUNT = 50;

const SyncBootAnimation = () => {
  const cubes = useMemo(() => {
    return Array.from({ length: CUBE_COUNT }).map((_, i) => ({
      '--i': i,
      '--x': (Math.random() - 0.5) * 2, // -1 to 1
      '--y': (Math.random() - 0.5) * 2, // -1 to 1
      '--z': (Math.random() - 0.5) * 2, // -1 to 1
    }));
  }, []);

  return (
    <div className="syncboot-animation-container">
      <div className="monolith-container">
        {cubes.map((style, index) => (
          <div key={index} className="micro-cube" style={style} />
        ))}
      </div>
    </div>
  );
};

export default SyncBootAnimation;