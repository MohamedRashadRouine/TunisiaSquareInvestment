import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import { PropertiesProvider } from './contexts/PropertiesContext';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/properties" element={
        <PropertiesProvider>
          <Properties />
        </PropertiesProvider>
      } />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
