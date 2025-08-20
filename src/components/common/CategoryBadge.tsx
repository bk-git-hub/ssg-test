import Link from "next/link";

interface CategoryBadgeProps {
  categoryName: string;
  postType: "projects" | "articles";
}

export default function CategoryBadge({ categoryName, postType }: CategoryBadgeProps) {
  return (
    <Link
      href={`/${postType}?category=${categoryName}`}
      className="bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white"
    >
      {categoryName}
    </Link>
  );
}
