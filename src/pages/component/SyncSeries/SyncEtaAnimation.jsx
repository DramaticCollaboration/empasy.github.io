import React from 'react';
import './SyncEtaAnimation.css';

const SyncEtaAnimation = () => {
  const monitors = Array.from({ length: 12 }); // More monitors for parallel effect

  return (
    <div className="synceta-animation-container">
      <div className="excel-icon">XLSX</div>
      <div className="ai-brain-container">
        <div className="ai-brain">AI</div>
        <div className="brain-waves"></div>
      </div>
      <div className="monitors-grid">
        {monitors.map((_, index) => (
          <div
            key={index}
            className="monitor-screen"
            style={{ 
              '--delay': `${1.5 + index * 0.1}s`,
              '--x': `${(index % 4 - 1.5) * 80}px`,
              '--y': `${(Math.floor(index / 4) - 1) * 60}px`
            }}
          >
            <div className="test-progress"></div>
            <div className="check-mark">✓</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyncEtaAnimation;