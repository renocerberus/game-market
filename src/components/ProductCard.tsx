import React from "react";
import Card from "./ui/Card";
import Avatar from "./ui/Avatar";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  gameIcon: string;
  gameTitle: string;
  timePosted: string;
  productImage: string;
  title: string;
  description: string;
  sellerName: string;
  sellerRating: number;
  sellerReviewCount: number;
  sellerAvatar: string;
  price: string;
  type: string;
  delivery: string;
  server: string;
}

export default function ProductCard({
  gameIcon,
  gameTitle,
  timePosted,
  productImage,
  title,
  sellerName,
  sellerRating,
  sellerReviewCount,
  sellerAvatar,
  price,
  type,
  delivery,
  server,
}: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg">
      <div className="gradient-background p-4 rounded-lg min-w-[530px] max-w-[630px] min-h-[304px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Avatar size="sm" src={gameIcon} alt="Game Icon" />
            <span className="text-white font-semibold text-sm">
              {gameTitle}
            </span>
          </div>
          <span className="text-muted text-sm font-medium">{timePosted}</span>
        </div>

        {/* Body */}
        <div className="flex gap-6 justify-between">
          {/* Left: Product image placeholder with seller overlay */}
          <div className="relative">
            <Image
              src={productImage}
              alt={title}
              width={224}
              height={224}
              className="rounded-xl"
            />
            <div className="absolute bottom-2 w-full flex items-center justify-center gap-1">
              <Avatar
                size="xs"
                src={sellerAvatar}
                alt="Seller Avatar"
                isOnline
              />
              <span className="text-white font-semibold text-sm">
                {sellerName}
              </span>
              <div className="flex items-center gap-1">
                <span className={`text-sm text-accent-gold`}>★</span>
                <span className="text-accent-gold font-semibold text-[10px]">
                  4.9
                </span>
                <span className="text-muted text-[10px]">(200 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 overflow-hidden">
            <div className="text-white text-sm font-semibold mb-2 line-clamp-3 h-15">
              {title}
            </div>

            <button className="text-muted text-sm underline mb-4 cursor-pointer">
              Show description
            </button>

            <div className="border-t border-gray-700 mb-4" />

            <div className="grid grid-cols-3 gap-4 text-sm mb-6">
              <div>
                <div className="text-muted text-[8px]">Type</div>
                <div className="text-foreground flex items-center gap-1 font-semibold text-[10px]">
                  {"..."} <ChevronRight className="w-3 h-3" /> {type}
                </div>
              </div>
              <div>
                <div className="text-muted text-[8px]">Delivery method</div>
                <div className="text-foreground font-semibold text-[10px]">
                  {delivery}
                </div>
              </div>
              <div>
                <div className="text-muted text-[8px]">Server</div>
                <div className="text-foreground font-semibold text-[10px]">
                  {server}
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-background rounded-lg p-3">
              <div className="text-accent-gold font-semibold text-lg">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
