import { Icon, type IconName } from "@/components/ui/icon-picker";
import { cn } from "@/lib/utils";
import { Category } from "@/types/category";
import Link from "next/link";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="flex w-full max-w-[384px] flex-col gap-2 rounded-2xl bg-white p-4">
      <Icon size={40} name={category.icon} />

      <span className="text-neutral-1000 h-[34px] text-2xl font-bold">{category.categoryName}</span>
      <p className="text-sm font-normal">{category.categorySummary}</p>

      <Link
        href={`projects?category=${category.categoryName}`}
        className="flex w-fit items-center rounded-full bg-neutral-100 p-3"
      >
        <img src="/folder.svg" alt="project" />
        <span>프로젝트 {category.categoryProjectCount}개</span>
      </Link>

      <Link
        href={`articles?category=${category.categoryName}`}
        className="flex w-fit items-center rounded-full bg-neutral-100 p-3"
      >
        <img src="/write.svg" alt="project" />
        <span>아티클 {category.categoryArticleCount}개</span>
      </Link>
    </div>
  );
}
