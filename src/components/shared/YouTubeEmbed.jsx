import React, { useState } from 'react';
import { Play, Loader } from 'lucide-react';

const YouTubeEmbed = ({ videoId, title, lazy = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-gray-900">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <Loader className="h-12 w-12 text-primary-500 animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading video...</p>
          </div>
        </div>
      )}
      
      <div className="relative pt-[56.25%]">
        <iframe
          src={lazy ? undefined : embedUrl}
          data-src={lazy ? embedUrl : undefined}
          title={title}
          className={`absolute top-0 left-0 w-full h-full ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading={lazy ? "lazy" : "eager"}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="absolute inset-0 pointer-events-none border-2 border-transparent hover:border-primary-500/50 transition-colors rounded-xl" />
    </div>
  );
};

export default YouTubeEmbed;