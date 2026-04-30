import React from 'react';
import './SyncCmsAnimation.css';

const SyncCmsAnimation = () => {
  const fragments = [
    { id: 1, ix: '-100px', iy: '-50px', fx: '-40px', fy: '-30px', delay: '0.1s' },
    { id: 2, ix: '120px', iy: '-80px', fx: '30px', fy: '-40px', delay: '0.3s' },
    { id: 3, ix: '-150px', iy: '100px', fx: '-50px', fy: '20px', delay: '0.5s' },
    { id: 4, ix: '100px', iy: '120px', fx: '40px', fy: '30px', delay: '0.7s' },
    { id: 5, ix: '0px', iy: '-150px', fx: '0px', fy: '-50px', delay: '0.9s' },
  ];

  return (
    <div className="synccms-animation-container">
      {fragments.map(f => (
        <div 
          key={f.id} 
          className={`page-fragment fragment-${f.id}`}
          style={{
            '--initial-x': f.ix,
            '--initial-y': f.iy,
            '--final-x': f.fx,
            '--final-y': f.fy,
            '--delay': f.delay,
            '--initial-rotate': `${Math.random() * 90 - 45}deg`
          }}
        ></div>
      ))}
      <div className="website-frame">
        <div className="website-header"></div>
        <div className="website-content">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line short"></div>
        </div>
      </div>
    </div>
  );
};

export default SyncCmsAnimation;