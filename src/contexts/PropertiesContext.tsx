import React, { createContext, useContext, useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  image: string;
  beds: number;
  baths: number;
  area: string;
  areaValue: number;
  type: string;
}

interface PropertyFilters {
  type: string;
  location: string;
  maxPrice: string;
  minArea: string;
}

interface PropertiesContextType {
  properties: Property[];
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
  filteredProperties: Property[];
}

const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

export const PropertiesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: 'Villa Moderne à La Marsa',
      location: 'La Marsa',
      price: '1,200,000 TND',
      priceValue: 1200000,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      beds: 4,
      baths: 3,
      area: '250m²',
      areaValue: 250,
      type: 'villa',
    },
    {
      id: 2,
      title: 'Appartement Vue Mer',
      location: 'Sidi Bou Said',
      price: '850,000 TND',
      priceValue: 850000,
      image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      beds: 3,
      baths: 2,
      area: '180m²',
      areaValue: 180,
      type: 'apartment',
    },
    {
      id: 3,
      title: 'Penthouse de Luxe',
      location: 'Gammarth',
      price: '1,500,000 TND',
      priceValue: 1500000,
      image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      beds: 5,
      baths: 4,
      area: '300m²',
      areaValue: 300,
      type: 'apartment',
    },
  ]);

  const [filters, setFilters] = useState<PropertyFilters>({
    type: '',
    location: '',
    maxPrice: '',
    minArea: '',
  });

  const filteredProperties = properties.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.maxPrice && property.priceValue > parseInt(filters.maxPrice)) return false;
    if (filters.minArea && property.areaValue < parseInt(filters.minArea)) return false;
    return true;
  });

  return (
    <PropertiesContext.Provider 
      value={{ 
        properties, 
        filters, 
        setFilters, 
        filteredProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertiesProvider');
  }
  return context;
};
