import React from 'react';
import './SyncCoreAnimation.css';

const SyncCoreAnimation = () => {
  const solutions = [
    { name: 'SyncBoot', color: '#89f7fe', className: 'sphere-1' },
    { name: 'SyncCMS', color: '#66a6ff', className: 'sphere-2' },
    { name: 'SyncEta', color: '#ffc3a0', className: 'sphere-3' },
    { name: 'SyncAPIM', color: '#d4fc79', className: 'sphere-4' },
    { name: 'SyncVerse', color: '#96e6a1', className: 'sphere-5' },
  ];

  return (
    <div className="sync-core-container">
      <div className="orbit">
        <div className="sync-core">
          Sync Core
        </div>
        {solutions.map((solution) => (
          <div key={solution.name} className={`sphere ${solution.className}`} style={{ backgroundColor: solution.color }}>
            {solution.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyncCoreAnimation;