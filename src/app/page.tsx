import ArticleCardList from "@/components/landing/ArticleCardList";
import CategoryCard from "@/components/landing/CategoryCard";
import CategoryCardCarousel from "@/components/landing/CategoryCardCarousel";
import IconTester from "@/components/landing/IconTester";
import Header from "@/components/layouts/Header";
import ShowAllLink from "@/components/common/ShowAllLink";
import { IconPicker, Icon, IconName } from "@/components/ui/icon-picker";

import Image from "next/image";
import { mockArticles } from "@/mocks/mockArticles";
import { securityCategories } from "@/mocks/mockCategories";
import { mockProjects } from "@/mocks/mockProjectCards";
import ProjectCard from "@/components/common/ProjectCard";
import HeroBanner from "@/components/landing/HeroBanner";

export default function Home() {
  return (
    <div className="font-pretendard flex w-full flex-col items-center bg-white text-black">
      <Header />
      <main className="flex w-full flex-col gap-20">
        <div className="w-screen text-center text-3xl text-white sm:h-[250px] md:h-[400px] lg:h-[500px]">
          <HeroBanner />
        </div>

        <div className="flex w-full flex-col items-center gap-11 overflow-x-hidden bg-neutral-100 p-10 md:p-20 lg:p-30">
          <span className="text-neutral-1000 text-5xl font-bold">학습 분야 둘러보기</span>
          <CategoryCardCarousel items={securityCategories} />
        </div>

        <ArticleCardList heading="최신 아티클" articles={mockArticles} />

        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </div>
  );
}
