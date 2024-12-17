import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À Propos' },
  { path: '/services', label: 'Services' },
  { path: '/properties', label: 'Propriétés' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => {
  return (
    <nav className="flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0">
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="text-gray-600 hover:text-amber-600 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;