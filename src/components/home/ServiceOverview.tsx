import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Immobilier',
    description: 'Découvrez notre sélection de propriétés exclusives',
    icon: '🏢',
    link: '/properties',
  },
  {
    title: 'Investissement',
    description: 'Solutions d\'investissement personnalisées',
    icon: '💰',
    link: '/services',
  },
  {
    title: 'Finance',
    description: 'Services financiers et conseils experts',
    icon: '📊',
    link: '/services',
  },
  {
    title: 'Résidentiel',
    description: 'Trouvez votre maison de rêve',
    icon: '🏠',
    link: '/properties',
  },
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;