import React from 'react';
import { toast } from 'react-toastify';
import { ShoppingBag, Shield, Star, Truck } from 'lucide-react';
import ProductCard from '../components/sections/ProductCard';
import { products } from '../data/products';
import SEO from '../components/shared/SEO';

const Products = () => {
  const handleBuyClick = (productName) => {
    toast.success(`Opening ${productName} purchase page!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <SEO 
        title="Kitchen Essentials | Tasty Creations"
        description="Discover kitchen tools, ingredients, and equipment recommended by our food creator. Affiliate links help support our content."
      />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-primary-500/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-primary-500 rounded-xl mb-6">
              <ShoppingBag className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Kitchen Essentials
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Tools, ingredients, and equipment I personally use and recommend
            </p>
            
            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-amber-800 font-medium mb-1">Affiliate Disclosure</p>
                  <p className="text-amber-700 text-sm">
                    Some links are affiliate links. Purchases made through these links may earn me a small commission at no extra cost to you. This helps support the channel and allows me to continue creating free content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Star,
                title: 'Creator Tested',
                description: 'Every product is personally used and approved in my kitchen'
              },
              {
                icon: Shield,
                title: 'Trusted Brands',
                description: 'Only recommending products from reputable manufacturers'
              },
              {
                icon: Truck,
                title: 'Quality Guaranteed',
                description: 'Products selected for durability and performance'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200">
                <div className="inline-flex p-3 bg-primary-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyClick={handleBuyClick}
              />
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Prices and availability are subject to change. Always check the retailer's website for the most current information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;