import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import ServiceOverview from '../components/home/ServiceOverview';
import './Home.css'; // Importing CSS for background effect

const Home = () => {
  return (
    <div className="home-background">
      <Hero />
      <ServiceOverview />
      <FeaturedProperties />
    </div>
  );
};

export default Home;