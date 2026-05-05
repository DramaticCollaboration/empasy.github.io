import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Database, Zap, Cpu, Share2, 
  User, Smartphone, ExternalLink, Lock, HardDrive
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ArchitectureMap = () => {
  const { t } = useTranslation();
  const [hoveredNode, setHoveredNode] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const layers = [
    {
      id: 'access',
      label: t('syncboot.arch.layers.access', 'User & External Requests'),
      nodes: [
        { id: 'user', icon: User, label: 'User' },
        { id: 'mobile', icon: Smartphone, label: 'Mobile' },
        { id: 'external', icon: ExternalLink, label: 'External API' }
      ]
    },
    {
      id: 'gateway',
      label: t('syncboot.arch.layers.gateway', 'Gateway Layer'),
      nodes: [
        { id: 'gateway-node', icon: ShieldCheck, label: 'SyncGateway', tooltip: t('syncboot.arch.tooltips.gateway', 'Auth & Unified Routing') },
        { id: 'oauth', icon: Lock, label: 'OAuth2 / JWT' }
      ]
    },
    {
      id: 'service',
      label: t('syncboot.arch.layers.service', 'Control & Service Layer'),
      nodes: [
        { id: 'nacos', icon: Share2, label: 'Nacos', tooltip: t('syncboot.arch.tooltips.discovery', 'Real-time Service Discovery'), color: '#00D1B2' },
        { id: 'svc1', icon: Cpu, label: 'User Service', tooltip: t('syncboot.arch.tooltips.service', 'Independent Service Logic') },
        { id: 'svc2', icon: Cpu, label: 'Order Service', tooltip: t('syncboot.arch.tooltips.service', 'Independent Service Logic') },
        { id: 'svc3', icon: Cpu, label: 'Product Service', tooltip: t('syncboot.arch.tooltips.service', 'Independent Service Logic') }
      ]
    },
    {
      id: 'data',
      label: t('syncboot.arch.layers.data', 'Persistence Layer'),
      nodes: [
        { id: 'redis', icon: Zap, label: 'Redis', tooltip: t('syncboot.arch.tooltips.data', 'High-perf Data Storage') },
        { id: 'mysql', icon: Database, label: 'MySQL', tooltip: t('syncboot.arch.tooltips.data', 'High-perf Data Storage') },
        { id: 'mongodb', icon: HardDrive, label: 'MongoDB', tooltip: t('syncboot.arch.tooltips.data', 'High-perf Data Storage') }
      ]
    }
  ];

  const getOpacity = (nodeId) => {
    if (!hoveredNode) return 1;
    if (hoveredNode === nodeId) return 1;
    // Highlight related nodes (simplified for now)
    return 0.3;
  };

  return (
    <div className="architecture-map-wrapper" style={{ 
      background: '#0F172A', 
      padding: '40px 40px 80px 40px',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      width: '100%',
      minHeight: '600px'
    }}>
      <motion.div 
        className="layers-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}
      >
        {layers.map((layer, layerIdx) => (
          <div key={layer.id} className="layer-row" style={{ width: '100%', textAlign: 'center' }}>
            <motion.h4 
              style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}
              variants={itemVariants}
            >
              {layer.label}
            </motion.h4>
            <div className="nodes-row" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              {layer.nodes.map((node) => (
                <motion.div
                  key={node.id}
                  className="node-card"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                  style={{
                    display: 'flex',
                    height: '120px',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '12px',
                    background: node.color ? `${node.color}22` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${hoveredNode === node.id ? '#00D1B2' : 'rgba(255,255,255,0.1)'}`,
                    width: '120px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: getOpacity(node.id),
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <node.icon size={32} color={hoveredNode === node.id ? '#00D1B2' : '#94A3B8'} />
                  <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>{node.label}</span>
                  
                  <AnimatePresence>
                    {hoveredNode === node.id && node.tooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{
                          position: 'absolute',
                          bottom: '-50px',
                          transform: 'translateX(-50%)',
                          background: '#00D1B2',
                          color: '#0F172A',
                          padding: '5px 10px',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          whiteSpace: 'nowrap',
                          zIndex: 10,
                          fontWeight: 'bold'
                        }}
                      >
                        {node.tooltip}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            {/* Connection Lines (Simplified SVG approach) */}
            {layerIdx < layers.length - 1 && (
              <div style={{ height: '60px', width: '100%', position: 'relative', marginTop: '20px' }}>
                <svg width="100%" height="60" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <motion.line 
                    x1="50%" y1="0" x2="50%" y2="100%" 
                    stroke="#334155" strokeWidth="2" strokeDasharray="5,5"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ArchitectureMap;
