import React from 'react';
import { useProperties } from '../../contexts/PropertiesContext';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

const PropertyGrid = () => {
  const { filteredProperties } = useProperties();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProperties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
              {property.price}
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-4">{property.location}</p>
            
            <div className="flex justify-between text-gray-600">
              <div className="flex items-center">
                <FaBed className="mr-2" />
                <span>{property.beds} ch.</span>
              </div>
              <div className="flex items-center">
                <FaBath className="mr-2" />
                <span>{property.baths} sdb.</span>
              </div>
              <div className="flex items-center">
                <FaRuler className="mr-2" />
                <span>{property.area}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;