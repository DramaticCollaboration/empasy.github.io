import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Server, Activity, BarChart2, PieChart as PieChartIcon, 
  Zap, Database, TrendingUp
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, Tooltip 
} from 'recharts';

const APIPacketbeatAnalytics = ({ isMobile }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const generateData = () => {
      const newData = [];
      for (let i = 0; i < 7; i++) {
        newData.push({
          name: `v${i}`,
          tps: 3000 + Math.floor(Math.random() * 2000)
        });
      }
      setData(newData);
    };

    generateData();
    const interval = setInterval(() => {
      generateData();
      setLatency(8 + Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pieData = [
    { name: 'GET', value: 45, color: '#00D1B2' },
    { name: 'POST', value: 30, color: '#3B82F6' },
    { name: 'PUT', value: 15, color: '#F59E0B' },
    { name: 'DELETE', value: 10, color: '#EF4444' },
  ];

  return (
    <div style={{ 
      width: '100%', 
      height: isMobile ? 'auto' : '600px', 
      background: '#0F172A', 
      borderRadius: '24px', 
      padding: isMobile ? '20px' : '40px', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '20px' : '40px', 
      overflow: 'hidden', 
      position: 'relative' 
    }}>
      {/* 1. Source Servers (Left on PC, Top on Mobile) */}
      <div style={{ 
        width: isMobile ? '100%' : '150px', 
        display: 'flex', 
        flexDirection: isMobile ? 'row' : 'column', 
        gap: '15px', 
        zIndex: 10,
        justifyContent: isMobile ? 'center' : 'flex-start'
      }}>
        {!isMobile && <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 800, marginBottom: '10px' }}>PACKETBEAT AGENTS</div>}
        {[1, 2, 3].map(i => (
          <div key={i} style={{ 
            position: 'relative', 
            background: '#1E293B', 
            padding: isMobile ? '10px' : '15px', 
            borderRadius: '12px', 
            border: '1px solid #334155', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flex: isMobile ? 1 : 'none'
          }}>
            <Server color="#94A3B8" size={isMobile ? 24 : 32} />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              style={{ position: 'absolute', top: 5, right: 5, width: '6px', height: '6px', borderRadius: '50%', background: '#00D1B2' }}
            />
          </div>
        ))}
      </div>

      {/* 2. Fiber-optic Lines (Center - Hidden or small on Mobile) */}
      {!isMobile && (
        <div style={{ flex: 1, position: 'relative' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {[0, 1, 2].map(i => (
              <React.Fragment key={i}>
                <path 
                  d={`M 0,${100 + i * 150} C 100,${100 + i * 150} 200,${300} 400,${300}`} 
                  fill="none" 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeWidth="2" 
                />
                <motion.circle r="3" fill="#00D1B2">
                  <animateMotion 
                    path={`M 0,${100 + i * 150} C 100,${100 + i * 150} 200,${300} 400,${300}`} 
                    dur={`${1 + i * 0.5}s`} 
                    repeatCount="indefinite" 
                  />
                </motion.circle>
              </React.Fragment>
            ))}
          </svg>
        </div>
      )}

      {/* 3. Analytics Dashboard (Right on PC, Bottom on Mobile) */}
      <div style={{ 
        width: isMobile ? '100%' : '500px', 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gridTemplateRows: isMobile ? 'auto auto auto auto' : 'auto 1fr 1fr', 
        gap: '15px', 
        zIndex: 10 
      }}>
        {/* Header Widget */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 2', 
          background: 'rgba(30, 41, 59, 0.7)', 
          padding: isMobile ? '15px' : '20px', 
          borderRadius: '16px', 
          border: '1px solid #334155', 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile ? '10px' : '20px' 
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#94A3B8', fontSize: '0.65rem', fontWeight: 600 }}>LATENCY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
              <span style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 800, color: '#00D1B2' }}>{latency}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>ms</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#94A3B8', fontSize: '0.65rem', fontWeight: 600 }}>THROUGHPUT</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
              <span style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 800, color: '#3B82F6' }}>4.2</span>
              <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>GB/s</span>
            </div>
          </div>
          <TrendingUp color="#00D1B2" size={isMobile ? 24 : 32} />
        </div>

        {/* Method Distribution (Pie) */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.7)', 
          padding: '15px', 
          borderRadius: '16px', 
          border: '1px solid #334155', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <div style={{ color: '#94A3B8', fontSize: '0.65rem', fontWeight: 600, width: '100%', marginBottom: '10px' }}>METHODS</div>
          <div style={{ width: '100%', height: '100px' }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie data={pieData} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Throughput (Bar) */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.7)', 
          padding: '15px', 
          borderRadius: '16px', 
          border: '1px solid #334155' 
        }}>
          <div style={{ color: '#94A3B8', fontSize: '0.65rem', fontWeight: 600, marginBottom: '10px' }}>TPS TREND</div>
          <div style={{ width: '100%', height: '100px' }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <BarChart data={data}>
                <Bar dataKey="tps" fill="#3B82F6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Logs */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 2', 
          background: 'rgba(15, 23, 42, 0.8)', 
          padding: '12px', 
          borderRadius: '12px', 
          border: '1px solid #334155', 
          fontFamily: 'monospace', 
          fontSize: '0.6rem', 
          overflow: 'hidden' 
        }}>
          <div style={{ color: '#00D1B2', marginBottom: '3px' }}>{'>'} PACKET CAPTURE...</div>
          <div style={{ color: '#94A3B8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{`[${new Date().toLocaleTimeString()}] Gateway [SYN]`}</div>
          <div style={{ color: '#00D1B2' }}>{`[${new Date().toLocaleTimeString()}] 200 OK - 12ms`}</div>
        </div>
      </div>

      {/* Background Glow */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,209,178,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
    </div>
  );
};

export default APIPacketbeatAnalytics;
