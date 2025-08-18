import Link from "next/link";

interface ShowAllLinkProps {
  href: string;
}

export default function ShowAllLink({ href }: ShowAllLinkProps) {
  return (
    <Link href={href} className="flex w-fit rounded-[8px] bg-[#EDF9FF] p-2 font-bold text-blue-700">
      전체보기
      <img src="/right.svg" alt="전체보기" />
    </Link>
  );
}
