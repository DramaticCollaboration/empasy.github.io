import React from 'react';
import './CubeAnimation.css';

const CubeAnimation = ({ isShattered }) => {
  return (
    <div className="cube-animation-container">
      <div className={`cube ${isShattered ? 'shatter' : ''}`}>
        <div className="face front">Monolith</div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>

        {/* Microservice cubes */}
        <div className="microservice-cube"></div>
        <div className="microservice-cube"></div>
        <div className="microservice-cube"></div>
        <div className="microservice-cube"></div>
      </div>
    </div>
  );
};

export default CubeAnimation;