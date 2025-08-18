"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Icon } from "@/components/ui/icon-picker"; // Or your preferred icon component
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ComponentPropsWithoutRef<"img"> {
  name?: string;
}

export default function ImageWithFallback({ src, alt, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset state when the image src changes
    setError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Render a placeholder if the image fails to load
  if (error) {
    return (
      <div
        className={cn(
          // The base style for the skeleton
          "bg-muted animate-pulse rounded-md",

          // 👇 Add the following classes for the shimmer effect
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent",

          className,
        )}
      >
        <Icon name="image-off" size={48} />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Show skeleton while loading */}
      {isLoading && <Skeleton className="absolute inset-0 h-full w-full rounded-2xl" />}

      {/* The actual image, hidden until loaded */}
      <img
        src={src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`h-full w-full rounded-2xl object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        {...props}
      />
    </div>
  );
}
