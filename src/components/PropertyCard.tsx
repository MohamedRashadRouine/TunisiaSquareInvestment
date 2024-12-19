import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookPostModal from './FacebookPostModal';

// Define the Property interface
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  features: string[];
  facebookPostUrl: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black text-white">
          <h3 className="text-lg font-bold">{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
          <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Voir les détails</button>
        </div>
      </div>
      <FacebookPostModal isOpen={isModalOpen} onClose={handleCloseModal} postUrl={property.facebookPostUrl} />
    </div>
  );
};

export default PropertyCard;
