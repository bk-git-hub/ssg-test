import { Article } from "@/types/article";
import { Category } from "@/types/category";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import CategoryBadge from "../common/CategoryBadge";
import TagBadge from "../common/TagBadge";

export default function LandingArticleCard({ article }: { article: Article }) {
  return (
    // On mobile: stack vertically (flex-col). On medium screens and up: go horizontal (md:flex-row).
    <div className="flex w-full flex-col items-center gap-6 rounded-2xl border border-neutral-200 p-4 md:flex-row md:p-2">
      <img
        src={article.thumbnailUrl}
        alt={article.title}
        // On mobile: full width. On medium screens and up: fixed width and prevent shrinking.
        className="aspect-video w-full rounded-2xl object-cover md:w-[383px] md:flex-shrink-0"
        width={383}
        height={240}
      />
      <div className="flex w-full flex-1 flex-col gap-3">
        <div className="flex gap-2">
          {article.categories.map((category: Category) => (
            <CategoryBadge postType="articles" key={category.categoryName} categoryName={category.categoryName} />
          ))}
        </div>

        {/* Adjust text size for different screens */}
        <h2 className="text-xl font-bold md:text-2xl">{article.title}</h2>

        <p className="text-gray-600">{article.description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {article.tags.map((tag) => (
            <li key={tag}>
              <TagBadge postType="articles" tagName={tag} />
            </li>
          ))}
        </ul>

        {/* On mobile: stack author/stats (flex-col). On medium screens and up: horizontal row (md:flex-row). */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-3 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img
              src={article.authorProfileImageUrl}
              alt={article.authorName}
              width={48}
              height={48}
              className="rounded-2xl"
            />
            <div className="flex flex-col">
              <span className="text-neutral-1000 text-base font-bold md:text-lg">{article.authorName}</span>
              <span className="text-xs text-neutral-600">{formatTimeAgo(article.createdAt)}</span>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <img src={"/like-icon.svg"} alt="좋아요" width={24} />
              <span className="text-neutral-1000 text-xs">{article.likeCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={"/comment-icon.svg"} alt="댓글" width={24} />
              <span className="text-neutral-1000 text-xs">{article.commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
