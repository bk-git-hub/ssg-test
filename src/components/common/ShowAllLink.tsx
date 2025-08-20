import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ShowAllLinkProps {
  href: string;
}

export default function ShowAllLink({ href }: ShowAllLinkProps) {
  return (
    <Link
      href={href}
      className="bg-primary flex w-fit items-center justify-between rounded-[8px] p-3 font-bold text-white"
    >
      전체보기
      <ChevronRight />
    </Link>
  );
}
