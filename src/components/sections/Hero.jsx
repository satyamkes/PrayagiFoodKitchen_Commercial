import React from 'react';
import { Play, ChevronRight, Star, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-gray-700">Food Content Creator of the Year 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Delicious</span> Memories
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Join <span className="font-semibold text-primary-600">250,000+</span> food enthusiasts learning to cook amazing dishes with easy-to-follow video tutorials and recipes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-semibold shadow-lg hover:shadow-xl group"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch on YouTube
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/recipes"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all font-semibold shadow-lg hover:shadow-xl border border-gray-200"
              >
                Explore Recipes
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Users, value: '250K+', label: 'Community Members' },
                { icon: Clock, value: '500+', label: 'Video Tutorials' },
                { icon: Star, value: '4.9', label: 'Average Rating' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <stat.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
                alt="Delicious gourmet meal"
                className="w-full h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Play Button Overlay */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:blur-lg transition-all" />
                  <div className="relative p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all shadow-2xl">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </button>
              
              {/* Video Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Creamy Garlic Pasta</h3>
                <p className="text-white/90 text-sm">Latest Recipe • 15 min cook time</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Star className="h-5 w-5 text-green-600 fill-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Recipe of the Week</div>
                  <div className="text-sm text-gray-600">Try it now!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;