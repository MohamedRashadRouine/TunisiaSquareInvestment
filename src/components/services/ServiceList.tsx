import React from 'react';

const services = [
  {
    title: 'Facility Management Immobilier',
    description: 'Solutions sur mesure pour la gestion des immeubles administratifs et des usines.',
    icon: '🏗️',
  },
  {
    title: 'Conseil Juridique et Publications',
    description: 'Accompagnement légal complet pour vos transactions immobilières et publication de recueils sur les nouveautés juridiques et fiscales.',
    icon: '⚖️',
  },
  {
    title: 'Gestion de Patrimoine et Portefeuille',
    description: 'Optimisation et valorisation de votre portefeuille immobilier, incluant l’arbitrage entre biens fonciers.',
    icon: '📊',
  },  
  {
    title: 'Investissement Immobilier',
    description: 'Solutions d\'investissement personnalisées pour maximiser votre rendement',
    icon: '🏢',
  },
  {
    title: 'Architecture & Design',
    description: 'Conception et réalisation de projets sur mesure',
    icon: '🏠',
  },
  {
    title: 'Service Client',
    description: 'Support personnalisé tout au long de votre projet',
    icon: '👥',
  },
  {
    title: 'Documentation',
    description: 'Gestion complète de vos documents administratifs',
    icon: '📄',
  },
];


const ServiceList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;