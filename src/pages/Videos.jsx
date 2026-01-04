import React, { useState } from 'react';
import { Play, Search, Clock, Eye, ThumbsUp } from 'lucide-react';
import VideoGrid from '../components/sections/VideoGrid';
import SEO from '../components/shared/SEO';

const Videos = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tutorials', 'Quick Recipes', 'Behind the Scenes', 'Tips & Tricks', 'Live Cooking'];

  return (
    <>
      <SEO
        title="Videos | Tasty Creations"
        description="Watch our cooking tutorials, recipe videos, and behind-the-scenes content. Learn to cook delicious dishes with step-by-step video guides."
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Video Tutorials
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Watch and learn with our step-by-step cooking videos and tutorials
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search videos..."
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
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Play, value: '200+', label: 'Videos' },
              { icon: Eye, value: '2M+', label: 'Total Views' },
              { icon: ThumbsUp, value: '150K+', label: 'Likes' },
              { icon: Clock, value: '10-15', label: 'Avg Length (min)' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                {stat.icon && (
                  <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                )}
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <VideoGrid />
        </div>
      </section>
    </>
  );
};

export default Videos;