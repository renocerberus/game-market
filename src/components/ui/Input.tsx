import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Input({ 
  icon, 
  iconPosition = 'right', 
  className = '', 
  ...props 
}: InputProps) {
  return (
    <div className="relative">
      {icon && iconPosition === 'left' && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted">
          {icon}
        </div>
      )}
      <input
        className={`
          w-full bg-card text-foreground placeholder-text-muted 
          border-none rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background
          transition-colors duration-200
          ${icon && iconPosition === 'left' ? 'pl-10' : ''}
          ${icon && iconPosition === 'right' ? 'pr-10' : ''}
          ${className}
        `}
        {...props}
      />
      {icon && iconPosition === 'right' && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted">
          {icon}
        </div>
      )}
    </div>
  );
}
