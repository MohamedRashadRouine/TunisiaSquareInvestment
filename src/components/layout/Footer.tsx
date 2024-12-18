import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoSrc} alt="Square Invest Logo" className="h-8 w-auto mr-2" />
              <h3 className="text-xl font-semibold">Tunisia Square Investment</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-xl mr-2">📍</span>
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
                <span className="text-xl mr-2">📞</span>
                <a 
                  href="tel:+21697800000" 
                  className="hover:text-amber-400 transition-colors"
                >
                  +216 97 800 000
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">📧</span>
                <a 
                  href="mailto:Ahmedharoun44@gmail.com" 
                  className="hover:text-amber-400 transition-colors"
                >
                  Ahmedharoun44@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400">Accueil</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400">À Propos</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400">Services</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-amber-400">Propriétés</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400">Contact</Link>
              </li>
            </ul>
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
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-xl mr-2">📱</span>
                <a href="https://www.facebook.com/TunisiaSquareInvestment" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">📸</span>
                <a href="https://www.instagram.com/cm.square" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">💬</span>
                <a href="https://wa.me/+21697800000" className="hover:text-amber-400 transition-colors" target="_blank" rel="noopener noreferrer">+216 97 800 000</a>
              </div>
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