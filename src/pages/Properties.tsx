import React from 'react';
import PropertyHero from '../components/properties/PropertyHero';
import PropertyGrid from '../components/properties/PropertyGrid';
import PropertyFilters from '../components/properties/PropertyFilters';

const Properties = () => {
  return (
    <div className="pt-20">
      <PropertyHero />
      <div className="container mx-auto px-4 py-12">
        <PropertyFilters />
        <PropertyGrid />
      </div>
    </div>
  );
};

export default Properties;