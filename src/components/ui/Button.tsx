import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
  
  const variantClasses = {
    primary: 'bg-accent-blue text-white hover:bg-blue-700 focus:ring-accent-blue rounded-lg',
    secondary: 'bg-card text-foreground hover:bg-hover focus:ring-gray-500 rounded-lg border border-border',
    icon: 'bg-card text-foreground hover:bg-hover focus:ring-gray-500 rounded-full p-2'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
