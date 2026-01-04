import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${
        hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;