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

const APIPacketbeatAnalytics = () => {
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
    <div style={{ width: '100%', height: '600px', background: '#F8FAFC', borderRadius: '24px', padding: '40px', display: 'flex', gap: '40px', overflow: 'hidden', position: 'relative' }}>
      {/* 1. Source Servers (Left) */}
      <div style={{ width: '150px', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 10 }}>
        <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 800, marginBottom: '10px' }}>PACKETBEAT AGENTS</div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ position: 'relative', background: '#FFFFFF', padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Server color="#94A3B8" size={32} />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              style={{ position: 'absolute', top: 5, right: 5, width: '8px', height: '8px', borderRadius: '50%', background: '#00D1B2' }}
            />
          </div>
        ))}
      </div>

      {/* 2. Fiber-optic Lines (Center) */}
      <div style={{ flex: 1, position: 'relative' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {[0, 1, 2].map(i => (
            <React.Fragment key={i}>
              <path 
                d={`M 0,${100 + i * 150} C 100,${100 + i * 150} 200,${300} 400,${300}`} 
                fill="none" 
                stroke="#E2E8F0"
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

      {/* 3. Analytics Dashboard (Right) */}
      <div style={{ width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto 1fr 1fr', gap: '20px', zIndex: 10 }}>
        {/* Header Widget */}
        <div style={{ gridColumn: 'span 2', background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 600 }}>LATENCY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00D1B2' }}>{latency}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>ms</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 600 }}>THROUGHPUT</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#3B82F6' }}>4.2</span>
              <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>GB/s</span>
            </div>
          </div>
          <TrendingUp color="#00D1B2" size={32} />
        </div>

        {/* Method Distribution (Pie) */}
        <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 600, width: '100%', marginBottom: '10px' }}>METHODS</div>
          <div style={{ width: '100%', height: '120px' }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie data={pieData} innerRadius={35} outerRadius={50} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Throughput (Bar) */}
        <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 600, marginBottom: '10px' }}>TPS TREND</div>
          <div style={{ width: '100%', height: '120px' }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <BarChart data={data}>
                <Bar dataKey="tps" fill="#3B82F6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Logs */}
        <div style={{ gridColumn: 'span 2', background: '#F1F5F9', padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.65rem', overflow: 'hidden' }}>
          <div style={{ color: '#00D1B2', marginBottom: '5px' }}>{'>'} PACKET CAPTURE ACTIVE...</div>
          <div style={{ color: '#94A3B8' }}>{`[${new Date().toLocaleTimeString()}] 192.168.1.10 -> Gateway [SYN]`}</div>
          <div style={{ color: '#94A3B8' }}>{`[${new Date().toLocaleTimeString()}] Gateway -> MSA_Auth [TRANS]`}</div>
          <div style={{ color: '#00D1B2' }}>{`[${new Date().toLocaleTimeString()}] 200 OK - 12ms`}</div>
        </div>
      </div>

      {/* Background Glow */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,209,178,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
    </div>
  );
};

export default APIPacketbeatAnalytics;
