import React from "react";
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
  sellerAvatar,
  price,
  type,
  delivery,
  server,
}: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg w-[40vw]">
      <div className="gradient-background p-3 xl:p-4 rounded-lg w-full min-h-[280px] xl:min-h-[304px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 xl:mb-4">
          <div className="flex items-center gap-1">
            <Avatar size="sm" src={gameIcon} alt="Game Icon" />
            <span className="text-white font-semibold text-xs xl:text-sm">
              {gameTitle}
            </span>
          </div>
          <span className="text-muted text-xs xl:text-sm font-medium">{timePosted}</span>
        </div>

        {/* Body */}
        <div className="flex gap-4 xl:gap-6 justify-between">
          {/* Left: Product image placeholder with seller overlay */}
          <div className="relative flex-shrink-0">
            <Image
              src={productImage}
              alt={title}
              width={180}
              height={180}
              className="rounded-xl xl:w-[224px] xl:h-[224px] object-cover"
            />
            <div className="absolute bottom-1 xl:bottom-2 w-full flex items-center justify-center gap-1 px-1">
              <Avatar
                size="xs"
                src={sellerAvatar}
                alt="Seller Avatar"
                isOnline
              />
              <span className="text-white font-semibold text-xs xl:text-sm">
                {sellerName}
              </span>
              <div className="flex items-center gap-1">
                <span className={`text-xs xl:text-sm text-accent-gold`}>★</span>
                <span className="text-accent-gold font-semibold text-[9px] xl:text-[10px]">
                  4.9
                </span>
                <span className="text-muted text-[9px] xl:text-[10px]">(200 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 overflow-hidden min-w-0">
            <div className="text-white text-xs xl:text-sm font-semibold mb-2 line-clamp-3 h-12 xl:h-15">
              {title}
            </div>

            <button className="text-muted text-xs xl:text-sm underline mb-3 xl:mb-4 cursor-pointer">
              Show description
            </button>

            <div className="border-t border-gray-700 mb-3 xl:mb-4" />

            <div className="grid grid-cols-3 gap-2 xl:gap-4 text-sm mb-4 xl:mb-6">
              <div>
                <div className="text-muted text-[7px] xl:text-[8px]">Type</div>
                <div className="text-foreground flex items-center gap-1 font-semibold text-[9px] xl:text-[10px]">
                  {"..."} <ChevronRight className="w-2.5 h-2.5 xl:w-3 xl:h-3" /> {type}
                </div>
              </div>
              <div>
                <div className="text-muted text-[7px] xl:text-[8px]">Delivery method</div>
                <div className="text-foreground font-semibold text-[9px] xl:text-[10px]">
                  {delivery}
                </div>
              </div>
              <div>
                <div className="text-muted text-[7px] xl:text-[8px]">Server</div>
                <div className="text-foreground font-semibold text-[9px] xl:text-[10px]">
                  {server}
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-background rounded-lg p-2 xl:p-3">
              <div className="text-accent-gold font-semibold text-base xl:text-lg">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
