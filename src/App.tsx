import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './AppRoutes';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <header className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Our Property Listings</h1>
            <p>Find your dream property today!</p>
            <button className="cta-button">Explore Properties</button>
          </div>
        </header>
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;