import React, { useState } from 'react';
import { Filter, Search, Clock, Users, Flame } from 'lucide-react';
import RecipeGrid from '../components/sections/RecipeGrid';
import SEO from '../components/shared/SEO';

const Recipes = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Dinner', 'Dessert', 'Breakfast', 'Vegetarian', 'Quick Meals', 'Baking'];

  return (
    <>
      <SEO 
        title="Recipes | Tasty Creations"
        description="Browse our collection of delicious recipes with step-by-step instructions, ingredient lists, and cooking tips."
      />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Delicious Recipes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse our collection of tried-and-tested recipes with step-by-step instructions
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '500+', label: 'Recipes' },
              { icon: Users, value: '250K+', label: 'Home Cooks' },
              { icon: Flame, value: '4.8', label: 'Average Rating' },
              { value: '15-30', label: 'Avg Prep Time' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <RecipeGrid />
        </div>
      </section>
    </>
  );
};

export default Recipes;