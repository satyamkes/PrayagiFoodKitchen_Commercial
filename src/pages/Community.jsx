import React from 'react';
import { MessageCircle, Instagram, Users, Star, Award, Gift } from 'lucide-react';
import SEO from '../components/shared/SEO';

const Community = () => {
  return (
    <>
      <SEO 
        title="Join Our Community | Prayagi-food-kitchen"
        description="Connect with thousands of food lovers, share your creations, and get exclusive access to recipes and cooking tips."
      />
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-500/10 to-primary-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-3 bg-gradient-to-br from-green-500 to-primary-500 rounded-xl mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Join Our Food Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with thousands of food lovers, share your creations, and get exclusive content
            </p>
          </div>
        </div>
      </div>

      {/* Platforms */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-green-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    WhatsApp Community
                  </h2>
                  <p className="text-gray-600">
                    Daily recipes, cooking tips, and Q&A sessions
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Daily recipe inspiration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Live Q&A sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Weekly challenges & giveaways</span>
                </div>
              </div>
              
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all font-semibold text-lg text-center shadow-lg hover:shadow-xl"
              >
                Join WhatsApp Group
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-xl border border-pink-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex p-3 bg-pink-100 rounded-lg mb-4">
                    <Instagram className="h-8 w-8 text-pink-600" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    Instagram
                  </h2>
                  <p className="text-gray-600">
                    Behind-the-scenes, stories, and live cooking sessions
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-gray-900">250K+</div>
                  <div className="text-gray-600">Followers</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Behind-the-scenes content</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Instagram Live cooking sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Exclusive story polls & quizzes</span>
                </div>
              </div>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all font-semibold text-lg text-center shadow-lg hover:shadow-xl"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Community Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Gift,
                  title: 'Exclusive Content',
                  description: 'Get access to recipes and tutorials before anyone else',
                  color: 'text-purple-600',
                  bg: 'bg-purple-50'
                },
                {
                  icon: Award,
                  title: 'Weekly Challenges',
                  description: 'Participate in cooking challenges with prizes',
                  color: 'text-amber-600',
                  bg: 'bg-amber-50'
                },
                {
                  icon: Star,
                  title: 'Direct Access',
                  description: 'Ask questions and get personalized cooking advice',
                  color: 'text-blue-600',
                  bg: 'bg-blue-50'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-200">
                  <div className={`inline-flex p-3 ${benefit.bg} rounded-lg mb-4`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
              What Members Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  role: 'Home Cook',
                  comment: 'The WhatsApp group has completely transformed my cooking! I try new recipes every week.',
                  rating: 5
                },
                {
                  name: 'David L.',
                  role: 'Food Blogger',
                  comment: 'The Instagram live sessions are incredibly helpful. I\'ve learned so many professional tips.',
                  rating: 5
                },
                {
                  name: 'Priya K.',
                  role: 'Beginner Cook',
                  comment: 'The community is so supportive. Never feel alone in my cooking journey anymore.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;