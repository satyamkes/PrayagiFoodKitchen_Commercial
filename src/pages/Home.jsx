import React from 'react';
import { ArrowRight, Play, Users, BookOpen, Mail } from 'lucide-react';
import Hero from '../components/sections/Hero';
import VideoGrid from '../components/sections/VideoGrid';
import RecipeGrid from '../components/sections/RecipeGrid';
import CommunitySection from '../components/sections/CommunitySection';
import SEO from '../components/shared/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home | Tasty Creations - Food Content Creator"
        description="Welcome to Tasty Creations! Discover delicious recipes, cooking tutorials, and join our food-loving community."
      />
      
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: 'Video Tutorials',
                description: 'Step-by-step cooking tutorials that make complex recipes easy',
                color: 'text-red-500',
                bg: 'bg-red-50'
              },
              {
                icon: BookOpen,
                title: 'Recipe Blog',
                description: 'Detailed recipes with tips, variations, and nutritional info',
                color: 'text-amber-500',
                bg: 'bg-amber-50'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Join thousands of food lovers sharing their cooking journey',
                color: 'text-green-500',
                bg: 'bg-green-50'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.bg} mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Latest Videos
              </h2>
              <p className="text-gray-600">Fresh from the kitchen to your screen</p>
            </div>
            <a
              href="/videos"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Videos
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
          <VideoGrid limit={4} />
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Featured Recipes
              </h2>
              <p className="text-gray-600">Try these crowd favorites</p>
            </div>
            <a
              href="/recipes"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Recipes
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
          <RecipeGrid limit={3} />
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Get weekly recipe inspiration, cooking tips, and exclusive content directly in your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;