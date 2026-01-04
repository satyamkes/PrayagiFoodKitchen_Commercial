import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, ChefHat } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/videos' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Products', path: '/products' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-amber-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg group-hover:scale-105 transition-transform">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">Prayagi-food-kitchen</h1>
              <p className="text-xs text-primary-600">Food Content Creator</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              <Youtube className="h-4 w-4 mr-2" />
              Watch on YouTube
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-amber-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-4 w-4 mr-2" />
                Watch on YouTube
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;