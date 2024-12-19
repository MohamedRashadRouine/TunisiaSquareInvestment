import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import { properties } from '../../properties';

const FeaturedProperties = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Propriétés en Vedette</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de propriétés exceptionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter(property => [1, 2, 3].includes(property.id)).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-block bg-white text-amber-600 border-2 border-amber-600 py-2 px-6 rounded hover:bg-amber-600 hover:text-white transition-colors"
          >
            Voir toutes les propriétés
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;