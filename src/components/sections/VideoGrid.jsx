import React, { useState } from 'react';
import { Play, Eye, Clock, ExternalLink } from 'lucide-react';
import { videos } from '../../data/videos';
import Skeleton from '../ui/Skeleton';

const VideoGrid = ({ limit }) => {
  const [loaded, setLoaded] = useState({});
  const displayedVideos = limit ? videos.slice(0, limit) : videos;

  const handleImageLoad = (id) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedVideos.map((video) => (
        <div
          key={video.id}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
        >
          {/* Thumbnail */}
          <div className="relative overflow-hidden">
            {!loaded[video.id] && (
              <Skeleton className="h-48 w-full" />
            )}
            <img
              src={video.thumbnail}
              alt={video.title}
              className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                loaded[video.id] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(video.id)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Play Button */}
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-red-600 text-white rounded-full">
                <Play className="h-4 w-4 fill-white" />
              </div>
            </div>
            
            {/* Duration */}
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-700 rounded">
                {video.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Eye className="h-3 w-3 mr-1" />
                {video.views}
              </div>
            </div>
            
            <h3 className="font-display font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {video.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {video.description}
            </p>
            
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {video.uploadDate}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <a
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all text-sm font-medium"
              >
                <Play className="h-3 w-3 mr-2" />
                Watch Video
              </a>
              <a
                href={`/recipes/${video.recipeId}`}
                className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                title="View Recipe"
              >
                <ExternalLink className="h-4 w-4 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;