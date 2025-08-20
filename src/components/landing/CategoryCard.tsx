import { Category } from "@/types/category";
import { ArrowRight, Shield } from "lucide-react"; // Import the Shield icon
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/articles/category/${category.slug}`}
      className="group bg-primary linear relative block h-[200px] w-full overflow-hidden rounded-2xl p-6 shadow-lg transition-colors duration-200 hover:bg-white"
    >
      {/* 1. Static Background Icon */}
      {/* This is visible by default and fades out on hover */}
      <Shield className="linear absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-neutral-800 transition-opacity duration-200 group-hover:opacity-0" />

      {/* 2. Content Container (Animation logic remains the same) */}
      <div className="relative h-full w-full">
        <h3 className="linear absolute top-0 left-1/2 w-max -translate-x-1/2 translate-y-[calc(70px-50%)] transform text-4xl font-bold text-white transition-all duration-500 group-hover:left-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-2xl group-hover:text-[#111827]">
          {category.categoryName}
        </h3>

        <p className="linear absolute top-12 left-0 line-clamp-3 w-[calc(100%-3rem)] text-sm text-gray-200 opacity-0 transition-opacity duration-500 group-hover:text-gray-500 group-hover:opacity-100">
          {category.categorySummary}
        </p>
      </div>

      <ArrowRight className="linear absolute right-6 bottom-6 h-8 w-8 text-white opacity-0 transition-opacity duration-500 group-hover:text-[#111827] group-hover:opacity-100" />
    </Link>
  );
}
