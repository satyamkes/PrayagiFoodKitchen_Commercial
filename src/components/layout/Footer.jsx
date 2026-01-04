import React from 'react';
import { Youtube, Instagram, MessageCircle, Mail, ChefHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-amber-50 border-t border-amber-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-gray-900">Prayagi-food-kitchen</h2>
                <p className="text-sm text-gray-600">Delicious food content</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Creating mouth-watering recipes and food content that inspires home cooks everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Videos', 'Recipes', 'Products', 'Community'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@tastycreations.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">prayagifoodkitchen@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Join the Community</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/prayagifoodkitchen?igsh=MTJxbWFieXdkZ2hscA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-100 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Prayagi-food-kitchen. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Designed with ❤️ for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;