import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6'
  };
  
  return (
    <div className={`bg-card rounded-lg border border-border ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}
