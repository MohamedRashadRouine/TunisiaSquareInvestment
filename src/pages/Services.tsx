import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceList from '../components/services/ServiceList';
import ServiceProcess from '../components/services/ServiceProcess';

const Services = () => {
  return (
    <div className="pt-20">
      <ServiceHero />
      <ServiceList />
      <ServiceProcess />
    </div>
  );
};

export default Services;