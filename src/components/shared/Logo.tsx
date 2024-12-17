import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../assets/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logoSrc} alt="Square Invest Logo" className="h-14 w-auto mr-3" />
      <span className="text-xl font-semibold">Tunisia Square Investment</span>
    </Link>
  );
};

export default Logo;