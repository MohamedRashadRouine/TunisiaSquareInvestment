import React, { useState } from 'react';

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
        window.open('https://wa.me/1234567890'); // Open WhatsApp
        break;
      case 'email':
        window.location.href = 'mailto:info@example.com'; // Open email client
        break;
      case 'location':
        window.location.href = '/contact'; // Redirect to Contact page
        break;
      default:
        break;
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>  
      <button onClick={toggleChat}>💬</button>
      {isOpen && (
        <div className="chat-window">
          {step === 0 && (
            <div>
              <p>Comment pouvons-nous vous aider ?</p>
              <button onClick={() => setStep(1)}>Je veux en savoir plus sur vous</button>
              <button onClick={() => setStep(2)}>Je veux vous contacter</button>
            </div>
          )}
          {step === 1 && (
            <div>
              <p>Choisissez une option :</p>
              <button onClick={() => handleOptionSelect('services')}>Services</button>
              <button onClick={() => handleOptionSelect('about')}>À propos</button>
              <button onClick={() => handleOptionSelect('properties')}>Propriétés</button>
              <button onClick={() => setStep(0)}>Retour</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <p>Choisissez une option :</p>
              <button onClick={() => handleOptionSelect('whatsapp')}>WhatsApp</button>
              <button onClick={() => handleOptionSelect('email')}>Email</button>
              <button onClick={() => handleOptionSelect('location')}>Emplacement du bureau</button>
              <button onClick={() => setStep(0)}>Retour</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
