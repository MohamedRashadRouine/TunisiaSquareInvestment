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
  bedrooms: number;
  bathrooms: number;
  area: number;
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
      </div>
      <div className="border rounded-lg p-4 flex flex-col">
        <h2 className="text-lg font-bold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-xl font-semibold">{property.price} TND</p> 
        <div className="mt-2">
          <h3 className="font-semibold">Spécifications:</h3>
          <ul className="list-disc pl-5">
            {property.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex justify-end">
          <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">Voir les détails</button>
        </div>
      </div>
      <FacebookPostModal isOpen={isModalOpen} onClose={handleCloseModal} postUrl={property.facebookPostUrl} />
    </div>
  );
};

export default PropertyCard;
