import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import ServiceOverview from '../components/home/ServiceOverview';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <FeaturedProperties />
    </div>
  );
};

export default Home;