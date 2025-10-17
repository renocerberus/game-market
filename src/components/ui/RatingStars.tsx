import React from 'react';

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export default function RatingStars({ 
  rating, 
  reviewCount, 
  size = 'md', 
  showCount = true 
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  
  const starSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className={`flex flex-col items-end gap-1 ${sizeClasses[size]}`}>
      <div className="flex items-center gap-1">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={i} className={`${starSize[size]} text-[#F59E0B]`}>★</span>
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <span className={`${starSize[size]} text-[#F59E0B]`}>★</span>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={i} className={`${starSize[size]} text-gray-600`}>★</span>
        ))}
      </div>
      
      {showCount && (
        <span className="text-muted ml-1">
          {reviewCount && `(${reviewCount} reviews)`}
        </span>
      )}
    </div>
  );
}
