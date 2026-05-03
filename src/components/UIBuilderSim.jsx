import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Type, Map as MapIcon, Image as ImageIcon, Video,
  MousePointer2, CheckCircle2, Edit3
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UIBuilderSim = ({ isMobile }) => {
  const { t } = useTranslation();
  const [canvasItems, setCanvasItems] = useState([]);
  const [isDemoRunning, setIsDemoRunning] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState('idle');
  const [editingItem, setEditingItem] = useState(null);

  const modules = [
    { id: 'text', icon: Type, label: t('synccms.builder.module.text', 'Text Module') },
    { id: 'map', icon: MapIcon, label: t('synccms.builder.module.map', 'Focus Map') },
    { id: 'image', icon: ImageIcon, label: t('synccms.builder.module.image', 'Image Gallery') },
    { id: 'video', icon: Video, label: t('synccms.builder.module.video', 'Video Player') },
  ];

  useEffect(() => {
    if (!isDemoRunning) return;

    const runDemo = async () => {
      // Step 1: Drag Map Module
      setStatus('moving');
      await new Promise(r => setTimeout(r, 1000));
      setCursorPos({ x: 60, y: 120 });
      
      await new Promise(r => setTimeout(r, 800));
      setStatus('dragging');
      setCursorPos({ x: 350, y: 150 });
      
      await new Promise(r => setTimeout(r, 1000));
      setCanvasItems([{ id: 'item-map', type: 'map', x: 50, y: 30, width: '90%', height: '150px' }]);
      setStatus('success');
      
      await new Promise(r => setTimeout(r, 2000));
      setStatus('idle');

      // Step 2: Drag Text Module
      await new Promise(r => setTimeout(r, 1000));
      setCursorPos({ x: 60, y: 60 });
      
      await new Promise(r => setTimeout(r, 800));
      setStatus('dragging');
      setCursorPos({ x: 350, y: 250 });
      
      await new Promise(r => setTimeout(r, 1000));
      setCanvasItems(prev => [...prev, { id: 'item-text', type: 'text', x: 50, y: 200, text: t('synccms.builder.content.old', 'Coming Soon') }]);
      setStatus('success');

      await new Promise(r => setTimeout(r, 2000));
      setStatus('idle');

      // Step 3: In-place edit simulation
      await new Promise(r => setTimeout(r, 1000));
      setCursorPos({ x: 350, y: 250 });
      
      await new Promise(r => setTimeout(r, 500));
      setEditingItem('item-text');
      
      await new Promise(r => setTimeout(r, 1500));
      setCanvasItems(prev => prev.map(item => 
        item.id === 'item-text' ? { ...item, text: t('synccms.builder.content.new', 'New Product Launch!') } : item
      ));
      
      await new Promise(r => setTimeout(r, 1000));
      setEditingItem(null);

      // Reset
      await new Promise(r => setTimeout(r, 3000));
      setCanvasItems([]);
      setCursorPos({ x: 0, y: 0 });
      setStatus('idle');
      runDemo();
    };

    runDemo();
  }, [isDemoRunning, t]);

  return (
    <div className="ui-builder-sim" style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%', 
      height: isMobile ? '400px' : '500px', 
      background: '#FFFFFF', 
      borderRadius: '20px', 
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      border: '1px solid #E2E8F0',
      position: 'relative',
      color: '#1E293B'
    }}>
      {/* Palette */}
      <div style={{ 
        width: isMobile ? '100%' : '220px', 
        height: isMobile ? 'auto' : '100%',
        background: '#F8FAFC', 
        padding: isMobile ? '16px' : '24px', 
        borderRight: isMobile ? 'none' : '1px solid #E2E8F0',
        borderBottom: isMobile ? '1px solid #E2E8F0' : 'none'
      }}>
        <h5 style={{ 
          fontSize: '0.75rem', 
          color: '#64748B', 
          marginBottom: isMobile ? '12px' : '24px', 
          fontWeight: 600, 
          letterSpacing: '0.05em' 
        }}>
          MODULE PALETTE
        </h5>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'row' : 'column', 
          gap: isMobile ? '8px' : '12px',
          overflowX: isMobile ? 'auto' : 'visible'
        }}>
          {modules.map((mod) => (
            <motion.div 
              key={mod.id} 
              whileHover={{ scale: 1.02, x: isMobile ? 0 : 5 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: isMobile ? '8px 12px' : '12px 16px', 
                background: '#FFFFFF', 
                borderRadius: '12px',
                fontSize: '0.75rem',
                color: '#334155',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <mod.icon size={18} color="#00D1B2" />
              {mod.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div style={{ flex: 1, position: 'relative', background: '#FFFFFF', padding: '30px' }}>
        <div style={{ 
          width: '100%', 
          height: '100%', 
          border: '2px dashed #CBD5E1',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #FFFFFF, #F1F5F9)'
        }}>
          {/* Drop Guide */}
          {status === 'dragging' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'absolute',
                left: '10%', top: '20%', width: '80%', height: '100px',
                border: '2px dashed #00D1B2',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00D1B2',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'rgba(0, 209, 178, 0.05)'
              }}
            >
              Drop Here
            </motion.div>
          )}

          <AnimatePresence>
            {canvasItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                style={{ 
                  position: 'absolute', 
                  left: item.x, 
                  top: item.y,
                  width: item.width || 'auto',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden'
                }}
              >
                {item.type === 'map' ? (
                  <div style={{ height: '150px', background: '#E2E8F0', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'url(https://api.mapbox.com/styles/v1/mapbox/light-v10/static/0,0,1,0,0/400x150) center/cover' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <MapIcon size={32} color="#00D1B2" />
                    </div>
                  </div>
                ) : (
                  <motion.div 
                    animate={editingItem === item.id ? { rotateX: 360 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ padding: '20px', position: 'relative' }}
                  >
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>
                      {item.text}
                    </div>
                    {editingItem === item.id && (
                      <div style={{ position: 'absolute', right: 10, top: 10 }}>
                        <Edit3 size={14} color="#64748B" />
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Virtual Cursor */}
          <motion.div
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none', top: 0, left: 0 }}
          >
            <MousePointer2 size={24} color="#0F172A" fill="#FFFFFF" strokeWidth={2} />
          </motion.div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            style={{ 
              position: 'absolute', bottom: '30px', left: '50%', 
              transform: 'translateX(-50%)',
              background: '#0F172A', 
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              zIndex: 200,
              fontSize: '0.9rem'
            }}
          >
            <CheckCircle2 size={18} color="#00D1B2" />
            {t('synccms.builder.status.success', 'Module Applied Successfully!')}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UIBuilderSim;
