import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './InteractionNetwork.css';

const InteractionNetwork = () => {
  const { t } = useTranslation();

  const nodes = [
    { x: 30, y: 30 }, { x: 70, y: 20 }, { x: 120, y: 30 },
    { x: 20, y: 80 }, { x: 75, y: 70 }, { x: 130, y: 80 },
    { x: 40, y: 130 }, { x: 90, y: 120 }, { x: 140, y: 130 }
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5], [3, 6], [4, 7], [5, 8],
    [6, 7], [7, 8], [0, 4], [4, 8]
  ];

  return (
    <div className="inw-container">
      <svg className="inw-svg" viewBox="0 0 170 160">
        {/* Lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="#334155"
            strokeWidth="1"
            initial={{ pathLength: 0, stroke: "#334155" }}
            whileHover={{
              pathLength: 1,
              stroke: "#00d1b2",
              transition: { duration: 0.5, delay: i * 0.05 }
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x} cy={node.y}
            r="3"
            fill="#475569"
            whileHover={{
              fill: "#00d1b2",
              r: 4,
              boxShadow: "0 0 10px #00d1b2"
            }}
          />
        ))}
      </svg>

      <motion.div 
        className="inw-stamp"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{
          scale: 1,
          opacity: 1,
          rotate: -15,
          transition: { type: "spring", stiffness: 200, delay: 0.8 }
        }}
      >
        <div className="inw-stamp-inner">
          <span className="inw-stamp-text">100%</span>
          <span className="inw-stamp-sub">PASSED</span>
        </div>
      </motion.div>

      <div className="inw-footer">
        <span className="inw-status">{t('usecases.inw.process.verifying') || 'Verifying...'}</span>
      </div>
    </div>
  );
};

export default InteractionNetwork;
