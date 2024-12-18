import React from 'react';
import PropertyHero from '../components/properties/PropertyHero';
import PropertyGrid from '../components/properties/PropertyGrid';
import PropertyFilters from '../components/properties/PropertyFilters';

const properties = [
  {
    id: 1,
    image: 'https://example.com/image1.jpg',
    title: 'Property 1',
    description: 'Brief description of property 1',
    price: 100000,
    location: 'New York, NY'
  },
  {
    id: 2,
    image: 'https://example.com/image2.jpg',
    title: 'Property 2',
    description: 'Brief description of property 2',
    price: 200000,
    location: 'Los Angeles, CA'
  }
  // Add more properties as needed
];

const Properties = () => {
  return (
    <div className="pt-20">
      <PropertyHero />
      <div className="container mx-auto px-4 py-12">
        <PropertyFilters />
        <div className="properties-list">
          {properties.map(property => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} className="property-image" />
              <h3 className="property-title">{property.title}</h3>
              <p className="property-description">{property.description}</p>
              <p className="property-price">${property.price}</p>
              <p className="property-location">{property.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;