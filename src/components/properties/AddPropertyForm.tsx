import React, { useState } from 'react';
import { useProperties } from '../../contexts/PropertiesContext';
import { useAuth } from '../../contexts/AuthContext';

const AddPropertyForm = () => {
  const { addProperty } = useProperties();
  const { isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
    beds: '',
    baths: '',
    area: '',
    type: '',
  });

  if (!isAdmin) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priceValue = parseInt(formData.price.replace(/[^0-9]/g, ''));
    const areaValue = parseInt(formData.area);
    
    addProperty({
      ...formData,
      priceValue,
      areaValue,
      price: `${formData.price} TND`,
      area: `${formData.area}m²`,
      beds: parseInt(formData.beds),
      baths: parseInt(formData.baths),
    });
    
    setFormData({
      title: '',
      location: '',
      price: '',
      image: '',
      beds: '',
      baths: '',
      area: '',
      type: '',
    });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors mb-4"
      >
        {isOpen ? 'Annuler' : 'Ajouter une propriété'}
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Localisation
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Sélectionner une zone</option>
                <option value="La Marsa">La Marsa</option>
                <option value="Sidi Bou Said">Sidi Bou Said</option>
                <option value="Gammarth">Gammarth</option>
                <option value="Carthage">Carthage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de bien
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Sélectionner un type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Appartement</option>
                <option value="house">Maison</option>
                <option value="land">Terrain</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prix (TND)
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
                placeholder="Ex: 1,200,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Surface (m²)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chambres
              </label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Salles de bain
              </label>
              <input
                type="number"
                name="baths"
                value={formData.baths}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
            >
              Ajouter la propriété
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddPropertyForm;
