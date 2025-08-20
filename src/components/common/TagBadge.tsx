import Link from "next/link";

interface TagBadgeProps {
  tagName: string;
  postType: "projects" | "articles";
}

export default function TagBadge({ tagName, postType }: TagBadgeProps) {
  return (
    <Link
      href={`/${postType}?tagName=${tagName}`}
      className="text-primary rounded-full bg-white px-3 py-1 text-sm hover:cursor-pointer"
    >
      #{tagName}
    </Link>
  );
}
