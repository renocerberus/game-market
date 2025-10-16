import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "notification" | "level";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "rounded-full flex items-center justify-center font-medium";

  const variantClasses = {
    default: "bg-card text-foreground border border-gray-600",
    notification: "text-white",
    level: "bg-accent-gold text-black",
  };

  const sizeClasses = {
    sm: "w-6 h-4",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        fontSize: size === "sm" ? "8px" : size === "md" ? "10px" : "12px",
        ...(variant === "notification" && {
          background: "linear-gradient(276.98deg, #E40C1E 0%, #A20915 100%)",
          border: "1px solid rgba(255, 255, 255, 1)",
        }),
      }}
    >
      {children}
    </div>
  );
}
