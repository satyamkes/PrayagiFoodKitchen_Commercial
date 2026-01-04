import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Flame, BookOpen, ChevronRight, Share2, Printer, Bookmark } from 'lucide-react';
import { recipes } from '../data/recipes';
import YouTubeEmbed from '../components/shared/YouTubeEmbed';
import SEO from '../components/shared/SEO';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('ingredients');

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-2xl font-display font-bold text-gray-900">Recipe not found</div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${recipe.title} | Tasty Creations`}
        description={recipe.description}
        image={recipe.image}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-primary-600">Home</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="/recipes" className="hover:text-primary-600">Recipes</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">{recipe.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Video */}
            <div className="mb-8">
              <YouTubeEmbed videoId={recipe.videoId} title={recipe.title} />
            </div>

            {/* Recipe Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <Clock className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{recipe.time}</div>
                <div className="text-sm text-gray-600">Prep Time</div>
              </div>
              <div className="bg-secondary-50 rounded-xl p-4 text-center">
                <Clock className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{recipe.cookTime}</div>
                <div className="text-sm text-gray-600">Cook Time</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{recipe.servings}</div>
                <div className="text-sm text-gray-600">Servings</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <Flame className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">{recipe.calories}</div>
                <div className="text-sm text-gray-600">Calories</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                    {recipe.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
                    {recipe.title}
                  </h1>
                  <p className="text-gray-600 text-lg">{recipe.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <Bookmark className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                    <Printer className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {['ingredients', 'instructions', 'tips'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                        activeTab === tab
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {activeTab === 'ingredients' && (
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">Ingredients</h3>
                    <ul className="space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'instructions' && (
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">Instructions</h3>
                    <ol className="space-y-6">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="flex">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold mr-4">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">Tips & Variations</h3>
                    <ul className="space-y-4">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpen className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Nutrition Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">Nutrition Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recipe.nutrition.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-gray-900">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes
              .filter(r => r.id !== recipe.id)
              .slice(0, 3)
              .map(relatedRecipe => (
                <a
                  key={relatedRecipe.id}
                  href={`/recipes/${relatedRecipe.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedRecipe.image}
                      alt={relatedRecipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {relatedRecipe.title}
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      {relatedRecipe.time}
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;