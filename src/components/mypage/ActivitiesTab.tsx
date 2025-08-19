"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabItems = [
  { label: "참여중인 프로젝트", href: "/my-page/activities/projects" },
  { label: "작성한 아티클", href: "/my-page/activities/articles" },
  { label: "좋아요 누른 글", href: "/my-page/activities/likes" },
  { label: "작성한 댓글", href: "/my-page/activities/comments" },
];

export default function ActivitiesTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {tabItems.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={cn(
                "border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap",
                isActive
                  ? "border-gray-800 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
