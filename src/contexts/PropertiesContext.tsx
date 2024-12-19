import React, { createContext, useContext, useState } from 'react';
import { properties } from '../properties';

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
  features: string[];
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
  const [propertiesState] = useState<Property[]>(properties);

  const [filters, setFilters] = useState<PropertyFilters>({
    type: '',
    location: '',
    maxPrice: '',
    minArea: '',
  });

  const filteredProperties = propertiesState.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.maxPrice && property.priceValue > parseInt(filters.maxPrice)) return false;
    if (filters.minArea && property.areaValue < parseInt(filters.minArea)) return false;
    return true;
  });

  return (
    <PropertiesContext.Provider 
      value={{ 
        properties: propertiesState, 
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
