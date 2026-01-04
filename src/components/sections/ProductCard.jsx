import React from 'react';
import { ShoppingBag, Star, Tag, Check } from 'lucide-react';

const ProductCard = ({ product, onBuyClick }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.discount && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium flex items-center">
              <Tag className="h-3 w-3 mr-1" />
              {product.discount}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          
          <button
            onClick={() => {
              window.open(product.affiliateLink, '_blank');
              onBuyClick(product.name);
            }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all font-medium shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;