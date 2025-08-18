import Link from "next/link";

interface CategoryBadgeProps {
  categoryName: string;
  postType: "projects" | "articles";
}

export default function CategoryBadge({ categoryName, postType }: CategoryBadgeProps) {
  return (
    <Link
      href={`/${postType}?category=${categoryName}`}
      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800"
    >
      {categoryName}
    </Link>
  );
}
