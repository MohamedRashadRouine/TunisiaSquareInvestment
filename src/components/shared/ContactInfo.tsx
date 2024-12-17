import React from 'react';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="text-2xl mr-3">📍</span>
        <div>
          <p className="font-medium">Adresse</p>
          <a 
            href="https://maps.app.goo.gl/4stENezyU5nv82L49" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-amber-600 transition-colors"
          >
            Bureau n°6, Centre Farah, Nouvelle Ariana, Ariana, Tunisia
          </a>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="text-2xl mr-3">📞</span>
        <div>
          <p className="font-medium">Téléphone</p>
          <a 
            href="tel:+21697800000" 
            className="text-gray-600 hover:text-amber-600 transition-colors block"
          >
            +216 97 800 000
          </a>
          <a 
            href="tel:+21697100001" 
            className="text-gray-600 hover:text-amber-600 transition-colors block"
          >
            +216 97 100 001
          </a>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="text-2xl mr-3">📧</span>
        <div>
          <p className="font-medium">Email</p>
          <a 
            href="mailto:Ahmedharoun44@gmail.com" 
            className="text-gray-600 hover:text-amber-600 transition-colors"
          >
            Ahmedharoun44@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;