// src/components/CategoryCardCarousel.tsx

"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Category } from "@/types/category";
import CategoryCard from "./CategoryCard";

interface CarouselProps {
  items: Category[];
}

export default function CategoryCardCarousel({ items }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // This effect updates the selected dot when the carousel scrolls
  useEffect(() => {
    if (!api) {
      return;
    }

    // Set the initial selected index
    setSelectedIndex(api.selectedScrollSnap());

    // Listen for the 'select' event on the carousel
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Cleanup the event listener
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Function to scroll to a specific dot
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="mx-auto w-full max-w-5xl"
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.categoryName} className="basis-1/3 pl-4">
              <CategoryCard category={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-[-40px]" />
        <CarouselNext className="right-[-40px]" />
      </Carousel>

      {/* Dot Navigation */}
      <div className="absolute left-1/2 mt-6 flex -translate-x-1/2 items-center justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "scale-125 bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
