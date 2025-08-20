"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
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
  const [current, setCurrent] = useState(0);

  // 1. Chunk the items array into groups of 3
  const chunkedItems = useMemo(() => {
    const result: Category[][] = [];
    for (let i = 0; i < items.length; i += 3) {
      result.push(items.slice(i, i + 3));
    }
    return result;
  }, [items]);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false, // Loop is off for a clear start and end
        }}
        className="mx-auto w-full max-w-5xl px-5"
      >
        <CarouselContent className="px-2 py-4">
          {/* 2. Map over the chunked array (the pages) */}
          {chunkedItems.map((pageItems, pageIndex) => (
            <CarouselItem key={pageIndex}>
              {/* This div contains the 3 cards for the current page */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((item) => (
                  <CategoryCard key={item.id} category={item} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border-primary text-primary left-[-20px] border-2 hover:cursor-pointer disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400" />
        <CarouselNext className="border-primary text-primary right-[-20px] border-2 hover:cursor-pointer disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400" />
      </Carousel>

      {/* 3. The dot navigation logic is now incredibly simple */}
      <div className="absolute left-1/2 mt-6 flex -translate-x-1/2 items-center justify-center gap-2">
        {chunkedItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
              index === current
                ? "scale-125 border-[#111827] bg-[#111827]" // Active State
                : "border-primary bg-white hover:bg-gray-200" // Inactive State
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
