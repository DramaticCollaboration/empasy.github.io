import React from 'react';
import './SyncApimAnimation.css';

const SyncApimAnimation = () => {
  const lines = Array.from({ length: 8 });

  return (
    <div className="syncapim-animation-container">
      <div className="traffic-lines">
        {lines.map((_, i) => (
          <div 
            key={i} 
            className="traffic-line" 
            style={{
              '--delay': `${i * 0.4}s`,
              '--left': `${10 + i * 11}%`,
              '--rotation': `${(i - 3.5) * 10}deg`
            }}
          ></div>
        ))}
      </div>
      <div className="gateway-shield-container">
        <div className="gateway-shield">
          <div className="shield-icon">🛡️</div>
          <div className="shield-ring"></div>
        </div>
      </div>
    </div>
  );
};

export default SyncApimAnimation;