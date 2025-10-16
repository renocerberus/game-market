import React from 'react';
import Avatar from './ui/Avatar';
import RatingStars from './ui/RatingStars';
import Image from 'next/image';

interface MarketListItemProps {
  gameIcon: string;
  gameTitle: string;
  listingCount: number;
  rating: number;
  reviewCount: number;
}

export default function MarketListItem({
  gameIcon,
  gameTitle,
  listingCount,
  rating,
  reviewCount
}: MarketListItemProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors bg-background">
      <div className="flex items-center gap-3">
        <Avatar size="md" src={gameIcon} alt={gameTitle} className="w-11 h-11" />
        <div>
          <h3 className="text-foreground font-medium">{gameTitle}</h3>
          <p className="text-text-muted text-sm">{listingCount} listings</p>
        </div>
      </div>
      <RatingStars rating={rating} reviewCount={reviewCount} size="sm" />
    </div>
  );
}
