import { Article as ArticleType } from "@/types/article";
import Link from "next/link";
import { formatTimeAgo } from "@/utils/formatTimeAgo"; // Assuming you have this
import { Icon } from "@/components/ui/icon-picker"; // Assuming you have this

interface SimpleArticleCardProps {
  article: ArticleType;
}

export default function SimpleArticleCard({ article }: SimpleArticleCardProps) {
  const { id, thumbnailUrl, title, description, createdAt, likeCount, commentCount } = article;

  return (
    <Link
      href={`/articles/${id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* --- Thumbnail --- */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* --- Content --- */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>

        {/* Metadata */}
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-gray-500">
          <span>{formatTimeAgo(createdAt)}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Icon name="thumbs-up" className="h-4 w-4" />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="message-circle" className="h-4 w-4" />
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
