import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, MousePointer2, BarChart3, 
  Type, Image as ImageIcon, CheckSquare, 
  Settings, Play, Smartphone, Monitor
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UIBuilder = () => {
  const { t } = useTranslation();
  const [canvasItems, setCanvasItems] = useState([]);
  const [isDemoRunning, setIsDemoRunning] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState('idle');

  const components = [
    { id: 'chart', icon: BarChart3, label: 'Sales Chart' },
    { id: 'button', icon: Play, label: 'Submit Button' },
    { id: 'input', icon: Type, label: 'Text Input' },
    { id: 'checkbox', icon: CheckSquare, label: 'Agreement' },
  ];

  useEffect(() => {
    if (!isDemoRunning) return;

    const runDemo = async () => {
      // Step 1: Move to chart component
      setStatus('moving');
      await new Promise(r => setTimeout(r, 1000));
      setCursorPos({ x: 50, y: 100 });
      
      // Step 2: Drag chart to canvas
      await new Promise(r => setTimeout(r, 1000));
      setStatus('dragging');
      setCursorPos({ x: 400, y: 150 });
      
      // Step 3: Drop
      await new Promise(r => setTimeout(r, 800));
      setCanvasItems([{ id: Date.now(), type: 'chart', x: 200, y: 50 }]);
      setStatus('idle');
      
      // Step 4: Move to button component
      await new Promise(r => setTimeout(r, 1000));
      setCursorPos({ x: 50, y: 150 });
      
      // Step 5: Drag button to canvas
      await new Promise(r => setTimeout(r, 500));
      setStatus('dragging');
      setCursorPos({ x: 400, y: 250 });
      
      // Step 6: Drop
      await new Promise(r => setTimeout(r, 800));
      setCanvasItems(prev => [...prev, { id: Date.now(), type: 'button', x: 250, y: 200 }]);
      setStatus('success');
      
      // Reset after success
      await new Promise(r => setTimeout(r, 3000));
      setCanvasItems([]);
      setCursorPos({ x: 0, y: 0 });
      setStatus('idle');
      runDemo();
    };

    runDemo();
  }, [isDemoRunning]);

  return (
    <div className="ui-builder-sim" style={{ 
      display: 'flex',
      width: '100%',
      height: '450px',
      background: '#F8FAFC',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #E2E8F0',
      position: 'relative'
    }}>
      {/* Sidebar - Palette */}
      <div style={{ width: '200px', background: '#F1F5F9', padding: '20px', borderRight: '1px solid #E2E8F0' }}>
        <h5 style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '20px' }}>{t('syncboot.uibuilder.palette', 'UI Components')}</h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {components.map((comp) => (
            <div 
              key={comp.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '10px',
                background: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '0.75rem',
                color: '#0F172A',
                border: '1px solid #E2E8F0'
              }}
            >
              <comp.icon size={16} color="#00D1B2" />
              {comp.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Canvas */}
      <div style={{ flex: 1, position: 'relative', background: '#f8fafc', padding: '20px' }}>
        <div style={{ 
          width: '100%', 
          height: '100%', 
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', 
          backgroundSize: '20px 20px',
          position: 'relative',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          {canvasItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ 
                position: 'absolute', 
                left: item.x, 
                top: item.y,
                background: '#fff',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                border: '1px solid #e2e8f0',
                width: item.type === 'chart' ? '200px' : 'auto'
              }}
            >
              {item.type === 'chart' ? (
                <div>
                  <div style={{ fontSize: '0.6rem', color: '#64748B', marginBottom: '5px' }}>Sales Revenue</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '40px' }}>
                    {[40, 70, 45, 90, 65].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }} 
                        animate={{ height: `${h}%` }} 
                        style={{ flex: 1, background: '#00D1B2', borderRadius: '2px' }} 
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ background: '#00D1B2', color: '#fff', padding: '8px 16px', borderRadius: '4px', fontSize: '0.7rem' }}>
                  Submit Form
                </div>
              )}
            </motion.div>
          ))}

          {/* Virtual Cursor */}
          <motion.div
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }}
          >
            <MousePointer2 size={24} color="#000" fill="#fff" />
            {status === 'dragging' && (
              <div style={{ 
                marginLeft: '15px', marginTop: '15px', 
                padding: '5px 10px', background: '#fff', 
                borderRadius: '4px', fontSize: '0.6rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                border: '1px solid #00D1B2'
              }}>
                Moving Component...
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Property Panel */}
      <div style={{ width: '200px', background: '#F1F5F9', padding: '20px', borderLeft: '1px solid #E2E8F0' }}>
        <h5 style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '20px' }}>{t('syncboot.uibuilder.properties', 'Properties')}</h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Background Color</label>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '20px', height: '20px', background: '#00D1B2', borderRadius: '2px', border: '2px solid #fff' }} />
              <div style={{ width: '20px', height: '20px', background: '#38BDF8', borderRadius: '2px' }} />
              <div style={{ width: '20px', height: '20px', background: '#F43F5E', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Data Source</label>
            <div style={{ padding: '8px', background: '#F1F5F9', borderRadius: '4px', color: '#475569', border: '1px solid #E2E8F0' }}>api/v1/sales</div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'absolute', top: '50%', left: '50%', 
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 209, 178, 0.9)', 
              color: '#0F172A',
              padding: '20px 40px',
              borderRadius: '50px',
              fontWeight: 'bold',
              boxShadow: '0 10px 25px rgba(0, 209, 178, 0.5)',
              zIndex: 200
            }}
          >
            {t('syncboot.uibuilder.ready', 'Ready to Deploy!')}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UIBuilder;
