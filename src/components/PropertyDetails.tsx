import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../contexts/PropertiesContext';

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = useProperties();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  if (!id) return <div>L'ID de la propriété est manquant.</div>;

  const property = properties.find(prop => prop.id === parseInt(id));
  if (!property) return <div>Propriété non trouvée.</div>;

  const formatTitleForFolder = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/à/g, 'a')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const imageFolder = `/src/assets/images/properties/${formatTitleForFolder(property.title)}`;

  useEffect(() => {
    const loadImageUrls = async () => {
      const urls: string[] = [];
      let index = 1;
      let imageExists = true;

      while (imageExists && index <= 30) { // Limit to 30 images
        const url = `${imageFolder}/${index}.jpg`;
        console.log(`Checking URL: ${url}`); // Log the URL being checked
        try {
          const response = await fetch(url);
          if (response.ok) {
            urls.push(url);
            index++;
          } else {
            imageExists = false; // Stop if the image does not exist
          }
        } catch (error) {
          console.error(`Error fetching image ${url}:`, error);
          imageExists = false; // Stop if there is an error fetching the image
        }
      }

      console.log('Loaded image URLs:', urls); // Log the loaded URLs
      setImageUrls(urls);
    };

    loadImageUrls();
  }, [imageFolder]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(imageUrls[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setSelectedImage(imageUrls[(currentImageIndex + 1) % imageUrls.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    setSelectedImage(imageUrls[(currentImageIndex - 1 + imageUrls.length) % imageUrls.length]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{property.title}</h1>
      


      <p className="text-lg font-semibold">Localisation:</p>
      <ul className="list-disc list-inside">
        <li>{property.location}</li>
      </ul>
      <p className="text-lg font-semibold">Prix:</p>
      <ul className="list-disc list-inside">
        <li>{property.price}</li>
      </ul>
      <p className="text-lg font-semibold">Caractéristiques:</p>
      <ul className="list-disc list-inside">
        {property.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <div className="mt-4">
        <h2 className="font-bold">Images:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${property.title} image ${index + 1}`}
              className="w-full h-auto object-cover cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center" onClick={closeModal}>
          <div className="relative" onClick={(e) => e.stopPropagation()} style={{ top: '4rem' }}>
            <button className="absolute top-0 right-0 m-2 text-white" onClick={closeModal}>X</button>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>&lt;</button>
            <img src={selectedImage!} alt="Selected" className="max-w-[90vw] max-h-[90vh] object-contain" />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;