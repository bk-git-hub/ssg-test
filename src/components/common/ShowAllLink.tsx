import Link from "next/link";

interface ShowAllLinkProps {
  href: string;
}

export default function ShowAllLink({ href }: ShowAllLinkProps) {
  return (
    <Link
      href={href}
      className="flex w-[100px] items-center justify-between rounded-[8px] bg-[#EDF9FF] p-3 font-bold text-blue-700"
    >
      전체보기
      <img src="/right.svg" alt="전체보기" width={20} height={20} />
    </Link>
  );
}
