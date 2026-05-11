import React, { useRef, useEffect } from 'react';
import './ConveyorAnimation.css';

const ConveyorAnimation = () => {
  const beltRef = useRef(null);
  const containerRef = useRef(null);

  const items = [
    { title: 'Build', name: 'SyncBoot', desc: 'MSA 기반 신속한 개발' },
    { title: 'Manage', name: 'SyncCMS', desc: '콘텐츠 중앙 관리' },
    { title: 'Test', name: 'SyncEta', desc: 'AI 기반 자동화 테스트' },
    { title: 'Connect', name: 'SyncAPIM', desc: 'API 통합 및 관리' },
    // Add more items to make the belt feel continuous
    { title: 'Build', name: 'SyncBoot', desc: 'MSA 기반 신속한 개발' },
    { title: 'Manage', name: 'SyncCMS', desc: '콘텐츠 중앙 관리' },
    { title: 'Test', name: 'SyncEta', desc: 'AI 기반 자동화 테스트' },
    { title: 'Connect', name: 'SyncAPIM', desc: 'API 통합 및 관리' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && beltRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress within the component
        let progress = 0;
        if (top < windowHeight && top > -height) {
          progress = (windowHeight - top) / (windowHeight + height);
        }
        
        const beltWidth = beltRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const moveDistance = (beltWidth / 2) - (containerWidth / 2); // Move half the belt width

        beltRef.current.style.transform = `translateX(-${moveDistance * progress * 2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="conveyor-container" ref={containerRef}>
      <div className="conveyor-belt" ref={beltRef}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="conveyor-item">
              <h3>{item.title}</h3>
              <p><strong>{item.name}</strong></p>
              <p>{item.desc}</p>
            </div>
            {index < items.length / 2 -1 || (index >= items.length/2 && index < items.length -1) ? <div className="conveyor-arrow">→</div> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ConveyorAnimation;