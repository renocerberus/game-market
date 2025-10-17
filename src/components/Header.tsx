import React from "react";
import Input from "./ui/Input";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-8 py-3 bg-gradient-radial">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex-1 items-center">
          <Image
            src="/game-market-logo.png"
            alt="Game Market Logo"
            width={55}
            height={40}
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <div className="max-w-md mx-8 rounded-lg border border-border">
            <Input
              placeholder="Browse 1.700+ game markets..."
              className="w-full placeholder:text-white bg-background"
              icon={
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Notification Icons */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-hover transition-colors rounded">
                <Image
                  src="/icons/cart.svg"
                  alt="Cart"
                  width={20}
                  height={20}
                />
              </div>
              <Badge
                variant="notification"
                size="sm"
                className="absolute -top-1 -right-1"
              >
                10
              </Badge>
            </div>

            <div className="relative">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-hover transition-colors rounded">
                <Image
                  src="/icons/notification.svg"
                  alt="Heart"
                  width={20}
                  height={20}
                />
              </div>
              <Badge
                variant="notification"
                size="sm"
                className="absolute -top-1 -right-1"
              >
                99
              </Badge>
            </div>

            <div className="relative">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-hover transition-colors rounded">
                <Image
                  src="/icons/chat.svg"
                  alt="Heart"
                  width={20}
                  height={20}
                />
              </div>
              <Badge
                variant="notification"
                size="sm"
                className="absolute -top-1 -right-1"
              >
                99
              </Badge>
            </div>
          </div>

          {/* Balance Display */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-background border border-border-light-gray">
            <Image src="/coin.png" alt="dollar" width={20} height={20} />
            <span className="text-foreground font-semibold">$99,999.00</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 cursor-pointer hover:bg-card rounded-lg transition-colors">
            <Avatar size="md" src="/profile.png" />
          </div>

          {/* Currency Selector */}
          <div className="flex items-center gap-1 cursor-pointer hover:bg-card rounded-lg transition-colors">
            <span className="text-foreground font-medium">USD</span>
            <svg
              className="w-4 h-4 text-muted"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
