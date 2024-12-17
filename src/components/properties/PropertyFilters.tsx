import React from 'react';
import { useProperties } from '../../contexts/PropertiesContext';

const PropertyFilters = () => {
  const { filters, setFilters } = useProperties();

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de bien
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Tous les types</option>
            <option value="villa">Villa</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Localisation
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">Toutes les zones</option>
            <option value="La Marsa">La Marsa</option>
            <option value="Sidi Bou Said">Sidi Bou Said</option>
            <option value="Gammarth">Gammarth</option>
            <option value="Carthage">Carthage</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget max.
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          >
            <option value="">Sans limite</option>
            <option value="500000">500,000 TND</option>
            <option value="1000000">1,000,000 TND</option>
            <option value="2000000">2,000,000 TND</option>
            <option value="3000000">3,000,000 TND</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Surface min.
          </label>
          <select 
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.minArea}
            onChange={(e) => handleFilterChange('minArea', e.target.value)}
          >
            <option value="">Toutes surfaces</option>
            <option value="100">100 m²</option>
            <option value="150">150 m²</option>
            <option value="200">200 m²</option>
            <option value="250">250 m²</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;