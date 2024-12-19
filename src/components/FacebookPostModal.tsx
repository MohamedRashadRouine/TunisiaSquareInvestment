import React from 'react';
import './FacebookPostModal.css';

interface FacebookPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  postUrl: string;
}

const FacebookPostModal: React.FC<FacebookPostModalProps> = ({ isOpen, onClose, postUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center" onClick={onClose}>
      <div className="relative bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()} style={{ width: '500px', height: '700px', maxWidth: '90vw', maxHeight: '90vh' }}>
        <button className="absolute top-0 right-0 m-2 text-white" onClick={onClose}>X</button>
        <iframe 
          src={postUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 'none', overflow: 'hidden' }} 
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default FacebookPostModal;
