import React, { useState, useEffect, useRef } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { useTranslation } from 'react-i18next';

const LogGrafana = () => {
  const { t } = useTranslation();
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const logEndRef = useRef(null);

  const services = ['ORDER-SVC', 'AUTH-SVC', 'GATEWAY', 'PAY-SVC', 'INVENTORY'];
  const levels = ['INFO', 'INFO', 'INFO', 'WARN', 'INFO', 'ERROR', 'INFO'];

  useEffect(() => {
    // Initial metrics
    const initialMetrics = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      cpu: 20 + Math.random() * 30,
      rps: 100 + Math.random() * 50
    }));
    setMetrics(initialMetrics);

    const timer = setInterval(() => {
      // Add log
      const newLog = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        service: services[Math.floor(Math.random() * services.length)],
        level: levels[Math.floor(Math.random() * levels.length)],
        message: 'Processing request ' + Math.random().toString(36).substring(7)
      };
      setLogs(prev => [...prev.slice(-15), newLog]);

      // Update metrics
      setMetrics(prev => {
        const last = prev[prev.length - 1];
        const next = {
          time: last.time + 1,
          cpu: Math.max(10, Math.min(90, last.cpu + (Math.random() - 0.5) * 10)),
          rps: Math.max(50, Math.min(300, last.rps + (Math.random() - 0.5) * 40))
        };
        // Spike if there's an error in logs
        if (newLog.level === 'ERROR') {
          next.cpu += 20;
          next.rps -= 30;
        }
        return [...prev.slice(1), next];
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="log-grafana-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      width: '100%', 
      height: '100%',
      padding: '10px'
    }}>
      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '200px' }}>
        <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <h5 style={{ fontSize: '0.7rem', color: '#94A3B8', margin: '0 0 10px 0' }}>{t('syncboot.logs.cpu', 'CPU Usage (%)')}</h5>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <AreaChart data={metrics}>
              <defs>
                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="time" hide />
              <YAxis domain={[0, 100]} hide />
              <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.6rem' }} />
              <Area type="monotone" dataKey="cpu" stroke="#38BDF8" fillOpacity={1} fill="url(#colorCpu)" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <h5 style={{ fontSize: '0.7rem', color: '#94A3B8', margin: '0 0 10px 0' }}>{t('syncboot.logs.rps', 'Requests Per Second')}</h5>
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <LineChart data={metrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '0.6rem' }} />
              <Line type="monotone" dataKey="rps" stroke="#10B981" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Terminal Section */}
      <div style={{
        flex: 1,
        background: '#F8FAFC',
        borderRadius: '8px',
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '0.75rem',
        overflowY: 'auto',
        border: '1px solid #E2E8F0',
        minHeight: '200px'
      }}>
        <div style={{ color: '#00D1B2', marginBottom: '10px', borderBottom: '1px solid #334155', paddingBottom: '5px' }}>
          {t('syncboot.logs.terminal', 'STDOUT - Real-time Log Stream')}
        </div>
        {logs.map((log) => (
          <div key={log.id} style={{ marginBottom: '4px', whiteSpace: 'nowrap' }}>
            <span style={{ color: '#64748B' }}>[{log.time}]</span>{' '}
            <span style={{ 
              color: log.level === 'ERROR' ? '#F43F5E' : log.level === 'WARN' ? '#F59E0B' : '#10B981',
              fontWeight: 'bold'
            }}>{log.level}</span>{' '}
            <span style={{ color: '#38BDF8' }}>[{log.service}]</span>{' '}
            <span style={{ color: '#0F172A' }}>{log.message}</span>
          </div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
};

export default LogGrafana;
