import { Article } from "@/types/article";
import ShowAllLink from "../common/ShowAllLink";
import LandingArticleCard from "./LandingArticleCard";

interface ArticleCardListProps {
  articles: Article[];
  heading: string;
}

export default function ArticleCardList({ articles, heading }: ArticleCardListProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-8">
      <div className="flex justify-between">
        <span className="text-5xl font-semibold">{heading}</span>
        <ShowAllLink href="/articles" />
      </div>

      <div className="flex flex-col gap-7.5">
        {articles.map((article) => (
          <LandingArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
