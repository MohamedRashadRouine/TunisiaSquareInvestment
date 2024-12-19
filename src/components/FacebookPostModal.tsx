import React from 'react';

interface FacebookPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  postUrl: string;
}

const FacebookPostModal: React.FC<FacebookPostModalProps> = ({ isOpen, onClose, postUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center" onClick={onClose}>
      <div 
        className="relative w-auto max-w-[90%] md:max-w-[1500px] max-h-[80%] bg-white rounded-lg overflow-hidden p-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-0 right-0 m-2 text-white bg-red-500 rounded-full p-1" onClick={onClose}>X</button>
        <iframe 
          src={postUrl} 
          style={{ width: '100%', height: '600px', border: 'none' }} 
          scrolling="yes" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default FacebookPostModal;
