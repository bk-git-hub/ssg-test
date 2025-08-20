"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex items-center font-bold hover:cursor-pointer" onClick={handleToggle}>
        Topics
        <ChevronDown />
      </button>

      {isOpen && <div className="absolute left-0 h-[400px] w-screen bg-blue-900">학습 카테고리 표시될 부분</div>}
    </div>
  );
};

export default CategoryDropdown;
