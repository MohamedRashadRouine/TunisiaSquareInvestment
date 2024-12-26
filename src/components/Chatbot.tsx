import React, { useState } from 'react';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // Step to track conversation flow

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: string) => {
    switch (option) {
      case 'about':
        window.location.href = '/about'; // Redirect to About page
        break;
      case 'services':
        window.location.href = '/services'; // Redirect to Services page
        break;
      case 'properties':
        window.location.href = '/properties'; // Redirect to Properties page
        break;
      case 'whatsapp':
        window.open('https://wa.me/21697800000'); // Open WhatsApp
        break;
      case 'email':
        window.location.href = 'mailto:Ahmedharoun44@gmail.com'; // Open email client
        break;
      case 'location':
        window.location.href = 'https://maps.app.goo.gl/g189BMj4XZatUZ6v6'; // Redirect to office location
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">  
      <button 
        onClick={toggleChat}
        className="w-16 h-16 rounded-full bg-[#0084FF] hover:bg-[#0072db] flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        <FaFacebookMessenger className="text-3xl" />
      </button>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#0084FF] text-white p-4">
            <h3 className="text-lg font-semibold">Comment pouvons-nous vous aider ?</h3>
          </div>
          <div className="p-4 space-y-4">
            {step === 0 && (
              <div className="space-y-3">
                <button 
                  onClick={() => setStep(1)}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center text-lg">?</span>
                  <span>Je veux en savoir plus sur vous</span>
                </button>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center text-lg">📞</span>
                  <span>Je veux vous contacter</span>
                </button>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-3">
                <p className="font-medium text-gray-600 mb-2">Choisissez une option :</p>
                <button 
                  onClick={() => handleOptionSelect('services')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center text-lg">💼</span>
                  <span>Services</span>
                </button>
                <button 
                  onClick={() => handleOptionSelect('about')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center text-lg">ℹ️</span>
                  <span>À propos</span>
                </button>
                <button 
                  onClick={() => handleOptionSelect('properties')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0084FF] text-white flex items-center justify-center text-lg">🏠</span>
                  <span>Propriétés</span>
                </button>
                <button 
                  onClick={() => setStep(0)}
                  className="w-full p-2 mt-2 text-center rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors text-gray-600"
                >
                  Retour
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-3">
                <p className="font-medium text-gray-600 mb-2">Choisissez une option :</p>
                <button 
                  onClick={() => handleOptionSelect('whatsapp')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-lg">
                    <FaWhatsapp />
                  </span>
                  <span>WhatsApp</span>
                </button>
                <button 
                  onClick={() => handleOptionSelect('email')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#EA4335] text-white flex items-center justify-center text-lg">
                    <FaEnvelope />
                  </span>
                  <span>Email</span>
                </button>
                <button 
                  onClick={() => handleOptionSelect('location')}
                  className="w-full p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <span className="w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center text-lg">
                    <FaMapMarkerAlt />
                  </span>
                  <span>Emplacement du bureau</span>
                </button>
                <button 
                  onClick={() => setStep(0)}
                  className="w-full p-2 mt-2 text-center rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors text-gray-600"
                >
                  Retour
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
