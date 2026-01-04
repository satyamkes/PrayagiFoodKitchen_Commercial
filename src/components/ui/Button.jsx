import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:border-primary-300 hover:bg-primary-50 shadow-sm hover:shadow',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5',
    large: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;