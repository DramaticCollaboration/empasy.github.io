import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Hydra from './pages/Hydra';
import SyncSeries from './pages/SyncSeries';
import SyncBoot from './pages/SyncBoot';
import SyncCMS from './pages/SyncCMS';
import SyncAPIM from './pages/SyncAPIM';
import SyncEta from './pages/SyncEta';
import CommerceLogi from './pages/CommerceLogi';
import UseCases from './pages/UseCases';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

const LanguageRedirect = () => {
  const location = useLocation();
  const path = location.pathname;

  // Language paths
  const langPaths = ['/ko', '/en', '/jp'];
  const hasLang = langPaths.some(lp => path.startsWith(lp));

  // If the path doesn't start with a language, default to /ko
  if (!hasLang && path !== '/') {
    return <Navigate to={`/ko${path}`} replace />;
  }
  
  if (path === '/') {
    return <Navigate to="/ko" replace />;
  }

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <LanguageRedirect />
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hydra" element={<Hydra />} />
            <Route path="sync-series" element={<SyncSeries />} />
            <Route path="syncboot" element={<SyncBoot />} />
            <Route path="synccms" element={<SyncCMS />} />
            <Route path="syncapim" element={<SyncAPIM />} />
            <Route path="synceta" element={<SyncEta />} />
            <Route path="commercelogi" element={<CommerceLogi />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="company" element={<Company />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/ko" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;