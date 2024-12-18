import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Consultation Immobilière',
      description: 'Nous offrons des consultations personnalisées pour vous aider à choisir le bon investissement immobilier.'
    },
    {
      title: 'Gestion de Propriété',
      description: 'Notre équipe s’occupe de la gestion de votre propriété, garantissant un rendement optimal.'
    },
    {
      title: 'Vente et Location',
      description: 'Nous facilitons la vente et la location de vos biens immobiliers avec une approche professionnelle.'
    },
    {
      title: 'Investissement',
      description: 'Nous vous aidons à identifier les meilleures opportunités d’investissement sur le marché immobilier.'
    },
    {
      title: 'Évaluation de Propriété',
      description: 'Nous fournissons des évaluations précises de vos biens immobiliers pour vous aider à prendre des décisions éclairées.'
    }
  ];

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;