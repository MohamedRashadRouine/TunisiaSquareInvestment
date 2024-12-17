import React from 'react';

const steps = [
  {
    title: 'Consultation Initiale',
    description: 'Discussion de vos objectifs et besoins spécifiques',
  },
  {
    title: 'Analyse du Marché',
    description: 'Étude approfondie des opportunités disponibles',
  },
  {
    title: 'Proposition Personnalisée',
    description: 'Présentation des meilleures options pour votre investissement',
  },
  {
    title: 'Accompagnement',
    description: 'Support complet tout au long du processus',
  },
];

const ServiceProcess = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-amber-600 mb-4">✓ {index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;