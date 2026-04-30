import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CircuitBreaker = () => {
  const { t } = useTranslation();
  const [nodes, setNodes] = useState([
    { id: 'User', status: 'normal', errorRate: 2 },
    { id: 'Auth', status: 'normal', errorRate: 5 },
    { id: 'Order', status: 'normal', errorRate: 8 },
    { id: 'Payment', status: 'normal', errorRate: 4 },
    { id: 'Inventory', status: 'normal', errorRate: 3 },
    { id: 'Product', status: 'normal', errorRate: 6 },
    { id: 'Log', status: 'normal', errorRate: 1 },
    { id: 'Search', status: 'normal', errorRate: 7 },
    { id: 'Gateway', status: 'normal', errorRate: 2 },
  ]);

  const [stage, setStage] = useState(0); // 0: Stable, 1: Incident, 2: Open, 3: Half-Open, 4: Recovered

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newNodes = [...nodes];
    if (stage === 0) {
      newNodes.forEach(n => { n.status = 'normal'; n.errorRate = Math.floor(Math.random() * 10); });
    } else if (stage === 1) {
      const order = newNodes.find(n => n.id === 'Order');
      order.status = 'warning';
      order.errorRate = 45;
    } else if (stage === 2) {
      const order = newNodes.find(n => n.id === 'Order');
      order.status = 'failed';
      order.errorRate = 98;
    } else if (stage === 3) {
      const order = newNodes.find(n => n.id === 'Order');
      order.status = 'recovering';
      order.errorRate = 20;
    } else if (stage === 4) {
      const order = newNodes.find(n => n.id === 'Order');
      order.status = 'normal';
      order.errorRate = 5;
    }
    setNodes(newNodes);
  }, [stage]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'failed': return '#EF4444';
      case 'recovering': return '#6366F1';
      default: return '#64748B';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'normal': return t('syncboot.cb.status.closed', 'Connected');
      case 'warning': return t('syncboot.cb.status.warning', 'High Error Rate');
      case 'failed': return t('syncboot.cb.status.open', 'Circuit Opened');
      case 'recovering': return t('syncboot.cb.status.half_open', 'Recovering');
      default: return '';
    }
  };

  return (
    <div className="circuit-breaker-sim" style={{ width: '100%', maxWidth: '800px', padding: '20px' }}>
      <div className="sim-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ color: '#fff', margin: 0 }}>{t('syncboot.cb.title', 'Circuit Breaker Simulation')}</h4>
        <div style={{ padding: '4px 12px', borderRadius: '20px', background: 'rgba(255,255,255,0.1)', fontSize: '0.8rem', color: '#94A3B8' }}>
          {stage === 0 && "Phase: Stable"}
          {stage === 1 && "Phase: Incident"}
          {stage === 2 && "Phase: Circuit Open"}
          {stage === 3 && "Phase: Half-Open"}
          {stage === 4 && "Phase: Recovered"}
        </div>
      </div>

      <div className="node-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px' 
      }}>
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            layout
            style={{
              background: '#1E293B',
              border: `2px solid ${getStatusColor(node.status)}`,
              borderRadius: '12px',
              padding: '15px',
              position: 'relative',
              overflow: 'hidden'
            }}
            animate={{ 
              scale: node.status === 'failed' ? 0.95 : 1,
              opacity: node.status === 'failed' ? 0.8 : 1,
              boxShadow: node.status === 'failed' ? '0 0 20px rgba(239, 68, 68, 0.4)' : 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '0.9rem' }}>{node.id}</span>
              {node.status === 'normal' && <CheckCircle size={16} color="#10B981" />}
              {node.status === 'warning' && <AlertTriangle size={16} color="#F59E0B" className="animate-pulse" />}
              {node.status === 'failed' && <XCircle size={16} color="#EF4444" />}
              {node.status === 'recovering' && <Activity size={16} color="#6366F1" className="animate-spin-slow" />}
            </div>
            
            <div style={{ height: '4px', background: '#334155', borderRadius: '2px', overflow: 'hidden', marginBottom: '8px' }}>
              <motion.div 
                style={{ height: '100%', background: getStatusColor(node.status) }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(node.errorRate, 100)}%` }}
              />
            </div>
            
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', justifyContent: 'space-between' }}>
              <span>Error Rate: {node.errorRate}%</span>
              <span>{getStatusText(node.status)}</span>
            </div>

            {node.status === 'failed' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ 
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', color: '#EF4444', fontWeight: 'bold', pointerEvents: 'none'
                }}
              >
                ISOLATED
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              marginTop: '20px', 
              padding: '10px', 
              background: 'rgba(239, 68, 68, 0.2)', 
              border: '1px solid #EF4444',
              borderRadius: '8px',
              color: '#EF4444',
              fontSize: '0.8rem',
              textAlign: 'center'
            }}
          >
            <strong>{t('syncboot.cb.alert', 'Error Threshold Exceeded!')}</strong>: Order Service connection has been cut to prevent cascading failure.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircuitBreaker;
