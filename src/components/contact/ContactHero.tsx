import React from 'react';

const ContactHero = () => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Nous sommes là pour répondre à toutes vos questions
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
