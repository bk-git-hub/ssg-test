import Link from "next/link";

interface TagBadgeProps {
  tagName: string;
  postType: "projects" | "articles";
}

export default function TagBadge({ tagName, postType }: TagBadgeProps) {
  return (
    <Link
      href={`/${postType}?tagName=${tagName}`}
      className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:cursor-pointer"
    >
      #{tagName}
    </Link>
  );
}
