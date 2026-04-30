import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Box, CheckCircle, Ship, Rocket, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CICDPipeline = () => {
  const { t } = useTranslation();
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { id: 'checkout', icon: GitBranch, label: 'Checkout', duration: 1500 },
    { id: 'build', icon: Box, label: t('syncboot.cicd.stages.build', 'Building'), duration: 2500 },
    { id: 'test', icon: CheckCircle, label: t('syncboot.cicd.stages.test', 'Testing'), duration: 2000 },
    { id: 'docker', icon: Ship, label: 'Dockerize', duration: 2000 },
    { id: 'deploy', icon: Rocket, label: t('syncboot.cicd.stages.deploy', 'Deployed'), duration: 1500 },
  ];

  useEffect(() => {
    let timeout;
    const runNext = (index) => {
      if (index >= stages.length) {
        timeout = setTimeout(() => {
          setCurrentStage(0);
          runNext(0);
        }, 3000);
        return;
      }
      setCurrentStage(index);
      timeout = setTimeout(() => {
        runNext(index + 1);
      }, stages[index].duration);
    };

    runNext(0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="cicd-pipeline-container" style={{ width: '100%', padding: '40px' }}>
      <h4 style={{ color: '#fff', marginBottom: '40px', textAlign: 'center' }}>
        {t('syncboot.cicd.title', 'Automation Pipeline')}
      </h4>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        {/* Background line */}
        <div style={{ 
          position: 'absolute', top: '24px', left: '0', right: '0', 
          height: '4px', background: '#334155', zIndex: 0 
        }} />
        
        {/* Progress line */}
        <motion.div 
          style={{ 
            position: 'absolute', top: '24px', left: '0', 
            height: '4px', background: '#00D1B2', zIndex: 1 
          }}
          animate={{ width: `${(currentStage / (stages.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {stages.map((stage, index) => {
          const isActive = index === currentStage;
          const isCompleted = index < currentStage;
          const Icon = stage.icon;

          return (
            <div key={stage.id} style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <motion.div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: isCompleted ? '#00D1B2' : isActive ? '#1E293B' : '#0F172A',
                  border: `2px solid ${isActive || isCompleted ? '#00D1B2' : '#334155'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isCompleted ? '#0F172A' : isActive ? '#00D1B2' : '#64748B',
                  position: 'relative'
                }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  boxShadow: isActive ? '0 0 20px rgba(0, 209, 178, 0.4)' : 'none'
                }}
              >
                <Icon size={24} />
                {isActive && (
                  <motion.div
                    style={{ position: 'absolute', inset: '-5px', borderRadius: '50%', border: '2px solid #00D1B2', borderTopColor: 'transparent' }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                )}
              </motion.div>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 'bold',
                color: isActive ? '#00D1B2' : isCompleted ? '#E2E8F0' : '#64748B'
              }}>
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '60px', padding: '20px', background: '#0F172A', borderRadius: '12px', border: '1px solid #334155' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#10B981' }}
          >
            {currentStage === 0 && "> git checkout main... Success"}
            {currentStage === 1 && "> ./mvnw package... [INFO] Building jar: target/app.jar"}
            {currentStage === 2 && "> running unit tests... 142 passed, 0 failed"}
            {currentStage === 3 && "> docker build -t empasy/app:latest ."}
            {currentStage === 4 && "> kubectl apply -f k8s/deployment.yaml... Success!"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CICDPipeline;
