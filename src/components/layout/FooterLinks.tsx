import React from 'react';

const services = [
  'Conseil en Investissement Immobilier',
  'Conseil Juridique',
  'Développement Urbain',
  'Architecture & Construction',
];

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="hover:text-primary-400 transition-colors">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;