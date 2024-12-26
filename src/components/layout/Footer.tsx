import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.svg';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoSrc} alt="Square Invest Logo" className="h-8 w-auto mr-2" />
              <h3 className="text-xl font-semibold">Tunisia Square Investment</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-xl mr-2 text-amber-400" />
                <a 
                  href="https://maps.app.goo.gl/4stENezyU5nv82L49" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Bureau n°6, Centre Farah, Nouvelle Ariana, Ariana, Tunisia
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-xl mr-2 text-amber-400" />
                <a 
                  href="tel:+21697800000" 
                  className="hover:text-amber-400 transition-colors"
                >
                  +216 97 800 000
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-xl mr-2 text-amber-400" />
                <a 
                  href="mailto:Ahmedharoun44@gmail.com" 
                  className="hover:text-amber-400 transition-colors"
                >
                  Ahmedharoun44@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>Investissement Immobilier</li>
              <li>Conseil Juridique</li>
              <li>Gestion de Patrimoine</li>
              <li>Architecture & Design</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.facebook.com/TunisiaSquareInvestment" 
                className="flex items-center group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl mr-3 text-[#1877F2] group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-[#1877F2] transition-colors">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/cm.square" 
                className="flex items-center group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl mr-3 text-[#E4405F] group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-[#E4405F] transition-colors">Instagram</span>
              </a>
              <a 
                href="https://wa.me/+21697800000" 
                className="flex items-center group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-3xl mr-3 text-[#25D366] group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-[#25D366] transition-colors">WhatsApp</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/tunisiasquareinvestment/" 
                className="flex items-center group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl mr-3 text-[#0A66C2] group-hover:scale-110 transition-transform" /> 
                <span className="group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tunisia Square Investment. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;