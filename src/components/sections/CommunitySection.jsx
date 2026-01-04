import React from 'react';
import { MessageCircle, Instagram, Users, Star, Award } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Join Our Food Community
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Connect with thousands of food lovers, share your creations, and get exclusive content
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp Group',
                description: 'Daily recipes, tips, and Q&A with the community',
                members: '10,000+ Members',
                color: 'bg-green-100 text-green-600',
                buttonText: 'Join Now',
                link: 'https://whatsapp.com'
              },
              {
                icon: Instagram,
                title: 'Instagram',
                description: 'Behind-the-scenes, stories, and live cooking sessions',
                members: '250K+ Followers',
                color: 'bg-pink-100 text-pink-600',
                buttonText: 'Follow',
                link: 'https://instagram.com'
              }
            ].map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className={`inline-flex p-3 rounded-lg ${platform.color} mb-6`}>
                  <platform.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
                  {platform.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">{platform.members}</span>
                  </div>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {platform.buttonText}
                </a>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8">
              What Our Community Says
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  comment: 'The WhatsApp group is amazing! I get recipe inspiration every day.',
                  rating: 5
                },
                {
                  name: 'David L.',
                  comment: 'Learned so much from the Instagram live sessions. Highly recommended!',
                  rating: 5
                },
                {
                  name: 'Priya K.',
                  comment: 'Finally found a community that shares my passion for cooking.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;