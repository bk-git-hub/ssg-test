// src/components/layouts/Header.tsx

import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";
import { User } from "lucide-react";

// Header에서 사용할 내비게이션 리스트 데이터
const navList = [
  { name: "멤버", slug: "members" },
  { name: "프로젝트", slug: "projects" },
  { name: "아티클", slug: "articles" },
];

const Header = () => {
  return (
    <header className="flex w-screen max-w-[1440px] items-center justify-between px-6 py-4">
      <div className="flex items-center gap-6">
        <Link href={"/"} className="flex items-center gap-1.5 font-bold hover:cursor-pointer">
          <img src={"/logo.svg"} alt="SSG Logo" />
          SSG
        </Link>

        <CategoryDropdown />

        <nav>
          <ul className="flex items-center gap-4 font-bold">
            {navList.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`} className="hover:text-gray-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <img src={"/search.svg"} />
        <Link href={"/signin"} className="hover:cursor-pointer">
          <User />
        </Link>
      </div>
    </header>
  );
};

export default Header;
