import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, FileJson, Search, CheckCircle, Zap, Loader2 } from 'lucide-react';

const LogiDocumentAI = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle, scanning, completed
  const [jsonLines, setJsonLines] = useState([]);

  const mockJson = [
    '"document_type": "Invoice"',
    '"date": "2024-04-30"',
    '"vendor": "Global Logistics Co."',
    '"items": [',
    '  { "name": "Standard Delivery", "price": 450 }',
    ']',
    '"total_amount": 450',
    '"currency": "USD"'
  ];

  const handleStart = () => {
    setStatus('scanning');
    setJsonLines([]);
  };

  useEffect(() => {
    if (status === 'scanning') {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < mockJson.length) {
          setJsonLines(prev => [...prev, mockJson[currentLine]]);
          currentLine++;
        } else {
          setStatus('completed');
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <div style={{ width: '100%', height: '500px', background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', display: 'flex', gap: '20px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
      {/* 1. Raw Document (Left) */}
      <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748B', fontSize: '0.75rem', fontWeight: 800, marginBottom: '20px' }}>
          <FileText size={16} /> RAW DOCUMENT
        </div>
        <div style={{ opacity: 0.5 }}>
          <div style={{ width: '60%', height: '10px', background: '#CBD5E1', marginBottom: '10px' }} />
          <div style={{ width: '100%', height: '8px', background: '#E2E8F0', marginBottom: '5px' }} />
          <div style={{ width: '90%', height: '8px', background: '#E2E8F0', marginBottom: '20px' }} />
          
          <div style={{ border: '1px solid #CBD5E1', padding: '15px', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '10px' }}>INVOICE #4592</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <div style={{ width: '40px', height: '6px', background: '#E2E8F0' }} />
              <div style={{ width: '30px', height: '6px', background: '#CBD5E1' }} />
            </div>
            <div style={{ height: '1px', background: '#E2E8F0', margin: '10px 0' }} />
            <div style={{ width: '100%', height: '20px', background: '#F1F5F9' }} />
          </div>
        </div>

        {/* Scanning Laser Beam */}
        <AnimatePresence>
          {status === 'scanning' && (
            <motion.div
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', left: 0, right: 0, height: '3px', background: '#00D1B2', boxShadow: '0 0 15px #00D1B2', zIndex: 10 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* 2. AI Processing Module (Center) */}
      <div style={{ width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
        <div style={{ width: '2px', height: '100%', background: 'linear-gradient(to bottom, #E2E8F0, #00D1B2, #E2E8F0)' }} />
        <motion.div 
          animate={status === 'scanning' ? { rotate: 360 } : {}}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          onClick={handleStart}
          style={{ 
            width: '60px', height: '60px', background: status === 'scanning' ? '#00D1B2' : '#F1F5F9', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', border: '2px solid #E2E8F0', zIndex: 20
          }}
        >
          {status === 'scanning' ? <Loader2 color="#FFF" /> : <Zap color={status === 'completed' ? '#00D1B2' : '#94A3B8'} />}
        </motion.div>
        <div style={{ width: '2px', height: '100%', background: 'linear-gradient(to bottom, #E2E8F0, #00D1B2, #E2E8F0)' }} />
      </div>

      {/* 3. Structured Data (Right) */}
      <div style={{ flex: 1.2, background: '#0F172A', borderRadius: '12px', padding: '20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94A3B8', fontSize: '0.75rem', fontWeight: 800 }}>
            <FileJson size={16} /> STRUCTURED JSON
          </div>
          {status === 'completed' && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ background: '#00D1B2', color: '#0F172A', fontSize: '0.6rem', fontWeight: 900, padding: '2px 8px', borderRadius: '4px' }}>
              ACCURACY: 98.4%
            </motion.div>
          )}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#00D1B2' }}>
          {'{'}
          <div style={{ marginLeft: '15px' }}>
            {jsonLines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                {line}
              </motion.div>
            ))}
            {status === 'scanning' && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity }}>_</motion.span>}
          </div>
          {'}'}
        </div>
      </div>

      {/* Button for Idle state */}
      {status === 'idle' && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            style={{ 
              background: '#0F172A', color: '#FFF', border: 'none', 
              padding: '12px 30px', borderRadius: '50px', fontWeight: 800, 
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'
            }}
          >
            <Search size={18} /> START AI ANALYSIS
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default LogiDocumentAI;
