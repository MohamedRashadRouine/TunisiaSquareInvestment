import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleUserInput = (input: string) => {
    let response = '';
    switch (input) {
      case 'know more about us':
        response = 'You can learn more about us on our About page.';
        break;
      case 'contact us':
        response = 'You can contact us via email at info@example.com or call us at 123-456-7890.';
        break;
      case 'see properties':
        response = 'Check out our properties on the Properties page.';
        break;
      case 'office location':
        response = 'You can find our office location on the Contact page.';
        break;
      default:
        response = 'How can I assist you?';
    }
    setMessages([...messages, `User: ${input}`, `Bot: ${response}`]);
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>  
      <button onClick={toggleChat}>Chat</button>
      {isOpen && (
        <div className="chat-window">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserInput((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
