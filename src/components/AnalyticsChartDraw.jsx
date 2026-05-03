import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, Search, Share2 } from 'lucide-react';

const AnalyticsChartDraw = ({ isMobile }) => {
  const { t } = useTranslation();
  const [pvData, setPvData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Generate mock data for PV chart
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push({
        time: `${i * 2}:00`,
        pv: 1000 + Math.floor(Math.random() * 5000)
      });
    }
    setPvData(data);
    setIsVisible(true);
  }, []);

  const pieData = [
    { name: 'Google', value: 400, color: '#3B82F6' },
    { name: 'Naver', value: 300, color: '#10B981' },
    { name: 'Direct', value: 200, color: '#F59E0B' },
    { name: 'Others', value: 100, color: '#64748B' },
  ];

  const radarData = [
    { subject: 'SEO', A: 120, fullMark: 150 },
    { subject: 'Mobile', A: 98, fullMark: 150 },
    { subject: 'Speed', A: 86, fullMark: 150 },
    { subject: 'Social', A: 99, fullMark: 150 },
    { subject: 'Ads', A: 85, fullMark: 150 },
  ];

  return (
    <div style={{ 
      width: '100%', 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: isMobile ? '15px' : '20px' 
    }}>
      {/* Visitors Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        style={{ 
          background: '#FFFFFF', 
          padding: isMobile ? '16px' : '24px', 
          borderRadius: '20px', 
          border: '1px solid #E2E8F0', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ p: '8px', background: 'rgba(0, 209, 178, 0.1)', borderRadius: '8px' }}>
            <Users size={18} color="#00D1B2" />
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>{t('synccms.seo.chart.visitors', 'Visitors')}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>8,542 PV</div>
          </div>
        </div>
        <div style={{ height: '200px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <LineChart data={pvData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="pv" 
                stroke="#00D1B2" 
                strokeWidth={3} 
                dot={false}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px', color: '#10B981', fontSize: '0.8rem', fontWeight: 600 }}>
          <TrendingUp size={14} />
          {t('synccms.seo.status.peak', 'Traffic Peak!')} (+12.5%)
        </div>
      </motion.div>

      {/* Traffic Sources */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        style={{ 
          background: '#FFFFFF', 
          padding: isMobile ? '16px' : '24px', 
          borderRadius: '20px', 
          border: '1px solid #E2E8F0', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ p: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
            <Share2 size={18} color="#3B82F6" />
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{t('synccms.seo.chart.sources', 'Traffic Sources')}</div>
        </div>
        <div style={{ height: '200px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                animationDuration={1500}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          {pieData.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: d.color }} />
              <span style={{ fontSize: '0.65rem', color: '#64748B' }}>{d.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SEO Radar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        style={{ 
          background: '#FFFFFF', 
          padding: isMobile ? '16px' : '24px', 
          borderRadius: '20px', 
          border: '1px solid #E2E8F0', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ p: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px' }}>
            <Search size={18} color="#F59E0B" />
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{t('synccms.seo.status.seo', 'SEO Optimized')}</div>
        </div>
        <div style={{ height: '200px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#E2E8F0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#64748B' }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.6}
                animationDuration={2000}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsChartDraw;
