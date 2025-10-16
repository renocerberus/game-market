import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
  isOnline?: boolean;
}

export default function Avatar({
  src,
  alt = "",
  size = "md",
  children,
  className = "",
  isOnline = false,
}: AvatarProps) {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-6 h-6",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-24.5 h-24.5",
  };

  return (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} rounded-full bg-gray-600 flex items-center justify-center overflow-hidden ${className}`}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          children || (
            <div className="w-full h-full bg-green-500 flex items-center justify-center text-white font-bold">
              ?
            </div>
          )
        )}
      </div>
      {isOnline && (
        <div
          className={`${
            size == "xs"
              ? "w-1.5 h-1.5 bottom-0 right-0 border-1 border-white"
              : "w-4 h-4 bottom-6 right-1"
          } bg-green-500 rounded-full absolute`}
        />
      )}
    </div>
  );
}
