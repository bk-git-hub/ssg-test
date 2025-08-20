import ArticleCardList from "@/components/landing/ArticleCardList";
import CategoryCard from "@/components/landing/CategoryCard";
import CategoryCardCarousel from "@/components/landing/CategoryCardCarousel";
import IconTester from "@/components/landing/IconTester";
import Header from "@/components/layouts/Header";
import ShowAllLink from "@/components/common/ShowAllLink";
import { IconPicker, Icon, IconName } from "@/components/ui/icon-picker";
import LatestProjectPromo from "@/components/landing/LatestProjectsPromo";

import Image from "next/image";
import { mockArticles } from "@/mocks/mockArticles";
import { securityCategories } from "@/mocks/mockCategories";
import { mockProjects } from "@/mocks/mockProjectCards";
import ProjectCard from "@/components/common/ProjectCard";
import HeroBanner from "@/components/landing/HeroBanner";
import FeaturedProjectCard from "@/components/landing/FeaturedProjectCard";
import SecondaryProjectCard from "@/components/landing/SecondaryProjectCard";

export default function Home() {
  const featuredProject = mockProjects[0];

  // 3. The next three projects are for the bottom row.
  const secondaryProjects = mockProjects.slice(1, 4);

  return (
    <>
      <Header />
      <div className="w-full overflow-x-hidden">
        <main className="flex w-full flex-col">
          <div className="w-screen text-center text-3xl text-white sm:h-[250px] md:h-[420px]">
            <HeroBanner />
          </div>

          <div className="flex w-full flex-col items-center gap-11 overflow-x-hidden bg-white p-10 md:p-20">
            <span className="text-neutral-1000 text-5xl font-bold">Learning Topics</span>
            <CategoryCardCarousel items={securityCategories} />
          </div>

          <section className="border-primary w-full border-t border-b">
            {/* 1. Use a single grid container for the entire layout */}
            <div className="border-primary mx-auto w-full border-b">
              {/* --- Top Row --- */}

              {/* Top-left cell with right and bottom borders */}
              <div className="mx-auto flex w-full max-w-[1200px]">
                <div className="border-primary border-r p-6">
                  <LatestProjectPromo />
                </div>

                <div className="border-primary w-full p-6">
                  <FeaturedProjectCard project={featuredProject} />
                </div>
              </div>
            </div>

            <div className="mx-auto w-full">
              <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                {secondaryProjects.map((proj, index) => (
                  <div
                    key={proj.id}
                    // 2. Add a right border to all but the last card in the row
                    className={`border-primary p-6 ${index < secondaryProjects.length - 1 ? "md:border-r" : ""} ${index === 0 ? "lg:border-r" : ""} `}
                  >
                    <SecondaryProjectCard project={proj} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <ArticleCardList heading="최신 아티클" articles={mockArticles} />
  
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
        </main>
      </div>
    </>
  );
}
