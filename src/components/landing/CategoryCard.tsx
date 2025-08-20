import { Category } from "@/types/category";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/articles/category/${category.slug}`}
      className="group bg-primary relative block h-[200px] w-full overflow-hidden rounded-2xl p-6 shadow-lg transition-colors duration-300 ease-in-out hover:bg-white"
    >
      {/* 1. 콘텐츠를 감싸는 컨테이너. 모든 자식은 이 컨테이너를 기준으로 절대 위치를 가집니다. */}
      <div className="relative h-full w-full">
        {/* 2. 제목: top-0, left-0에 위치시킨 후, transform으로 중앙으로 이동시킵니다. */}
        <h3 className="absolute top-0 left-0 w-full translate-x-0 translate-y-[calc(70px-50%)] transform text-4xl font-bold text-white transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-left group-hover:text-2xl group-hover:text-[#111827]">
          {category.categoryName}
        </h3>

        {/* 3. 설명: 제목 아래(top-12)에 위치하며, 호버 시 나타납니다. */}
        <p className="absolute top-12 left-0 line-clamp-3 w-full text-sm text-gray-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          {category.categorySummary}
        </p>
      </div>

      <ArrowRight className="absolute right-6 bottom-6 h-8 w-8 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:text-[#111827] group-hover:opacity-100" />
    </Link>
  );
}
