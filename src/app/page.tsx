import CategoryCard from "@/components/landing/CategoryCard";
import CategoryCardCarousel from "@/components/landing/CategoryCardCarousel";
import IconTester from "@/components/landing/IconTester";
import Header from "@/components/layouts/Header";
import { IconPicker, Icon, IconName } from "@/components/ui/icon-picker";
import { securityCategories } from "@/mocks/mockCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-pretendard w-screen bg-white text-black">
      <Header />
      <main className="flex flex-col gap-20">
        <div className="mx-auto w-full max-w-[1200px] bg-gray-400 text-center text-3xl text-white sm:h-[250px] md:h-[400px] lg:h-[500px]">
          배너 위치
        </div>

        <div className="flex w-full flex-col items-center gap-11 bg-neutral-100 p-10 md:p-20 lg:p-30">
          <span className="text-neutral-1000 text-5xl font-bold">학습 분야 둘러보기</span>
          <CategoryCardCarousel items={securityCategories} />
        </div>
      </main>
    </div>
  );
}
