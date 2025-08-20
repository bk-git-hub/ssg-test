// src/components/layouts/Header.tsx

import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";
import { Search, User, UserCircle } from "lucide-react";

// Header에서 사용할 내비게이션 리스트 데이터
const navList = [
  { name: "Members", slug: "members" },
  { name: "Projects", slug: "projects" },
  { name: "Articles", slug: "articles" },
];

const Header = () => {
  return (
    <header className="text-primary sticky top-0 z-10 w-full bg-white shadow-2xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4">
        <div className="flex max-w-[1440px] items-center gap-6">
          <Link href={"/"} className="flex items-center gap-1.5 bg-white p-2 font-bold hover:cursor-pointer">
            <img src={"/logo.svg"} alt="SSG Logo" />
            <h1 className="hidden h-[1px] w-[1px]">SSG</h1>
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
          <Search />
          <Link href={"/signin"} className="text-primary rounded-[8px] px-3 py-2 hover:cursor-pointer">
            <UserCircle />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
