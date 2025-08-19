"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/icon-picker"; // Or your icon component
import { cn } from "@/lib/utils"; // From shadcn/ui

// Define the structure for each tab item
const tabItems = [
  { label: "내 프로필", href: "/mypage/profile", icon: "user" as IconName },
  { label: "나의 활동", href: "/mypage/activities/projects", icon: "activity" as IconName },
  { label: "활동 뱃지", href: "/mypage/badges", icon: "award" as IconName },
  { label: "계정 설정", href: "/mypage/settings", icon: "settings" as IconName },
];

export default function MyPageTabs() {
  // Get the current URL path to determine the active tab
  const pathname = usePathname();

  return (
    <div className="flex w-[200px] shrink-0 flex-col gap-10 px-4 lg:w-[300px]">
      <h2 className="text-3xl font-bold lg:text-4xl">마이페이지</h2>
      <nav className="flex w-full flex-col items-center gap-2 bg-neutral-100">
        {tabItems.map((item) => {
          // Check if the current path matches the tab's href
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                // Common styles for all tabs
                "flex w-full items-center gap-2 rounded-2xl border-b-2 px-4 py-3 text-sm font-bold transition-colors",
                // Conditional styles for active vs. inactive tabs
                isActive
                  ? "bg-blue-700/10 text-blue-700"
                  : "bg-white text-black hover:bg-blue-700/10 hover:text-blue-700/50",
              )}
            >
              <Icon name={item.icon} className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
