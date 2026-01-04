import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Flame, ChevronRight } from 'lucide-react';
import { recipes } from '../../data/recipes';
import Skeleton from '../ui/Skeleton';
import LazyImage from '../shared/LazyImage';

const RecipeGrid = ({ limit }) => {
  const [loaded, setLoaded] = useState({});
  const displayedRecipes = limit ? recipes.slice(0, limit) : recipes;

  const handleImageLoad = (id) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-48">
            {!loaded[recipe.id] && (
              <Skeleton className="h-full w-full" />
            )}
            <LazyImage
              src={recipe.image}
              alt={recipe.title}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                loaded[recipe.id] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(recipe.id)}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                {recipe.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                {recipe.difficulty}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {recipe.time}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Flame className="h-4 w-4 mr-1" />
                {recipe.calories}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="h-4 w-4 mr-1" />
                {recipe.servings}
              </div>
            </div>

            <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {recipe.title}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-3">
              {recipe.description}
            </p>

            <div className="flex items-center justify-between">
              <Link
                to={`/recipes/${recipe.id}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                View Recipe
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(recipe.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">{recipe.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;