export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  size: number;
  features: string[];
  images: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}