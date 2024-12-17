import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Villa de Luxe à La Marsa',
    price: '2,500,000 TND',
    location: 'La Marsa, Tunis',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: ['5 Chambres', '4 Salles de bain', 'Piscine', 'Jardin'],
  },
  {
    id: 2,
    title: 'Appartement Modern aux Berges du Lac',
    price: '950,000 TND',
    location: 'Les Berges du Lac, Tunis',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: ['3 Chambres', '2 Salles de bain', 'Vue sur lac', 'Parking'],
  },
  {
    id: 3,
    title: 'Penthouse à Sidi Bou Said',
    price: '1,800,000 TND',
    location: 'Sidi Bou Said, Tunis',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: ['4 Chambres', '3 Salles de bain', 'Terrasse', 'Vue mer'],
  },
];

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
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-amber-600 font-bold mb-2">{property.price}</p>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/properties/${property.id}`}
                  className="block text-center bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
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