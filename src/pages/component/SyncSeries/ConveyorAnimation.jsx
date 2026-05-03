import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ConveyorAnimation.css';

const ConveyorAnimation = () => {
  const { t } = useTranslation();
  const beltRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  const baseItems = [
    { 
      title: 'Build', 
      name: t('syncseries.solutions.syncboot.title').split(' ')[0], 
      desc: t('syncseries.solutions.syncboot.desc') 
    },
    { 
      title: 'Manage', 
      name: t('syncseries.solutions.synccms.title').split(' ')[0], 
      desc: t('syncseries.solutions.synccms.desc') 
    },
    { 
      title: 'Test', 
      name: t('syncseries.solutions.synceta.title').split(' ')[0], 
      desc: t('syncseries.solutions.synceta.desc') 
    },
    { 
      title: 'Connect', 
      name: t('syncseries.solutions.syncapim.title').split(' ')[0], 
      desc: t('syncseries.solutions.syncapim.desc') 
    },
  ];

  // Mobile uses single set, Desktop uses double for continuity
  const items = isMobile ? baseItems : [...baseItems, ...baseItems];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (isMobile) return; // Skip animation on mobile
      
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

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <div className={`conveyor-container ${isMobile ? 'mobile' : ''}`} ref={containerRef}>
      <div className="conveyor-belt" ref={beltRef}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="conveyor-item">
              <div className="item-category">{item.title}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            {index < items.length - 1 && (
              <div className="conveyor-arrow">
                {isMobile ? '↓' : '→'}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ConveyorAnimation;